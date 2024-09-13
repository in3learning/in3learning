import { GlobalCourseCollection } from '@/collections/course'
import { FooterCollection } from '@/collections/footer'
import { HeaderCollection } from '@/collections/header'
import { MediaCollection } from '@/collections/media'
import { SingaporeCourseCollection } from '@/collections/sg/course'
import { EmailCollection } from '@/collections/sg/email'
import { SGFooterCollection } from '@/collections/sg/footer'
import { SGHeaderCollection } from '@/collections/sg/header'
import { USCourseCollection } from '@/collections/us/course'
import { USFooterCollection } from '@/collections/us/footer'
import { USHeaderCollection } from '@/collections/us/header'
import { UserCollection } from '@/collections/user'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

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
  globals: [
    HeaderCollection,
    SGHeaderCollection,
    USHeaderCollection,
    FooterCollection,
    SGFooterCollection,
    USFooterCollection,
  ],
  collections: [
    UserCollection,
    MediaCollection,
    GlobalCourseCollection,
    SingaporeCourseCollection,
    USCourseCollection,
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
