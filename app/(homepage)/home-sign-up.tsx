import { CheckCircle2 } from "lucide-react";
import InlineForm from "../../components/inlineForm";
import { Button } from "../../components/ui/button";
import arrow from "../../public/images/arrow-line.svg";
import Image from "next/image";

const InlineSignup = () => {
  return (
    <section className='grid grid-cols-1 gap-10 px-5 py-10 lg:px-32 lg:py-24 lg:grid-cols-5 bg-[#F5FAFF] dark:bg-background mx-auto relative'>
      <div className='flex flex-col col-span-3'>
        <div className='flex flex-col gap-6'>
          <h1>Are you ready to start?</h1>
          <p className='w-full md:w-2/3'>
            Complete this form and one of our team members will be in
            touch with you.
          </p>
        </div>
        <div className='relative flex flex-col mt-12'>
          <p className='mb-6'>Why Nadapayment?</p>
          <ul className='flex flex-col gap-8'>
            <li className='flex gap-3 '>
              <CheckCircle2 className='text-primary' />
              No Setup Costs. Nada.
            </li>
            <li className='flex gap-3 '>
              <CheckCircle2 className='text-primary' />
              No Termination Fees.
            </li>
            <li className='flex gap-3 '>
              <CheckCircle2 className='text-primary' />
              Send Payment Links.
            </li>
            <li className='flex gap-3 '>
              <CheckCircle2 className='text-primary' />
              24/7/365 Support.
            </li>
          </ul>
          <Button variant={"ghost"} className='mt-16 w-max'>
            Learn How it Works
          </Button>
        </div>
        <Image
          src={arrow}
          alt='arrow'
          className='hidden lg:block absolute top-[40%] right-[45%]'
        />
      </div>
      <div className='col-span-2 lg:max-w-[420px] '>
        <InlineForm />
      </div>
    </section>
  );
};

export default InlineSignup;
