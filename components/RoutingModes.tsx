'use client'

import { motion } from 'framer-motion'
import { MousePointer, RotateCcw, Zap } from 'lucide-react'

const modes = [
  {
    icon: MousePointer,
    title: 'Manual Routing',
    description: 'Button-based forwarding with user control',
    features: ['Tap to forward', 'User-initiated', 'Full control', 'Simple interface'],
    color: 'blue'
  },
  {
    icon: RotateCcw,
    title: 'Priority Routing',
    description: 'Auto sequential routing to available devices',
    features: ['Sequential dialing', 'Auto-failover', 'Priority order', 'Smart detection'],
    color: 'green'
  },
  {
    icon: Zap,
    title: 'Simultaneous Routing',
    description: 'Auto multi-routing to all devices at once',
    features: ['All devices ring', 'First to answer wins', 'No missed calls', 'Instant connection'],
    color: 'purple'
  }
]

export default function RoutingModes() {
  return (
    <section className="py-16 bg-gray-50">
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
            Routing Modes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how your calls are routed based on your team's needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
              <div className={`w-12 h-12 bg-${mode.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <mode.icon className={`h-6 w-6 text-${mode.color}-600`} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{mode.title}</h3>
              <p className="text-gray-600 mb-4">{mode.description}</p>

              <ul className="space-y-2">
                {mode.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      color: '#6b7280'
                    }}
                  >
                    <div className={`w-1.5 h-1.5 bg-${mode.color}-500 rounded-full`}></div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: '64px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            padding: '32px'
          }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            See Routing in Action
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MousePointer className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Manual</h4>
              <div className="text-sm text-gray-600">Tap button to route</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Priority</h4>
              <div className="text-sm text-gray-600">Auto sequential</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Simultaneous</h4>
              <div className="text-sm text-gray-600">All ring at once</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: '32px',
              textAlign: 'center'
            }}
          >
            <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-full p-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Routing call...</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}