import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section
      id='about-us'
      className='bg-myPink flex flex-col items-center justify-center gap-6 py-10'
    >
      <h1
        className={`${headerFont} text-myGrey text-5xl font-bold leading-[2.8rem] tracking-wide md:text-7xl md:leading-[3rem]`}
      >
        About Us
      </h1>
      <div className='w-full pt-10'>
        <Container className='flex flex-col gap-10 md:flex-row'>
          <div>
            <Image
              src={'/about-us.png'}
              alt='about-us'
              width={600}
              height={600}
            />
          </div>
          <div className='pb-10 text-lg tracking-wide md:w-1/2'>
            We are the leading provider of technology education, specializing in
            robotics and coding within a comprehensive STEAM (Science,
            Technology, Engineering, Art, and Mathematics) framework. Our
            powerful and proven technology-enhanced curriculums revolutionize
            the way our students learn and think in the 21st century. We
            integrate essential 21st-century skills into our training models,
            innovate our methods to foster creativity, and inspire children to
            become successful future inventors and innovators who will lead our
            nation.
          </div>
        </Container>
      </div>
    </section>
  )
}
