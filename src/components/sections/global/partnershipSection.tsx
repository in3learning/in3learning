import Container from '@/components/layout/container'

export default function PartnershipSection() {
  return (
    <Container className="mb-10 mt-16 md:mb-0">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-12">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
        <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
          <span className="mx-4 text-4xl">Marquee Item 1</span>
          <span className="mx-4 text-4xl">Marquee Item 2</span>
          <span className="mx-4 text-4xl">Marquee Item 3</span>
          <span className="mx-4 text-4xl">Marquee Item 4</span>
          <span className="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>
    </Container>
  )
}
