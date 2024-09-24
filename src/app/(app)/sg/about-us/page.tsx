import Image from 'next/image'
import { headerFont } from '@/lib/fonts'
import Container from '@/components/layout/container'

export default function SGAboutUsPage() {
  return (
    <div className='bg-white pb-16'>
      <div className='pt-24'>
        <div className='relative mb-14 h-[550px] w-full'>
          <Image
            src={'/about-us-banner.png'}
            alt='about-us-banner'
            fill
            sizes='100%'
            className='absolute inset-0 z-0 h-full w-full object-cover'
          />
          <h1
            className={`absolute ${headerFont} left-0 top-[75%] z-10 flex items-center justify-center px-4 text-5xl font-bold text-[#4e374f] md:top-[75%] md:px-20 md:text-7xl`}
          >
            About Us
          </h1>
        </div>
        <Container>
          <div className='flex flex-col items-center justify-center p-6 md:flex-row'>
            <div className='flex w-full justify-center md:w-1/2 md:justify-start'>
              <Image
                src={'/img3.png'} // Use the path where your image is stored
                alt='Kids learning technology'
                width={500}
                height={400}
                className='z-10 rounded-lg'
              />
            </div>
            <div className='bg-myPink mt-6 w-full rounded-3xl p-5 md:ml-[-250px] md:mt-0 md:w-[65%] md:pl-[250px]'>
              <h1 className='text-3xl text-myOrange font-bold mb-4'>
                Who are we?
              </h1>
              <p className='mt-4 text-lg text-black'>
                We are the leading provider of technology education,
                specializing in robotics and coding within a comprehensive STEAM
                (Science, Technology, Engineering, Art, and Mathematics)
                framework. Our powerful and proven technology-enhanced
                curriculums revolutionize the way our students learn and think
                in the 21st century. We integrate essential 21st-century skills
                into our training models, innovate our methods to foster
                creativity, and inspire children to become successful future
                inventors and innovators who will lead our nation.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center p-6 md:flex-row'>
            <div className='relative flex w-full justify-center md:left-[120px] md:w-1/2 md:justify-start'>
              <Image
                src={'/partner-logos/bronze.png'}
                alt='bronze'
                width={250}
                height={250}
                className='z-10 rounded-lg'
              />
            </div>
            <div className='bg-myPink mt-6 w-full rounded-3xl p-5 md:ml-[-250px] md:mt-0 md:w-[65%] md:pl-[250px]'>
              <h1 className='text-3xl text-myOrange font-bold mb-4'>
                Our Achievements
              </h1>

              <p className='mt-4 text-lg text-black'>
                We are a partner of IMDA&apos;s Playmaker and won the Bronze
                award in the IMS Global&apos;s annual Learning Impact Awards. It
                is an annual competition running in its 11th year, conducted on
                a global scale to recognize the most outstanding and influential
                uses of technology worldwide to address the most significant
                challenges facing education. Won in the “Digital Resource,
                e-Text and Learning App Innovation Project Category” with the
                use of tech toys in the early childhood sector to create
                positive learning impact outcomes. The winning was also
                mentioned by Minister Yaacob Ibrahim at the opening ceremony of
                the annual Infocomm Media Business eXchange (imbX) on 23 May
                2017.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center p-6 md:flex-row'>
            <div className='relative flex w-full justify-center md:left-[120px] md:w-1/2 md:justify-start'>
              <Image
                src={'/sg_about_circle.png'}
                alt='bronze'
                width={350}
                height={350}
                className='z-10 rounded-lg'
              />
            </div>
            <div className='bg-myPink mt-6 w-full rounded-3xl p-5 md:ml-[-250px] md:mt-0 md:w-[65%] md:pl-[250px]'>
              <h1 className='text-3xl text-myOrange font-bold mb-4'>
                Personalised Learning
              </h1>
              <p className='mt-4 text-lg text-black'>
                Personalized learning tailors instruction to each student's
                unique strengths, skills, and interests. By creating an
                individualized learning plan, trainers can adapt the curriculum
                based on the student's progress, motivations, and goals. This
                model empowers students to think critically, advocate for
                themselves, and take charge of their own learning, resulting in
                more competent and confident learners.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
