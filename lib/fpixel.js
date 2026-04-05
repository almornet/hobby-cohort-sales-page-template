export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const pageview = () => {
  window.fbq("track", "PageView");
};
