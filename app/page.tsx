import ClientBanner from '@/components/client-banner'
import HeroSection from '@/components/hero'
import Navbar from '@/components/navbar'
import OurBenefits from '@/components/our-benefits'
import OurServices1 from '@/components/our-servcies-1'
import OurServices2 from '@/components/our-services-2'


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSection />
    <ClientBanner />
    <OurServices1 />
    <OurBenefits />
    <OurServices2 />
   </>
  )
}
