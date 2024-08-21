'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useFormStatus } from 'react-dom'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Textarea } from '../ui/textarea'
import { joinUsFormAction } from '@/app/(app)/sg/actions'

export default function SGJoinUsForm() {
  return (
    <form action={joinUsFormAction} className="flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-lg">
          Name<span className="text-myOrange">*</span>
        </Label>
        <Input
          placeholder="Your Name"
          required
          name="name"
          className="h-12 text-lg"
        />
      </section>
      <section className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-lg">
          Email<span className="text-myOrange">*</span>
        </Label>
        <Input placeholder="Your Email" name="email" className="h-12 text-lg" />
      </section>
      <section className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-lg">
          Role<span className="text-myOrange">*</span>
        </Label>
        <Select name="role">
          <SelectTrigger
            aria-label="role selector"
            className="h-12 w-full text-lg"
          >
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem
                className="cursor-pointer text-lg hover:bg-neutral-100"
                value="Internship"
              >
                Internship
              </SelectItem>
              <SelectItem
                className="cursor-pointer text-lg hover:bg-neutral-100"
                value="Trainer"
              >
                Trainer
              </SelectItem>
              <SelectItem
                className="cursor-pointer text-lg hover:bg-neutral-100"
                value="Volunteer"
              >
                Volunteer
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <section className="flex flex-col gap-2">
        <Label htmlFor="subject" className="text-lg">
          Subject<span className="text-myOrange">*</span>
        </Label>
        <Input
          placeholder="Interested to join the team"
          name="subject"
          className="h-12 text-lg"
        />
      </section>
      <section className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-lg">
          Message<span className="text-myOrange">*</span>
        </Label>
        <Textarea
          className="text-lg"
          placeholder="Your Message"
          name="message"
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
          className="bg-myOrange rounded-full p-6 text-lg font-semibold text-white hover:bg-orange-600"
        >
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button
          name="subscribe_button"
          className="bg-myOrange rounded-full p-6 text-lg font-semibold text-white hover:bg-orange-600"
        >
          Submit
        </Button>
      )}
    </>
  )
}
