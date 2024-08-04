import Container from '@/components/layout/container'
import Link from 'next/link'

export default function InitiateBanner() {
  return (
    <div className="mb-12 bg-white">
      <Container className="flex h-full w-full flex-col gap-10 py-10 md:flex-row">
        <div className="border-myBlack flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
          <div className="mb-6 md:mb-0">
            <h1
              className={`pb-10 text-5xl font-bold leading-[3rem] tracking-wider md:text-5xl md:leading-[3.5rem]`}
            >
              Initiate your learning <br />
              with
              <span className="text-myOrange"> coding & robotic.</span>
            </h1>
            <Link
              href={'#featured-courses'}
              className="hover:text-primary text-myOrange hover:bg-myOrange px-2 py-3 text-xl underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:text-white hover:no-underline"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2">
          <p className="mb-6 text-lg tracking-wider">
            We are the leading provider of technology education in Singapore
            that specialize in robotics and coding for students. We offer
            powerful and proven effective technology enhanced education
            curriculums that can change the way our students learn and think in
            the 21st Century.
          </p>
        </div>
      </Container>
    </div>
  )
}
