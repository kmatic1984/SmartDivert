'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import RoutingModes from '../components/RoutingModes'
import HybridSystem from '../components/HybridSystem'
import WhyUpgrade from '../components/WhyUpgrade'
import Pricing from '../components/Pricing'
import Analytics from '../components/Analytics'
import TargetUsers from '../components/TargetUsers'
import Trust from '../components/Trust'
import FinalCTA from '../components/FinalCTA'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const [isEnterprise, setIsEnterprise] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <RoutingModes />
        <HybridSystem isEnterprise={isEnterprise} setIsEnterprise={setIsEnterprise} />
        <WhyUpgrade />
        <Pricing />
        <Analytics />
        <TargetUsers />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}