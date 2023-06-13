import { useState } from "react";
import { orderCategories } from "~/data/names";
import CreatePizzaOrder from "./CreatePizza";
import OrderSpecialtyPizza from "./OrderSpecialtyPizza";

const OrderNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    (typeof orderCategories)[number]
  >("Create your own pizza");
  const orderButtons = orderCategories.map((category, index) => {
    if (category === activeCategory) {
      return (
        <button
          key={index}
          className="whitespace-nowrap rounded-xl bg-green-800 p-2 text-xl font-semibold text-zinc-50 sm:mt-2 lg:rounded-t-xl lg:rounded-b-none"
        >
          {category}
        </button>
      );
    } else {
      return (
        <button
          key={index}
          className="whitespace-nowrap rounded-xl p-2 text-xl font-semibold hover:bg-green-800/50 sm:mt-2 lg:rounded-t-xl lg:rounded-b-none"
          onClick={() => {
            setActiveCategory(category);
          }}
        >
          {category}
        </button>
      );
    }
  });
  return (
    <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
      <div className="flex flex-wrap justify-center sm:gap-2">
        <div className="flex sm:gap-2">
          {orderButtons[0]}
          {orderButtons[1]}
        </div>
        <div className="flex sm:gap-2">
          {orderButtons[2]}
          {orderButtons[3]}
          {orderButtons[4]}
          {orderButtons[5]}
          {orderButtons[6]}
        </div>
      </div>
      <div className="my-2 h-0.5 bg-green-800 lg:my-0"></div>
      <OrderSpecialtyPizza />
    </div>
  );
};

export default OrderNav;
