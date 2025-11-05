'use client'

import dynamic from 'next/dynamic'

// Dynamically import PromotionDisplay with no SSR to prevent hydration issues
const PromotionDisplay = dynamic(() => import('./PromotionDisplay'), {
  ssr: false,
})

export default function ClientPromotionDisplay() {
  return <PromotionDisplay />
}