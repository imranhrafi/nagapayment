import Image from "next/image";
import introImage from "../../public/payments/process-transection.svg";
import { cn, colorWithOpacity } from "../../lib/utils";
import { Card } from "../../components/ui/card";

const introData = [
  {
    title: "Accept Credit card",
    heading:
      "When customers pay with credit, they’ll cover the processing fee.",
    description:
      "With a surcharge program, customers will be fully aware of their options. If they pay with credit card, they’ll pay the processing fee on top.",
    color: "#0070F4",
    image: introImage,
  },
  {
    title: "Accept Dabit card",
    heading:
      "When customers pay with debit, they aren’t charged anything.",
    description:
      "In order to stay compliant, a merchant offering a surcharge program cannot charge any fee for debit cards. Our solution automatically detects debit card payments and applies no fee to customers. You will have to pay 1% + $0.25 per debit card transaction.",
    color: "#F97316",
    image: introImage,
  },
];

const PaymentIntro = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-40'>
      {introData.map((intro) => (
        <Card
          key={intro.title}
          className='flex flex-col bg-opacity-5'
        >
          <div
            className='h-[360px]  grid place-content-center'
            style={{
              backgroundColor: colorWithOpacity(intro.color, 0.1),
            }}
          >
            <Image
              src={intro.image}
              alt={intro.title}
              objectFit='cover'
            />
          </div>
          <div className='flex flex-col gap-4 px-10 mt-10'>
            <h3
              className='px-4 py-3 text-sm border rounded-full w-max bg-opacity-10 text uppercase tracking-[.64px]'
              style={{
                borderColor: intro.color,
                color: intro.color,
              }}
            >
              {intro.title}
            </h3>
            <h3 className='text-2xl'>{intro.heading}</h3>
            <p className='mt-4 mb-10 text-sm'>{intro.description}</p>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default PaymentIntro;
