import mockup from "../../public/images/mockup-laptop.svg";
import stateMap from "../../public/images/map-state.svg";
import { Card } from "../../components/ui/card";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col'>
      <h1>Why Businesses Choose Nadapayments</h1>
      <p className='w-full mt-6 md:w-3/5'>
        Nadapayments processes over $1 billion in transactions
        annually and serves thousands of large and small businesses
        across the U.S. just like yours.
      </p>
      <Card className='grid grid-cols-1 px-8 mt-16 md:grid-cols-2 py-14'>
        <Image
          src={stateMap}
          alt='Fully compliant in 47 states'
          className='lg:ml-10'
        />
        <div className='flex flex-col gap-4'>
          <h3 className='w-3/5'>Fully compliant in 47 states</h3>
          <p className='w-4/5 leading-[140%]'>
            While surcharge programs aren’t exactly rocket science,
            staying legally compliant can be. Fortunately, we’ve got
            you covered. Nadapayments serves business in 47 states
            (excludes CT and MA sorry!).
          </p>
        </div>
      </Card>
      <Card className='grid grid-cols-1 px-8 mt-16 md:grid-cols-2 py-14'>
        <Image
          src={mockup}
          alt='Fully compliant in 47 states'
          className='lg:ml-10'
        />
        <div className='flex flex-col gap-4'>
          <h3 className='w-3/5'>
            Terminal, mobile, and online access
          </h3>
          <p className='w-4/5 leading-[140%]'>
            You can charge cards and view your payments in the
            Nadapayments app dashboard on your new, Wi-Fi-enabled EMV
            terminal, your smartphone, or your laptop. Welcome to the
            21st century.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default WhyChooseUs;
