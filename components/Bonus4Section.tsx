'use client'

import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Countdown } from './Countdown'
import { PricingBlock } from './PricingBlock'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'
import { useCountdown } from '@/hooks/useCountdown'

export function Bonus4Section() {
  const timeLeft = useCountdown()
  const expired = timeLeft.h === '00' && timeLeft.m === '00' && timeLeft.s === '00'
  const extraBonus = pageContent.extraBonus
  const extraBonusTitle = extraBonus.title
  const b4 = pageContent.megaBonusSection
  const claimLine = b4.claimFreeLineTemplate.replace('{value}', extraBonus.value)

  return (
    <section className="pt-12 px-5 max-w-2xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-[#8E8E93] text-center mb-2 font-medium">{b4.kicker}</p>
      <h2 className="text-2xl font-bold text-[#1C1C1E] text-center mb-8 tracking-tight">{renderBold(b4.heading)}</h2>
      <Card className="overflow-hidden">
        <div className="relative bg-white">
          <Image
            src={extraBonus.imageSrc}
            alt={extraBonus.imageAlt}
            width={576}
            height={384}
            sizes="(max-width: 576px) 100vw, 576px"
            className="w-full h-auto object-cover"
          />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-lg mb-1">{extraBonus.emoji}</p>
              <CardTitle className="text-lg">{extraBonusTitle}</CardTitle>
              <p className="text-sm italic text-[#8E8E93] mt-1">{extraBonus.subtitle}</p>
            </div>
            <Badge variant="value" className="shrink-0 mt-1">
              {b4.valueBadgePrefix} {extraBonus.value}
            </Badge>
          </div>

          {expired ? (
            <p className="text-sm font-semibold text-red-600 mt-2">{b4.timerExpiredMessage}</p>
          ) : (
            <p className="text-sm font-semibold text-red-600 mt-2">{b4.timerActiveMessage}</p>
          )}

          {!expired && (
            <div className="pt-2">
              <Countdown />
            </div>
          )}
        </CardHeader>

        {!expired && (
          <CardContent className="space-y-3">
            {extraBonus.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base text-[#1C1C1E] leading-relaxed">
                {renderBold(para)}
              </p>
            ))}
            <p className="text-base font-semibold text-emerald-700">{claimLine}</p>
          </CardContent>
        )}
      </Card>

      <div className="flex flex-col items-center gap-6 pt-6">
        <PricingBlock
          anchorPrice={pageContent.pricing.anchor}
          currentPrice={pageContent.pricing.current}
          ctaLabel={pageContent.pricing.ctaLabel}
          pixelEvent="AddToCart"
        />
      </div>
    </section>
  )
}
