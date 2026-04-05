'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { PricingBlock } from './PricingBlock'
import { Countdown } from './Countdown'
import { pageContent } from '@/content/page'

export function LastCTASection() {
  const timeLeft = useCountdown()
  const expired = timeLeft.h === '00' && timeLeft.m === '00' && timeLeft.s === '00'

  return (
    <section className="pt-6 px-5 max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-6">
        <Countdown />
        <PricingBlock
          currentPrice={pageContent.pricing.current}
          ctaLabel={pageContent.pricing.ctaLabel}
          pixelEvent="InitiateCheckout"
        />
      </div>
    </section>
  )
}
