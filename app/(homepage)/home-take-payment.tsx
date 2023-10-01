import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "../../components/ui/button";

const tabData = [
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

const HomeTakePayment = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-6 '>
        <h1>Take payments, everywhere</h1>
        <p className='mb-12'>
          Online, in-store, or on the go. Nadapayments has solution
          for every situation.
        </p>
      </div>
      <Tabs
        defaultValue='inperson'
        className='flex flex-col items-center'
      >
        <TabsList className='mb-16 w-max'>
          <TabsTrigger value='inperson'>In Person</TabsTrigger>
          <TabsTrigger value='online'>Online</TabsTrigger>
          <TabsTrigger value='onthego'>On The Go</TabsTrigger>
        </TabsList>
        {tabData.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.value}
            className='flex flex-wrap-reverse items-center lg:flex-nowrap lg:justify-between'
          >
            <div className='flex flex-col lg:basis-[48%]'>
              <h3 className='mt-6 mb-4'>{tab.name}</h3>
              <p>{tab.desc}</p>
              <Button variant={"ghost"} className='mt-12 w-max'>
                Learn More
              </Button>
            </div>
            <Image
              src={tab.image}
              alt={tab.name}
              width={500}
              height={300}
              className='lg:basis-[48%] rounded-lg'
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeTakePayment;
