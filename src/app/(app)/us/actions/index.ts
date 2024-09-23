'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { revalidatePath } from 'next/cache'
import { PaginatedDocs } from 'payload'
import { SgCourse } from 'payload-types'
import { cache } from 'react'
import nodemailer from 'nodemailer'

const payload = await getPayloadHMR({ config: configPromise })

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER_US,
    pass: process.env.SMTP_PASS_US,
  },
})

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
    where: {
      draft: {
        equals: false,
      },
    },
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
  const courses = await getAllUSCourses()

  const subCourses = courses.map((course) => {
    return course.subCourses
  })

  return subCourses
})

export async function usJoinUsFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER_US,
      to: process.env.SMTP_USER_US,
      subject: subject,
      html: `
            <h2>Sender Name: ${name}</h2>
            <h2>Sender Email: ${email}</h2>
            <h2>Role: ${role}</h2>
            <h2>Message: ${message}</p>
        `,
    })

    revalidatePath('/us/join-us')
  } catch (err) {
    console.log(err)
  }
}

export async function usContactFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phoneNumber = formData.get('phone') as string
  const message = formData.get('message') as string

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER_US,
      to: process.env.SMTP_USER_US,
      subject: `Contact Form Submission from ${name}`,
      html: `
            <h2>Sender Name: ${name}</h2>
            <h2>Sender Email: ${email}</h2>
            <h2>Phone: ${phoneNumber}</h2>
            <h2>Message: ${message}</p>
        `,
    })

    revalidatePath('/us/contact-us')
  } catch (err) {
    console.log(err)
  }
}
