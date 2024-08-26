import { isAdmin } from '@/access/isAdmin'
import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

const revalidateAfterChange = () => {
  revalidatePath('/us')
}

export const USFooterCollection: GlobalConfig = {
  slug: 'USfooter',
  label: 'US Footer',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'About',
      label: 'About',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Courses',
      label: 'Courses',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateAfterChange],
  },
}
