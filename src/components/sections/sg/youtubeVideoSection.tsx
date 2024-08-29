import Container from '@/components/layout/container'

export default function SGYoutubeVideoSection() {
  return (
    <Container className="!bg-myPink">
      <video className="mb-16 h-full w-full md:mb-0 md:mt-20" controls>
        <source src="/In3labsHolidayWorkshops.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  )
}
