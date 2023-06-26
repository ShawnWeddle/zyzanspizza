import { useState } from "react";
import { sauceOptionsList } from "~/data/names";
import CreateSauces from "../CreateFoodItem/CreateSauces";

type SauceOptionType = (typeof sauceOptionsList)[number];

const OrderSauces: React.FC = () => {
  const Sauces = sauceOptionsList.map((pizza, index) => {
    return <CreateSauces name={pizza} key={index} />;
  });

  return (
    <div className="flex justify-center">
      <div className="my-2 w-full sm:max-w-md">
        <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
          Sauces
        </div>
        <div className="border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-0">
          {Sauces}
        </div>
      </div>
    </div>
  );
};

export default OrderSauces;
