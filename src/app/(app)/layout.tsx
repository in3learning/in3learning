import Footer from '@/components/footer/footer'
import HeaderServer from '@/components/header/headerServer'
import { normalFont } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'
import './globals.scss'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <html>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-white text-black`}>
        <HeaderServer />
        <main className="md:bottom-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
