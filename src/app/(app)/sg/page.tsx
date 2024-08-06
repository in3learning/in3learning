import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import SGFeaturedCourses from '@/components/sections/sg/featuredCoursesSection'
import SGHeroSection from '@/components/sections/sg/heroSection'
import SGNewsLetter from '@/components/sections/sg/newsLetter'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'
import { getFeaturedCourses } from './actions'

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
  const featuredCourses = await getFeaturedCourses()

  return (
    <>
      <SGHeroSection />
      <SGNewsLetter />
      <SGFeaturedCourses featuredCourses={featuredCourses} />
      <InitiateBanner />
      <AboutSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <PotentialSection />
    </>
  )
}
