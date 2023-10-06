import React from "react";

const SurchargeRules = () => {
  const rules = [
    {
      rule: "1. The merchant must be registered with the major card brands.",
      nagapayments: "We’ll complete the registration for you.",
    },
    {
      rule: "2. The merchant must inform customers of surcharges on all credit card transactions.",
      nagapayments:
        "Not only will we send you some spiffy signage, our terminal, mobile app, and virtual terminal automatically displays the surcharge on the receipt.",
    },
    {
      rule: "3. The credit card fee must not exceed 4% and the merchant cannot profit from the fee.",
      nagapayments:
        "The credit card fee must not exceed 4% and the merchant cannot profit from the fee.",
    },
    {
      rule: "4. The credit card fee and product or service price must be processed together. The receipt must show the credit card fee as a separate line item.",
      nagapayments:
        "Our surcharge solution automatically adds the credit card fee as a separate line item on receipts.",
    },
    {
      rule: "5. The merchant cannot apply a fee to debit cards.",
      nagapayments:
        "Our surcharge program automatically detects if the card used is a credit card or debit card. If a debit card is used at the time of sale there will be no surcharge added to the transaction.",
    },
  ];

  return (
    <section className='flex flex-col items-center'>
      <div className='text-center'>
        <h1 className='text-5xl'>Rules For Surcharging</h1>
        <p className='mt-6 mb-14'>
          Surcharge programs have been around for a while now. But
          because card processing is complicated and surcharge
          programs have strict rules, most businesses haven’t
          seriously looked into them.
        </p>
      </div>

      <table className='table-auto border-spacing-x-16'>
        <tbody className='table-row-group'>
          <tr className='h-[72px] bg-muted text-left '>
            <th className='px-10 text-lg font-bold'>Rules</th>
            <th className='px-10 text-lg font-bold'>Nagapayments</th>
          </tr>
          {rules.map((rule, i) => (
            <tr className='border h-28' key={i}>
              <td className='px-8 border-r'>{rule.rule}</td>
              <td className='px-8'>{rule.nagapayments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SurchargeRules;
