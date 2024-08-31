import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import { Media, SgCourse } from 'payload-types'

export default function SGFeaturedCourses({
  featuredCourses,
}: {
  featuredCourses: SgCourse[]
}) {
  return (
    <div className='bg-myPink flex min-h-screen flex-col items-center justify-center gap-20 pb-10'>
      <h1
        className={`${headerFont} text-myOrange text-center text-5xl font-bold tracking-wide md:text-8xl`}
      >
        Featured Courses
      </h1>
      <Container className='flex flex-wrap items-center justify-center gap-6'>
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
  )
}
