'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'
import { PaginatedDocs } from 'payload'
import { SgCourse } from 'payload-types'
import { cache } from 'react'

const payload = await getPayloadHMR({ config: configPromise })

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER_SG,
    pass: process.env.SMTP_PASS_SG,
  },
})

export const getSgFeaturedCourses = cache(async () => {
  const featuredCourses = await payload.find({
    collection: 'sg-courses',
    where: {
      featured: {
        equals: true,
      },
    },
    sort: 'createdAt',
  })

  return featuredCourses.docs
})

export const getAllSgCourses = cache(async () => {
  const courses: PaginatedDocs<SgCourse> = await payload.find({
    collection: 'sg-courses',
    limit: 100,
  })

  return courses.docs
})

export const getSgCourseBySlug = cache(async (slug: string) => {
  const course = await payload.find({
    collection: 'sg-courses',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return course.docs[0]
})

export const getAllSgSubCourses = cache(async () => {
  const courses = await getAllSgCourses()

  const subCourses = courses.map((course) => {
    return course.subCourses
  })

  return subCourses
})

export const createEmail = async (formData: FormData) => {
  const email = formData.get('email') as string

  if (!email) {
    return
  }

  // check if email already exists
  const existingEmail = await payload.find({
    collection: 'email',
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (existingEmail.docs.length) {
    return
  }

  await payload.create({
    collection: 'email',
    data: {
      email,
    },
  })
}

export async function sgJoinUsFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER_SG,
      to: process.env.SMTP_USER_SG,
      subject: subject,
      html: `
            <h2>Sender Name: ${name}</h2>
            <h2>Sender Email: ${email}</h2>
            <h2>Role: ${role}</h2>
            <h2>Message: ${message}</p>
        `,
    })

    revalidatePath('/sg/join-us')
  } catch (err) {
    console.log(err)
  }
}
