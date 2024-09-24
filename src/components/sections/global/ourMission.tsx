import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function OurMission() {
  return (
    <div
      id='our-mission'
      className='w-ful relative flex flex-wrap h-screen md:h-full flex-col items-center justify-center overflow-hidden bg-[#fef5ef] md:flex-row'
    >
      <Container className='z-10 flex h-full w-full md:w-1/2 flex-col justify-center gap-10 md:gap-24'>
        <div className='flex w-full flex-col justify-center px-4 md:px-6'>
          <h1
            className={`${headerFont} text-myOrange mb-4 text-5xl font-bold tracking-wide md:text-7xl`}
          >
            Our Mission
          </h1>
          <p className='text-xl tracking-wide'>
            To provide inclusive and accessible opportunities for every child to
            learn and excel in Science, Technology, Engineering, Art, and
            Mathematics (S.T.E.A.M.), equipping them with the skills needed for
            a successful future.
          </p>
          <Image
            src={'/underline.png'}
            alt='underline'
            height={1000}
            width={1000}
          />
        </div>
      </Container>
      <div className='h-full hidden md:block'>
        <Image
          src={'/sg_mission.png'}
          className='ml-auto'
          width={600}
          height={600}
          alt='our-mission-img'
          priority={true}
        />
      </div>
    </div>
  )
}
