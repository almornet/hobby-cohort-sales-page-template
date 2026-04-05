'use client'

import { useCountdown } from '@/hooks/useCountdown'

export function Countdown() {
  const timeLeft = useCountdown()
  const expired = timeLeft.h === '00' && timeLeft.m === '00' && timeLeft.s === '00'

  if (expired) {
    return (
      <div className="text-center">
        <p className="text-sm text-red-600 font-medium">The special bonus has expired — you just missed it.</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-1 font-mono">
      {[timeLeft.h, timeLeft.m, timeLeft.s].map((unit, i) => (
        <span key={i} className="flex items-center gap-1">
          <span className="bg-[#1C1C1E] text-[#FAF9F6] rounded-lg px-3 py-2 text-2xl font-bold tabular-nums">
            {unit}
          </span>
          {i < 2 && <span className="text-2xl font-bold text-[#1C1C1E]">:</span>}
        </span>
      ))}
    </div>
  )
}
