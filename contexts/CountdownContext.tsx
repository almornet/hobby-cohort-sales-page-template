'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const DURATION_MS = 45 * 60 * 1000
const FAR_FUTURE = Date.now() + 999 * 24 * 60 * 60 * 1000

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function getCookieDeadline(): number | null {
  const match = document.cookie.match(/(?:^|; )cdm_deadline=([^;]*)/)
  return match ? parseInt(match[1], 10) : null
}

function setCookieDeadline(deadline: number) {
  document.cookie = `cdm_deadline=${deadline}; max-age=${60 * 60 * 24 * 365 * 10}; path=/; samesite=lax`
}

type TimeLeft = { h: string; m: string; s: string }

const CountdownContext = createContext<TimeLeft>({ h: '00', m: '00', s: '00' })

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ h: '00', m: '00', s: '00' })
  const [deadline, setDeadline] = useState<number | null>(null)

  useEffect(() => {
    if (document.cookie.includes('cdm_admin=1')) {
      setDeadline(FAR_FUTURE)
      return
    }

    const cookieDeadline = getCookieDeadline()
    if (cookieDeadline) setDeadline(cookieDeadline)

    if (process.env.NODE_ENV !== 'production') {
      if (!cookieDeadline) {
        const d = Date.now() + DURATION_MS
        setCookieDeadline(d)
        setDeadline(d)
      }
      return
    }

    fetch('/api/timer')
      .then(r => r.json())
      .then(({ deadline: d }: { deadline: number }) => {
        setCookieDeadline(d)
        setDeadline(d)
      })
      .catch(() => {
        if (!cookieDeadline) {
          const d = Date.now() + DURATION_MS
          setCookieDeadline(d)
          setDeadline(d)
        }
      })
  }, [])

  useEffect(() => {
    if (deadline === null) return

    function tick() {
      const diff = deadline! - Date.now()
      if (diff <= 0) {
        setTimeLeft({ h: '00', m: '00', s: '00' })
        return
      }
      const total = Math.floor(diff / 1000)
      setTimeLeft({
        h: pad(Math.floor(total / 3600)),
        m: pad(Math.floor((total % 3600) / 60)),
        s: pad(total % 60),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [deadline])

  return (
    <CountdownContext.Provider value={timeLeft}>
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdown() {
  return useContext(CountdownContext)
}
