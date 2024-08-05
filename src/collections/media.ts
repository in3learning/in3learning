import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: () => true,
    create: isAdmin,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}
