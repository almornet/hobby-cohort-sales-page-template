export const dynamic = 'force-dynamic'

import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'
import { ShieldCheck, Lock } from 'lucide-react'
import { ValueStackSection } from '@/components/ValueStackSection'
import { createPaymentIntent } from './actions'
import Image from 'next/image'
import dynamicImport from 'next/dynamic'
const StripePaymentForm = dynamicImport(() => import('@/components/StripePaymentForm').then(m => m.StripePaymentForm), { ssr: false })
export default async function CheckoutPage() {
  const { clientSecret } = await createPaymentIntent()
  const ck = pageContent.checkout
  const anchorPrice = pageContent.pricing.anchor

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <div className="bg-[#1C1C1E] text-white py-4 px-5 text-center">
        <p className="text-sm font-medium tracking-tight">{ck.headerTitle}</p>
      </div>

      <div className="max-w-xl lg:max-w-5xl mx-auto px-5 pt-8 space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1C1C1E] tracking-tight mb-2">{renderBold(ck.headline)}</h1>
          <p className="text-base text-[#8E8E93]">{renderBold(ck.subheadline)}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="lg:pl-4">
            <ValueStackSection
              showBonus4
              hideValues
              title={ck.orderSummaryTitle}
              titlePosition="left"
              layout="flush"
              checkout
            />
          </div>

          <div>
            <h2 className="hidden lg:block text-xl font-bold text-[#1C1C1E] mb-6 tracking-tight">{ck.checkoutColumnTitle}</h2>
            <div className="border-2 border-amber-400 rounded-2xl p-6 bg-white shadow-lg shadow-amber-100 flex flex-col gap-4">
              <div className="flex items-baseline gap-3 justify-center">
                <span className="text-lg text-[#8E8E93] line-through font-medium">{anchorPrice}</span>
                <span className="text-4xl font-bold text-[#1C1C1E]">{pageContent.pricing.current}</span>
                <span className="text-sm text-[#8E8E93]">{ck.oneTimeLabel}</span>
              </div>
              <StripePaymentForm clientSecret={clientSecret} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#8E8E93]">
                  <Lock className="w-4 h-4 shrink-0" strokeWidth={3} />
                  <span className="text-xs font-medium">{ck.securePaymentLabel}</span>
                </div>
                <Image src={ck.paymentsImage.src} alt={ck.paymentsImage.alt} width={120} height={20} className="h-5 w-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold">{ck.guaranteeStripTitle}</p>
          </div>
          <p className="text-xs text-[#8E8E93]">{pageContent.pricing.guarantee}</p>
          <Image
            src={ck.guaranteeImage.src}
            alt={ck.guaranteeImage.alt}
            width={90}
            height={90}
            className="mx-auto object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {process.env.NODE_ENV !== 'production' && (
        <a
          href="/checkout/success"
          className="fixed bottom-20 right-4 z-50 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-2 rounded-lg shadow-lg"
        >
          → Skip to Success
        </a>
      )}
    </main>
  )
}
