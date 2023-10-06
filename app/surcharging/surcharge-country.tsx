import Image from "next/image";
import mapsvg from "../../public/surcharge/surchargeMap.svg";

const SurchargeCountry = () => {
  return (
    <section className='flex flex-col gap-16'>
      <div className='flex flex-col items-start gap-6 lg:w-2/3'>
        <h1 className=''>
          Nadapayments available in all over the USA
        </h1>
        <p>
          Nadapayments processes over $1 billion in transactions
          annually and serves thousands of large and small businesses
          across the U.S. just like yours.
        </p>
      </div>
      <Image
        src={mapsvg}
        alt='surcharge-map'
        className='self-center w-full h-full justify-self-center'
      />
    </section>
  );
};

export default SurchargeCountry;
