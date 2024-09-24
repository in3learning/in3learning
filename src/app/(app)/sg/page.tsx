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
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Container from '@/components/layout/container'

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
      <div className='md:pt-20 md:pb-20'>
        <HeroSection freeTrailLink='/sg' heroImage='/sg_hero.png' />
      </div>
      <AboutUsSection />
      <SGNewsLetter />
      <OurMission />
      <Container className='mt-20 flex flex-col justify-center mb-10 items-center'>
        <h1
          className={`${headerFont} text-myOrange text-center text-5xl mb-10 font-bold tracking-wide md:text-8xl`}
        >
          What Makes Us Unique?
        </h1>
        <Image src={'img35.png'} alt='unique' width={1200} height={1200} />
      </Container>
      <SGFeaturedCourses featuredCourses={featuredCourses} />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <ImportanceOfRobotic />
    </>
  )
}
