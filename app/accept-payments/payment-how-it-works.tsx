import Image from "next/image";
import posImage from "../../public/payments/pos-machine.svg";
import creditSale from "../../public/images/credit-sale.svg";
import debitSale from "../../public/images/dabit-sale.svg";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const HowItWork = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1>How it works</h1>
      <Image src={posImage} alt='pos machine' />
      <TransparentPricing />
      <Card className='grid grid-cols-1 gap-10 p-10 mt-10 text-left text-center md: md:gap-4 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <p>Terminal Rental Cost</p>
          <h3>$35/month</h3>
          <p className='px-4 py-3 text-xs font-bold text-blue-900 uppercase bg-blue-200 rounded-full md:text-base'>
            ✧ Free access to Nadapayment Virtual Terminal ✧
          </p>
        </div>
        <Button className='items-end mx-auto mt-auto md:mx-0 md:ml-auto w-max h-max'>
          Get Started
        </Button>
      </Card>
    </section>
  );
};

export default HowItWork;

export const TransparentPricing = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <header>
          <h2>Fair, Transparent Pricing</h2>
          <p>
            No hidden fees or fine print here. What you see below is
            everything, period.
          </p>
        </header>
        <div className='grid grid-cols-1 gap-10 mt-16 md:grid-cols-2'>
          {/* Card */}
          <Card className='flex flex-col lg:w-[510px] md:w-[400px] p-10'>
            <div className='flex justify-between'>
              <div className=''>
                <p>Customer Pays With</p>
                <h3>Credit Card</h3>
              </div>
              <Image alt='credit card' src={creditSale} />
            </div>
            <hr />
            <div className='flex justify-between mt-8'>
              <div className=''>
                <p>You Pay</p>
                <h2 className='text-2xl'>$0</h2>
              </div>
              <div className=''>
                <p>Your customer pays</p>
                <h3 className='text-2xl'>3.5%</h3>
              </div>
            </div>
          </Card>
          {/* Card */}

          <Card className='flex flex-col p-10'>
            <div className='flex justify-between '>
              <div className=''>
                <p>Customer Pays With</p>
                <h3>Debit Card</h3>
              </div>
              <Image alt='credit card' src={debitSale} />
            </div>
            <hr />
            <div className='flex justify-between mt-8'>
              <div className=''>
                <p>You Pay</p>
                <h2 className='text-2xl'>$0</h2>
              </div>
              <div className=''>
                <p>Your customer pays</p>
                <h2 className='text-2xl'>3.5%</h2>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
