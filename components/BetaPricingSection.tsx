import { pageContent } from '@/content/page'
import { PricingBlock } from './PricingBlock'
import { renderBold } from '@/lib/renderBold'

export function BetaPricingSection() {
  const pa = pageContent.priceAnchoring

  return (
    <section className="pt-16 px-5 max-w-2xl mx-auto">
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-[#1C1C1E] tracking-tight">{renderBold(pa.headline)}</h2>
        {pa.introParagraphs.map((para, i) => (
          <p key={i} className="text-base text-[#1C1C1E] leading-relaxed">
            {renderBold(para)}
          </p>
        ))}
        <p className="text-base text-[#1C1C1E] leading-relaxed">{renderBold(pa.storyParagraph)}</p>
        <p className="text-base text-[#1C1C1E] leading-relaxed">{renderBold(pa.closingLine)}</p>
      </div>
      <div className="flex flex-col items-center gap-6">
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
