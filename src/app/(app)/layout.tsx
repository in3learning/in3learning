import Header from '@/components/header/header'
import { normalFont } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.scss'
import Footer from '@/components/footer/footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={inter.className}>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-neutral-200 text-black`}>
        <Header />
        <main className="pt-10 md:bottom-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
