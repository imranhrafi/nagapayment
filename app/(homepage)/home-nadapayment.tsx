import Image from "next/image";
import { Card } from "../../components/ui/card";

const paymentData = [
  {
    id: 1,
    name: "savings",
    desc: "We help businesses save thousands of dollars by eliminating credit card processing fees.",
    link: "/",
    image: "/images/savings.png",
  },
  {
    id: 2,
    name: "Coverage",
    desc: "Nadapayments operates by being legally compliant in 48 states.",
    link: "/",
    image: "/images/coverage.png",
  },
  {
    id: 3,
    name: "payment",
    desc: "Cool new signage, receipt paper, and more. Everything you need to run your business with compliance.",
    link: "/",
    image: "/images/payment-kit.png",
  },
];

const NadaPayment = () => {
  return (
    <section className='flex flex-col gap-16'>
      <h1 className='w-3/5'>Nadapayment can do more</h1>
      <div className='flex flex-wrap lg:justify-between '>
        {paymentData.map((payment) => (
          <div
            key={payment.id}
            className='flex flex-col gap-6 basis-[97%] md:basis-[48%] lg:basis-[30%]  m-4'
          >
            <Image
              src={payment.image}
              alt={payment.name}
              width={400}
              height={400}
            />
            <h2 className='text-xl'>{payment.name}</h2>
            <p className='text-base'>{payment.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NadaPayment;
