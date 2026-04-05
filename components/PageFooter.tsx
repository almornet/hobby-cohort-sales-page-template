import Link from 'next/link'
import { Fragment } from 'react'
import { pageContent } from '@/content/page'

export function PageFooter() {
  const { brandName, links } = pageContent.footer

  return (
    <footer className="mt-16 pb-36 sm:pb-28 px-5 text-center">
      <p className="text-xs text-[#8E8E93]">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2">
        {links.map((link, i) => {
          const external = /^https?:\/\//i.test(link.href)
          return (
          <Fragment key={link.href}>
            {i > 0 ? (
              <span className="text-xs text-[#C7C7CC] select-none" aria-hidden>
                ·
              </span>
            ) : null}
            <Link
              href={link.href}
              className="text-xs text-[#8E8E93] underline hover:text-[#1C1C1E] transition-colors"
              {...(external
                ? { target: '_blank' as const, rel: 'noreferrer' }
                : {})}
            >
              {link.label}
            </Link>
          </Fragment>
          )
        })}
      </div>
    </footer>
  )
}
