import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const UserCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: isAdmin,
    update: isAdmin,
    create: isAdmin,
    read: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
