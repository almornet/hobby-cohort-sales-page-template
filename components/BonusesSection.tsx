import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function BonusesSection() {
  const b = pageContent.bonusesSection

  return (
    <section className="pt-16 px-5 max-w-2xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-[#8E8E93] text-center mb-2 font-medium">{b.kicker}</p>
      <h2 className="text-2xl font-bold text-[#1C1C1E] text-center mb-8 tracking-tight">{renderBold(b.heading)}</h2>
      <div className="space-y-6">
        {pageContent.bonuses.map((bonus, i) => (
          <Card key={i} className="overflow-hidden">
            <Image src={bonus.imageSrc} alt={bonus.imageAlt} width={576} height={384} sizes="(max-width: 576px) 100vw, 576px" className="w-full h-auto object-cover" />
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <p className="text-lg mb-1">{bonus.emoji}</p>
                  <CardTitle className="text-lg">{bonus.title}</CardTitle>
                  <p className="text-base italic text-[#8E8E93] leading-relaxed mt-1 text-left">{bonus.subtitle}</p>
                </div>
                <Badge variant="value" className="shrink-0 self-start sm:mt-1">
                  {b.valueLabelPrefix} {bonus.value}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {bonus.description.split('\n\n').map((para, j) => (
                <p key={j} className="text-base text-[#1C1C1E] leading-relaxed mb-2 last:mb-0">
                  {renderBold(para)}
                </p>
              ))}
              <p className="text-base font-semibold text-emerald-700 mt-3">
                {b.valueLabelPrefix} {bonus.value}
                {b.yoursFreeSuffix}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
