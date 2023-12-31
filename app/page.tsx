import Banner from '@/components/banner'
import ClientBanner from '@/components/client-banner'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero'
import Navbar from '@/components/navbar'
import OurBenefits from '@/components/our-benefits'
import OurServices1 from '@/components/our-servcies-1'
import OurServices2 from '@/components/our-services-2'
import Testimonials from '@/components/testimonials'


export default function Home() {
  return (
   <>
    <Navbar />
    <HeroSection />
    <ClientBanner />
    <OurServices1 />
    <OurBenefits />
    <OurServices2 />
    <Testimonials />
    <Banner />
    <Footer />
   </>
  )
}
