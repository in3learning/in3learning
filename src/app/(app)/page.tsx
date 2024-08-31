import AboutUsSection from '@/components/sections/global/aboutUsSection'
import HeroSection from '@/components/sections/global/heroSection'
import LocationSection from '@/components/sections/global/locationsSection'
import OurMission from '@/components/sections/global/ourMission'
import ImportanceOfRobotic from '@/components/sections/global/robotic'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IN3Learning',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

const Page = async () => {
  return (
    <div>
      <HeroSection locationLink='/#locations' />
      <LocationSection />
      <AboutUsSection />
      <OurMission />
      <ImportanceOfRobotic />
    </div>
  )
}

export default Page
