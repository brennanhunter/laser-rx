'use client'

import dynamic from 'next/dynamic'

// Dynamically import the PromotionDisplay with no SSR
const PromotionDisplayClient = dynamic(
  () => import('./PromotionDisplay'),
  { 
    ssr: false,
    loading: () => null
  }
)

export default function PromotionDisplayWrapper() {
  return <PromotionDisplayClient />
}