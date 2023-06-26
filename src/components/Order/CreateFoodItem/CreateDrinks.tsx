import { useState } from "react";
import { z } from "zod";
import { useOrderContext } from "~/hooks/useOrderContext";
import { drinksSizeList, drinksOptionsList } from "~/data/names";
import { drinksPrice } from "~/data/pizzaPrice";

const sizeEnum = z.enum(drinksSizeList);
const optionEnum = z.enum(drinksOptionsList);

type DrinksSizeType = (typeof drinksSizeList)[number];
type DrinksOptionsType = (typeof drinksOptionsList)[number];

const CreateDrinks: React.FC = () => {
  const [drinksSize, setDrinksSize] = useState<DrinksSizeType>("2-liter");
  const [drinksOption, setDrinksOption] = useState<DrinksOptionsType>("Cola");
  const [drinksQuantity, setDrinksQuantity] = useState<number>(1);

  const sizeList = drinksSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={size}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id;
            setDrinksSize(sizeEnum.parse(newSize));
          }}
          checked={size === drinksSize}
        />
        <label>{size}</label>
      </div>
    );
  });

  const optionList = drinksOptionsList.map((option, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={option}
          name="option_group"
          onChange={(e) => {
            const newOption = e.target.id;
            setDrinksOption(optionEnum.parse(newOption));
          }}
          checked={option === drinksOption}
        />
        <label>{option}</label>
      </div>
    );
  });

  return (
    <div className="mt-2 w-full sm:max-w-screen-sm">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        Drinks
      </div>
      <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="grid grid-cols-2">
          <div className="my-4 flex justify-center">
            <form>
              <div className="m-1">
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Drinks:
                </span>
              </div>
              {optionList}
            </form>
          </div>
          <div className="my-4 flex justify-center">
            <form>
              <div className="m-1">
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Size:
                </span>
              </div>
              {sizeList}
            </form>
          </div>
        </div>
        <div className="m-2 flex justify-center">
          <button
            onClick={() => {
              setDrinksQuantity(drinksQuantity - 1);
            }}
            disabled={drinksQuantity <= 1}
            className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
          >
            -
          </button>
          <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
            {drinksQuantity}
          </div>
          <button
            onClick={() => {
              setDrinksQuantity(drinksQuantity + 1);
            }}
            className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
          >
            +
          </button>
        </div>
        <div className="m-2 flex justify-center">
          <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
            ${drinksPrice(drinksQuantity, drinksSize)}
          </div>
          <button className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400">
            Add to order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDrinks;
