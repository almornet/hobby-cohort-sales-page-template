'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useMetaPixel } from '@/hooks/useMetaPixel'
import { pageContent } from '@/content/page'
import { renderBold } from '@/lib/renderBold'

export function MoodSetterSection() {
  const { trackViewContent } = useMetaPixel()
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !fired.current) {
          fired.current = true
          trackViewContent()
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [trackViewContent])

  return (
    <section ref={ref} className="pt-8 px-5 max-w-2xl mx-auto text-center">
      <p className="text-sm italic text-[#8E8E93] mb-2">{renderBold(pageContent.subheadline)}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1C1E] leading-tight tracking-tight mb-2">
        {renderBold(pageContent.headline)}
      </h1>
      <Image
        src={pageContent.moodSetterImageSrc}
        alt={pageContent.moodSetterImageAlt}
        width={672}
        height={500}
        sizes="(max-width: 672px) 100vw, 672px"
        className="w-full h-auto rounded-xl"
        priority
      />
    </section>
  )
}
