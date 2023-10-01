import Blog from "./Blog";
import SurchargeBanner from "./Surcharge-program-banner";
import Faq from "./faq";
import Footer from "./footer";
import HeroSection from "./hero-section";
import HomeGoodies from "./home-goodies";
import NadaPayment from "./home-nadapayment";
import InlineSignup from "./home-sign-up";
import SurchargeProgram from "./home-surcharge-program";
import HomeTakePayment from "./home-take-payment";
import HomeTestimonial from "./home-testimonial";

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen gap-56 p-2 mx-auto mt-20 md:p-10 lg:p-24 '>
      <HeroSection />
      <HomeTakePayment />
      <HomeGoodies />
      <SurchargeProgram />
      <SurchargeBanner />
      <HomeTestimonial />
      <Faq />
      <NadaPayment />
      <InlineSignup />
      <Blog />
      <Footer />
    </main>
  );
}
