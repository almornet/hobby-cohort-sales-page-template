import Image from 'next/image'
import { pageContent } from '@/content/page'
import { Separator } from '@/components/ui/separator'
import { renderBold } from '@/lib/renderBold'

export function CourseIntroSection() {
  return (
    <section className="pt-16 px-5 max-w-2xl mx-auto text-center">
      <p className="text-sm uppercase tracking-widest text-[#8E8E93] mb-3 font-medium">Introducing</p>
      <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6 tracking-tight">
        {pageContent.courseIntro.name}
      </h2>
      <Image src="/assets/course-mockup.png" alt="The Hairdryer Canvas Course  course mockup" width={576} height={400} sizes="(max-width: 576px) 100vw, 576px" className="w-full h-auto rounded-xl mb-6" />
      <Separator className="mb-8 mx-auto w-16" />
      <div className="space-y-4 text-left">
        {pageContent.courseIntro.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-base text-[#1C1C1E] leading-relaxed">
            {renderBold(para)}
          </p>
        ))}
      </div>
    </section>
  )
}
