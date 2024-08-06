import { isAdmin } from '@/access/isAdmin'
import { GlobalConfig } from 'payload'

export const HeaderCollection: GlobalConfig = {
  slug: 'header',
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
}
