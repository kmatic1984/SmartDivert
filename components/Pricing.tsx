'use client'

import { motion } from 'framer-motion'
import { Check, Smartphone, Cloud } from 'lucide-react'

const plans = [
  {
    name: 'Smart Routing',
    price: 'Free',
    icon: Smartphone,
    color: 'blue',
    features: [
      'Manual forwarding via popup',
      'Simulated routing',
      'Basic analytics',
      'Offline capable',
      'Single device support'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Enterprise Routing',
    price: '$50/month',
    icon: Cloud,
    color: 'purple',
    features: [
      'True call forwarding',
      'Real simultaneous ringing',
      'Priority routing',
      'Caller ID preserved',
      'Advanced analytics',
      'Multi-device support',
      'Team management',
      'Priority support'
    ],
    cta: 'Upgrade Now',
    popular: true
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade when you need enterprise-grade call routing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '32px',
                backgroundColor: plan.popular ? '#faf5ff' : '#f9fafb',
                border: plan.popular ? '2px solid #c4b5fd' : '1px solid #e5e7eb',
                boxShadow: plan.popular ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-${plan.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className={`h-8 w-8 text-${plan.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <Check className={`h-5 w-5 text-${plan.color}-500 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  backgroundColor: plan.popular ? '#7c3aed' : '#111827',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '48px'
          }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3">
            <Check className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">
              30-day money-back guarantee on Enterprise plan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}