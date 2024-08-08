import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Header from './header'

export const revalidate = 3600

export default async function HeaderServer() {
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
    <Header globalLinks={globalLinks} sgLinks={sgLinks} usLinks={usLinks} />
  )
}
