import Image from "next/image";
import mobile from "../../public/images/mobile.svg";
import { Button } from "../../components/ui/button";
const IntegrationIntro = () => {
  return (
    <section className='grid items-center justify-center grid-cols-1 mt-24 lg:grid-cols-3 md:grid-cols-2'>
      <div className='flex flex-col lg:col-span-2 lg:w-4/5'>
        <h1>Connect Nadapayments With Your Existing Software</h1>
        <p className='mt-6 mb-14'>
          Collect Payments and The Patient Ledger Will Automatically
          Adjust
        </p>
        <Button className='w-max'>Learn More</Button>
      </div>
      <Image src={mobile} alt='mobile' className='ml-auto' />
    </section>
  );
};

export default IntegrationIntro;
