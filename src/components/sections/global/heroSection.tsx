import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection({
  contactUsLink,
}: {
  contactUsLink: string
}) {
  return (
    <div className="w-ful flex h-screen flex-col items-center justify-center overflow-hidden bg-[#fef5ef] md:flex-row">
      <Container className="z-10 flex h-full w-full flex-col justify-center gap-10 md:gap-24">
        <div>
          <h1
            className={`${headerFont} text-myGrey mb-2 text-5xl font-bold tracking-wide md:text-8xl md:leading-[6rem]`}
          >
            <span className="text-myOrange">Empowering</span>
            <br className="hidden md:block" /> Young Minds{' '}
            <br className="hidden md:block" /> to{' '}
            <span className="text-myOrange">Innovate</span>
            <br className="hidden md:block" /> the Future.
          </h1>
          <p className="text-lg tracking-wide">
            Prepare your child for the digital future with us.
          </p>
        </div>
        <div>
          <Link
            href={contactUsLink}
            className="border-myOrange text-myOrange rounded-full border-[4px] px-8 py-2 text-xl font-bold"
          >
            Contact Us
          </Link>
        </div>
      </Container>
      <div className="absolute bottom-0 left-1/2 right-0 top-0 hidden sm:block">
        <div className="relative min-h-screen">
          <Image
            src={'/in3_website_img1.png'}
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
