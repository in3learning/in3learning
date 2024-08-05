import AboutSection from '@/components/sections/global/aboutSection'
import InitiateBanner from '@/components/sections/global/initiateBanner'
import PartnershipSection from '@/components/sections/global/partnershipSection'
import PotentialSection from '@/components/sections/global/potentialSection'
import SGHeroSection from '@/components/sections/sg/heroSection'
import SGYoutubeVideoSection from '@/components/sections/sg/youtubeVideoSection'

export default function USPage() {
  return (
    <>
      <SGHeroSection />
      <InitiateBanner />
      <AboutSection />
      <SGYoutubeVideoSection />
      <PartnershipSection />
      <PotentialSection />
    </>
  )
}
