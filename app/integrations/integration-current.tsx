import Link from "next/link";
import { Card } from "../../components/ui/card";

const companyData = [
  {
    id: 1,
    name: "Dentrix",
    image: "/images/dentrix.png",
    about: "A dental Company",
  },
  {
    id: 2,
    name: "Dentrix",
    image: "/images/opendental.png",
    about: "A dental Company",
  },
  {
    id: 3,
    name: "Eaglesoft",
    image: "/images/opendental.png",
    about: "A dental Company",
  },
  {
    id: 4,
    name: "DSNDental",
    image: "/images/opendental.png",
    about: "A dental Company",
  },
  {
    id: 5,
    name: "PracticeWorks",
    image: "/images/opendental.png",
    about: "A dental Company",
  },
  {
    id: 6,
    name: "Open Dental",
    image: "/images/opendental.png",
    about: "A dental Company",
  },
];

const IntegrationCurrent = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-center'>Current Integrations</h1>
      <div className='grid grid-cols-2 gap-10 my-16 md:grid-cols-3'>
        {companyData.map((company) => (
          <Card key={company.id} className='p-6'>
            <h3 className='text-primary'>{company.name}</h3>
            <div className='pr-32'>
              <p className='mt-10 font-bold'>{company.name}</p>
              <span className='text-muted-foreground'>
                {company.about}
              </span>
            </div>
          </Card>
        ))}
      </div>
      <small className='text-sm font-bold'>
        Dont see your software? Request an integration{" "}
        <Link href={""} className='text-primary dark:border-b'>
          {" "}
          here
        </Link>
      </small>
    </section>
  );
};

export default IntegrationCurrent;
