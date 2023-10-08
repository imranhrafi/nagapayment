import { TransparentPricing } from "../accept-payments/payment-how-it-works";
import PricingBenefits from "./pricing-benefits";
import PricingTerminal from "./pricing-terminal";
import ReadyToGetStarted from "./ready-to-ge-started";

const Pricing = () => {
  return (
    <main className='flex flex-col gap-10 max-w-[1028px] mx-auto'>
      <TransparentPricing />
      <PricingTerminal />
      <PricingBenefits />
      <ReadyToGetStarted />
    </main>
  );
};

export default Pricing;
