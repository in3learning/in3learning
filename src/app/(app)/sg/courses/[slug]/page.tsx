import '@/components/carousels/embla.css'
import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image'
import EmblaCarousel from '@/components/carousels/emblaCarousel'
import { getAllCourses, getCourseBySlug } from '../../actions'
import { Media } from 'payload-types'
import Link from 'next/link'
import { headerFont } from '@/lib/fonts'

export const revalidate = 3600

export async function generateStaticParams() {
  const courses = await getAllCourses()

  return courses
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getCourseBySlug(params.slug)

  return {
    title: data.title,
    authors: {
      name: 'Oddinary',
    },
    openGraph: {
      title: data.title,
      url: `${process.env.PROD_URL}/sg/courses` + params.slug,
      siteName: 'IN3',
      type: 'website',
    },
    keywords: ['robotic', 'coding', 'education', 'kids'],
  }
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getCourseBySlug(params.slug)
  const subCourses = data.subCourses || null

  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    loop: true,
    align: 'start',
  }

  return (
    <div className="bg-white pt-24">
      <div className="relative mb-14 h-[450px] w-full">
        <Image
          src={(data.bannerImage as Media)?.url ?? ''}
          alt={(data.bannerImage as Media)?.text ?? ''}
          fill
          sizes="100%"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-[70%] z-10 px-4 md:px-10">
          <h1
            className={`${headerFont} text-5xl font-bold text-[#4e374f] md:text-7xl`}
          >
            {data.title}
          </h1>
          <p className="mt-2 text-xl font-semibold text-[#4e374f]">
            {data.ageGroup}
          </p>
        </div>
      </div>
      {subCourses && (
        <Container className="flex flex-col gap-14">
          {subCourses.map((subCourse, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 md:flex-row"
            >
              <div className="flex w-full justify-center md:w-1/2 md:justify-start">
                <Image
                  src={(subCourse.mainImage as Media)?.url ?? ''} // Use the path where your image is stored
                  alt="Kids learning technology"
                  width={350}
                  height={50}
                  className="z-10 rounded-lg"
                />
              </div>
              <div className="bg-myPink mt-6 w-full rounded-3xl pb-5 pl-5 pr-5 pt-5 md:ml-[-350px] md:mt-0 md:w-[75%] md:pl-[250px]">
                <h1
                  className={`${headerFont} text-myOrange mb-2 text-4xl font-bold`}
                >
                  {subCourse.title}
                </h1>
                <p className="border-myOrange border-b-[4px] pb-2 tracking-wide">
                  {subCourse.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-6">
                  <div>
                    <h1 className="text-myOrange mb-1 text-xl font-bold">
                      Age Group
                    </h1>
                    <p>{subCourse.ageGroup}</p>
                  </div>
                  <div>
                    <h1 className="text-myOrange mb-1 text-xl font-bold">
                      Grouping
                    </h1>
                    <p>{subCourse.Grouping}</p>
                  </div>
                  <div>
                    <h1 className="text-myOrange mb-1 text-xl font-bold">
                      Teaching Resources
                    </h1>
                    <ul className="list-disc pl-4">
                      {subCourse.teachingResources.map((resource, index) => (
                        <li key={index}>{resource.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-6">
                  <div>
                    <h1 className="text-myOrange mb-1 text-xl font-bold">
                      Total Lessons
                    </h1>
                    <p>{subCourse.totalLessons}</p>
                  </div>
                  <div>
                    <h1 className="text-myOrange mb-1 text-xl font-bold">
                      Duration
                    </h1>
                    <p>{subCourse.duration}</p>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  {subCourse.software && (
                    <div>
                      <h1 className="text-myOrange text-xl font-bold">
                        Software
                      </h1>
                      <p>{subCourse.software}</p>
                    </div>
                  )}
                  <div className="flex gap-6">
                    <Link href={subCourse.freeTrialLink ?? '#'}>
                      <Button
                        type="button"
                        variant={'primary'}
                        className="rounded-full !py-3 px-6 text-lg font-bold"
                        size={'lg'}
                      >
                        Book a Trial
                      </Button>
                    </Link>
                    <Link href={subCourse.getCourseLink ?? '#'}>
                      <Button
                        className="rounded-full !py-3 px-6 text-lg font-bold"
                        type="button"
                        variant={'secondary'}
                        size={'lg'}
                      >
                        Get the Course
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      )}
    </div>
  )
}
