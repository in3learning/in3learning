import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import { Metadata } from 'next'
import Image from 'next/image'
import { Media } from 'payload-types'
import { getCourses } from '../actions'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'IN3Learning Courses',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

export default async function SGCoursePage() {
  const courses = await getCourses()

  return (
    <div className='bg-myPink pt-24 mb-8'>
      <div className='relative mb-14 h-[550px] w-full'>
        <Image
          src={'/global_courses.png'}
          alt='global-courses-banner'
          fill
          sizes='100%'
          className='absolute inset-0 z-0 h-full w-full object-cover'
        />
        <h1
          className={`absolute ${headerFont} left-0 top-[75%] z-10 flex items-center justify-center px-4 text-5xl font-bold text-[#4e374f] md:top-[75%] md:px-20 md:text-7xl`}
        >
          Courses
        </h1>
      </div>
      {courses && (
        <Container className='flex flex-col gap-14'>
          {courses.map((course, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center p-6 md:flex-row'
            >
              <div className='flex w-full justify-center md:w-1/2 md:justify-start'>
                <Image
                  src={(course.mainImage as Media)?.url ?? ''}
                  alt='Kids learning technology'
                  width={350}
                  height={50}
                  className='z-10 rounded-lg'
                />
              </div>
              <div className='bg-white mt-6 w-full rounded-3xl pb-2 pl-5 pr-5 pt-5 md:ml-[-350px] md:mt-0 md:w-[75%] md:pl-[250px]'>
                <h1
                  className={`${headerFont} text-myOrange mb-2 text-4xl font-bold`}
                >
                  {course.title}
                </h1>
                <p className='text-2xl mb-5 tracking-wide'>
                  Age {course.ageGroup}
                </p>
                <div>
                  <h1 className='text-myOrange mb-1 text-2xl font-bold'>
                    Courses
                  </h1>
                </div>
                {course['Sub Courses'] && (
                  <ul className='list-disc pl-4 mb-3'>
                    {course['Sub Courses'].map((resource, index) => (
                      <li key={index}>{resource.title}</li>
                    ))}
                  </ul>
                )}
                <p className='pb-2 tracking-wide'>{course.description}</p>
              </div>
            </div>
          ))}
        </Container>
      )}
    </div>
  )
}
