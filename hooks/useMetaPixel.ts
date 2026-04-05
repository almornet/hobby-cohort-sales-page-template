"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function getFbCookies(): { fbc?: string; fbp?: string } {
  if (typeof document === "undefined") return {};
  const map = document.cookie.split(";").reduce(
    (acc, c) => {
      const [k, v] = c.trim().split("=");
      acc[k] = v;
      return acc;
    },
    {} as Record<string, string>,
  );
  return { fbc: map["_fbc"], fbp: map["_fbp"] };
}

function sendServerEvent(eventName: string, eventId: string, customData?: Record<string, unknown>) {
  const cookies = getFbCookies();
  fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      eventId,
      userData: { fbc: cookies.fbc, fbp: cookies.fbp },
      customData,
    }),
  }).catch(() => {});
}

export function useMetaPixel() {
  const trackEvent = useCallback((event: string, data?: Record<string, unknown>, eventId?: string) => {
    if (typeof window === "undefined" || !window.fbq) return;
    if (eventId) {
      window.fbq("track", event, data, { eventID: eventId });
    } else {
      window.fbq("track", event, data);
    }
  }, []);

  const trackViewContent = useCallback(() => {
    const eventId = crypto.randomUUID();
    const data = { content_name: "The Hairdryer Canvas Course " };
    trackEvent("ViewContent", data, eventId);
    sendServerEvent("ViewContent", eventId, data);
  }, [trackEvent]);

  const trackAddToCart = useCallback(() => {
    const eventId = crypto.randomUUID();
    const data = { content_name: "The Hairdryer Canvas Course ", value: 47, currency: "USD" };
    trackEvent("AddToCart", data, eventId);
    sendServerEvent("AddToCart", eventId, data);
  }, [trackEvent]);

  const trackInitiateCheckout = useCallback(() => {
    const eventId = crypto.randomUUID();
    const data = { content_name: "The Hairdryer Canvas Course ", value: 47, currency: "USD" };
    trackEvent("InitiateCheckout", data, eventId);
    sendServerEvent("InitiateCheckout", eventId, data);
  }, [trackEvent]);

  const trackPurchase = useCallback(
    (amount: number, eventId?: string) => {
      const id = eventId ?? crypto.randomUUID();
      const data = { content_name: "The Hairdryer Canvas Course ", value: amount, currency: "USD" };
      trackEvent("Purchase", data, id);
      sendServerEvent("Purchase", id, data);
    },
    [trackEvent],
  );

  return { trackEvent, trackViewContent, trackAddToCart, trackInitiateCheckout, trackPurchase };
}
