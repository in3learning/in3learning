import { isAdmin } from '@/access/isAdmin'
import { revalidatePath } from 'next/cache'
import { CollectionConfig, FieldHook } from 'payload'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value)
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData)
    }

    return value
  }

const revalidateAfterOperation = () => {
  revalidatePath('/us')
  revalidatePath('/(app)/us/courses/[slug]', 'page')
}

export const USCourseCollection: CollectionConfig = {
  slug: 'us-courses',
  labels: {
    singular: 'US Course',
    plural: 'US Courses',
  },

  admin: {
    group: 'US',
  },
  access: {
    delete: isAdmin,
    update: isAdmin,
    create: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'mainImage',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'bannerImage',
      label: 'Banner Image',
      relationTo: 'media',
      type: 'upload',
      required: true,
    },
    {
      name: 'ageGroup',
      label: 'Age Group',
      type: 'text',
      required: true,
    },
    {
      name: 'subCourses',
      label: 'Sub Courses',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'mainImage',
          label: 'Main Image',
          relationTo: 'media',
          type: 'upload',
          required: true,
        },
        {
          name: 'ageGroup',
          label: 'Age Group',
          type: 'text',
          required: true,
        },
        {
          name: 'Grouping',
          label: 'Grouping',
          type: 'text',
          required: true,
        },
        {
          name: 'totalLessons',
          label: 'Total Lessons',
          type: 'text',
          required: true,
        },
        {
          name: 'duration',
          label: 'Duration',
          type: 'text',
          required: true,
        },
        {
          name: 'teachingResources',
          label: 'Teaching Resources',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [{ name: 'name', type: 'text', required: true }],
        },
        {
          name: 'software',
          label: 'Software',
          type: 'text',
        },
        {
          name: 'registerLink',
          label: 'register Link',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    afterOperation: [revalidateAfterOperation],
  },
}
