import AboutUsSection from '@/components/sections/global/aboutUsSection'
import HeroSection from '@/components/sections/global/heroSection'
import LocationSection from '@/components/sections/global/locationsSection'
import OurMission from '@/components/sections/global/ourMission'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import ImportanceOfRobotic from '@/components/sections/global/robotic'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IN3Learning',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

const Page = async () => {
  return (
    <div>
      <HeroSection contactUsLink="/us/contact-us" />
      <LocationSection />
      <AboutUsSection />
      <OurMission />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <ImportanceOfRobotic />
    </div>
  )
}

export default Page
