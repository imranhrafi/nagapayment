import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const footerData = [
  {
    id: 1,
    topic: "payments",
    subTopic: [
      {
        id: 1,
        title: "credit card",
      },
      {
        id: 2,
        title: "debit card",
      },
      {
        id: 3,
        title: "wallet",
      },
    ],
  },
  {
    id: 2,
    topic: "surcharging",
    subTopic: [
      {
        id: 1,
        title: "Rules by state",
      },
      {
        id: 2,
        title: "Card networking rules",
      },
      {
        id: 3,
        title: "FAQ",
      },
    ],
  },
  {
    id: 3,
    topic: "COMPANY",
    subTopic: [
      {
        id: 1,
        title: "About Nagapayments",
      },
      {
        id: 2,
        title: "Blog",
      },
      {
        id: 3,
        title: "Career",
      },
    ],
  },
  {
    id: 4,
    topic: "Legal",
    subTopic: [
      {
        id: 1,
        title: "Privacy Policy",
      },
      {
        id: 2,
        title: "Terms and Conditions",
      },
      {
        id: 3,
        title: "Other",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <h3 className='mb-12 cursor-pointer select-none basis-1/5'>
        <span className='text-primary '>Naga</span>Payments
      </h3>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
        {footerData.map((data) => (
          <div key={data.id} className='col-span-1'>
            <h3 className='mb-6 text-base font-normal uppercase text-muted-foreground'>
              {data.topic}
            </h3>
            {data.subTopic.map((subData) => (
              <div key={subData.id}>
                <p className='text-sm '>{subData.title}</p>
              </div>
            ))}
          </div>
        ))}
        <div className='flex flex-col w-full col-span-2'>
          <h3 className='mb-6 text-base font-normal uppercase text-muted-foreground'>
            Join newsletter
          </h3>

          <form
            action=''
            className='flex items-center justify-center'
          >
            <Input
              placeholder='Enter your email'
              className='w-full'
            />
            <Button className=''>Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
