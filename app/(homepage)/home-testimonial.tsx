import Image from "next/image";
import { Card } from "../../components/ui/card";
import { Quote } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    name: "Trish Fox ",
    designation: "Enhanced Dental",
    appreciation:
      "We love working with NadaPayments and couldn’t be happier. This was a seamless process for our office and of the vast majority of our patients have been very happy!",
    image:
      "https://images.pexels.com/photos/15637510/pexels-photo-15637510/free-photo-of-illuminated-face-of-a-smiling-woman-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Eleanor Pena ",
    designation: "Park Avenue Dental Medicine",
    appreciation:
      "NADA has been the best. Once we put this in place our savings over the year will be close to $12k. Clients have accepted with ease. Best investment we implemented and would recommend NADA to every business owner!",
    image:
      "https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const HomeTestimonial = () => {
  return (
    <section className='grid items-center justify-around grid-cols-1 gap-16 lg:grid-cols-2'>
      <div className='flex flex-col gap-6 lg:col-span-1'>
        <p className='text-base font-bold uppercase text-primary'>
          Testimonial
        </p>
        <h1>Customers Love Nadapayments</h1>
        <p className='text-md'>
          A great way to accept payments when you don’t need a credit
          card terminal.
        </p>
      </div>
      <div className='flex flex-col gap-10 lg:col-span-1 lg:flex-col md:flex-row'>
        {testimonialData.map((testimonial) => (
          <Card className='p-10 max-w-[80%]' key={testimonial.id}>
            <p className='w-4/5 text-base'>
              {testimonial.appreciation}
            </p>
            <div className='flex items-center justify-between mt-12'>
              <div className='flex flex-col'>
                <h3 className='text-base'>{testimonial.name}</h3>
                <p className='text-sm'>{testimonial.designation}</p>
              </div>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className='object-cover w-16 h-16 rounded-full'
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HomeTestimonial;
