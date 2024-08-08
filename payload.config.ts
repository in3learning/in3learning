import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from 'payload/i18n/en'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { MediaCollection } from '@/collections/media'
import { UserCollection } from '@/collections/user'
import { SingaporeCourseCollection } from '@/collections/sg/course'
import { HeaderCollection } from '@/collections/header'
import { SGHeaderCollection } from '@/collections/sg/header'
import { USHeaderCollection } from '@/collections/us/header'
import { EmailCollection } from '@/collections/sg/email'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  globals: [HeaderCollection, SGHeaderCollection, USHeaderCollection],
  collections: [
    UserCollection,
    MediaCollection,
    SingaporeCourseCollection,
    EmailCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          collections: {
            [MediaCollection.slug]: true,
          },
          token: process.env.BLOB_READ_WRITE_TOKEN || '',
        }),
      ]
    : [],

  i18n: {
    supportedLanguages: { en },
  },

  sharp,
})
