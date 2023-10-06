import HomeTestimonial from "../(homepage)/home-testimonial";
import SurchargeRules from "../surcharging/surcharge-rules";
import HowItWork from "./payment-how-it-works";
import PaymentIntro from "./payment-intro";
import KitandKaboodle from "./payment-kit-and-kaboodle";
import TakePayments from "./payment-take-payments";
import WhyChooseUs from "./payment-why-choose-nagapayments";

const page = () => {
  return (
    <main className='flex flex-col items-center '>
      <header className='mt-24 mb-16 text-center'>
        <h1>Sell $100, See $100.</h1>
        <p>Simple, transparent pricing for you and your customers.</p>
      </header>
      <section className='flex flex-col items-center gap-52'>
        <PaymentIntro />
        <TakePayments />
        <HowItWork />
        <WhyChooseUs />
        <KitandKaboodle />
        <HomeTestimonial />
        <SurchargeRules />
      </section>
    </main>
  );
};

export default page;
