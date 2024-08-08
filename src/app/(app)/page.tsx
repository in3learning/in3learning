import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import HeroSection from '@/components/sections/global/heroSection'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'
import ImportanceOfRobotic from '@/components/sections/global/robotic'

export const metadata: Metadata = {
  title: 'IN3Learning',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

const Page = async () => {
  return (
    <div>
      <HeroSection contactUsLink="/contact-us" />
      <InitiateBanner />
      <AboutSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <ImportanceOfRobotic />
    </div>
  )
}

export default Page
