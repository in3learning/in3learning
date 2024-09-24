import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function StemDsa() {
  const dataList = [
    {
      title: 'Certificate',
      description:
        'Certification Course: Join a regular robotics or coding certification programme.',
      imgUrl: '/stem-dsa-1.png',
    },
    {
      title: 'Competition',
      description:
        'Competitions: Participate in robotics competitions, such as the FIRST Robotics Competitions, WRO Robotic Competition, or Coding competition to demonstrate your interest and proficiency in the field.',
      imgUrl: '/stem-dsa-2.png',
    },
    {
      title: 'Portfolio',
      description:
        'Projects: Work on projects that involve building and programming robots or create innovative coding programs.',
      imgUrl: '/stem-dsa-3.png',
    },
  ]
  return (
    <div className='bg-white pt-24 pb-16'>
      <div className='relative mb-14 h-[550px] w-full'>
        <Image
          src={'/stem-dsa-banner.png'}
          alt={'stem-dsa-banner'}
          fill
          sizes='100%'
          className='absolute inset-0 z-0 h-full w-full object-cover'
        />
        <div className='absolute left-0 top-[75%] z-10 px-4 md:px-20'>
          <h1
            className={`${headerFont} text-5xl font-bold text-[#4e374f] md:text-7xl`}
          >
            STEM - DSA Programme
          </h1>
        </div>
      </div>
      <Container>
        {dataList.map((data, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center p-6 md:flex-row'
          >
            <div className='flex w-full justify-center md:w-1/2 md:justify-start'>
              <Image
                src={data.imgUrl}
                alt='Kids learning technology'
                width={500}
                height={400}
                className='z-10 rounded-lg'
              />
            </div>
            <div className='bg-myPink h-[400px] mt-6 w-full flex flex-col justify-center rounded-3xl p-5 md:ml-[-250px] md:mt-0 md:w-[65%] md:pl-[250px]'>
              <h1 className='text-3xl text-myOrange font-bold mb-2'>
                {data.title}
              </h1>

              <p className='mt-4 text-lg text-black'>{data.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}
