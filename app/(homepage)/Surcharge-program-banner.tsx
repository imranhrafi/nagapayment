import { CreditCard, LineChart, UserCheck } from "lucide-react";
import { Button } from "../../components/ui/button";

const bannerData = [
  {
    id: 1,
    step: "step 1",
    name: " Sign up with Nadapayments to get started",
    link: "/",
    icon: <UserCheck />,
  },
  {
    id: 2,
    step: "step 2",
    name: "Display our surcharge notice where customers can see it.",
    link: "/",
    icon: <LineChart />,
  },
  {
    id: 3,
    step: "step 3",
    name: " Start using your new WiFi-enabled EMV terminal.",
    link: "/",
    icon: <CreditCard />,
  },
];

const SurchargeBanner = () => {
  return (
    <section className='grid items-center grid-cols-1 p-2 sm:p-10 lg:p-32 lg:grid-cols-2 bg-secondary text-secondary-foreground'>
      <div className='flex flex-col col-span-1 lg:items-start'>
        <h2 className='text-center '>
          3 steps to get started with our surcharge program
        </h2>
        <p className='w-4/5 mt-6 mb-16'>
          Take home 100% of all your credit card transactions
        </p>

        <Button className=''>Get Started</Button>
      </div>

      <div className='flex flex-col col-span-1 mt-12 lg:ml-32 gap-14 lg:mt-0'>
        {bannerData.map((banner) => (
          <div className='flex justify-start' key={banner.id}>
            <div className='basis-[10%] '>{banner.icon}</div>
            <div className='basis-[90%] self-start font-bold gap-3'>
              <p className='text-sm uppercase text-primary'>
                {banner.step}
              </p>
              <h3 className='text-2xl'>{banner.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SurchargeBanner;
