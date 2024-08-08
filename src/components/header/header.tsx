'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Container from '../layout/container'
import { type Header as HeaderType } from 'payload-types'

export default function Header({
  globalLinks,
  sgLinks,
  usLinks,
}: {
  globalLinks: HeaderType
  sgLinks: HeaderType
  usLinks: HeaderType
}) {
  const pathname = usePathname()
  const [navBar, setNavBar] = useState(false)
  const [links, setLinks] = useState<HeaderType>()

  function changeBackground() {
    if (window.scrollY >= 30) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

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
    <nav
      className={`fixed top-0 z-50 w-full bg-[#fef5ef] py-4 ${
        navBar ? 'shadow-md' : ''
      } transition-all duration-300 ease-in-out`}
    >
      <Container className="flex items-center justify-between text-lg font-semibold tracking-wide">
        <Link href={'/'} className="font-solaris text-myOrange text-4xl">
          IN3
        </Link>
        <ul className="hidden gap-8 md:flex">
          {links?.navLinks &&
            links?.navLinks.map((link, index) => (
              <li
                className={`${
                  pathname === link.url ? 'bg-myOrange text-white' : ''
                } hover:bg-myOrange cursor-pointer rounded px-3 py-1 transition-all duration-150 ease-in-out hover:text-white`}
                key={index}
              >
                {link.subLinks && link.subLinks.length === 0 && (
                  <Link href={link.url}>{link.label}</Link>
                )}
                {link.subLinks && link.subLinks?.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-center gap-2 outline-none">
                      <span>{link.label}</span>
                      <IoMdArrowDropdown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white">
                      {link.subLinks.map((subLink, index) => (
                        <Link key={index} href={subLink.url} className="group">
                          <DropdownMenuItem className="group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white">
                            {subLink.label}
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </li>
            ))}
        </ul>
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiMenuAlt2 className="h-7 w-7 outline-none" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              {links?.navLinks &&
                links?.navLinks.map((link, index) => (
                  <DropdownMenuItem className="text-lg" key={index}>
                    {link.subLinks && link.subLinks?.length < 1 && (
                      <Link href={link.url}>{link.label}</Link>
                    )}
                    {link.subLinks && link.subLinks.length > 0 && (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-center gap-2 outline-none">
                          <span>{link.label}</span>
                          <IoMdArrowDropdown />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white">
                          {link.subLinks.map((subLink, index) => (
                            <Link
                              key={index}
                              href={subLink.url}
                              className="group"
                            >
                              <DropdownMenuItem className="group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white">
                                {subLink.label}
                              </DropdownMenuItem>
                            </Link>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </nav>
  )
}
