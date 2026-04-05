'use client'

import { Button } from '@/components/ui/button'
import { useMetaPixel } from '@/hooks/useMetaPixel'

type PixelEvent = 'AddToCart' | 'InitiateCheckout'

interface CTAButtonProps {
  label: string
  pixelEvent: PixelEvent
  checkoutUrl?: string
  size?: 'default' | 'lg'
  className?: string
}

export function CTAButton({ label, pixelEvent, checkoutUrl = '/checkout', size = 'lg', className = '' }: CTAButtonProps) {
  const { trackAddToCart, trackInitiateCheckout } = useMetaPixel()

  function handleClick() {
    if (pixelEvent === 'AddToCart') trackAddToCart()
    if (pixelEvent === 'InitiateCheckout') trackInitiateCheckout()
    window.location.href = checkoutUrl
  }

  return (
    <Button
      size={size}
      onClick={handleClick}
      className={`w-full !h-auto whitespace-normal text-center leading-tight bg-amber-500 hover:bg-amber-400 text-white font-bold tracking-tight shadow-md shadow-amber-200 transition-all ${className}`}
    >
      {label}
    </Button>
  )
}
