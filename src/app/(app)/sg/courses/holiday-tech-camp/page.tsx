import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'

export default function HolidayTechCamp() {
  const dataList = [
    {
      title: 'Explorer Tech Camp',
      age: 'Age 5+',
      description:
        'Join our exciting Explorer Tech Camp, where young minds explore the world of technology through fun, hands-on activities! From building robots to learning coding basics, campers will engage in interactive projects that spark creativity and problem-solving skills. Led by experienced instructors, this camp offers a supportive environment for kids to develop essential STEM knowledge. Perfect for budding tech enthusiasts, our camp inspires a love for innovation and teamwork. Get ready for a week of discovery, learning, and fun!',
      imgUrl: '/explorer-tech-camp.png',
    },
    {
      title: 'Creator Tech Camp',
      age: 'Age 8+',
      description:
        'The Creator Tech Camp offers a fun and interactive introduction to the world of technology for young learners. Through hands- on projects in robotics and basic coding, kids will develop problem-solving skills in a friendly and supportive setting. Guided by skilled instructors, the camp fosters creativity, teamwork, and a love for STEM. It’s an ideal opportunity for curious minds to start their tech journey. Join us for an exciting week of learning and discovery!',
      imgUrl: '/creator-tech-camp.png',
    },
    {
      title: 'Founder Tech Camp',
      age: 'Age 12+',
      description:
        'The Founder Tech Camp offers a great opportunity for older kids to expand their tech expertise. Through advanced coding, robotics, and hands-on problem-solving, participants will enhance their STEM skills in a fun, engaging environment. With guidance from experienced instructors, the camp fosters creativity, critical thinking, and collaboration. It’s the ideal experience for tech-savvy kids ready to take their abilities to the next level. Join us for an exciting week of learning and innovation!',
      imgUrl: '/founder-tech-camp.png',
    },
  ]
  return (
    <div className='bg-white pt-24 pb-16'>
      <div className='relative mb-14 h-[550px] w-full'>
        <Image
          src={'/holiday-banner.png'}
          alt={'holiday-banner'}
          fill
          sizes='100%'
          className='absolute inset-0 z-0 h-full w-full object-cover'
        />
        <div className='absolute left-0 top-[75%] z-10 px-4 md:px-20'>
          <h1
            className={`${headerFont} text-5xl font-bold text-[#4e374f] md:text-7xl`}
          >
            Holiday Tech Camp
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
                width={400}
                height={300}
                className='z-10 rounded-lg'
              />
            </div>
            <div className='bg-myPink mt-6 w-full rounded-3xl p-5 md:ml-[-300px] md:mt-0 md:w-[65%] md:pl-[250px]'>
              <h1 className='text-3xl text-myOrange font-bold mb-1'>
                {data.title}
              </h1>
              <p className='mb-3 text-2xl'>{data.age}</p>

              <p className='mt-4 text-lg text-black'>{data.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}
