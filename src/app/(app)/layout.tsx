import Footer from '@/components/footer/footer'
import HeaderServer from '@/components/header/headerServer'
import { normalFont } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'
import './globals.scss'
import FooterServer from '@/components/footer/footerServer'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <html>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-myPink text-black`}>
        <HeaderServer />
        <main>{children}</main>
        <FooterServer />
      </body>
    </html>
  )
}

export default Layout
