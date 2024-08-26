import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Footer from './footer'

export const revalidate = 3600

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config: configPromise })

  const globalLinks = await payload.findGlobal({
    slug: 'footer',
  })

  const sgLinks = await payload.findGlobal({
    slug: 'SGfooter',
  })

  const usLinks = await payload.findGlobal({
    slug: 'USfooter',
  })

  return (
    <Footer globalLinks={globalLinks} sgLinks={sgLinks} usLinks={usLinks} />
  )
}
