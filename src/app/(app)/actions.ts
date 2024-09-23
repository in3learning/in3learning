'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'

const payload = await getPayloadHMR({ config: configPromise })

export const getCourses = cache(async () => {
  const courses = await payload.find({
    collection: 'courses',
    sort: 'createdAt',
  })

  return courses.docs
})
