import Container from '@/components/layout/container'
import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import HeroSection from '@/components/sections/sg/heroSection'
import YoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Link from 'next/link'

const payload = await getPayloadHMR({ config: configPromise })

const Page = async () => {
  return (
    <div>
      <HeroSection />
      <InitiateBanner />
      <AboutSection />
      <YoutubeVideoSection />
      <PartnershipSection />
      <PotentialSection />
    </div>
  )
}

export default Page
