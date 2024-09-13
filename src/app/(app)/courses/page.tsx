import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from 'payload-types'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'
import { Metadata } from 'next'

export const revalidate = 3600

const payload = await getPayloadHMR({ config: configPromise })

const getCourses = cache(async () => {
  const courses = await payload.find({
    collection: 'courses',
    sort: 'createdAt',
  })

  return courses.docs
})

export const metadata: Metadata = {
  title: 'IN3Learning Courses',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

export default async function SGCoursePage() {
  const courses = await getCourses()

  return (
    <div className='bg-myPink pt-24 mb-8'>
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
                {course.Courses && (
                  <ul className='list-disc pl-4 mb-3'>
                    {course.Courses.map((resource, index) => (
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
