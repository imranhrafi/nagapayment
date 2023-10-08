import pos from "../../public/images/pos-solution.svg";
import mockup from "../../public/images/mockup-laptop.svg";
import { Card } from "../../components/ui/card";
import Image from "next/image";

const TERMINALPRICINGDATA = [
  {
    id: 1,
    title: "Smart Terminal",
    desc: "Accept Payments with Chip, Tap & Manual Entry.",
    planName: "Smart Terminal Cost",
    cost: "$35/month",
    image: pos,
  },
  {
    id: 1,
    title: "Virtual Terminal",
    desc: "Accept Payments Online, Send Payment Links, Add Payment Plans, and much more!",
    planName: "Virtual Terminal Cost",
    cost: "Free",
    image: mockup,
  },
];

const PricingTerminal = () => {
  return (
    <section className='flex flex-col gap-10 '>
      {TERMINALPRICINGDATA.map((data) => (
        <Card
          className='grid grid-cols-1 gap-10 p-8 md:grid-cols-2'
          key={data.id}
        >
          <Image
            src={data.image}
            alt={data.title}
            className='mx-auto'
          />
          <div className='flex flex-col'>
            <div className=''>
              <h3 className='mb-3'>{data.title}</h3>
              <p>{data.desc}</p>
            </div>
            <div className='flex flex-col mt-auto'>
              <p>{data.planName}</p>
              <h3 className='mt-3'>{data.cost}</h3>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default PricingTerminal;
