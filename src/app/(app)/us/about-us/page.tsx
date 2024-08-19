/* eslint-disable @next/next/no-sync-scripts */
import Container from '@/components/layout/container'

export default function USAboutUsPage() {
  return (
    <Container className="pt-20">
      <h1>US About Us Page</h1>
      <div id="amilia">
        <iframe
          id="amilia-iframe"
          allowTransparency={true}
          frameBorder="0"
          width="100%"
          className="invisible w-full overflow-hidden border-none"
          scrolling="no"
          data-color-code="#186DDC"
          src="https://app.amilia.com/store/en/in3learning/shop/programs"
        ></iframe>
        <script
          src="https://app.amilia.com/scripts/amilia-iframe.js"
          type="text/javascript"
        ></script>
      </div>
    </Container>
  )
}
