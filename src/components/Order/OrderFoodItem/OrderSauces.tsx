import { useState } from "react";
import { sauceOptionsList, sauceBreakdown } from "~/data/names";
import CreateSauces from "../CreateFoodItem/CreateSauces";

type SauceOptionType = (typeof sauceOptionsList)[number];
type SauceBreakdownType = typeof sauceBreakdown;

const OrderSauces: React.FC = () => {
  const [sauceTotals, setSauceTotals] =
    useState<SauceBreakdownType>(sauceBreakdown);

  const setSauces = (option: SauceOptionType, quantity: number) => {
    const newSauceTotals = { ...sauceTotals };
    newSauceTotals[option] = quantity;
    setSauceTotals(newSauceTotals);
  };

  const Sauces = sauceOptionsList.map((sauce, index) => {
    return <CreateSauces name={sauce} key={index} />;
  });

  return (
    <div className="flex justify-center">
      <div className="my-2 w-full sm:max-w-md">
        <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
          Sauces
        </div>
        <div className="border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-0">
          {Sauces}
          <div className="flex justify-center">
            <button className="m-2 rounded-full bg-red-500 p-1 px-2 text-lg text-white hover:bg-red-400">
              Add to order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSauces;
