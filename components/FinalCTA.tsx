'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Zap } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Free. Upgrade When You Need More Power.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using SmartDivert for smarter call routing.
            No credit card required to get started.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: 'white',
                color: '#2563eb',
                fontWeight: '600',
                padding: '16px 32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Phone className="h-5 w-5" />
              <span>Try Smart Routing (Free)</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#8b5cf6',
                color: 'white',
                fontWeight: '600',
                padding: '16px 32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Zap className="h-5 w-5" />
              <span>Upgrade to Enterprise</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
              color: '#dbeafe'
            }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Free forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm">30-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}
          />
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '25%',
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%'
            }}
          />
        </div>
      </div>
    </section>
  )
}