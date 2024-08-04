import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <Container className="mb-20">
      <section className="flex w-full flex-col items-start gap-6 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <h1
            style={{ wordSpacing: '0.3rem' }}
            className={`font-sfpro text-5xl font-bold md:text-7xl`}
          >
            Become The Best At{' '}
            <span className="text-myOrange">Robotic & Coding.</span>
          </h1>
          <p className="text-2xl leading-10 tracking-wider">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit esse
            nostrum natus ea repudiandae at, optio dolorem adipisci quibusdam
            voluptatem unde, quam id vitae sunt obcaecati consectetur ullam quo
            voluptas!
          </p>
          <div>
            <Button
              size={'lg'}
              className="bg-myOrange p-6 text-lg font-semibold uppercase tracking-wider text-white hover:bg-orange-600"
            >
              get your free trial
            </Button>
          </div>
        </div>
        <div className="relative h-[480px] w-full md:w-1/2">
          <Image
            src={'/kid_with_vr-Photoroom.png'}
            alt="Image"
            className="rounded-md object-cover"
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            blurDataURL="/kid_with_vr-Photoroom.png"
            placeholder="blur"
          />
        </div>
      </section>
    </Container>
  )
}
