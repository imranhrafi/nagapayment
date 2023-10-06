const faqData = [
  {
    id: 1,
    value: "item-1",
    question: "Are surcharge programs new?",
    answer:
      "Not really. Many small businesses in the U.S. have offered lower prices to customers willing to pay with cash for years. With Surcharging your just passing on the cost for accepting a credit card. Your customers always have a choice to pay with a debit card to avoid paying the credit card surcharge.",
  },
  {
    id: 2,
    value: "item-2",
    question: "Is your surcharge program legal?",
    answer:
      "It is in 46 states. Surcharge programs require that businesses display a sign informing the customer at the point of sale that there is a 3% fee charged on all credit card transactions which they can avoid by paying with a debit card. We provide this signage for you to display.",
  },
  {
    id: 3,
    value: "item-3",
    question: "I’ve never heard of this before. How does it work?",
    answer:
      "Credit card companies charge a fee each time a merchant processes a credit or debit card payment. Traditionally, the business owner pays this fee, not the customer. After signing up with Nadapayments, we’ll give you compliant signage and equipment to accept credit cards at no cost. You pay no fees at all to accept credit cards. If a customer pays with a debit card, our system will charge you a flat fee of 1.5% + 25¢ for each debit card transaction.",
  },
  {
    id: 4,
    value: "item-4",
    question:
      "Will this reduce my monthly credit card processing bill to “nada”?",
    answer:
      "Absolutely. Your daily savings will speak for themselves. Your monthly statement will only contain debit card processing fees.",
  },
  {
    id: 5,
    value: "item-5",
    question:
      "Will I lose business by making customers pay processing fees?",
    answer:
      "Businesses that follow the Nadapayments model have not reported any decline in sales. Customers are simply given more flexibility in their payment options. Cash and debit payments are not subject to any surcharges. If you market it properly, a surcharge program can play an important role in boosting your annual product sales while lowering your expenses.",
  },
];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../../components/ui/button";

const Faq = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-16 '>
      <h1 className=''> Frequently Asked Questions</h1>
      <Accordion
        type='single'
        collapsible
        className='lg:w-[60%] flex flex-col items-between justify-start '
      >
        {faqData.map((faq) => (
          <AccordionItem
            value={faq.value}
            key={faq.id}
            className='mb-8'
          >
            <AccordionTrigger className='text-xl text-left'>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className='flex justify-between w-full lg:w-[60%] '>
        <div className='flex flex-col'>
          <p className='text-sm'>Didn’t find your answer?</p>
          <h3 className='text-base'>Ask us directly</h3>
        </div>
        <Button>Ask Question</Button>
      </div>
    </section>
  );
};

export default Faq;
