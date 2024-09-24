import ContactUsForm from '@/components/forms/contactUsForm'
import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { usContactFormAction } from '../actions'

export default function USContactPage() {
  return (
    <Container className='pt-36'>
      <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16'>
        <div className='w-full'>
          <ContactUsForm submitAction={usContactFormAction} />
        </div>
        <div className='w-full'>
          <h1
            className={`${headerFont} text-myOrange mb-2 text-5xl font-semibold leading-[3rem] tracking-wide md:text-7xl`}
          >
            Contact Us
          </h1>
          <p className='text-xl tracking-wide'>
            Contact us for questions on our courses or collaboration
            opportunities via the contact information provided.
          </p>
          <div className='mt-10'>
            <div className='mb-6 flex items-center gap-6'>
              <MdOutlineEmail className='bg-myOrange h-10 w-10 rounded-full p-2 text-white' />
              <p className='text-xl'>in3learning@in3learning.com</p>
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
