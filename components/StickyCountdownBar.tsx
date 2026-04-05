'use client'

import { useCountdown } from '@/hooks/useCountdown'

export function StickyCountdownBar() {
  const timeLeft = useCountdown()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1C1C1E] text-white px-4 py-3 shadow-lg flex justify-center">
      <div className="w-full max-w-xl mx-auto flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-[#8E8E93]">Offer disappears in:</span>
          <div className="flex items-center gap-1 font-mono">
            {[timeLeft.h, timeLeft.m, timeLeft.s].map((unit, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="bg-white text-[#1C1C1E] rounded px-2 py-0.5 text-sm font-bold tabular-nums">
                  {unit}
                </span>
                {i < 2 && <span className="text-sm font-bold text-[#8E8E93]">:</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
