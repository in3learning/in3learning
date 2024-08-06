import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { normalFont } from '@/lib/fonts'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.scss'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const revalidate = 3600

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const globalLinks = await payload.findGlobal({
    slug: 'header',
  })

  const sgLinks = await payload.findGlobal({
    slug: 'SGheader',
  })

  const usLinks = await payload.findGlobal({
    slug: 'USheader',
  })

  return (
    <html className={inter.className}>
      <Analytics />
      <SpeedInsights />
      <body className={`${normalFont} bg-white text-black`}>
        <Header globalLinks={globalLinks} sgLinks={sgLinks} usLinks={usLinks} />
        <main className="pt-10 md:bottom-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
