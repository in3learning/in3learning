import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const EmailCollection: CollectionConfig = {
  slug: 'email',
  admin: {
    group: 'SG',
  },
  access: {
    delete: isAdmin,
    update: isAdmin,
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
  ],
}
