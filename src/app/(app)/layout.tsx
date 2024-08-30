import React from 'react'
import HeaderServer from '@/components/header/headerServer'
import { normalFont } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FooterServer from '@/components/footer/footerServer'
import LenisWrapper from '@/components/smoothScroll/lenis'
import './globals.scss'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-myPink text-black`}>
        <HeaderServer />
        <LenisWrapper>
          <main>{children}</main>
        </LenisWrapper>
        <FooterServer />
      </body>
    </html>
  )
}

export default Layout
