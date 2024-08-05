'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoMdArrowDropdown } from 'react-icons/io'
import Container from '../layout/container'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

type NavLink = {
  name: string
  href: string
  subLinks: {
    name: string
    href: string
  }[]
}

const globalLinks: NavLink[] = [
  { name: 'Home', href: '/', subLinks: [] },
  { name: 'About Us', href: '/about-us', subLinks: [] },
  {
    name: 'Locations',
    href: '/locations',
    subLinks: [
      { name: 'SG', href: '/sg' },
      { name: 'US', href: '/us' },
    ],
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    subLinks: [],
  },
]

const sgLinks: NavLink[] = [
  { name: 'Home', href: '/sg', subLinks: [] },
  { name: 'About Us', href: '/sg/about-us', subLinks: [] },
  { name: 'Join Us', href: '/sg/join-us', subLinks: [] },
  { name: 'Contact Us', href: '/sg/contact-us', subLinks: [] },
]

const usLinks: NavLink[] = [
  { name: 'Home', href: '/us', subLinks: [] },
  { name: 'About Us', href: '/us/about-us', subLinks: [] },
  { name: 'Contact Us', href: '/us/contact-us', subLinks: [] },
]

export default function Header() {
  const pathname = usePathname()
  const [navBar, setNavBar] = useState(false)
  const [links, setLinks] = useState<NavLink[]>([])

  function changeBackground() {
    if (window.scrollY >= 30) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

    if (pathname.includes('sg')) {
      setLinks(sgLinks)
      return
    }

    if (pathname.includes('us')) {
      setLinks(usLinks)
      return
    }

    setLinks(globalLinks)
  }, [pathname])

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white py-4 ${
        navBar ? 'shadow-md' : ''
      } transition-all duration-300 ease-in-out`}
    >
      <Container className="flex items-center justify-between text-lg font-semibold tracking-wide">
        <Link href={'/'} className="font-solaris text-myOrange text-4xl">
          IN3
        </Link>
        <ul className="hidden gap-8 md:flex">
          {links.map((link, index) => (
            <li
              className={`${
                pathname === link.href ? 'bg-myOrange text-white' : ''
              } hover:bg-myOrange cursor-pointer rounded px-3 py-1 transition-all duration-150 ease-in-out hover:text-white`}
              key={index}
            >
              {link.subLinks.length === 0 && (
                <Link href={link.href}>{link.name}</Link>
              )}
              {link.subLinks.length > 0 && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-center gap-2 outline-none">
                    <span>{link.name}</span>
                    <IoMdArrowDropdown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    {link.subLinks.map((subLink, index) => (
                      <Link key={index} href={subLink.href} className="group">
                        <DropdownMenuItem className="group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white">
                          {subLink.name}
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
            <DropdownMenuContent>
              {links.map((link, index) => (
                <DropdownMenuItem className="text-lg" key={index}>
                  {link.subLinks.length === 0 && (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                  {link.subLinks.length > 0 && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-center gap-2 outline-none">
                        <span>{link.name}</span>
                        <IoMdArrowDropdown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {link.subLinks.map((subLink, index) => (
                          <Link
                            key={index}
                            href={subLink.href}
                            className="group"
                          >
                            <DropdownMenuItem className="group-hover:bg-myOrange cursor-pointer text-lg font-semibold group-hover:text-white">
                              {subLink.name}
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
