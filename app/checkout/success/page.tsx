import { CheckCircle } from 'lucide-react'
import { cookies } from 'next/headers'
import { TrackPurchase } from '@/components/TrackPurchase'

const baseItems = [
  {
    emoji: '🎬',
    title: 'The Hairdryer Canvas Course ',
    detail: '5 step-by-step video modules — yours to watch anytime, on any device, for life',
  },
  {
    emoji: '🛒',
    title: 'Bonus 1 — The Shopping List Card',
    detail: 'The exact materials list so your first trip to the craft store is your only trip',
  },
  {
    emoji: '📸',
    title: 'Bonus 2 — How to Photograph Your Canvas With Just Your Phone',
    detail: 'How to photograph your finished canvas so it looks gallery-worthy',
  },
]

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent?: string }
}) {
  const cookieStore = cookies()
  const deadlineCookie = cookieStore.get('cdm_deadline')?.value
  const bonusActive = deadlineCookie ? parseInt(deadlineCookie, 10) > Date.now() : false

  return (
    <main className="bg-[#FAF9F6] min-h-screen pb-16">
      <TrackPurchase eventId={searchParams.payment_intent} />
      {/* Header */}
      <div className="bg-[#1C1C1E] text-white py-4 px-5 text-center">
        <p className="text-sm font-medium tracking-tight">
          🔒 Order Confirmed — The Hairdryer Canvas Course 
        </p>
      </div>

      <div className="max-w-xl mx-auto px-5 pt-10 space-y-10">

        {/* Confirmation */}
        <div className="text-center space-y-4">
          <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
          <h1 className="text-2xl font-bold text-[#1C1C1E] tracking-tight">
            You&apos;re in. Welcome to The Hairdryer Canvas Course .
          </h1>
          <p className="text-base text-[#8E8E93] leading-relaxed">
            Your order is confirmed and your access is being set up. Check your email — your link will be there shortly.
          </p>
        </div>

        {/* What they got */}
        <div>
          <h2 className="text-lg font-bold text-[#1C1C1E] mb-4 tracking-tight">
            Here&apos;s what you just unlocked:
          </h2>
          <div className="border border-[#E5E5EA] rounded-2xl overflow-hidden bg-white divide-y divide-[#E5E5EA]">
            {baseItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-4">
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1C1C1E]">{item.title}</p>
                  <p className="text-sm text-[#8E8E93] leading-snug mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
            {bonusActive ? (
              <div className="flex items-start gap-3 px-5 py-4 bg-amber-50">
                <span className="text-xl shrink-0">🎁</span>
                <div>
                  <p className="text-sm font-semibold text-[#1C1C1E]">Mega Bonus — 3 Ready-To-Use Color Combinations For Your Next Canvas</p>
                  <p className="text-sm text-[#8E8E93] leading-snug mt-0.5">3 new color palettes to keep creating long after your first canvas</p>
                </div>
              </div>
            ) : (
              null
            )}
          </div>
        </div>


        <div className="bg-yellow-100 border border-yellow-300 rounded-xl px-5 py-4">
          <p className="text-sm font-medium text-yellow-900">
            📬 Check your inbox — your access link is on its way.
          </p>
        </div>

      </div>
    </main>
  )
}
