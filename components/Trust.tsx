'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Cloud, Lock } from 'lucide-react'

const trustPoints = [
  {
    icon: Smartphone,
    title: 'No Hardware Required',
    description: 'Works on any smartphone without additional equipment or installations.'
  },
  {
    icon: Cloud,
    title: 'Secure Cloud Infrastructure',
    description: 'Enterprise-grade security with encrypted data transmission and storage.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your call data stays private with end-to-end encryption and GDPR compliance.'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Military-grade encryption protects all your communication and data.'
  }
]

export default function Trust() {
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
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security and reliability you can count on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                padding: '24px',
                transition: 'all 0.3s'
              }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Security badges */}
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
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
            <p className="text-gray-600">Your data is protected by industry-leading security standards</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '9999px',
                padding: '8px 16px'
              }}
            >
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-900">SOC 2 Compliant</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '9999px',
                padding: '8px 16px'
              }}
            >
              <Lock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">GDPR Ready</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '9999px',
                padding: '8px 16px'
              }}
            >
              <Cloud className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-900">ISO 27001</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '9999px',
                padding: '8px 16px'
              }}
            >
              <Shield className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-900">HIPAA Compliant</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}