import Faq from "../(homepage)/faq";
import SurchargeCountry from "./surcharge-country";
import SurchargeIntro from "./surcharge-intro";
import SurchargeRules from "./surcharge-rules";

const page = () => {
  return (
    <main className='flex flex-col max-w-7xl gap-52'>
      <SurchargeIntro />
      <SurchargeRules />
      <SurchargeCountry />
      <Faq />
    </main>
  );
};

export default page;
