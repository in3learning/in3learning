import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import './style.css'

export default function ImportanceOfRobotic() {
  return (
    <div
      id="importance-of-robotic"
      className="bg-myPink relative overflow-hidden"
    >
      <div className="robo-cover bg-myOrange relative z-0 flex h-[400px] w-full items-center justify-center">
        <Container className={`${headerFont} z-10 w-full`}>
          <h1
            className={`${headerFont} text-5xl font-bold text-white md:text-6xl`}
          >
            The Importance of Robotics and Coding Education in the 21st Century
          </h1>
        </Container>
      </div>
      <Container className="mt-10">
        <section className="flex w-full flex-col justify-start gap-4 md:flex-row md:items-center md:justify-center">
          <div>
            <Image
              src={'/critical_thinking.png'}
              alt="img11"
              width={300}
              height={300}
            />
          </div>
          <div className="flex h-full w-full flex-col justify-center gap-2">
            <h1 className={`${headerFont} text-myOrange text-4xl font-bold`}>
              Critical Thinking & <br /> Problem-Solving Skills
            </h1>
            <p className="tracking-wide">
              Robotics and coding teaches kids to think logically{' '}
              <br className="hidden md:block" /> and solve problems, enchancing
              their critical thinking <br className="hidden md:block" /> and
              analytical skills for school and everyday life.
            </p>
          </div>
        </section>
        <section className="mt-6 flex w-full md:justify-end">
          <div className="ml-auto flex flex-col justify-center gap-4 md:flex-row">
            <div>
              <Image
                src={'/preparing.png'}
                alt="img12"
                width={300}
                height={300}
              />
            </div>
            <div className="flex h-full w-full flex-col justify-center gap-2">
              <h1 className={`${headerFont} text-myOrange text-4xl font-bold`}>
                Preparing for the Future
              </h1>
              <p className="tracking-wide">
                Engaging with robotics and coding from a young age{' '}
                <br className="hidden md:block" /> empowers children to express
                creativity and explore <br className="hidden md:block" /> ideas.
                This hands-on process fosters innovation,{' '}
                <br className="hidden md:block" />
                technology understanding, and problem-solving skills.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <section className="mt-6 flex w-full flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col justify-center gap-4 pl-4 md:flex-row md:items-center md:pl-2">
          <div>
            <Image
              src={'/innovation.png'}
              alt="img13"
              width={300}
              height={300}
            />
          </div>
          <div className="flex h-full w-full flex-col justify-center gap-2">
            <h1 className={`${headerFont} text-myOrange text-4xl font-bold`}>
              Creavity & Innovation
            </h1>
            <p className="tracking-wide">
              Learning robotics and coding early equips children with{' '}
              <br className="hidden md:block" /> valuable skills for future STEM
              careers, igniting their passion for
              <br className="hidden md:block" />
              innovation and preparing them for the evolving job market.
            </p>
          </div>
        </div>
        <div className="relative hidden h-[250px] w-[250px] md:block">
          <Image
            src={'/corner_bubble.png'}
            alt="corner bubble"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full"
          />
        </div>
      </section>
    </div>
  )
}
