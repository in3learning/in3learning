import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import SGHeroSection from '@/components/sections/sg/heroSection'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IN3Learning United States',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: [
    'robotics',
    'coding',
    'education',
    'kids',
    'united states learning center',
  ],
}

export default function USPage() {
  return (
    <>
      <SGHeroSection />
      <InitiateBanner />
      <AboutSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <PotentialSection />
    </>
  )
}
