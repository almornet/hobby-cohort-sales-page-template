import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function ProblemSection() {
  return (
    <section className="pt-12 px-5 max-w-xl mx-auto">
      <div className="space-y-5">
        {pageContent.problemCopy.map((para, i) => (
          <p key={i} className="text-base text-[#1C1C1E] leading-relaxed">
            {renderBold(para)}
          </p>
        ))}
      </div>
    </section>
  )
}
