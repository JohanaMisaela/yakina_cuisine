export const metadata = {
  title: 'A propos - YAKINA',
  description: 'About page',
}

import AboutUs from '@/components/aboutus'
import Step from '@/components/step'
import React from 'react'

export default function About() {
  return (
    <>
    <section className='relative'>
      <AboutUs/>
      <Step/>
    </section>
    </>
  )
}
