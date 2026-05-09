'use client'

import { motion } from 'framer-motion'
import { Briefcase, Headphones, Truck, Building } from 'lucide-react'

const audiences = [
  {
    icon: Briefcase,
    title: 'Sales Teams',
    description: 'Never miss a lead with instant call routing to the right sales rep.',
    color: 'blue'
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Route customer calls to available support agents automatically.',
    color: 'green'
  },
  {
    icon: Truck,
    title: 'Logistics Companies',
    description: 'Ensure drivers and dispatchers stay connected during deliveries.',
    color: 'orange'
  },
  {
    icon: Building,
    title: 'Small & Medium Businesses',
    description: 'Professional call handling without expensive phone systems.',
    color: 'purple'
  }
]

export default function TargetUsers() {
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
            Built for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SmartDivert works for any team that needs reliable call routing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s'
              }}
            >
              <div className={`w-12 h-12 bg-${audience.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <audience.icon className={`h-6 w-6 text-${audience.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: '64px',
            background: 'linear-gradient(to right, #eff6ff, #faf5ff)',
            borderRadius: '16px',
            padding: '32px'
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600">Calls Routed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}