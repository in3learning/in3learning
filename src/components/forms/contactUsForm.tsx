'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type Props = {
  submitAction: (formData: FormData) => Promise<void>
}

export default function ContactUsForm({ submitAction }: Props) {
  return (
    <form action={submitAction} className='flex flex-col gap-4'>
      <section className='flex flex-col gap-2'>
        <Label htmlFor='name' className='text-lg'>
          Name<span className='text-myOrange'>*</span>
        </Label>
        <Input
          placeholder='Your Name'
          required
          name='name'
          className='h-12 text-lg'
        />
      </section>
      <section className='flex flex-col gap-2'>
        <Label htmlFor='email' className='text-lg'>
          Email<span className='text-myOrange'>*</span>
        </Label>
        <Input placeholder='Your Email' name='email' className='h-12 text-lg' />
      </section>
      <section className='flex flex-col gap-2'>
        <Label htmlFor='phone' className='text-lg'>
          Phone Number<span className='text-myOrange'>*</span>
        </Label>
        <Input
          placeholder='Your Phone Number'
          name='phone'
          className='h-12 text-lg'
        />
      </section>
      <section className='flex flex-col gap-2'>
        <Label htmlFor='message' className='text-lg'>
          Message<span className='text-myOrange'>*</span>
        </Label>
        <Textarea
          className='text-lg'
          placeholder='Your Message'
          name='message'
        />
      </section>
      <JoinUsFormbutton />
    </form>
  )
}

const JoinUsFormbutton = () => {
  const status = useFormStatus()

  return (
    <>
      {status.pending ? (
        <Button
          disabled
          className='bg-myOrange rounded-full p-6 text-lg font-semibold text-white hover:bg-orange-600'
        >
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        </Button>
      ) : (
        <Button
          name='subscribe_button'
          className='bg-myOrange rounded-full p-6 text-lg font-semibold text-white hover:bg-orange-600'
        >
          Submit
        </Button>
      )}
    </>
  )
}
