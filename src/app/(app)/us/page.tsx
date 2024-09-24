import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import AboutUsSection from '@/components/sections/global/aboutUsSection'
import HeroSection from '@/components/sections/global/heroSection'
import LocationSection from '@/components/sections/global/locationsSection'
import OurMission from '@/components/sections/global/ourMission'
import ImportanceOfRobotic from '@/components/sections/global/robotic'
import { headerFont } from '@/lib/fonts'
import { Metadata } from 'next'
import { Media } from 'payload-types'
import { getUSFeaturedCourses } from './actions'

export const revalidate = 3600

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

export default async function USPage() {
  const featuredCourses = await getUSFeaturedCourses()

  return (
    <>
      <div className='md:pt-20 md:pb-20'>
        <HeroSection heroImage='/us_hero.png' contactUsLink='/us/contact-us' />
      </div>
      <AboutUsSection />
      <OurMission />
      <div className='bg-myPink flex min-h-screen flex-col items-center justify-center gap-20 pb-10'>
        <h1
          className={`${headerFont} text-myOrange text-center text-5xl font-bold tracking-wide md:text-8xl`}
        >
          Featured Courses
        </h1>
        <Container className='flex flex-wrap items-center justify-center gap-14'>
          {featuredCourses &&
            featuredCourses.map((course, index) => (
              <FeaturedCard
                key={index}
                title={course.title}
                imgUrl={(course.mainImage as Media).url ?? ''}
                ageGroup={course.ageGroup}
                slug={`/us/courses/${course.slug}`}
              />
            ))}
        </Container>
      </div>
      <ImportanceOfRobotic />
    </>
  )
}
