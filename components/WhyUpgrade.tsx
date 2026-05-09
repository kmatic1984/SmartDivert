'use client'

import { motion } from 'framer-motion'
import { PhoneOff, Zap, Shield, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: PhoneOff,
    title: 'No Missed Calls',
    description: 'True simultaneous ringing ensures calls are never missed, even when you\'re busy.'
  },
  {
    icon: Zap,
    title: 'Instant Routing',
    description: 'Cloud-powered routing connects calls instantly to the right person or device.'
  },
  {
    icon: Shield,
    title: 'Professional Handling',
    description: 'Maintain professional call handling with preserved caller ID and advanced features.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into call patterns, success rates, and team performance.'
  }
]

export default function WhyUpgrade() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
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
            Upgrade to Enterprise for Real Call Control
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference between simulated routing and true cloud-powered call handling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                padding: '24px',
                transition: 'all 0.3s'
              }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '32px'
          }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            See the Difference in Action
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Version */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Smart Routing (Free)</h4>
              <div className="bg-gray-100 rounded-xl p-6 mb-4">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <PhoneOff className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl text-gray-400">→</div>
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-500">Tap</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Manual intervention required</p>
              </div>
            </div>

            {/* Enterprise Version */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Enterprise Routing ($50/month)</h4>
              <div className="bg-purple-50 rounded-xl p-6 mb-4 border-2 border-purple-200">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-2xl text-purple-400">⚡</div>
                  <div className="flex space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#dcfce7',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      📱
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#dbeafe',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      💻
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#fee2e2',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      📞
                    </motion.div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Automatic multi-device ringing</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            style={{
              marginTop: '32px',
              textAlign: 'center'
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-800">Enterprise: 99.9% call connection rate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}