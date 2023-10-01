import Image from "next/image";
import { Card } from "../../components/ui/card";

const programData = [
  {
    id: 1,
    name: "0% processing fee",
    heading: "Keep 100% of your credit card revenue.",
    desc: "By eliminating all credit card costs, you get to keep 100% of your revenue every time a customer pays with credit.",
    image: "/images/illu-zero.png",
  },
  {
    id: 2,
    name: "Win for Customer",
    heading: "Customers can avoid processing fees, too..",
    desc: "Customers can avoid processing fees by paying with debit card, cash, or check.",
    image: "/images/illu-card.png",
  },
  {
    id: 3,
    name: "Same workflow",
    heading: "No change in how you accept credit cards.",
    desc: "A customised solution that’s designed to work with most POS systems. Plug in our Wi-Fi-enabled EMV terminal and you should be good to go.",
    image: "/images/illu-save.png",
  },
];

const SurchargeProgram = () => {
  return (
    <section className='flex flex-col items-center gap-10'>
      <header className='flex flex-col items-center justify-center gap-6 text-center mb-14'>
        <p className='uppercase text-primary'>exclusive</p>
        <h1>The Surcharge program</h1>
        <p className='w-1/2'>
          Our surcharge program makes every purchase a win-win for you
          and your customers.
        </p>
      </header>
      {programData.map((program) => (
        <Card
          key={program.id}
          className='grid items-center justify-center grid-cols-1 p-3 md:grid-cols-5 bg-muted lg:w-4/6'
        >
          <Image
            src={program.image}
            alt={program.name}
            width={400}
            height={340}
            className='col-span-2 mb-4 md:mb-0'
          />
          <div className='flex flex-col col-span-3'>
            <p className='text-sm font-bold uppercase text-primary'>
              {program.name}
            </p>
            <h3 className='my-4'>{program.heading}</h3>
            <p>{program.desc}</p>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default SurchargeProgram;
