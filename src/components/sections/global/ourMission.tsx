import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function OurMission() {
  return (
    <div className="w-ful relative mb-10 flex h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-[#fef5ef] pb-10 md:flex-row md:gap-0">
      <div className="flex w-full flex-col justify-center px-4 md:w-1/2 md:px-6">
        <h1
          className={`${headerFont} text-myOrange mb-4 text-5xl font-bold tracking-wide md:text-7xl`}
        >
          Our Mission
        </h1>
        <p className="text-xl tracking-wide">
          To provide inclusive and accessible opportunities for every child to
          learn and excel in Science, Technology, Engineering, Art, and
          Mathematics (S.T.E.A.M.), equipping them with the skills needed for a
          successful future.
        </p>
        <Image
          src={'/underline.png'}
          alt="underline"
          height={1000}
          width={1000}
        />
      </div>
      <Image src={'/big-lego.png'} alt="big-lego" height={1000} width={1000} />
    </div>
  )
}
