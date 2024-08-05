import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import SGHeroSection from '@/components/sections/sg/heroSection'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Media } from 'payload-types'

export default async function SGPage() {
  const payload = await getPayloadHMR({ config: configPromise })

  const featuredCourses = await payload.find({
    collection: 'courses',
    where: {
      featured: {
        equals: true,
      },
    },
  })

  return (
    <>
      <SGHeroSection />
      <Container className="mb-10 md:mb-36">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`font-sfpro text-center text-5xl font-bold tracking-wide md:text-8xl`}
          >
            <span className="text-myOrange">Featured</span> Courses
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {featuredCourses.docs.map((course, index) => (
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
