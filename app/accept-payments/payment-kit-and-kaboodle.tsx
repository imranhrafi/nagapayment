import pos from "../../public/images/pos-solution.svg";
import signage from "../../public/images/signage.svg";
import receipt from "../../public/images/receipt.png";
import { Card } from "../../components/ui/card";
import Image from "next/image";

const cardDate = [
  {
    id: 1,
    name: "Fully Compliant POS Solution.",
    desc: "Get a new, Wi-Fi-enabled EMV Quick Chip terminal with the Nadapayments app pre-installed.  Access your payments dashboard online or via the terminal.",
    image: pos,
  },
  {
    id: 2,
    name: "Cool New Signage.",
    desc: "We’ll hook you up with the surcharge signage you need to keep your customers informed. You stay compliant while saving a bunch of hard-earned money.",
    image: signage,
  },
  {
    id: 3,
    name: "Reams of Receipt Paper.",
    desc: "Because why wouldn’t we give you more receipt paper? It’s the least we can do, really.",
    image: receipt,
  },
];

const KitandKaboodle = () => {
  return (
    <section>
      <h1>The whole kit and kaboodle...</h1>.
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {cardDate.map((card) => (
          <Card
            key={card.id}
            className='px-10 py-8 bg-gradient-to-b from-transparent to-[#f1f2f2]'
          >
            <h3 className='text-xl'>{card.name}</h3>
            <Image
              src={card.image}
              alt={card.name}
              className='mx-auto mt-8 mb-8'
            />
            <p>{card.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KitandKaboodle;
