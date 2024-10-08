import { isAdmin } from '@/access/isAdmin'
import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

const revalidateAfterChange = () => {
  revalidatePath('/sg')
}

export const SGHeaderCollection: GlobalConfig = {
  slug: 'SGheader',
  label: 'SG Header',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'navLinks',
      label: 'Navigation',
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
        {
          name: 'subLinks',
          label: 'Sub Navigation',
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
    },
  ],
  hooks: {
    afterChange: [revalidateAfterChange],
  },
}
