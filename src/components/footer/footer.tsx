'use client'

import { year } from '@/lib/utils'
import Container from '../layout/container'
import Image from 'next/image'
import { type Footer } from 'payload-types'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer({
  globalLinks,
  sgLinks,
  usLinks,
}: {
  globalLinks: Footer
  sgLinks: Footer
  usLinks: Footer
}) {
  const pathname = usePathname()
  const [links, setLinks] = useState<Footer | null>(null)

  useEffect(() => {
    if (pathname.startsWith('/sg')) {
      setLinks(sgLinks)
      return
    }

    if (pathname.startsWith('/us')) {
      setLinks(usLinks)
      return
    }

    setLinks(globalLinks)
  }, [globalLinks, pathname, sgLinks, usLinks])

  return (
    <footer className='bg-myPink overflow-hidden'>
      <div className='bg-myPink relative overflow-hidden text-black'>
        <Container>
          <div className='mx-auto w-full max-w-screen-xl'>
            <div className='grid grid-cols-2 gap-8 px-6 py-6 md:grid-cols-4 lg:py-8'>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={'/full_logo.webp'}
                  alt='full logo'
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h2 className='text-myOrange mb-6 font-semibold uppercase tracking-wide'>
                  About
                </h2>
                <ul className='font-light text-black'>
                  {links &&
                    links?.About?.map((link, index) => (
                      <li key={index} className='mb-4'>
                        <Link href={link.url} className='hover:text-myOrange'>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className='text-myOrange mb-6 font-semibold uppercase tracking-wide'>
                  Courses
                </h2>
                <ul className='font-light text-black'>
                  {links &&
                    links?.Courses?.map((link, index) => (
                      <li key={index} className='mb-4'>
                        <Link href={link.url} className='hover:text-myOrange'>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className='text-myOrange mb-6 font-semibold uppercase tracking-wide'>
                  Locations
                </h2>
                <ul className='font-light text-black'>
                  <li className='mb-4'>
                    <Link href={'/sg'} className='hover:text-myOrange'>
                      Singapore
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href={'/us'} className='hover:text-myOrange'>
                      U.S.
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link href={'/'} className='hover:text-myOrange'>
                      Global
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center px-6 py-6 md:flex-row md:justify-between'>
              <span className='text-sm text-black sm:text-center'>
                ¬© {year} <a href='https://flowbite.com/'>IN3</a>. All Rights
                Reserved.
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
