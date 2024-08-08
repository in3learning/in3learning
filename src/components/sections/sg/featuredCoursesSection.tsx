import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import Image from 'next/image'
import { Course, Media } from 'payload-types'

export default function SGFeaturedCourses({
  featuredCourses,
}: {
  featuredCourses: Course[]
}) {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1
          className={`font-sfpro text-myOrange text-center text-5xl font-bold tracking-wide md:text-8xl`}
        >
          Featured Courses
        </h1>
        <div className="relative mt-10 h-full w-full flex-wrap py-6 pt-16">
          <Image
            src={'in3_website_img7.png'}
            className="h-full w-full object-cover"
            alt="img7"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Container className="relative flex flex-wrap items-center justify-center gap-6">
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
          </Container>
        </div>
      </div>
    </div>
  )
}
