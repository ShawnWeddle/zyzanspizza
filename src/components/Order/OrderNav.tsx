import { useState } from "react";
import { orderCategories } from "~/data/names";
import CreatePizzaOrder from "./CreatePizza";

const OrderNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    (typeof orderCategories)[number]
  >("Create your own pizza");
  const orderButtons = orderCategories.map((category, index) => {
    if (category === activeCategory) {
      return (
        <button
          key={index}
          className="mt-2 rounded-t-xl bg-green-800 p-2 text-xl font-semibold text-zinc-50 "
        >
          {category}
        </button>
      );
    } else {
      return (
        <button
          key={index}
          className="mt-2 rounded-t-xl p-2 text-xl font-semibold hover:bg-green-800/50"
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
      <div className="flex justify-center gap-2">{orderButtons}</div>
      <div className="h-0.5 bg-green-800"></div>
      <CreatePizzaOrder />
    </div>
  );
};

export default OrderNav;
