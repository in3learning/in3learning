import SGJoinUsForm from '@/components/forms/sgJoinUsForm'
import Container from '@/components/layout/container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Us Singapore',
  description: 'Join our team and inspire future generations.',
  keywords: ['join us', 'team', 'education', 'inspire'],
}

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-6 bg-[#4e374f] p-10">
        <div>
          <h1 className="text-center text-4xl font-bold text-white md:text-8xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-center text-lg tracking-wide text-white md:text-2xl">
            Inspire Future Generations
          </p>
        </div>
      </div>
      <Container className="mt-10">
        <div className="flex flex-col gap-6 md:flex-row md:gap-16">
          <div className="w-full">
            <h1 className="mb-2 text-4xl font-semibold leading-[3rem] tracking-wide">
              Become a part of our team and inspire future generations to learn
              and grow with IN3.
            </h1>
            <p className="text-xl tracking-wide">
              We are always looking for passionate individuals who are dedicated
              to making a difference in the lives of children. If you are
              interested in joining our team, please fill out the form below and
              we will get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full">
            <SGJoinUsForm />
          </div>
        </div>
      </Container>
    </>
  )
}
