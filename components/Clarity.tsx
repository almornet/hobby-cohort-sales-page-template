"use client";

import MSClarity from "@microsoft/clarity";
import { useEffect } from "react";

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/**
 * Official @microsoft/clarity bootstrap (see npm package).
 * Runs only on the client; dedupes via #clarity-script inside the library.
 *
 * consentV2: Clarity may wait for a consent signal (EEA/UK/CH or Consent Mode in
 * project settings). Without it, the tag can load but /collect stays idle. We grant
 * analytics only (no Microsoft Advertising). If you use a CMP, call consentV2 from
 * the banner callback instead of unconditionally here.
 */
export function Clarity() {
  useEffect(() => {
    if (!projectId) return;
    MSClarity.init(projectId);
    MSClarity.consentV2({
      ad_Storage: "denied",
      analytics_Storage: "granted",
    });
  }, []);

  return null;
}
