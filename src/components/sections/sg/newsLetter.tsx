'use client'

import { createEmail } from '@/app/(app)/sg/actions'
import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { MdMailOutline } from 'react-icons/md'

export default function SGNewsLetter() {
  return (
    <Container className="bg-myPink flex w-full flex-col items-center gap-4 pb-10 pt-5 md:flex-row">
      <div className="flex w-full items-center justify-center gap-4">
        <div>
          <MdMailOutline className="border-myOrange text-myOrange h-16 w-16 rounded-full border-[3px] p-2" />
        </div>
        <div className="w-full">
          <h1 className="text-myOrange text-3xl font-bold uppercase">hello!</h1>
          <p className="text-lg tracking-wider">
            Sign me up for regular updates on upcoming IN3LABS programs,
            courses, news and events.
          </p>
        </div>
      </div>
      <div className="w-full">
        <form
          action={createEmail}
          className="flex items-center justify-center gap-2"
        >
          <Input
            placeholder="Your email"
            name="email"
            id="email"
            className="h-12 text-lg"
          />
          <SubFormSubmitButton />
        </form>
      </div>
    </Container>
  )
}

const SubFormSubmitButton = () => {
  const subStatus = useFormStatus()
  return (
    <>
      {subStatus.pending ? (
        <Button
          disabled
          className="bg-myOrange rounded-full p-6 text-lg font-semibold uppercase text-white hover:bg-orange-600"
        >
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button
          name="subscribe_button"
          className="bg-myOrange rounded-full p-6 text-lg font-semibold uppercase text-white hover:bg-orange-600"
        >
          Subscribe
        </Button>
      )}
    </>
  )
}
