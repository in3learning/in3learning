'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { PaginatedDocs } from 'payload'
import { SgCourse } from 'payload-types'
import { cache } from 'react'

const payload = await getPayloadHMR({ config: configPromise })

export const getUSFeaturedCourses = cache(async () => {
  const featuredCourses = await payload.find({
    collection: 'us-courses',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'createdAt',
  })

  return featuredCourses.docs
})

export const getAllUSCourses = cache(async () => {
  const courses: PaginatedDocs<SgCourse> = await payload.find({
    collection: 'us-courses',
    limit: 100,
  })

  return courses.docs
})

export const getUSCourseBySlug = cache(async (slug: string) => {
  const course = await payload.find({
    collection: 'us-courses',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return course.docs[0]
})

export const getAllUSSubCourses = cache(async () => {
  const courses = await payload.find({
    collection: 'us-courses',
    limit: 100,
  })

  const subCourses = courses.docs.map((course) => {
    return course.subCourses
  })

  return subCourses
})
