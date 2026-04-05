import { NextRequest, NextResponse } from 'next/server'
import { sendCapiEvent } from '@/lib/metaCapi'

export async function POST(req: NextRequest) {
  const { eventName, eventId, userData, customData } = await req.json()

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    undefined
  const userAgent = req.headers.get('user-agent') ?? undefined

  await sendCapiEvent({
    eventName,
    eventId,
    ipAddress: ip,
    userAgent,
    fbc: userData?.fbc,
    fbp: userData?.fbp,
    customData,
  })

  return NextResponse.json({ ok: true })
}
