import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartDivert - Smart Call Routing for Modern Teams',
  description: 'Route calls instantly using your phone or upgrade to cloud-powered routing for full control.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}