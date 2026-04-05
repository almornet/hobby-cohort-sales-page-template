import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function ModulesSection() {
  return (
    <section className="pt-12 px-5 max-w-xl mx-auto">
      <div className="space-y-8">
        {pageContent.modules.map((mod, i) => (
          <Card key={i} className="overflow-hidden">
            <Image src={mod.imageSrc} alt={mod.imageAlt} width={576} height={384} sizes="(max-width: 576px) 100vw, 576px" className="w-full h-auto object-cover" />
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{mod.title}</CardTitle>
              <CardDescription className="text-base italic text-[#8E8E93] pt-1">{mod.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base text-[#1C1C1E] leading-relaxed mb-4">{renderBold(mod.description)}</p>
              <ul className="space-y-2">
                {mod.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-base text-[#1C1C1E] leading-relaxed">
                    <span className="mt-1 shrink-0 text-[#8E8E93]">→</span>
                    <span>{renderBold(bullet)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
