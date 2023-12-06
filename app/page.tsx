import ClientBanner from '@/components/client-banner'
import HeroSection from '@/components/hero'
import Navbar from '@/components/navbar'
import OurServices1 from '@/components/our-servcies-1'


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSection />
    <ClientBanner />
    <OurServices1 />
   </>
  )
}
