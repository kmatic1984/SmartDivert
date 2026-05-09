'use client'

import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 50
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SmartDivert</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#analytics" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: '16px',
              borderTop: '1px solid #e5e7eb'
            }}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#analytics" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">Sign In</button>
                <button className="btn-primary">Get Started</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}