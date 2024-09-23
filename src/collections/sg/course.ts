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
  revalidatePath('/sg')
  revalidatePath('/(app)/sg/courses/[slug]', 'page')
}

export const SingaporeCourseCollection: CollectionConfig = {
  slug: 'sg-courses',
  labels: {
    singular: 'SG Course',
    plural: 'SG Courses',
  },
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
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
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
          name: 'draft',
          type: 'checkbox',
          defaultValue: false,
        },
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
          name: 'freeTrialLink',
          label: 'Free Trial Link',
          type: 'text',
        },
        {
          name: 'getCourseLink',
          label: 'Get Course Link',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    afterOperation: [revalidateAfterOperation],
  },
}
