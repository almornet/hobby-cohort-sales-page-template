import React from 'react'

export function renderBold(text: string): React.ReactNode {
  const headingMatch = text.match(/^(#{1,3})\s+(.+)$/)
  if (headingMatch) {
    const level = headingMatch[1].length
    const content = headingMatch[2]
    const headingClass =
      level === 1
        ? 'block text-3xl font-bold tracking-tight'
        : level === 2
          ? 'block text-2xl font-bold tracking-tight'
          : 'block text-xl font-bold tracking-tight'

    return <span className={headingClass}>{content}</span>
  }

  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })
}
