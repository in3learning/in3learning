import Container from '@/components/layout/container'
import { headerFont } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function LocationSection() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center">
      <h1
        className={`${headerFont} text-myOrange text-center text-5xl font-bold md:text-8xl`}
      >
        Locations
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="pt-12">
          <Link href="/us">
            <Image src={'/us_map.png'} alt="us_map" width={850} height={850} />
          </Link>
        </div>
        <div>
          <Link href={'/sg'}>
            <Image src={'/sg_map.png'} alt="sg_map" width={800} height={800} />
          </Link>
        </div>
      </div>
    </Container>
  )
}
