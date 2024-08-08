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

const revalidateAfterCreate = () => {
  revalidatePath('/sg')
}

export const SingaporeCourseCollection: CollectionConfig = {
  slug: 'courses',
  admin: {
    group: 'SG',
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
      name: 'description',
      type: 'textarea',
      required: true,
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
      name: 'categories',
      type: 'array',
      required: true,
      fields: [{ name: 'category', type: 'text', required: true }],
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
          name: 'bannerColor',
          type: 'select',
          required: true,
          options: [
            { label: 'Orange', value: '#f54704' },
            { label: 'Blue', value: '#016fb9' },
            { label: 'Purple', value: '#4f374f' },
            { label: 'Black', value: '#000000' },
          ],
        },
        {
          name: 'mainImage',
          label: 'Main Image',
          relationTo: 'media',
          type: 'upload',
          required: true,
        },
        {
          name: 'carouselImages',
          label: 'Carousel Images',
          type: 'array',
          required: true,
          minRows: 2,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          name: 'ageGroup',
          label: 'Age Group',
          type: 'text',
          required: true,
        },
        {
          name: 'freeTrialLink',
          label: 'Free Trial Link',
          type: 'text',
        },
        {
          name: 'getCourseLink',
          label: 'Get Course Link',
          type: 'text',
        },
        {
          name: 'modules',
          type: 'array',
          required: true,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'sessions', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterOperation: [revalidateAfterCreate],
  },
}
