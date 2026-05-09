'use client'

import { motion } from 'framer-motion'
import { Smartphone, Cloud, ToggleLeft, ToggleRight, Phone, Zap, ArrowRight } from 'lucide-react'

interface HybridSystemProps {
  isEnterprise: boolean
  setIsEnterprise: (value: boolean) => void
}

export default function HybridSystem({ isEnterprise, setIsEnterprise }: HybridSystemProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Routing Power
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free with Smart Routing or upgrade to Enterprise for professional call handling
          </p>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#f3f4f6',
              borderRadius: '9999px',
              padding: '4px',
              marginBottom: '32px'
            }}
          >
            <button
              onClick={() => setIsEnterprise(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isEnterprise
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Smart Mode (Free)
            </button>
            <button
              onClick={() => setIsEnterprise(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isEnterprise
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Enterprise ($50/month)
            </button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Smart Routing (Free) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              borderRadius: '16px',
              padding: '32px',
              border: `2px solid ${!isEnterprise ? '#93c5fd' : '#e5e7eb'}`,
              backgroundColor: !isEnterprise ? '#eff6ff' : '#f9fafb',
              boxShadow: !isEnterprise ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
              transition: 'all 0.5s'
            }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Smartphone className={`h-8 w-8 ${!isEnterprise ? 'text-blue-600' : 'text-gray-600'}`} />
              <h3 className="text-2xl font-bold text-gray-900">Smart Routing (Free)</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Works directly on your smartphone with manual forwarding and basic analytics.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Manual forwarding via popup</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Simulated routing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Basic analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Offline capable</span>
              </div>
            </div>

            {/* Animation */}
            <motion.div
              animate={!isEnterprise ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 2, repeat: !isEnterprise ? Infinity : 0 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex items-center justify-center space-x-4">
                <Phone className="h-8 w-8 text-blue-600" />
                <motion.div
                  animate={!isEnterprise ? { x: [0, 20, 0] } : { x: 0 }}
                  transition={{ duration: 1.5, repeat: !isEnterprise ? Infinity : 0 }}
                >
                  <ArrowRight className="h-6 w-6 text-blue-400" />
                </motion.div>
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                {!isEnterprise ? 'Tap to redirect call' : 'Manual routing'}
              </p>
            </motion.div>
          </motion.div>

          {/* Enterprise Routing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              borderRadius: '16px',
              padding: '32px',
              border: `2px solid ${isEnterprise ? '#c4b5fd' : '#e5e7eb'}`,
              backgroundColor: isEnterprise ? '#faf5ff' : '#f9fafb',
              boxShadow: isEnterprise ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
              transition: 'all 0.5s'
            }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Cloud className={`h-8 w-8 ${isEnterprise ? 'text-purple-600' : 'text-gray-600'}`} />
              <h3 className="text-2xl font-bold text-gray-900">Enterprise Routing ($50/month)</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Cloud-powered routing with true call forwarding and advanced analytics.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">True call forwarding</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Real simultaneous ringing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Caller ID preserved</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Advanced analytics</span>
              </div>
            </div>

            {/* Animation */}
            <motion.div
              animate={isEnterprise ? { scale: [1, 1.05, 1] } : { scale: 1 }}
              transition={{ duration: 2, repeat: isEnterprise ? Infinity : 0 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="flex items-center justify-center space-x-4">
                <Phone className="h-8 w-8 text-purple-600" />
                <motion.div
                  animate={isEnterprise ? { rotate: [0, 360] } : { rotate: 0 }}
                  transition={{ duration: 2, repeat: isEnterprise ? Infinity : 0 }}
                  style={{
                    position: 'relative'
                  }}
                >
                  <Cloud className="h-8 w-8 text-purple-400" />
                  <motion.div
                    animate={isEnterprise ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 1, repeat: isEnterprise ? Infinity : 0 }}
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px'
                    }}
                  >
                    <Zap className="h-4 w-4 text-yellow-500" />
                  </motion.div>
                </motion.div>
                <div className="flex space-x-2">
                  <Smartphone className="h-6 w-6 text-green-600" />
                  <Smartphone className="h-6 w-6 text-blue-600" />
                  <Smartphone className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                {isEnterprise ? 'Cloud routing to multiple devices' : 'Enterprise routing'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}