interface Module {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  imageAlt: string;
  imageSrc: string;
}

interface Bonus {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  imageAlt: string;
  imageSrc: string;
}

interface PaymentBrandImage {
  src: string;
  alt: string;
}

interface PageSite {
  metadata: { title: string; description: string };
  icons: { icon: string; apple: string };
}

interface PriceAnchoring {
  headline: string;
  introParagraphs: string[];
  /** Long “why the price is lower” paragraph after the intro stack */
  storyParagraph: string;
  closingLine: string;
}

interface BonusesSectionCopy {
  kicker: string;
  heading: string;
  valueLabelPrefix: string;
  yoursFreeSuffix: string;
}

interface MegaBonusSectionCopy {
  kicker: string;
  heading: string;
  timerExpiredMessage: string;
  timerActiveMessage: string;
  valueBadgePrefix: string;
  claimFreeLineTemplate: string;
}

interface FAQContent {
  sectionTitle: string;
  items: FAQItem[];
}

interface PricingBlockCopy {
  normallyPrefix: string;
  nowOnlyPrefix: string;
  paymentLine1: string;
  paymentLine2: string;
  ctaFootnote: string;
  securePayment: string;
  guaranteeDivider: string;
  paymentMethods: PaymentBrandImage[];
}

interface CountdownCopy {
  stickyBarPrefix: string;
  expiredMessage: string;
}

interface CheckoutCopy {
  headerTitle: string;
  headline: string;
  subheadline: string;
  orderSummaryTitle: string;
  checkoutColumnTitle: string;
  oneTimeLabel: string;
  securePaymentLabel: string;
  paymentsImage: { src: string; alt: string };
  guaranteeStripTitle: string;
  guaranteeImage: { src: string; alt: string };
}

interface OrderSuccessLineItem {
  emoji: string;
  title: string;
  detail: string;
}

interface OrderSuccessCopy {
  headerTitle: string;
  confirmationTitle: string;
  confirmationBody: string;
  unlockedHeading: string;
  megaBonus: { emoji: string; title: string; detail: string };
  inboxNote: string;
  lineItems: OrderSuccessLineItem[];
}

interface PaymentFormCopy {
  emailHelper: string;
  paymentHeading: string;
  submitProcessing: string;
  submitIdle: string;
  genericError: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ValueItem {
  label: string;
  value: string;
}

interface FooterLink {
  label: string;
  href: string;
}

interface PageContent {
  site: PageSite;
  subheadline: string;
  headline: string;
  moodSetterImageAlt: string;
  moodSetterImageSrc: string;
  leadBullets: string[];
  leadBulletPrefix: string;
  problemCopy: string[];
  courseIntro: {
    introducingLabel: string;
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  modules: Module[];
  pricing: {
    anchor: string;
    current: string;
    cents: number;
    ctaLabel: string;
    guarantee: string;
  };
  priceAnchoring: PriceAnchoring;
  bonuses: Bonus[];
  bonusesSection: BonusesSectionCopy;
  extraBonus: Bonus;
  megaBonusSection: MegaBonusSectionCopy;
  guarantee: {
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
  };
  faq: FAQContent;
  pricingBlock: PricingBlockCopy;
  countdown: CountdownCopy;
  checkout: CheckoutCopy;
  orderSuccess: OrderSuccessCopy;
  paymentForm: PaymentFormCopy;
  valueStack: {
    items: ValueItem[];
    totalValue: string;
    totalValueWithMegaBonus: string;
    yourPrice: string;
    sectionDefaultTitle: string;
    stackImageSrc: string;
    stackImageWithBonusSrc: string;
    stackImageAlt: string;
    stackImageAltBonusExpired: string;
    totalLabel: string;
    yourPriceLabel: string;
    itemCheckPrefix: string;
    megaBonusGiftPrefix: string;
    megaBonusCheckoutPrefix: string;
    megaBonusExpiredNote: string;
    valueAmountSuffix: string;
  };
  footer: {
    brandName: string;
    rightsReserved: string;
    links: FooterLink[];
  };
}

export const pageContent: PageContent = {
  site: {
    metadata: {
      title: "The Hairdryer Canvas Course  — Create Stunning Abstract Art With Just a Hairdryer",
      description:
        "The step-by-step system that takes complete beginners from blank canvas to stunning abstract artwork in a single afternoon. No art experience needed.",
    },
    icons: {
      icon: "/assets/almor-creatives-logo.png",
      apple: "/assets/almor-creatives-logo.png",
    },
  },
  subheadline:
    "No artistic experience needed — just paint, a canvas, and the hairdryer already sitting in your bathroom.",
  headline: "Create Stunning Abstract Art — With Just a Hairdryer",
  moodSetterImageAlt: "Mood Setter — finished abstract art created using The Hairdryer Canvas Course ",
  moodSetterImageSrc: "/assets/mood-setter.png",
  leadBullets: [
    "Imagine if you could **turn a blank canvas into a swirling explosion of color** using nothing more than acrylic paint and the hairdryer already in your bathroom.",
    "Imagine discovering that **you were always capable of making something this beautiful** — you just needed someone to show you the exact steps.",
    "Imagine if guests stopped mid-conversation to ask where you bought it — and you got to say **'I made it.'**",
    "Imagine the feeling of stepping back, looking at your finished canvas, and thinking — **I actually made that. Me. I did that.**",
  ],
  leadBulletPrefix: "✔️",
  problemCopy: [
    "## Once You Know the Technique, It Really Is as Easy as It Looks.",
    "You see the art. The colors drift across the canvas in long, smooth waves.",
    "And your first thought is — *how does someone even do that?*",
    "It looks like it requires some kind of special skill. Or years of practice. Or at least a very steady hand.",
    "**It doesn't.**",
    "The secret is **the hairdryer**. Not the paint brand. Not the canvas size. Not some expensive tool you've never heard of — **the hairdryer already sitting in your bathroom.**",
    "The way you hold it, **the distance from the canvas, the angle, the speed** — these are the things that control everything. Where the colors go. How they blend. How they drift into each other **without turning muddy**. That fluid, almost liquid movement you see in the finished piece? **That's not luck. That's technique.**",
    "And it's **a technique anyone can learn in an afternoon.**",
    "Once you understand how the airflow works with the paint, **you stop guessing and start controlling.** The canvas stops feeling unpredictable. You know what's going to happen before it happens — and you guide it exactly where you want it to go.",
    "**That's the moment it stops looking like someone else's art and starts looking like yours.**",
  ],
  courseIntro: {
    introducingLabel: "Introducing",
    name: "The Hairdryer Canvas Course ",
    description:
      "The step-by-step system that takes complete beginners from **blank canvas to stunning abstract artwork — in a single afternoon**.\n\n**No art experience. No special talent. No guesswork.**\n\nJust a proven sequence of steps that removes every obstacle standing between you and **a finished canvas that looks like it belongs on a gallery wall**.",
    imageSrc: "/assets/course-mockup.png",
    imageAlt: "The Hairdryer Canvas Course  course mockup",
  },
  modules: [
    {
      title: "Module 1 — Your Starter Kit",
      subtitle: "Everything you need to get started",
      imageAlt: "Module 1 — workspace setup with acrylic paints, canvas, and hairdryer",
      imageSrc: "/assets/module-1.png",
      description:
        "Starting with the right materials makes everything else easier. In this module you'll learn exactly what to buy, where to find it, and how to set up your workspace so your first session flows smoothly from the very first pour. No guessing, no wasted trips, no unnecessary spending.",
      bullets: [
        "**The exact materials** that give beginners the best results on their first canvas — and nothing extra",
        "**The one canvas size** that works best when you're starting out — and why it makes everything easier",
        "**What to look for** in acrylic paint so your colors flow, layer, and drift the way you want them to",
        "How to set up your workspace in **10 minutes** so you can focus entirely on creating",
      ],
    },
    {
      title: "Module 2 — Mixing & Pouring Your Colors",
      subtitle:
        "The color formula and pour sequence that sets your canvas up for a stunning result — before the hairdryer even comes out.",
      imageAlt: "Module 2 — acrylic paint being mixed and poured in the correct sequence",
      imageSrc: "/assets/module-2.png",
      description:
        "The colors that make a canvas look stunning follow a specific sequence — and this module gives you exactly that. You'll learn the pour order, the consistency ratios, and the layering technique that creates that glowing, almost liquid effect you see in the finished piece.",
      bullets: [
        "**The color formula** that produces beautiful, layered abstract art on any canvas",
        "**The exact pour sequence** that creates depth and contrast — and makes the hairdryer do all the work",
        "**The right paint consistency** — and why getting this right is the single biggest factor in your result",
        "How to create **that glowing, almost liquid effect** using one simple layering technique",
      ],
    },
    {
      title: "Module 3 — The Hairdryer Technique",
      subtitle:
        "The one skill that turns poured paint into stunning abstract art — and makes every canvas look intentional.",
      imageAlt: "Module 3 — hairdryer being used at precise distance and angle over wet canvas",
      imageSrc: "/assets/module-3.png",
      description:
        "This is where the magic happens. The hairdryer isn't just a tool — **it's your paintbrush**. In this module you'll learn the exact distance, angle, and speed that give you full control over how your colors move and drift across the canvas. Once you have this, everything else clicks into place.",
      bullets: [
        "**The exact distance, angle, and speed** that gives you full control over where the colors go",
        "How to use airflow to create **those long, smooth drifts** you see in the finished piece",
        "**The 3-pass method** that builds depth and movement layer by layer across the whole canvas",
        "How to guide the paint so your result looks **deliberate and beautiful** — every single time",
      ],
    },
    {
      title: "Module 4 — The Details",
      subtitle:
        "How to refine your canvas once the paint has moved — edges, balance, and the small touches that take a good result to a great one.",
      imageAlt: "Module 4 — finished canvas with edges and balance refined",
      imageSrc: "/assets/module-4.png",
      description:
        "Once the hairdryer has done its work, the canvas isn't quite finished yet. This module walks you through how to assess what you have, clean up the edges, fill any thin areas, and make the small adjustments that give your piece that polished, intentional look.",
      bullets: [
        "**How to read your canvas** after the hairdryer and know exactly what it still needs",
        "**How to finish the edges** so every side of the canvas looks clean and complete",
        "How to **fill thin or uneven areas** without disturbing the rest of the painting",
        "**The final check** — what to look for before you set the canvas down to dry",
      ],
    },
    {
      title: "Module 5 — The Final Touch",
      subtitle: "How to dry, seal, and protect your finished piece so the colors stay vivid for years.",
      imageAlt: "Module 5 — finished sealed canvas displayed on a wall in a styled room",
      imageSrc: "/assets/module-5.png",
      description:
        "Your canvas is done — now you need to lock it in. In this module you'll learn how to dry your canvas correctly, which sealant to use, and how to apply it so your finished piece looks professional and is built to last.",
      bullets: [
        "**How to know when your canvas is finished** — the exact signs that tell you to put the hairdryer down",
        "**The right sealant for acrylic pour paintings** — and which finish makes abstract art look its best",
        "How to **apply it evenly** so the final surface looks clean, smooth, and gallery-worthy",
        "How long to **wait before sealing** so the paint is fully cured and the colors are locked in permanently",
      ],
    },
  ],
  pricing: {
    anchor: "$97",
    current: "$47",
    cents: 4700,
    ctaLabel: "GET INSTANT ACCESS NOW >>",
    guarantee: "30-day money-back guarantee. One email. All your money back. No questions asked.",
  },
  priceAnchoring: {
    headline: "This course is currently open at a reduced price. Here's why.",
    introParagraphs: [
      "If you walked into a local art class and asked an instructor to teach you this method in person — one afternoon, step by step, with all the materials guidance included — you would pay **up to $120** without blinking. That's standard. That's the market rate for one session with a real teacher.",
      "The Hairdryer Canvas Course  gives you that same instruction, plus the color formula, plus the hairdryer technique, plus three bonuses — and you can watch it as many times as you want, on any device, for life.",
      "**Normally I would offer this course at $97, but this is not the price you are paying today.**",
      "**Today, you can get full lifetime access for just $47.**",
      "And here is why.",
    ],
    storyParagraph:
      "This course is brand new, and I'm opening it up to the first group of students at a reduced price — partly to get real results in the hands of real beginners, and partly because I want to prove to you that the method works before I charge full price for it.",
    closingLine: "**So right now, while this beta period is open:**",
  },
  bonuses: [
    {
      emoji: "🛒",
      title: "Bonus 1 — The Complete Shopping List",
      subtitle:
        "Every material you need for your first canvas — with direct links so you can order everything in one sitting.",
      description:
        "You watched the course. You know exactly what to buy. This bonus removes the last obstacle between you and your first session — no searching, no comparing products, no wondering if you're getting the right thing.\n\nThis one-page guide lists **every single material used in the course** with direct links to the exact products on Amazon — ready to order in under 5 minutes.\n\n**The only thing left to do is paint.**",
      value: "$17",
      imageAlt: "Bonus 1 — complete shopping list with exact materials and product names",
      imageSrc: "/assets/complete-shopping-list.png",
    },
    {
      emoji: "📸",
      title: "Bonus 2 — How to Photograph Your Canvas With Just Your Phone",
      subtitle: "How to Photograph Your Finished Canvas With Just Your Phone So It Looks Gallery-Worthy",
      description:
        "You spent an afternoon creating something stunning. **The last thing you want is a flat, washed-out phone photo** that doesn't do it justice.\n\nThis quick guide walks you through the **exact lighting setup, angles, and free editing steps** that make your canvas look like it belongs in a professional portfolio — using nothing but the phone already in your pocket. Because if you can't show it off properly, half the joy is lost.",
      value: "$17",
      imageAlt: "Bonus 2 — phone photography guide showing canvas lighting setup and angles",
      imageSrc: "/assets/canvas-photo-formula.png",
    },
  ],
  bonusesSection: {
    kicker: "But wait",
    heading: "You also get these free bonuses:",
    valueLabelPrefix: "Value:",
    yoursFreeSuffix: " — Yours free",
  },
  extraBonus: {
    emoji: "🎁",
    title: "Mega Bonus — 3 Ready-To-Use Color Combinations For Your Next Canvas",
    subtitle: "So you never have to wonder what to paint next",
    description:
      "Once you finish your first canvas — you'll want to make another one.\n\nThis bonus gives you **3 fully tested color combinations**, each with the **exact colors, pour order, and consistency ratios** you need to get started immediately. No guessing, no experimenting, no wasted paint.\n\nJust pick a palette, follow the steps, and create a completely different result every time — using the exact same hairdryer technique from the course.\n\n**One canvas is a project. Three palettes is a hobby.**",
    value: "$47",
    imageAlt: "Mega bonus — ready-to-use color combinations for your next canvas",
    imageSrc: "/assets/mega-bonus.png",
  },
  megaBonusSection: {
    kicker: "But wait",
    heading: "There's one more thing...",
    timerExpiredMessage:
      "❌ This bonus is no longer available — the timer has expired. You just missed it.",
    timerActiveMessage: "This bonus disappears when the timer hits zero.",
    valueBadgePrefix: "Value:",
    claimFreeLineTemplate:
      "Value: {value} — Yours free if you claim access before the timer expires.",
  },
  guarantee: {
    title: "30-Day Money-Back Guarantee",
    body: "You don't have to make the final decision now. You can get access to the full course right now and try it out. If you don't like it?\n\nYou can send us an email at team@almorcreative.online at any moment and **receive your money back within 24 hours** of you sending the email. **NO QUESTIONS ASKED.**",
    imageSrc: "/assets/guarantee.png",
    imageAlt: "30-day money-back guarantee",
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    items: [
    {
      question: "Do I need any painting experience to do this?",
      answer:
        "None at all. In fact, prior experience can sometimes work against you — people with an art background tend to try to control the process instead of following it. The Hairdryer Canvas Course  was built specifically for people who have never made anything like this before. You follow a sequence. The method does the rest.",
    },
    {
      question: "What materials do I need and how much will they cost?",
      answer:
        "Acrylic paint, a canvas, and a hairdryer — plus a few basics you likely already have at home. The full list is in Module 1, and the Bonus Shopping List Card gives you exact product names so there's zero guessing at the craft store. Total cost for your first session: under $20.",
    },
    {
      question: "Do I need floetrol or can I just use water?",
      answer:
        "You can use water. Floetrol helps with consistency and creates better results, but it is not essential for your first canvas. Module 1 covers exactly what to use and in what ratio — so you're not guessing at the craft store or coming home with the wrong thing.",
    },
    {
      question: "Hot air or cold air — which one do I use?",
      answer:
        "This is one of the most common points of confusion — and one of the most important. The answer depends on the stage of your canvas. Module 2 covers exactly when to use each setting and why getting this wrong is the single most common reason beginners end up with a muddy result.",
    },
    {
      question: "How long does it take to finish a canvas?",
      answer:
        "Most people finish their first canvas in a single afternoon — typically 2 to 3 hours from setup to finished piece. Drying takes 2 to 3 days depending on the thickness of your paint layers. No multi-week commitment. No ongoing practice required before you see results.",
    },
    {
      question: "I've tried pour painting before and it didn't work. Is this different?",
      answer:
        "If you've tried it before and got a muddy mess, you already know how frustrating that is. The reason it didn't work wasn't you — it was three specific things nobody told you: paint consistency, color sequence, and hairdryer technique. This course shows you exactly how to get all three right. If you follow it and still don't get a result you're proud of, email me and I'll refund you in full.",
    },
    {
      question: "What if something goes wrong mid-painting?",
      answer:
        "It happens — and Module 4 covers exactly what to do when it does. Some of the most stunning canvases come from moments that looked like mistakes. The course teaches you how to read what's happening on the canvas and adjust in real time, so nothing is ever truly ruined.",
    },
    {
      question: "What if my paint starts cracking after it dries?",
      answer:
        "Cracking usually comes from one of two things — paint that was too thick, or layers that dried at different speeds. Both are covered in the course. Module 5 also shows you how to seal your finished canvas correctly so the colors stay vivid and the surface stays intact for years.",
    },
    {
      question: "How do I access the course after I buy?",
      answer:
        "This course is currently in its final production stage. The method is fully developed and tested and the modules are being recorded right now. If you join today, you'll receive an immediate email confirmation and full access the moment the course goes live — which will not be long from now. This is why the price is $47 instead of $97. You're joining early and getting the full course at the beta price as a result. If for any reason the course is delayed, email team@almorcreative.com and I'll refund you immediately — no questions asked.",
    },
    {
      question: "I've never been artistic or creative in my life. Is this really for me?",
      answer:
        "Completely. In fact, people with no creative background often get better results on their first try than people who have painted before. The reason is simple — they follow the steps without trying to improvise. The Hairdryer Canvas Course  doesn't ask for artistic instinct. It asks you to follow a sequence. The hairdryer moves the paint. The method does the rest. Your only job is to start.",
    },
    {
      question: "This looks complicated. I wouldn't even know where to begin.",
      answer:
        "That feeling disappears in the first ten minutes of Module 1. Before you touch a single drop of paint, the course tells you exactly what to buy, how much of it, and how to set up your workspace. When you do start, there is no guessing. You follow step one, then step two. The complexity only exists when nobody shows you the starting point. This course does exactly that.",
    },
    {
      question: "I don't have time for an online course. How long does this actually take?",
      answer:
        "The course is designed to watch once and then create. The modules are short and focused — no theory for the sake of theory. Your first finished canvas takes one afternoon, typically 2 to 3 hours from setup to finished piece. Drying takes 2 to 3 days. That's it. No ongoing practice required before you see results.",
    },
    {
      question: "What if I spend $47 and it doesn't work for me?",
      answer:
        "You have 30 days to try the course, follow the method, and finish your canvas. If you're not happy with the result — for any reason — one email to team@almorcreative.online and you get every penny back. No forms. No waiting. No awkward conversation. The guarantee exists because the method works. But you shouldn't have to take anyone's word for that without a safety net.",
    },
    {
      question: "What devices can I watch the course on?",
      answer:
        "The course is accessible on any device with a browser — phone, tablet, laptop, or desktop. You can watch on your TV by casting from your phone or laptop. There is no app to download. Once you have access you can watch any module as many times as you want, on any device, for life.",
    },
    {
      question: "Will my canvas look exactly like the one in the course?",
      answer:
        "Honestly — no, and that's actually a good thing. Every pour painting is unique because of the way paint and air interact. No two canvases ever come out identical, even when made by the same person using the same colors. What the course guarantees is not an identical copy — it's a finished canvas you're genuinely proud of, using the same technique, the same color logic, and the same hairdryer method. The result will be yours. That's the point.",
    },
    ],
  },
  pricingBlock: {
    normallyPrefix: "Normally ",
    nowOnlyPrefix: "Now Only ",
    paymentLine1: "One-time payment.",
    paymentLine2: "Lifetime access.",
    ctaFootnote:
      "(If you click the button and the next page doesn't load that means you're too late)",
    securePayment: "Secure Payment",
    guaranteeDivider: "30-Day Money-Back Guarantee",
    paymentMethods: [
      { src: "/assets/visa.svg", alt: "Visa" },
      { src: "/assets/mastercard.svg", alt: "Mastercard" },
      { src: "/assets/american-express.svg", alt: "American Express" },
      { src: "/assets/discover.svg", alt: "Discover" },
      { src: "/assets/paypal.svg", alt: "PayPal" },
    ],
  },
  countdown: {
    stickyBarPrefix: "Offer disappears in:",
    expiredMessage: "The special bonus has expired — you just missed it.",
  },
  checkout: {
    headerTitle: "🔒 Secure Checkout — The Hairdryer Canvas Course ",
    headline: "You're one step away",
    subheadline: "Complete your order below to get instant access.",
    orderSummaryTitle: "Order summary:",
    checkoutColumnTitle: "Checkout:",
    oneTimeLabel: "one-time",
    securePaymentLabel: "Secure Payment",
    paymentsImage: {
      src: "/assets/payments.png",
      alt: "PayPal, Visa, Mastercard, Discover, Amex",
    },
    guaranteeStripTitle: "30-Day Money-Back Guarantee",
    guaranteeImage: {
      src: "/assets/guarantee.png",
      alt: "30-day money-back guarantee",
    },
  },
  orderSuccess: {
    headerTitle: "🔒 Order Confirmed — The Hairdryer Canvas Course ",
    confirmationTitle: "You're in. Welcome to The Hairdryer Canvas Course .",
    confirmationBody:
      "Your order is confirmed and your access is being set up. Check your email — your link will be there shortly.",
    unlockedHeading: "Here's what you just unlocked:",
    megaBonus: {
      emoji: "🎁",
      title: "Mega Bonus — 3 Ready-To-Use Color Combinations For Your Next Canvas",
      detail: "3 new color palettes to keep creating long after your first canvas",
    },
    inboxNote: "📬 Check your inbox — your access link is on its way.",
    lineItems: [
      {
        emoji: "🎬",
        title: "The Hairdryer Canvas Course ",
        detail: "5 step-by-step video modules — yours to watch anytime, on any device, for life",
      },
      {
        emoji: "🛒",
        title: "Bonus 1 — The Shopping List Card",
        detail: "The exact materials list so your first trip to the craft store is your only trip",
      },
      {
        emoji: "📸",
        title: "Bonus 2 — How to Photograph Your Canvas With Just Your Phone",
        detail: "How to photograph your finished canvas so it looks gallery-worthy",
      },
    ],
  },
  paymentForm: {
    emailHelper: "We'll send your course access to this email.",
    paymentHeading: "Payment",
    submitProcessing: "Processing…",
    submitIdle: "ORDER NOW",
    genericError: "Something went wrong.",
  },
  valueStack: {
    items: [
      { label: "The Hairdryer Canvas Course  — 5 step-by-step video modules", value: "$97 value" },
      { label: "The Shopping List Card — so your first craft store trip is your only one", value: "$17 value" },
      {
        label: "The Canvas Abstract Formula — make your finished canvas look gallery-worthy on your phone",
        value: "$17 value",
      },
    ],
    totalValue: "$131",
    totalValueWithMegaBonus: "$178",
    yourPrice: "$47",
    sectionDefaultTitle: "Here's everything you're getting today:",
    stackImageSrc: "/assets/stack.png",
    stackImageWithBonusSrc: "/assets/stack-4.png",
    stackImageAlt: "Everything included in The Hairdryer Canvas Course",
    stackImageAltBonusExpired: "Everything included in The Hairdryer Canvas Course (expired)",
    totalLabel: "Total value",
    yourPriceLabel: "Your price today",
    itemCheckPrefix: "✓ ",
    megaBonusGiftPrefix: "🎁 ",
    megaBonusCheckoutPrefix: "✓ ",
    megaBonusExpiredNote: "❌ Not included — timer has expired",
    valueAmountSuffix: " value",
  },
  footer: {
    brandName: "Almor Creatives",
    rightsReserved: "All rights reserved.",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};
