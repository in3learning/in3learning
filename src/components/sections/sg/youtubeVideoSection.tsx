import Container from '@/components/layout/container'

export default function SGYoutubeVideoSection() {
  return (
    <Container className="!bg-myPink">
      <iframe
        className="video-frame-shadow !bg-myPink h-[300px] w-full object-cover md:h-[800px]"
        src={'https://www.youtube.com/embed/5fFtcLgmttE'}
        title="in3labs Holiday Workshops"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </Container>
  )
}
