/* eslint-disable @next/next/no-sync-scripts */
import Container from '@/components/layout/container'
import Link from 'next/link'

export default function USAboutUsPage() {
  return (
    <Container className="pt-20">
      <h1>US About Us Page</h1>
      <Link
        target="_blank"
        href="https://app.amilia.com/store/en/in3learning/shop/programs"
      >
        Store Front
      </Link>
    </Container>
  )
}
