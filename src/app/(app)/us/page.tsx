import AboutUsSection from '@/components/sections/global/aboutUsSection'
import HeroSection from '@/components/sections/global/heroSection'
import LocationSection from '@/components/sections/global/locationsSection'
import OurMission from '@/components/sections/global/ourMission'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import ImportanceOfRobotic from '@/components/sections/global/robotic'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'

const revalidate = 3600

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
      <HeroSection contactUsLink="/us/contact-us" />
      <AboutUsSection />
      <OurMission />
      <LocationSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <ImportanceOfRobotic />
    </>
  )
}
