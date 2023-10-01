import Image from "next/image";
import { Button } from "../../components/ui/button";

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center mx-auto text-center lg:w-2/3'>
        <p className='uppercase text-primary'>
          - Accept credit cards at 0% cost -
        </p>
        <h1 className='mt-6 lg:leading-[112%] md:leading-[66px] leading-[60px]'>
          Take home
          <span className='px-2 mx-3 rounded-lg bg-primary text-primary-foreground'>
            100%
          </span>
          of all your credit card transactions.
        </h1>
        <p className='mt-6 lg:w-2/3'>
          We’ve eliminated credit card processing fees because that’s
          what you deserve.
        </p>
        <Button className='self-start mt-12 lg:self-center'>
          Get started
        </Button>
      </div>
      <Image
        src='/images/Home-hero-image-desktop.svg'
        alt='hero'
        width={1400}
        height={1400}
        className='hidden -mt-14 lg:block'
      />
      <Image
        src='/images/Home-hero-image-mobile.svg'
        alt='hero'
        width={1400}
        height={1400}
        className='-mt-10 lg:hidden'
      />
    </div>
  );
};

export default HeroSection;
