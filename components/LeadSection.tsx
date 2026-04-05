import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function LeadSection() {
  return (
    <section className="pt-12 px-5 max-w-xl mx-auto">
      <ul className="space-y-6">
        {pageContent.leadBullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-base text-[#1C1C1E] leading-relaxed">
            <span className="mt-1 shrink-0">✔️</span>
            <span>{renderBold(bullet)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
