import { useState } from "react";
import { z } from "zod";
import {
  pizzaSizeList,
  pizzaCrustList,
  pizzaToppingsList,
  pizzaCrustFlavorList,
  specialBakeList,
  specialCutList,
  specialtyPizzaNameList,
  sizeToInches,
} from "~/data/names";
import type {
  PizzaSizeListType,
  PizzaCrustListType,
  PizzaSauceListType,
  PizzaCrustFlavorListType,
  SpecialBakeListType,
  SpecialCutListType,
  SpecialtyPizzaNameType,
} from "~/data/ordertypes";
import type { SpecialtyToppingsType } from "~/data/names";
import { specialtyPizzaPrice } from "~/data/priceCalculator";
import specialtyToppingAlg from "~/data/specialtyToppingAlg";
import { useOrderContext } from "~/hooks/useOrderContext";
import { PizzaInCartSpan } from "~/components/CartItems/CartItems";

const specialtyEnum = z.enum(specialtyPizzaNameList);
const sizeEnum = z.enum(pizzaSizeList);
const crustEnum = z.enum(pizzaCrustList);
const specialtyToppingsEnum = z.enum([
  ...pizzaToppingsList,
  "Double Pepperoni",
  "Extra Cheese",
]);
const crustFlavorEnum = z.enum(pizzaCrustFlavorList);
const bakeEnum = z.enum(specialBakeList);
const cutEnum = z.enum(specialCutList);

const CreateSpecialtyPizzaOrder: React.FC = () => {
  const { orderState, orderDispatch } = useOrderContext();

  const [specialtyPizza, setSpecialtyPizza] =
    useState<SpecialtyPizzaNameType>("Deluxe");
  const [pizzaSize, setPizzaSize] = useState<PizzaSizeListType>("Large");
  const [pizzaCrust, setPizzaCrust] = useState<PizzaCrustListType>("Original");
  const [pizzaSauce] = useState<PizzaSauceListType>("Pizza sauce");
  const [pizzaToppings, setPizzaToppings] = useState<SpecialtyToppingsType[]>(
    specialtyToppingAlg(specialtyPizza)
  );
  const [activePizzaToppings, setActivePizzaToppings] = useState<
    SpecialtyToppingsType[]
  >(specialtyToppingAlg(specialtyPizza));
  const [pizzaCrustFlavor, setPizzaCrustFlavor] =
    useState<PizzaCrustFlavorListType>("None");
  const [specialBake, setSpecialBake] = useState<SpecialBakeListType>("Normal");
  const [specialCut, setSpecialCut] =
    useState<SpecialCutListType>("Triangle Cut");
  const [pizzaQuantity, setPizzaQuantity] = useState<number>(1);

  const pizzaDescription = `${pizzaQuantity} - ${
    sizeToInches[pizzaSize]
  }" ${pizzaCrust} ${specialtyPizza} ${
    pizzaQuantity > 1 ? "pizzas" : "pizza"
  } ${pizzaCrustFlavor !== "None" ? `, and ${pizzaCrustFlavor} crust` : ""}`;

  const cartPizzas = orderState.Pizzas.map((pizza, index) => {
    return (
      <div key={index} className="flex justify-between text-white">
        <PizzaInCartSpan pizza={pizza} index={index} />
        <button
          className="mx-2"
          onClick={() => {
            orderDispatch({
              type: "REMOVE",
              payload: {
                order: [pizza],
              },
            });
          }}
        >
          ✕
        </button>
      </div>
    );
  });

  const specialtyList = specialtyPizzaNameList.map((pizza, index) => {
    return (
      <option key={index} value={pizza}>
        {pizza}
      </option>
    );
  });
  const sizeList = pizzaSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={size}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id;
            setPizzaSize(sizeEnum.parse(newSize));
          }}
          checked={size === pizzaSize}
        />
        <label>{size}</label>
      </div>
    );
  });
  const crustList = pizzaCrustList.map((crust, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={crust}
          name="crust_group"
          onChange={(e) => {
            const newCrust = e.target.id;
            setPizzaCrust(crustEnum.parse(newCrust));
          }}
          checked={crust === pizzaCrust}
        />
        <label>{crust}</label>
      </div>
    );
  });
  const toppingsList = activePizzaToppings.map((topping, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="checkbox"
          id={topping}
          name="topping_group"
          checked={pizzaToppings.includes(topping)}
          onChange={(e) => {
            const newTopping = specialtyToppingsEnum.parse(e.target.id);
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
        />
        <label>{topping}</label>
      </div>
    );
  });
  const crustFlavorList = pizzaCrustFlavorList.map((crustFlavor, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={crustFlavor}
          name="crustFlavor_group"
          onChange={(e) => {
            const newCrustFlavor = e.target.id;
            setPizzaCrustFlavor(crustFlavorEnum.parse(newCrustFlavor));
          }}
          checked={crustFlavor === pizzaCrustFlavor}
        />
        <label>{crustFlavor}</label>
      </div>
    );
  });
  const specialBakeOrderList = specialBakeList.map((bake, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={bake}
          name="bake_group"
          onChange={(e) => {
            const newBake = e.target.id;
            setSpecialBake(bakeEnum.parse(newBake));
          }}
          checked={bake === specialBake}
        />
        <label>{bake}</label>
      </div>
    );
  });
  const specialCutOrderList = specialCutList.map((cut, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={cut}
          name="cut_group"
          onChange={(e) => {
            const newCut = e.target.id;
            setSpecialCut(cutEnum.parse(newCut));
          }}
          checked={cut === specialCut}
        />
        <label>{cut}</label>
      </div>
    );
  });
  const removedToppings = activePizzaToppings.map((topping, index) => {
    if (pizzaToppings.includes(topping)) {
      return <p key={index}></p>;
    } else {
      return (
        <p key={index} className="text-lg font-semibold text-zinc-50">
          **NO {topping}**
        </p>
      );
    }
  });

  return (
    <div className="mt-4 grow">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="mb-4 flex w-full flex-col justify-between bg-gradient-to-br from-green-700 to-green-800 sm:rounded-xl">
          <div className="p-2">
            <p className="text-lg text-zinc-50">{pizzaDescription}</p>
            {specialBake !== "Normal" && (
              <p className="text-lg font-semibold text-zinc-50">
                **{specialBake}**
              </p>
            )}
            {((specialCut !== "Triangle Cut" && pizzaCrust === "Original") ||
              (specialCut !== "Square Cut" && pizzaCrust === "Thin")) && (
              <p className="text-lg font-semibold text-zinc-50">
                **{specialCut}**
              </p>
            )}
            {removedToppings}
          </div>
          <div className="flex justify-start">
            <div className="m-2 flex justify-center">
              <button
                onClick={() => {
                  setPizzaQuantity(pizzaQuantity - 1);
                }}
                disabled={pizzaQuantity <= 1}
                className="h-10 w-10 rounded-l-full border font-mono text-2xl font-bold text-zinc-50 disabled:bg-green-200"
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
                className="h-10 w-10 rounded-r-full border font-mono text-2xl font-bold text-zinc-50"
              >
                +
              </button>
            </div>
            <div className="m-2 flex justify-center">
              <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                ${specialtyPizzaPrice(pizzaQuantity, pizzaSize).text}
              </div>
              <button
                className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white"
                onClick={() => {
                  orderDispatch({
                    type: "ADD",
                    payload: {
                      order: [
                        {
                          id: crypto.randomUUID(),
                          foodType: "PIZZA",
                          size: pizzaSize,
                          crust: pizzaCrust,
                          sauce: pizzaSauce,
                          toppings: pizzaToppings,
                          crustFlavor: pizzaCrustFlavor,
                          quantity: pizzaQuantity,
                          specialBakeInstructions: specialBake,
                          specialCutInstructions: specialCut,
                          isSpecialtyPizza: true,
                          specialtyPizzaName: specialtyPizza,
                          removedToppings: [],
                          price: specialtyPizzaPrice(pizzaQuantity, pizzaSize)
                            .number,
                          description: pizzaDescription,
                        },
                      ],
                    },
                  });
                }}
              >
                Add to order
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 w-full bg-gradient-to-br from-blue-700 to-blue-800 sm:rounded-xl">
          {cartPizzas.length > 0 ? (
            <>
              <p className="m-2 text-lg text-zinc-50">Pizzas in cart:</p>
              {cartPizzas}
            </>
          ) : (
            <p className="m-2 text-lg font-semibold text-red-200">
              NO PIZZAS IN CART
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="mx-2 grid grid-cols-2 sm:mx-0 sm:grid-cols-1">
          <div>
            <div>
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Specialty Pizzas:
              </span>
            </div>
            <div className="m-2">
              <select
                onChange={(e) => {
                  const newPizza = specialtyEnum.parse(e.target.value);
                  setSpecialtyPizza(newPizza);
                  const newToppings = specialtyToppingAlg(newPizza);
                  setActivePizzaToppings(newToppings);
                  setPizzaToppings(newToppings);
                }}
                className="dark:bg-zinc-700"
              >
                {specialtyList}
              </select>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Size:
                </span>
              </div>
              <div className="m-2">{sizeList}</div>
            </div>
            <div>
              <div>
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Crust:
                </span>
              </div>
              <div className="m-2">{crustList}</div>
            </div>
          </div>
        </div>
        <div className="mx-2 sm:col-span-2 sm:mx-0">
          <div>
            <div>
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Toppings:
              </span>
            </div>
            <div className="m-2 grid grid-cols-3">{toppingsList}</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="">
              <div>
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Crust Flavors:
                </span>
              </div>
              <div className="m-2">{crustFlavorList}</div>
            </div>
            <div className="col-span-2">
              <div>
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Special Instructions:
                </span>
              </div>
              <div className="m-2 grid grid-cols-2 gap-2">
                <div>{specialBakeOrderList}</div>
                <div>{specialCutOrderList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSpecialtyPizzaOrder;
