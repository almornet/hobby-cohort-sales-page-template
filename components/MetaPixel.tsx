"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script'
import { useState, useEffect, useRef } from 'react';
import * as pixel from '@/lib/fpixel';

export function MetaPixel() {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const lastKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (!loaded) return;

    const key =
      typeof window !== 'undefined'
        ? `${window.location.pathname || '/'}${window.location.search || ''}`
        : pathname;

    if (lastKeyRef.current === key) return;
    lastKeyRef.current = key;

    pixel.pageview();
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
    </div>
  );
}
