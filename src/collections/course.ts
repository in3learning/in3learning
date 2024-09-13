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
  revalidatePath('/')
  revalidatePath('/(app)/courses/[slug]', 'page')
}

export const GlobalCourseCollection: CollectionConfig = {
  slug: 'courses',
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
      name: 'mainImage',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ageGroup',
      label: 'Age Group',
      type: 'text',
      required: true,
    },
    {
      name: 'Courses',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
  hooks: {
    afterOperation: [revalidateAfterOperation],
  },
}
