'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { PaginatedDocs } from 'payload'
import { Course } from 'payload-types'
import { cache } from 'react'

const payload = await getPayloadHMR({ config: configPromise })

export const getFeaturedCourses = cache(async () => {
  const featuredCourses = await payload.find({
    collection: 'courses',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'createdAt',
  })

  return featuredCourses.docs
})

export const getAllCourses = cache(async () => {
  const courses: PaginatedDocs<Course> = await payload.find({
    collection: 'courses',
  })

  return courses.docs
})

export const getCourse = cache(async (slug: string) => {
  const course = await payload.find({
    collection: 'courses',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return course.docs[0]
})
