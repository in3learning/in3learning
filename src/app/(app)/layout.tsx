import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { normalFont } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.scss'
import HeaderServer from '@/components/header/headerServer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <html className={inter.className}>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-white text-black`}>
        <HeaderServer />
        <main className="pt-10 md:bottom-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
