import Image from "next/image";
import { Card } from "../../components/ui/card";
const goodiesData = [
  {
    id: 1,
    name: "Generate payment link",
    desc: "Enter the amount you need to collect and the link will generate. Use that link however you like.",
    image: "/images/generate-payment-link.svg",
    type: "virtualTerminal",
    link: "#",
  },
  {
    id: 2,
    name: "Send invoice",
    desc: "Nadapayments Virtual Terminal can generate an invoice with a few simple steps. Simply email the invoice to your customer and get paid, faster.",
    image: "/images/send-invoice.svg",
    type: "virtualTerminal",
    link: "#",
  },
  {
    id: 3,
    name: "Handle recurring payments",
    desc: "When customer wants to pay with a card, you can accept credit or debit using our Wi-Fi EMV Quick Chip machine.",
    image: "/images/recurring-payment.svg",
    type: "virtualTerminal",
    link: "#",
  },
  {
    id: 4,
    name: "Keep cards on file",
    desc: "We Take Care Of The Security. Once a card is stored on file you can just click the card and charge the amount the customer owes.",
    image: "/images/cards-on-file.svg",
    type: "virtualTerminal",
    link: "#",
  },
  {
    id: 5,
    name: "Wi-Fi EMV Quick Chip",
    desc: "When customer wants to pay with a card, you can accept credit or debit using our Wi-Fi EMV Quick Chip machine.",
    image: "/images/emv-quick-chip.svg",
    type: "terminal",
    link: "#",
  },
  {
    id: 6,
    name: "Contactless payment",
    desc: "Allow customer to pay hassle free with Apple Pay/Google Pay without physical contact.",
    image: "/images/contactless-payment.svg",
    type: "terminal",
    link: "#",
  },
];

type Goodie = {
  id: number;
  name: string;
  desc: string;
  image: string;
  type: string;
};

const GoodieCard = ({ goodie }: { goodie: Goodie }) => (
  <div className='flex flex-col justify-start basis-[45%]'>
    <Image
      src={goodie.image}
      alt={goodie.name}
      width={400}
      height={400}
    />
    <h3 className='mt-6 mb-4 text-2xl leading-[140%]'>
      {goodie.name}
    </h3>
    <p>{goodie.desc}</p>
  </div>
);

const HomeGoodies = () => {
  return (
    <div className=''>
      <header className='flex flex-col justify-start gap-6 mb-14 lg:w-1/2'>
        <p className='uppercase text-primary'>features</p>
        <h1>All the goodies</h1>
        <p>
          Nadapayments has both physical and virtual terminals to
          serve your every business need.
        </p>
      </header>
      <main>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='col-span-1'>
            <h3 className='mb-10 lg:mb-0'>Virtual Terminal</h3>
          </div>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:col-span-2'>
            {goodiesData
              .filter((goodie) => goodie.type === "virtualTerminal")
              .map((goodie) => (
                <GoodieCard key={goodie.id} goodie={goodie} />
              ))}
          </div>
        </div>
        <div className='grid grid-cols-1 mt-16 lg:grid-cols-3'>
          <div className='col-span-1'>
            <h3 className='mb-10 lg:mb-0'>Physical Terminal</h3>
          </div>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 md:col-span-2'>
            {goodiesData
              .filter((goodie) => goodie.type === "terminal")
              .map((goodie) => (
                <GoodieCard key={goodie.id} goodie={goodie} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeGoodies;
