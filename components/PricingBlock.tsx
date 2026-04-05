import Image from 'next/image'
import { CTAButton } from './CTAButton'
import { Lock } from 'lucide-react'

interface PricingBlockProps {
  anchorPrice?: string
  currentPrice: string
  ctaLabel: string
  pixelEvent?: 'AddToCart' | 'InitiateCheckout'
  note?: string
}

export function PricingBlock({
  anchorPrice = '$97',
  currentPrice = '$47',
  ctaLabel,
  pixelEvent = 'AddToCart',
  note,
}: PricingBlockProps) {

  return (
    <div className="w-full max-w-4xl">
      {/* Framed CTA box */}
      <div className="border-2 border-amber-400 rounded-3xl px-5 py-8 sm:px-14 sm:py-12 bg-white shadow-xl shadow-amber-100/80 flex flex-col items-center gap-6 sm:gap-8">
        {/* Price stack */}
        <div className="w-full max-w-2xl space-y-4 sm:space-y-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#D9D7D2]" />
            <p className="relative z-10 px-4 sm:px-6 bg-white text-xl md:text-2xl text-[#8E8E93] tracking-tight">
              Normally <span className="line-through">{anchorPrice}</span>
            </p>
          </div>

          <p className="text-center text-4xl md:text-5xl font-bold tracking-tight text-[#1C1C1E] leading-none">
            Now Only <span className="text-amber-500">{currentPrice}</span>
          </p>

          <p className="text-center text-2xl sm:text-4xl text-[#3A3A3C] leading-tight">
            One-time payment.
            <br />
            Lifetime access.
          </p>
        </div>

        {/* CTA button keeps same color and border */}
        <div className="w-full max-w-xl">
          <CTAButton
            label={ctaLabel}
            pixelEvent={pixelEvent}
            className="max-sm:text-2xl sm:text-2xl md:text-3xl max-sm:py-7 max-sm:px-4 py-6 sm:py-8 md:py-10 rounded-xl"
          />

          <p className="mt-4 text-center text-base sm:text-xl text-[#5A5A5E]">
            (If you click the button and the next page doesn&apos;t load that means you&apos;re too late)
          </p>
        </div>

        <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#9A9AA0]">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2.5} />
            <span className="text-lg sm:text-2xl">Secure Payment</span>
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2.5} />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Image src="/assets/visa.svg" alt="Visa" width={70} height={44} className="h-8 sm:h-11 w-auto rounded-sm bg-white p-1" />
            <Image src="/assets/mastercard.svg" alt="Mastercard" width={70} height={44} className="h-8 sm:h-11 w-auto rounded-sm bg-white p-1" />
            <Image src="/assets/american-express.svg" alt="American Express" width={70} height={44} className="h-8 sm:h-11 w-auto rounded-sm bg-white p-1" />
            <Image src="/assets/discover.svg" alt="Discover" width={70} height={44} className="h-8 sm:h-11 w-auto rounded-sm bg-white p-1" />
            <Image src="/assets/paypal.svg" alt="PayPal" width={70} height={44} className="h-8 sm:h-11 w-auto rounded-sm bg-white p-1" />
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#D9D7D2]" />
            <p className="relative z-10 px-4 sm:px-6 bg-white text-center text-lg sm:text-2xl text-[#5A5A5E] tracking-tight">30-Day Money-Back Guarantee</p>
          </div>

        </div>
      </div>

      {note && <p className="text-lg text-[#8E8E93] text-center italic mt-5">{note}</p>}
    </div>
  )
}
