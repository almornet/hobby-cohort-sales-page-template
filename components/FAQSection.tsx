import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function FAQSection() {
  return (
    <section className="pt-16 px-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-8 tracking-tight text-center">
        {renderBold(pageContent.faq.sectionTitle)}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {pageContent.faq.items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-base font-semibold text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-base text-[#1C1C1E] leading-relaxed">{renderBold(item.answer)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
