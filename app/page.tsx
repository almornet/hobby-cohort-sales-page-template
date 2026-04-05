import { MoodSetterSection } from '@/components/MoodSetterSection'
import { LeadSection } from '@/components/LeadSection'
import { ProblemSection } from '@/components/ProblemSection'
import { CourseIntroSection } from '@/components/CourseIntroSection'
import { ModulesSection } from '@/components/ModulesSection'
import { BetaPricingSection } from '@/components/BetaPricingSection'
import { BonusesSection } from '@/components/BonusesSection'
import { Bonus4Section } from '@/components/Bonus4Section'
import { GuaranteeSection } from '@/components/GuaranteeSection'
import { FAQSection } from '@/components/FAQSection'
import { ValueStackSection } from '@/components/ValueStackSection'
import { LastCTASection } from '@/components/LastCTASection'
import { StickyCountdownBar } from '@/components/StickyCountdownBar'
import { PricingBlock } from '@/components/PricingBlock'
import { pageContent } from '@/content/page'

export default function Home() {
  return (
    <main className={`bg-[#FAF9F6] min-h-screen${process.env.NODE_ENV !== 'production' ? ' pt-10' : ''}`}>
      {/* Mood setter */}
      <MoodSetterSection />

      {/* Lead — Imagine if you could */}
      <LeadSection />

      {/* Problem dig-in */}
      <ProblemSection />

      {/* Course introduction */}
      <CourseIntroSection />

      {/* Module blocks */}
      <ModulesSection />

      {/* First pricing section */}
      <div data-cta-block><BetaPricingSection /></div>

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Bonuses */}
      <BonusesSection />

      {/* Value stack + CTA after bonuses */}
      <ValueStackSection />
      <section className="pt-6 px-5 max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <PricingBlock
            anchorPrice={pageContent.pricing.anchor}
            currentPrice={pageContent.pricing.current}
            ctaLabel={pageContent.pricing.ctaLabel}
            pixelEvent="AddToCart"
          />
        </div>
      </section>

      {/* Mega Bonus — timer-gated, after first stack */}
      <Bonus4Section />

      {/* FAQ */}
      <FAQSection />

      {/* Value stack + CTA after FAQs */}
      <ValueStackSection showBonus4 />
      <LastCTASection />


      <StickyCountdownBar />
    </main>
  )
}
