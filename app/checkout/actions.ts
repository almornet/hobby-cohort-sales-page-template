'use server'

import { cookies } from 'next/headers'
import Stripe from 'stripe'

function megaBonusIncludedFromCookies(): boolean {
  const deadline = cookies().get('cdm_deadline')?.value
  return deadline ? parseInt(deadline, 10) > Date.now() : false
}

function megaBonusMetadata(): Record<string, string> {
  return {
    mega_bonus_included: megaBonusIncludedFromCookies() ? 'true' : 'false',
  }
}

export async function createPaymentIntent() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 4700, // $47.00 in cents
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
    metadata: megaBonusMetadata(),
  })

  return { clientSecret: paymentIntent.client_secret! }
}
