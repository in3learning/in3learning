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
    <div className="relative flex flex-col items-center justify-center">
      <div className="bg-myOrange relative z-10 h-[150px] w-[150px] overflow-hidden rounded-full">
        <Image
          src={imgUrl}
          className="h-full w-full object-cover"
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="relative bottom-10 flex h-full w-[200px] flex-col items-center justify-center gap-2 rounded-xl bg-white py-4 pt-14">
        <h1 className="text-lg">{title}</h1>
        <h1 className="text-lg">Age {ageGroup}</h1>
        <Link href={slug}>
          <Button className="rounded-full px-8" variant={'primary'}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  )
}
