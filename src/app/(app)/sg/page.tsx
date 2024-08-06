import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import SGHeroSection from '@/components/sections/sg/heroSection'
import SGNewsLetter from '@/components/sections/sg/newsLetter'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import { Metadata } from 'next'
import { Media } from 'payload-types'
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
      <Container className="mb-10 md:mb-36">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`font-sfpro text-center text-5xl font-bold tracking-wide md:text-8xl`}
          >
            <span className="text-myOrange">Featured</span> Courses
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {featuredCourses &&
              featuredCourses.map((course, index) => (
                <FeaturedCard
                  key={index}
                  title={course.title}
                  imgUrl={(course.mainImage as Media).url ?? ''}
                  ageGroup={course.ageGroup}
                  slug={`/sg/courses/${course.slug}`}
                />
              ))}
          </div>
        </div>
      </Container>
      <InitiateBanner />
      <AboutSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <PotentialSection />
    </>
  )
}
