import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import { Course, Media } from 'payload-types'

export default function SGFeaturedCourses({
  featuredCourses,
}: {
  featuredCourses: Course[]
}) {
  return (
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
  )
}
