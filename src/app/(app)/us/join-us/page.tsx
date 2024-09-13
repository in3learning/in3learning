import JoinUsForm from '@/components/forms/joinUsForm'
import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import { Metadata } from 'next'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Join Us United States',
  description: 'Join our team and inspire future generations.',
  keywords: ['join us', 'team', 'education', 'inspire'],
}

export default function Page() {
  return (
    <Container className='pt-36'>
      <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16'>
        <div className='w-full'>
          <JoinUsForm />
        </div>
        <div className='w-full'>
          <h1
            className={`${headerFont} text-myOrange mb-2 text-5xl font-semibold leading-[3rem] tracking-wide md:text-7xl`}
          >
            Join Our Team
          </h1>
          <p className='text-xl tracking-wide'>
            Be a part of our team to learn and help drive our educational
            mission forward.
          </p>
          <div className='mt-10'>
            <div className='mb-6 flex items-center gap-6'>
              <MdOutlineEmail className='bg-myOrange h-10 w-10 rounded-full p-2 text-white' />
              <p className='text-xl'>hello@in3learning.com</p>
            </div>
            <div className='flex items-center gap-6'>
              <FaLocationDot className='bg-myOrange h-10 w-10 rounded-full p-[10px] text-white' />

              <p className='text-xl'>
                14503 Crim Station Road, <br />
                Centreville, VA 20121
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
