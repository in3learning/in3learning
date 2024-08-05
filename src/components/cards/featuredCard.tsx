import Image from 'next/image'
import './style.css'
import Link from 'next/link'

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
      <div className="group relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-black">
        <div className="flex w-full items-center justify-between p-2">
          <h1
            className={`font-sfpro w-full text-2xl font-bold tracking-tight sm:text-3xl`}
          >
            {title}
          </h1>
          <p className="font-sfpro text-myOrange text-2xl font-bold sm:text-3xl">
            {ageGroup}
          </p>
        </div>
        <div className="relative h-[350px] w-[300px] overflow-hidden md:h-[550px] md:w-[400px]">
          <Image
            src={imgUrl}
            alt={title}
            className="rounded-md object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
            fill
            sizes="100%"
          />
        </div>
      </div>
    </Link>
  )
}
