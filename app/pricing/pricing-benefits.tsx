import {
  CheckCircle2,
  FileBadge2,
  LayoutGrid,
  PhoneCall,
  RefreshCwOff,
  ShieldCheck,
} from "lucide-react";
import { Card } from "../../components/ui/card";

const BENEFITS = [
  {
    id: 1,
    title: "100% legally compliant",
    icon: <ShieldCheck />,
  },
  {
    id: 2,
    title: "No setup costs.Nada.Zilch.",
    icon: <FileBadge2 />,
  },
  {
    id: 3,
    title: "Works with credit card installment plans.",
    icon: <LayoutGrid />,
  },
  {
    id: 4,
    title: "24/7/365 Support",
    icon: <PhoneCall />,
  },
  {
    id: 5,
    title: "Works in store, online, and on the go.",
    icon: <CheckCircle2 />,
  },
  {
    id: 6,
    title: "Cancel any time you want.",
    icon: <RefreshCwOff />,
  },
];

const PricingBenefits = () => {
  return (
    <section className='flex flex-col gap-10 text-center'>
      <h1>Charge $100, see $100.</h1>
      <p>Take home 100% of all your credit card transactions</p>
      <div className='grid grid-cols-2 gap-10 md:grid-cols-3'>
        {BENEFITS.map((benefit) => (
          <Card
            key={benefit.id}
            className='flex flex-col gap-2 text-left p-7 bg-[#E5F1FE] dark:bg-background'
          >
            <span className='p-4 mb-auto rounded-md text-primary bg-background w-max'>
              {benefit.icon}
            </span>
            <h3 className='text-base mt-11'>{benefit.title}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingBenefits;
