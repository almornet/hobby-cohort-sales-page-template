'use client'

import { useEffect } from 'react'
import { useMetaPixel } from '@/hooks/useMetaPixel'

interface TrackPurchaseProps {
  eventId?: string
}

export function TrackPurchase({ eventId }: TrackPurchaseProps) {
  const { trackPurchase } = useMetaPixel()

  useEffect(() => {
    trackPurchase(47, eventId)
  }, [trackPurchase, eventId])

  return null
}
