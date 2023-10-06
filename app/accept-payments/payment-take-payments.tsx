import Image from "next/image";

const paymentData = [
  {
    id: 1,
    value: "inperson",
    name: "In Person",
    desc: " When customer wants to pay with a card, you can accept credit or debit using our Wi-Fi EMV Quick Chip machine.",
    link: "#",
    image: "/images/in-process.png",
  },
  {
    id: 2,
    value: "online",
    name: "Online",
    desc: " Using our Virtual Terminal works the same way our Counter Top terminal works when you don’t have the card present or don’t need a physical machine – accept payments on the web.",
    link: "#",
    image: "/images/Payment-with-EMV-terminal-in-person.svg",
  },
  {
    id: 3,
    value: "onthego",
    name: "On The Go",
    desc: " The Nadapayments solution is mobile friendly for on-the-go shoppers, which are quickly growing into the biggest shopping segment. Our best-in-class mobile app makes accepting payments a snap.",
    link: "#",
    image: "/images/on-the-go.png",
  },
];

const TakePayments = () => {
  return (
    <section className='flex flex-col items-center gap-16'>
      <h1>Take payments...</h1>
      <div className='flex flex-col mx-4 gap-14 md:mx-10 lg:mx-28 my-14 '>
        {paymentData.map((payment, index) => (
          <div
            key={payment.id}
            className={`flex flex-col md:flex-row justify-between lg:justify-around md:gap-6 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className='lg:w-2/5'>
              <h2 className='text-xl'>{payment.name}</h2>
              <p className='text-base'>{payment.desc}</p>
            </div>
            <Image
              src={payment.image}
              alt={payment.name}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TakePayments;
