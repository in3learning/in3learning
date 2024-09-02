import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function StemDsa() {
  const dataList = [
    {
      title: 'Certification Course',
      description: 'Join a regular robotics or coding certification programme.',
    },

    {
      title: 'Programming languages',
      description:
        'Learn programming languages such as block-based programming or text-based programming such as Python.',
    },
    {
      title: 'Competitions',
      description:
        'Participate in robotics competitions, such as the FIRST Robotics Competitions, WRO Robotic Competition, or Coding competition to demonstrate your interest and proficiency in the field.',
    },
    {
      title: 'Projects',
      description:
        'Work on projects that involve building and programming robots or create innovative coding programs.',
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
      <div className='w-full mb-14 h-full justify-center items-center flex gap-16 flex-wrap'>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <div>
            <Image
              src={'/critical_thinking.png'}
              alt='img11'
              width={300}
              height={300}
            />
          </div>
          <h1 className='text-5xl font-bold text-myOrange text-center'>
            Certificate
          </h1>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <div>
            <Image
              src={'/critical_thinking.png'}
              alt='img11'
              width={300}
              height={300}
            />
          </div>
          <h1 className='text-5xl font-bold text-myOrange text-center'>
            Competition
          </h1>
        </div>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <div>
            <Image
              src={'/critical_thinking.png'}
              alt='img11'
              width={300}
              height={300}
            />
          </div>
          <h1 className='text-5xl font-bold text-myOrange text-center'>
            Portfolio
          </h1>
        </div>
      </div>
      <Container>
        <div className='w-full h-full mx-auto bg-myPink rounded-3xl p-6'>
          <h1 className='text-xl font-bold text-myOrange mb-2'>Structure: </h1>
          <ol className='list-decimal pl-6'>
            {dataList.map((data, index) => (
              <li key={index} className='last:mb-0 mb-3'>
                <p className='tracking-wide'>
                  <span className='font-bold text-myOrange'>
                    {data.title}:{' '}
                  </span>{' '}
                  {data.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </div>
  )
}
