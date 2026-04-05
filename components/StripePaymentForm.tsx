'use client'

import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import { pageContent } from '@/content/page'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string>('')
  const copy = pageContent.paymentForm

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        payment_method_data: email
          ? {
              billing_details: {
                email,
              },
            }
          : undefined,
      },
    })

    if (error) {
      setError(error.message ?? copy.genericError)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <section className="border-2 border-[#D9D7D2] rounded-xl p-4 bg-white">
        <LinkAuthenticationElement
          onChange={(e) => setEmail(e.value.email ?? '')}
          options={{
            defaultValues: email ? { email } : undefined,
          }}
        />
        <p className="mt-2 text-xs text-[#8E8E93]">{copy.emailHelper}</p>
      </section>

      <section className="border-2 border-[#D9D7D2] rounded-xl p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#1C1C1E]">{copy.paymentHeading}</p>
        </div>
        <PaymentElement />
      </section>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full max-sm:text-2xl sm:text-2xl md:text-3xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-white font-bold py-5 rounded-lg text-base tracking-tight shadow-md shadow-amber-200 transition-all"
      >
        {loading ? copy.submitProcessing : copy.submitIdle}
      </button>
    </form>
  )
}

interface StripePaymentFormProps {
  clientSecret: string
}

export function StripePaymentForm({ clientSecret }: StripePaymentFormProps) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#f59e0b',
            borderRadius: '8px',
          },
        },
      }}
    >
      <CheckoutForm />
    </Elements>
  )
}
