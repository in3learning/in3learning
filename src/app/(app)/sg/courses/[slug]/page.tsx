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
    description: data.description,
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
    <div className="pt-20">
      <div className="flex h-full w-full flex-col items-center gap-6 bg-[#4e374f] p-10">
        <div>
          <h1
            className={`${headerFont} text-center text-4xl font-bold text-white md:text-8xl`}
          >
            {data.title}
          </h1>
          <p className="mt-4 text-center text-lg tracking-wide text-white md:text-2xl">
            {data.description}
          </p>
        </div>
      </div>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {subCourses &&
            subCourses.map((subCourse, i) => (
              <div
                key={i}
                className="flex w-full flex-col gap-16 rounded-xl border border-l-[8px] bg-white p-5 md:flex-row"
                style={{ borderLeftColor: subCourse.bannerColor }}
              >
                <div className="flex w-full flex-col gap-4">
                  <h1 className={`${headerFont} text-3xl font-bold`}>
                    {subCourse.title}
                  </h1>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-black">
                    <Image
                      className="h-full w-full object-cover"
                      src={(subCourse.mainImage as Media)?.url ?? ''}
                      alt="1"
                      fill
                      sizes="(min-width: 640px) 640px, 100vw"
                      priority
                    />
                  </div>
                  <p className="mt-auto text-xl font-bold tracking-wide">
                    Age:{' '}
                    <span className="text-myOrange">{subCourse.ageGroup}</span>
                  </p>
                  <div className="flex gap-4">
                    <Link href={subCourse.freeTrialLink ?? '#'}>
                      <Button
                        variant={'primary'}
                        className="rounded-full !py-3 px-6 text-lg font-bold"
                        size={'lg'}
                      >
                        Book a Trial
                      </Button>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant={'secondary'}
                          className="rounded-full !py-3 px-6 text-lg font-bold"
                          size={'lg'}
                        >
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent
                        style={{
                          scrollbarWidth: 'none',
                          msOverflowStyle: 'none',
                        }}
                        className="max-h-screen w-full overflow-y-scroll rounded-lg bg-white p-2 sm:h-fit sm:max-w-4xl"
                      >
                        <DialogHeader>
                          <DialogTitle className={`${headerFont} text-3xl`}>
                            {subCourse.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg">
                            Kids with age {subCourse.ageGroup} can attend this
                            course.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col">
                          {subCourse.carouselImages &&
                            subCourse.carouselImages.length > 0 && (
                              <div>
                                <EmblaCarousel
                                  slides={subCourse.carouselImages}
                                  options={OPTIONS}
                                  isDotButtons={true}
                                />
                              </div>
                            )}
                          <div className="flex h-full flex-col justify-between gap-10">
                            <p className="text-lg">
                              {subCourse.description ||
                                'No description provided for this course'}
                            </p>
                            <Table>
                              <TableCaption>
                                A list of Modules for this course and their
                                sessions.
                              </TableCaption>
                              <TableHeader>
                                <TableRow className="bg-neutral-200">
                                  <TableHead className="text-2xl font-semibold text-black">
                                    Modules
                                  </TableHead>
                                  <TableHead className="text-2xl font-semibold text-black">
                                    Est. no. sessions
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {subCourse.modules &&
                                  subCourse.modules.map((module, i) => (
                                    <TableRow
                                      key={i}
                                      className="bg-neutral-100"
                                    >
                                      <TableCell className="text-xl">
                                        {module.title}
                                      </TableCell>
                                      <TableCell className="text-xl">
                                        {module.sessions}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                              </TableBody>
                            </Table>
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
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
