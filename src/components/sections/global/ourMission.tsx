import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function OurMission() {
  return (
    <div
      id="our-mission"
      className="w-ful relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#fef5ef] md:flex-row"
    >
      <Container className="z-10 flex h-full w-full flex-col justify-center gap-10 md:gap-24">
        <div className="flex w-full flex-col justify-center px-4 md:w-1/2 md:px-6">
          <h1
            className={`${headerFont} text-myOrange mb-4 text-5xl font-bold tracking-wide md:text-7xl`}
          >
            Our Mission
          </h1>
          <p className="text-xl tracking-wide">
            To provide inclusive and accessible opportunities for every child to
            learn and excel in Science, Technology, Engineering, Art, and
            Mathematics (S.T.E.A.M.), equipping them with the skills needed for
            a successful future.
          </p>
          <Image
            src={'/underline.png'}
            alt="underline"
            height={1000}
            width={1000}
          />
        </div>
      </Container>
      <div className="absolute bottom-0 left-[30%] right-0 top-0 hidden sm:block">
        <div className="relative min-h-screen">
          <Image
            src={'/our_mission.png'}
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
