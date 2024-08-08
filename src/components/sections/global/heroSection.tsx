import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection({
  contactUsLink,
}: {
  contactUsLink: string
}) {
  return (
    <div className="mb-10 h-screen overflow-hidden bg-[#fef5ef] pt-20">
      <div className="w-ful flex h-full flex-col md:flex-row">
        <Container className="flex h-full w-full flex-col justify-center gap-10 md:w-1/2 md:gap-24">
          <div>
            <h1
              className={`${headerFont} text-myGrey mb-2 text-5xl font-bold tracking-wide md:text-[5.5rem] md:leading-[5rem]`}
            >
              Elevate your child&apos;s{' '}
              <span className="text-myOrange">intellect</span>, learn to{' '}
              <span className="text-myOrange">code</span>.
            </h1>
            <p className="text-lg tracking-wide">
              Prepare your child for the digital future with us.
            </p>
          </div>
          <div>
            <Link
              href={contactUsLink}
              className="border-myOrange text-myOrange rounded-full border-[4px] px-8 py-2 text-lg font-bold"
            >
              Contact Us
            </Link>
          </div>
        </Container>
        <div className="relative hidden min-h-screen w-full sm:block md:w-1/2">
          <Image
            src={'in3_website_img1.png'}
            className="h-full w-full object-cover"
            alt="img1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}
