import Container from '@/components/layout/container'

export default function YoutubeVideoSection() {
  return (
    <Container>
      <iframe
        className="video-frame-shadow h-[300px] w-full object-cover md:h-[800px]"
        src={'https://www.youtube.com/embed/5fFtcLgmttE'}
        title="in3labs Holiday Workshops"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </Container>
  )
}
