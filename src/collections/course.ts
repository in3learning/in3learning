import { isAdmin } from '@/access/isAdmin'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

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
      name: 'Sub Courses',
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
