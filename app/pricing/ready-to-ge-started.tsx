import Image from "next/image";
import mockup from "../../public/images/mockup-laptop.svg";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const ReadyToGetStarted = () => {
  return (
    <section className='flex flex-col items-center mt-52'>
      <h1>Ready to get started?</h1>
      <p className='mt-6'>Get in touch to learn how it work</p>
      <Image
        src={mockup}
        alt='mockup'
        className='object-cover w-full my-16'
      />

      <Link href='/get-started'>
        <Button className='self-center'>Get started</Button>
      </Link>
    </section>
  );
};

export default ReadyToGetStarted;
