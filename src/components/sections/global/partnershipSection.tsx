import Container from '@/components/layout/container'
import Image from 'next/image'

export default function PartnershipSection() {
  return (
    <Container className="bg-myPink mb-10 mt-16 hidden md:mb-0 md:block">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center justify-center gap-4 py-12">
          <span className="mx-4">
            <Image
              src={`/partner-logos/bronze.png`}
              alt="bronze"
              width={150}
              height={150}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/elite_coder.png`}
              alt="Elite Coder"
              width={420}
              height={420}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/flying_cape.png`}
              alt="flying_cape"
              width={350}
              height={350}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/gorilab.png`}
              alt="gorilab"
              width={400}
              height={400}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/mangoStem.png`}
              alt="mango stem"
              width={300}
              height={300}
            />
          </span>
        </div>
        <div className="animate-marquee2 absolute top-0 flex items-center justify-center gap-4 py-12">
          <span className="mx-4">
            <Image
              src={`/partner-logos/bronze.png`}
              alt="bronze"
              width={150}
              height={150}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/elite_coder.png`}
              alt="Elite Coder"
              width={420}
              height={420}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/flying_cape.png`}
              alt="flying_cape"
              width={350}
              height={350}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/gorilab.png`}
              alt="gorilab"
              width={400}
              height={400}
            />
          </span>
          <span className="mx-4">
            <Image
              src={`/partner-logos/mangoStem.png`}
              alt="mango stem"
              width={300}
              height={300}
            />
          </span>
        </div>
      </div>
    </Container>
  )
}
