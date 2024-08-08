import { League_Spartan, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})

const leagueSpartan = League_Spartan({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const normalFont: string = poppins.className

export const headerFont: string = leagueSpartan.className
