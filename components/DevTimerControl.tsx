'use client'

import { useState, useEffect } from 'react'

const COOKIE_KEY = 'cdm_deadline'

function setCookie(deadline: number) {
  document.cookie = `${COOKIE_KEY}=${deadline}; max-age=${60 * 60 * 24 * 365 * 10}; path=/; samesite=lax`
}

function getCookie(): number | null {
  const match = document.cookie.match(/(?:^|; )cdm_deadline=([^;]*)/)
  return match ? parseInt(match[1], 10) : null
}

const presets = [
  { label: '45 min', ms: 45 * 60 * 1000 },
  { label: '5 min', ms: 5 * 60 * 1000 },
  { label: '1 min', ms: 60 * 1000 },
  { label: '10 sec', ms: 10 * 1000 },
  { label: 'Expired', ms: 0 },
]

export function DevTimerControl() {
  const [remaining, setRemaining] = useState('')

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return
    const id = setInterval(() => {
      const deadline = getCookie()
      if (!deadline) { setRemaining('no cookie'); return }
      const diff = deadline - Date.now()
      if (diff <= 0) { setRemaining('expired'); return }
      const total = Math.floor(diff / 1000)
      const h = Math.floor(total / 3600)
      const m = Math.floor((total % 3600) / 60)
      const s = total % 60
      setRemaining(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`)
    }, 500)
    return () => clearInterval(id)
  }, [])

  if (process.env.NODE_ENV === 'production') return null

  function apply(ms: number) {
    setCookie(Date.now() + ms)
    window.location.reload()
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-100 border-b border-yellow-300 px-4 py-3 text-xs font-mono">
      <div className="max-w-xl mx-auto flex flex-wrap items-center gap-2">
        <span className="font-bold text-yellow-800">DEV — Timer:</span>
        <span className="text-yellow-900 font-bold">{remaining}</span>
        <span className="text-yellow-700 mx-1">|</span>
        {presets.map(({ label, ms }) => (
          <button
            key={label}
            onClick={() => apply(ms)}
            className="px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 rounded text-xs font-semibold transition-colors"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
