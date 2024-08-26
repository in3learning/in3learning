import Image from 'next/image'
import './style.css'
import Link from 'next/link'
import { Button } from '../ui/button'

type FeaturedCardProps = {
  title: string
  imgUrl: string
  ageGroup: string
  slug: string
}

export default function FeaturedCard({
  title,
  imgUrl,
  ageGroup,
  slug,
}: FeaturedCardProps) {
  return (
    <Link href={slug}>
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative h-[350px] w-[350px]">
          <Image
            src={imgUrl}
            alt={title}
            className="h-full w-full object-cover object-center"
            fill
            sizes="100%"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 pt-14">
          <h1 className="text-myOrange text-3xl font-bold">{title}</h1>
          <h1 className="text-xl">Age {ageGroup}</h1>
        </div>
      </div>
    </Link>
  )
}
