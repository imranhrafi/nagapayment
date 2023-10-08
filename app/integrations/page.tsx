import IntegrationCurrent from "./integration-current";
import IntegrationIncluded from "./integration-included";
import IntegrationIntro from "./integration-intro";

const page = () => {
  return (
    <main className='flex flex-col items-center gap-52'>
      <IntegrationIntro />
      <IntegrationCurrent />
      <IntegrationIncluded />
    </main>
  );
};

export default page;
