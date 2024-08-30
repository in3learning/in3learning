import AboutUsSection from '@/components/sections/global/aboutUsSection'
import HeroSection from '@/components/sections/global/heroSection'
import LocationSection from '@/components/sections/global/locationsSection'
import OurMission from '@/components/sections/global/ourMission'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import ImportanceOfRobotic from '@/components/sections/global/robotic'
import SGFeaturedCourses from '@/components/sections/sg/featuredCoursesSection'
import SGNewsLetter from '@/components/sections/sg/newsLetter'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'
import { getSgFeaturedCourses } from './actions'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'IN3Learning Singapore',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: [
    'robotics',
    'coding',
    'education',
    'kids',
    'singapore learning center',
  ],
}

export default async function SGPage() {
  const featuredCourses = await getSgFeaturedCourses()

  return (
    <>
      <HeroSection contactUsLink='/us/contact-us' />
      <AboutUsSection />
      <SGNewsLetter />
      <OurMission />
      <LocationSection />
      <SGFeaturedCourses featuredCourses={featuredCourses} />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <ImportanceOfRobotic />
    </>
  )
}
