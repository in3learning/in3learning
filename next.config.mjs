import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'in3learning.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'in3learning.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
