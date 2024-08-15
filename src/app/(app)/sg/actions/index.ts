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
    limit: 100,
  })

  return courses.docs
})

export const getCourseBySlug = cache(async (slug: string) => {
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

export const getallSubCourses = cache(async () => {
  const courses = await payload.find({
    collection: 'courses',
    limit: 100,
  })

  const subCourses = courses.docs.map((course) => {
    return course.subCourses
  })

  return subCourses
})

export const createEmail = async (formData: FormData) => {
  const email = formData.get('email') as string

  if (!email) {
    return
  }

  await payload.create({
    collection: 'email',
    data: {
      email,
    },
  })
}
