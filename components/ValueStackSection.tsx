'use client'

import Image from 'next/image'
import { pageContent } from '@/content/page'
import { Separator } from '@/components/ui/separator'
import { useCountdown } from '@/hooks/useCountdown'

interface ValueStackSectionProps {
  showBonus4?: boolean
  hideValues?: boolean
  title?: string
  checkout?: boolean
  titlePosition?: 'center' | 'left'
  layout?: 'default' | 'flush'
  className?: string
}

export function ValueStackSection({
  showBonus4 = false,
  hideValues = false,
  checkout = false,
  title = 'Here\'s everything you\'re getting today:',
  titlePosition = 'center',
  layout = 'default',
  className = '',
}: ValueStackSectionProps) {
  const timeLeft = useCountdown()
  const expired = timeLeft.h === '00' && timeLeft.m === '00' && timeLeft.s === '00'
  const extraBonus = pageContent.extraBonus
  const extraBonusTitle = extraBonus.title

  if (expired) {
    showBonus4 = false
  }



  const stackImage = showBonus4 && !expired ? '/assets/stack-4.png' : '/assets/stack.png'
  const stackImageAlt = showBonus4 && expired ? 'Everything included in The Hairdryer Canvas Course (expired)' : 'Everything included in The Hairdryer Canvas Course'
  return (
    <section
      className={[
        layout === 'flush' ? '' : 'pt-12 px-5 max-w-2xl mx-auto',
        layout === 'flush' ? 'pt-0 px-0 max-w-none mx-0' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2 className={`text-xl font-bold text-[#1C1C1E] mb-6 tracking-tight ${titlePosition === 'center' ? 'text-center' : 'text-left'}`}>
        {title}
      </h2>
      <div className="border border-[#E5E5EA] rounded-2xl overflow-hidden bg-white">
        <Image src={stackImage} alt={stackImageAlt} width={576} height={300} sizes="(max-width: 576px) 100vw, 576px" className="w-full h-auto" />
        
        <Separator />
        {pageContent.valueStack.items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-sm text-[#1C1C1E] leading-snug flex-1">✓ {item.label}</p>
              {!hideValues && <p className="text-sm font-semibold text-[#1C1C1E] shrink-0">{item.value}</p>}
            </div>
            <Separator />
          </div>
        ))}
        {showBonus4 && (
          <div>
            {expired ? (
              <div className="flex items-center justify-between gap-4 px-5 py-4 bg-[#F2F2F7]">
                <div className="flex-1">
                  <p className="text-sm text-[#8E8E93] leading-snug line-through">🎁 {extraBonusTitle}</p>
                  {!checkout && <p className="text-xs text-red-500 font-medium mt-0.5">❌ Not included — timer has expired</p>}
                </div>
                {!hideValues && (
                  <p className="text-sm font-semibold text-[#8E8E93] shrink-0 line-through">{extraBonus.value} value</p>
                )}
              </div>
            ) : (
              <div className={`flex items-center justify-between gap-4 px-5 py-4 ${checkout ? '' : 'bg-amber-50'}`}>
                <div className="flex-1">
                  <p className="text-sm text-[#1C1C1E] leading-snug">{checkout ? '✓' : '🎁 '} {extraBonusTitle}</p>
                  {!checkout && <p className="text-xs text-red-500 font-medium mt-0.5">⏳ Disappears when the timer hits 00:00</p>}
                </div>
                {!hideValues && <p className="text-sm font-semibold text-[#1C1C1E] shrink-0">{extraBonus.value} value</p>}
              </div>
            )}
            <Separator />
          </div>
        )}
        <div className="px-5 py-4 bg-[#F2F2F7]">
          {!hideValues && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#8E8E93]">Total value</p>
              <p className="text-sm font-semibold text-[#8E8E93]">
                {showBonus4 && !expired ? '$178' : pageContent.valueStack.totalValue}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between mt-1">
            <p className="text-base font-bold text-[#1C1C1E]">Your price today</p>
            <p className="text-2xl font-bold text-[#1C1C1E]">{pageContent.valueStack.yourPrice}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
