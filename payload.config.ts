import { HeaderCollection } from '@/collections/header'
import { MediaCollection } from '@/collections/media'
import { SingaporeCourseCollection } from '@/collections/sg/course'
import { EmailCollection } from '@/collections/sg/email'
import { SGHeaderCollection } from '@/collections/sg/header'
import { USHeaderCollection } from '@/collections/us/header'
import { UserCollection } from '@/collections/user'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import nodemailer from 'nodemailer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

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
  email: nodemailerAdapter({
    defaultFromAddress: 'info@in3learning.com',
    defaultFromName: 'IN3',
    transport: transporter,
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
