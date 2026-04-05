const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

interface CapiEventParams {
  eventName: string;
  eventId?: string;
  ipAddress?: string;
  userAgent?: string;
  fbc?: string;
  fbp?: string;
  customData?: Record<string, unknown>;
}

export async function sendCapiEvent({
  eventName,
  eventId,
  ipAddress,
  userAgent,
  fbc,
  fbp,
  customData,
}: CapiEventParams) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("[metaCapi] Skipping — META_PIXEL_ID or META_ACCESS_TOKEN is not set")
    return;
  }

  const userData: Record<string, string> = {};
  if (ipAddress) userData.client_ip_address = ipAddress;
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;

  const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

  console.log("[metaCapi] Sending event to CAPI", {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    user_data: userData,
    custom_data: customData,
  });

  const res = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          user_data: userData,
          custom_data: customData,
        },
      ],
      access_token: ACCESS_TOKEN,
      ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("[metaCapi] Meta API error:", JSON.stringify(error));
  } else {
    const body = await res.json();
    console.log("[metaCapi] Sent:", eventName, "| Response:", JSON.stringify(body));
  }
}
