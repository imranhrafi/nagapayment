import Image from "next/image";
import { Button } from "../../components/ui/button";
import formImage from "../../public/surcharge/payment.png";

const SurchargeIntro = () => {
  return (
    <section className='grid items-center justify-between grid-cols-1 mt-20 mx-aut0 max-w-7xl lg:grid-cols-2 lg:gap-36 md:gap-20'>
      <div className='flex flex-col items-center text-center lg:items-start md:p-20 lg:text-left'>
        <h1 className='text-8xl'>Rules For Surcharging</h1>
        <p className='mt-6 mb-14'>
          Surcharge programs have been around for a while now. But
          because card processing is complicated and surcharge
          programs have strict rules, most businesses haven’t
          seriously looked into them.
        </p>
        <Button aria-label='Learn More' className='w-max'>
          Learn More
        </Button>
      </div>
      <Image
        src={formImage}
        alt='surcharging-intro'
        className='min-w-[450px] min-h-[650px]'
      />
    </section>
  );
};

export default SurchargeIntro;
