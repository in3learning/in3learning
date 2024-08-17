'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { revalidatePath } from 'next/cache'
import { PaginatedDocs } from 'payload'
import { Course } from 'payload-types'
import { cache } from 'react'
import nodemailer from 'nodemailer'

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

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function joinUsFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject,
      html: `
            <h2>Sender Name: ${name}</h2>
            <h2>Sender Email: ${email}</h2>
            <h2>Role: ${role}</h2>
            <p>${message}</p>
        `,
    })

    revalidatePath('/join-us')
  } catch (err) {
    console.log(err)
  }
}
