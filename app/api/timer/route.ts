import { NextRequest, NextResponse } from 'next/server'
import { getRedis } from '@/lib/redis'

const DURATION_MS = 45 * 60 * 1000
const PREFIX = 'cdm:'

function getIp(request: NextRequest): string {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

export async function GET(request: NextRequest) {
  const ip = getIp(request)
  const redis = getRedis()

  // Cookie deadline set by middleware (fast path on first visit)
  const cookieDeadline = request.cookies.get('cdm_deadline')?.value
  const fallback = cookieDeadline ? parseInt(cookieDeadline, 10) : Date.now() + DURATION_MS

  if (!redis) {
    // No Redis (dev mode) — use cookie fallback
    return NextResponse.json({ deadline: fallback })
  }

  const key = PREFIX + ip
  const stored = await redis.get(key)

  if (stored) {
    // Existing deadline for this IP — return it (may override cookie from a different browser)
    return NextResponse.json({ deadline: parseInt(stored, 10) })
  }

  // First visit for this IP — persist the deadline
  await redis.set(key, String(fallback))
  return NextResponse.json({ deadline: fallback })
}
