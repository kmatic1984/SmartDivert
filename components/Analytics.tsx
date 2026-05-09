'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Phone } from 'lucide-react'

const metrics = [
  { label: 'Total Calls', value: '2,847', change: '+12%', icon: Phone, color: 'blue' },
  { label: 'Success Rate', value: '98.5%', change: '+2.1%', icon: TrendingUp, color: 'green' },
  { label: 'Most Used', value: 'Priority', change: 'Sequential', icon: BarChart3, color: 'purple' },
  { label: 'Team Members', value: '24', change: 'Active', icon: Users, color: 'orange' }
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Analytics Dashboard
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get detailed insights into your call routing performance and team efficiency
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Call Analytics Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live Data</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className={`h-5 w-5 text-${metric.color}-600`} />
                      <span className={`text-xs font-medium text-${metric.color}-600`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Call Routing Performance</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Manual Routing</span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      style={{ height: '12px', backgroundColor: '#3b82f6', borderRadius: '6px' }}
                    />
                    <span className="text-sm font-medium text-gray-900">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Priority Routing</span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      style={{ height: '12px', backgroundColor: '#10b981', borderRadius: '6px' }}
                    />
                    <span className="text-sm font-medium text-gray-900">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Simultaneous Routing</span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      viewport={{ once: true }}
                      style={{ height: '12px', backgroundColor: '#8b5cf6', borderRadius: '6px' }}
                    />
                    <span className="text-sm font-medium text-gray-900">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time Metrics</h4>
              <p className="text-gray-600">Monitor call performance as it happens</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Insights</h4>
              <p className="text-gray-600">Identify bottlenecks and optimize routing</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Analytics</h4>
              <p className="text-gray-600">Track individual and team performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}