'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '24px'
            }}
          >
            Smart Call Routing for{' '}
            <span className="text-blue-600">Modern Teams</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginBottom: '32px',
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Route calls instantly using your phone or upgrade to cloud-powered routing for full control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '48px'
            }}
          >
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>Get Started (Free)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <span>Upgrade to Enterprise</span>
              <Phone className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Call Routing Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              position: 'relative',
              maxWidth: '28rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: '#f0fdf4',
                    borderRadius: '8px',
                    border: '1px solid #bbf7d0'
                  }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-800">Smart Routing</span>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: '#faf5ff',
                    borderRadius: '8px',
                    border: '1px solid #d8b4fe'
                  }}
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-800">Enterprise Routing</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                style={{
                  marginTop: '24px',
                  textAlign: 'center'
                }}
              >
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Call routing in progress...</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}