import { useState } from "react";
import { z } from "zod";
import { useOrderContext } from "~/hooks/useOrderContext";
import {
  pizzaSizeList,
  pizzaToppingsList,
  specialtyPizzaToppingsList,
  specialtyPizzaDescriptionsSearch,
} from "~/data/names";
import type {
  specialtyPizzaNameList,
  SpecialtyToppingsType,
} from "~/data/names";
import { specialtyPizzaPrice } from "~/data/pizzaPrice";

type SpecialtyPizzaNameType = (typeof specialtyPizzaNameList)[number];
type CreateSpecialtyPizzaProps = {
  name: SpecialtyPizzaNameType;
  activePizza: SpecialtyPizzaNameType | undefined;
  setActivePizza: React.Dispatch<
    React.SetStateAction<SpecialtyPizzaNameType | undefined>
  >;
};

const sizeEnum = z.enum(pizzaSizeList);
const toppingsEnum = z.enum([
  ...pizzaToppingsList,
  "Double Pepperoni",
  "Extra Cheese",
]);

const CreateSpecialtyPizza: React.FC<CreateSpecialtyPizzaProps> = (
  props: CreateSpecialtyPizzaProps
) => {
  const activePizzaToppings = specialtyPizzaToppingsList[props.name];

  const [pizzaSize, setPizzaSize] =
    useState<(typeof pizzaSizeList)[number]>("Large");
  const [pizzaToppings, setPizzaToppings] = useState<SpecialtyToppingsType[]>([
    ...activePizzaToppings,
  ]);
  const [pizzaQuantity, setPizzaQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  const sizeList = pizzaSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={`${props.name}-${size}`}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id.split("-")[1];
            setPizzaSize(sizeEnum.parse(newSize));
          }}
          checked={size === pizzaSize}
        />
        <label>{size}</label>
      </div>
    );
  });

  const toppingList = activePizzaToppings.map((topping, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="checkbox"
          id={`${props.name}-${topping}`}
          name="size_group"
          onChange={(e) => {
            const newTopping = toppingsEnum.parse(e.target.id.split("-")[1]);
            const newToppingList = [...pizzaToppings];
            if (newToppingList.includes(newTopping)) {
              for (let i = newToppingList.length - 1; i >= 0; i--) {
                if (newToppingList[i] === newTopping) {
                  newToppingList.splice(i, 1);
                  setPizzaToppings(newToppingList);
                }
              }
            } else {
              newToppingList.push(newTopping);
              setPizzaToppings(newToppingList);
            }
          }}
          checked={pizzaToppings?.includes(topping)}
        />
        <label>{topping}</label>
      </div>
    );
  });

  if (props.activePizza === props.name) {
    return (
      <div className="m-2">
        <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
          {props.name}
        </div>
        <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <div className="flex">
            <form>{sizeList}</form>
            <div>{toppingList}</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="m-2 flex justify-end">
              <button
                onClick={() => {
                  setPizzaQuantity(pizzaQuantity - 1);
                }}
                disabled={pizzaQuantity <= 1}
                className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
              >
                -
              </button>
              <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                {pizzaQuantity}
              </div>
              <button
                onClick={() => {
                  setPizzaQuantity(pizzaQuantity + 1);
                }}
                className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
              >
                +
              </button>
            </div>
            <div className="m-2 flex flex-col justify-end sm:flex-row">
              <div className="rounded-t-xl border bg-white p-1 pl-2 text-center text-lg font-semibold dark:text-black sm:rounded-l-full">
                ${specialtyPizzaPrice(pizzaQuantity, pizzaSize)}
              </div>
              <button
                className="rounded-b-xl bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400 sm:rounded-r-full"
                onClick={() => {
                  console.log("order dispatch");
                }}
              >
                Add to order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-2">
        <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
          {props.name}
        </div>
        <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <div className="flex">
            {specialtyPizzaDescriptionsSearch[props.name]}
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="ml-4 rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
              onClick={() => {
                props.setActivePizza(props.name);
              }}
            >
              ORDER
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CreateSpecialtyPizza;
