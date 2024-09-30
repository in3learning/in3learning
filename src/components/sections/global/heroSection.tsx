import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection({
  contactUsLink,
  locationLink,
  heroImage,
  freeTrailLink,
}: {
  contactUsLink?: string
  locationLink?: string
  freeTrailLink?: string
  heroImage?: string
}) {
  return (
    <div className='flex flex-wrap md:[&_*]:flex-1 relative mt-28 h-[90vh] pb-20 md:h-full w-full items-center justify-center overflow-hidden flex-row'>
      <Container className='z-10 flex md:pl-20 h-full w-full md:w-1/2 flex-col justify-center gap-10 md:gap-16'>
        <div>
          <h1
            className={`${headerFont} text-myGrey mb-2 text-5xl font-bold tracking-wide md:text-7xl lg:text-[82px] md:leading-[4.5rem] lg:leading-[5.5rem]`}
          >
            <span className='text-myOrange'>Empowering</span>
            <br className='hidden md:block' /> Young Minds{' '}
            <br className='hidden md:block' /> to{' '}
            <span className='text-myOrange'>Innovate</span>
            <br className='hidden md:block' /> the Future.
          </h1>
          <p className='text-xl tracking-wide'>
            Prepare your child for the digital future with us.
          </p>
        </div>
        <div>
          {contactUsLink && (
            <Link
              href={contactUsLink}
              className='border-myOrange tracking-wide text-myOrange rounded-full border-[4px] px-8 py-2 text-xl font-bold'
            >
              Contact Us
            </Link>
          )}
          {locationLink && (
            <Link
              href={locationLink}
              className='border-myOrange tracking-wide text-myOrange rounded-full border-[4px] px-8 py-2 text-xl font-bold'
            >
              Locations
            </Link>
          )}
          {freeTrailLink && (
            <Link
              href={freeTrailLink}
              target='_blank'
              className='border-myOrange tracking-wide text-myOrange rounded-full border-[4px] px-8 py-2 text-xl font-bold'
            >
              Free Trail
            </Link>
          )}
        </div>
      </Container>
      <div className='h-full hidden md:block'>
        <Image
          src={heroImage || '/hero-girl.webp'}
          className='ml-auto'
          width={800}
          height={800}
          alt='img1'
          priority={true}
        />
      </div>
    </div>
  )
}
