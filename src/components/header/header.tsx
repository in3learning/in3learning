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

  function changeBackground() {
    if (window.scrollY >= 30) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-neutral-200 py-4 ${
        navBar ? 'shadow-md' : ''
      } transition-all duration-300 ease-in-out`}
    >
      <Container className="flex items-center justify-between text-lg font-semibold tracking-wide">
        <Link href={'/'} className="font-solaris text-4xl text-myOrange">
          IN3
        </Link>
        <ul className="hidden gap-8 md:flex">
          {globalLinks.map((link, index) => (
            <li
              className={`${
                pathname === link.href ? 'bg-myOrange text-white' : ''
              } cursor-pointer rounded px-3 py-1 transition-all duration-150 ease-in-out hover:bg-myOrange hover:text-white`}
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
                  <DropdownMenuContent>
                    {link.subLinks.map((subLink, index) => (
                      <Link key={index} href={subLink.href} className="group">
                        <DropdownMenuItem className="cursor-pointer text-lg font-semibold group-hover:bg-myOrange group-hover:text-white">
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
              {globalLinks.map((link, index) => (
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
                            <DropdownMenuItem className="cursor-pointer text-lg font-semibold group-hover:bg-myOrange group-hover:text-white">
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
