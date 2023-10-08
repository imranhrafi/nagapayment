import Image from "next/image";
import integrationImage from "../../public/images/integration-image.svg";
import { Zap } from "lucide-react";
import { Button } from "../../components/ui/button";

const packageData = [
  {
    name: "Eliminate Your Credit Card Processing Fees",
    icon: <Zap />,
  },
  {
    name: "Card on File",
    icon: <Zap />,
  },
  {
    name: "Smart Terminal",
    icon: <Zap />,
  },
  {
    name: "Payment Plans",
    icon: <Zap />,
  },
  {
    name: "Contactless Payments",
    icon: <Zap />,
  },
  {
    name: "Payment Links",
    icon: <Zap />,
  },
];

const IntegrationIncluded = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2'>
      <Image src={integrationImage} alt='integration' />
      <div className='flex flex-col justify-center'>
        <h1>Whats Included</h1>
        <p className='mt-6 mb-16'>
          See how solution works for your practice
        </p>
        <div className='grid items-center grid-cols-2 gap-10 mb-16'>
          {packageData.map((packageData) => (
            <div
              key={packageData.name}
              className='flex items-center gap-3'
            >
              <span className='text-primary'>{packageData.icon}</span>
              <p className='text-sm'>{packageData.name}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-start gap-10'>
          <Button className='w-max'>Schedule a Demo</Button>
          <Button className='w-max ' variant={"ghost"}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationIncluded;
