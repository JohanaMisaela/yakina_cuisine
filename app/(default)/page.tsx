export const metadata = {
  title: 'Home - YAKINA',
  description: 'Home page',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import WhatWeDo from '@/components/whatwedo'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhatWeDo/>
      <Testimonials />
    </>
  )
}
