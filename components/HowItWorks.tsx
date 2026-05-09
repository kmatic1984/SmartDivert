'use client'

import { motion } from 'framer-motion'
import { Phone, Smartphone, Cloud, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
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
            How SmartDivert Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless call routing with our intelligent system
          </p>
        </motion.div>

        <div className="relative">
          {/* Flow Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Incoming Call */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Incoming Call</h3>
              <p className="text-sm text-gray-600 text-center">Call arrives at your number</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                display: 'none'
              }}
            >
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </motion.div>

            {/* Routing Decision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Routing</h3>
              <p className="text-sm text-gray-600 text-center">AI determines best route</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'none'
              }}
            >
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </motion.div>

            {/* Destination */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Device</h3>
              <p className="text-sm text-gray-600 text-center">Call connects instantly</p>
            </motion.div>
          </div>

          {/* Routing Options */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: '64px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Smart Routing (Free)</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Works directly on your phone with manual forwarding and basic analytics.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Manual forwarding via popup</div>
                <div>• Simulated routing</div>
                <div>• Basic analytics</div>
                <div>• Offline capable</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Enterprise Routing ($50/month)</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Cloud-powered routing with true call forwarding and advanced features.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• True call forwarding</div>
                <div>• Real simultaneous ringing</div>
                <div>• Caller ID preserved</div>
                <div>• Advanced analytics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}