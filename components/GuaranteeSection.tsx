import Image from 'next/image'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function GuaranteeSection() {
  return (
    <section className="pt-12 px-5 max-w-2xl mx-auto">
      <div className="border border-[#E5E5EA] rounded-2xl px-5 pt-6 pb-12 sm:px-0 sm:pt-0 bg-white text-center">
        <Image src="/assets/guarantee.png" alt="30-day money-back guarantee" width={150} height={150} className="mx-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
        <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4 tracking-tight">{pageContent.guarantee.title}</h2>
        <div className="space-y-3">
          {pageContent.guarantee.body.split('\n\n').map((para, i) => (
            <p key={i} className={`text-base text-[#1C1C1E] leading-relaxed ${i === 1 ? 'font-semibold' : ''}`}>
              {renderBold(para)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
