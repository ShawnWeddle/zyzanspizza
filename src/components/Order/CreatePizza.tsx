import { useState } from "react";
import { z } from "zod";
import {
  pizzaSizeList,
  pizzaCrustList,
  pizzaSauceList,
  pizzaToppingsList,
  pizzaCrustFlavorList,
  specialBakeList,
  specialCutList,
  sizeToInches,
} from "~/data/names";
import { pizzaPrice } from "~/data/pizzaPrice";
import { useOrderContext } from "~/hooks/useOrderContext";

const sizeEnum = z.enum(pizzaSizeList);
const crustEnum = z.enum(pizzaCrustList);
const sauceEnum = z.enum(pizzaSauceList);
const toppingEnum = z.enum(pizzaToppingsList);
const crustFlavorEnum = z.enum(pizzaCrustFlavorList);
const bakeEnum = z.enum(specialBakeList);
const cutEnum = z.enum(specialCutList);

const CreatePizzaOrder: React.FC = () => {
  const { orderState, orderDispatch } = useOrderContext();

  const [pizzaSize, setPizzaSize] =
    useState<(typeof pizzaSizeList)[number]>("Large");
  const [pizzaCrust, setPizzaCrust] =
    useState<(typeof pizzaCrustList)[number]>("Original");
  const [pizzaSauce, setPizzaSauce] =
    useState<(typeof pizzaSauceList)[number]>("Pizza sauce");
  const [pizzaToppings, setPizzaToppings] = useState<
    (typeof pizzaToppingsList)[number][]
  >([]);
  const [pizzaCrustFlavor, setPizzaCrustFlavor] =
    useState<(typeof pizzaCrustFlavorList)[number]>("None");
  const [specialBake, setSpecialBake] =
    useState<(typeof specialBakeList)[number]>("Normal");
  const [specialCut, setSpecialCut] =
    useState<(typeof specialCutList)[number]>("Triangle Cut");
  const [pizzaQuantity, setPizzaQuantity] = useState<number>(1);

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
  const sauceList = pizzaSauceList.map((sauce, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={sauce}
          name="sauce_group"
          onChange={(e) => {
            const newSauce = e.target.id;
            setPizzaSauce(sauceEnum.parse(newSauce));
          }}
          checked={sauce === pizzaSauce}
        />
        <label>{sauce}</label>
      </div>
    );
  });
  const toppingsList = pizzaToppingsList.map((topping, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="checkbox"
          id={topping}
          name="topping_group"
          onChange={(e) => {
            const newTopping = toppingEnum.parse(e.target.id);
            const newToppingList = [...pizzaToppings];
            if (newToppingList.includes(newTopping)) {
              for (let i = newToppingList.length - 1; i >= 0; i--) {
                if (newToppingList[i] === newTopping) {
                  newToppingList.splice(i, 1);
                  setPizzaToppings(newToppingList);
                  console.log(pizzaToppings);
                }
              }
            } else {
              newToppingList.push(newTopping);
              setPizzaToppings(newToppingList);
              console.log(pizzaToppings);
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

  return (
    <div className="mt-4">
      <div className="grid grid-cols-3">
        <div>
          <div className="m-2 flex justify-center">
            <button
              onClick={() => {
                setPizzaQuantity(pizzaQuantity - 1);
              }}
              disabled={pizzaQuantity <= 1}
              className="h-8 w-8 rounded-l-full bg-green-800 font-mono text-2xl font-bold text-zinc-50 disabled:bg-green-800/50"
            >
              -
            </button>
            <div className="h-8 border-y border-green-800 bg-zinc-50 py-0.5 px-2">
              {pizzaQuantity}
            </div>
            <button
              onClick={() => {
                setPizzaQuantity(pizzaQuantity + 1);
              }}
              className="h-8 w-8 rounded-r-full bg-green-800 font-mono text-2xl font-bold text-zinc-50"
            >
              +
            </button>
          </div>
          <div>
            <div className="flex justify-center">
              <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold">
                ${pizzaPrice(pizzaQuantity, pizzaSize, pizzaToppings)}
              </div>
              <button className="rounded-r-full  bg-red-500 p-1 pr-2 text-lg text-white">
                Add to order
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-lg">
            {pizzaQuantity > 1 ? `${pizzaQuantity} ` : ""}
            {sizeToInches[pizzaSize]}&quot; {pizzaCrust}{" "}
            {pizzaQuantity > 1 ? "pizzas" : "pizza"} with {pizzaSauce}
            {pizzaToppings.length > 0 ? ", " : ""}
            {pizzaToppings.join(", ")}
            {pizzaCrustFlavor !== "None"
              ? `, and ${pizzaCrustFlavor} crust`
              : ""}
          </div>
          {specialBake !== "Normal" && (
            <p className="text-lg font-semibold">**{specialBake}**</p>
          )}
          {((specialCut !== "Triangle Cut" && pizzaCrust === "Original") ||
            (specialCut !== "Square Cut" && pizzaCrust === "Thin")) && (
            <p className="text-lg font-semibold">**{specialCut}**</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3">
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
          <div>
            <div>
              <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                Sauce:
              </span>
            </div>
            <div className="m-2">{sauceList}</div>
          </div>
        </div>
        <div className="col-span-2">
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

export default CreatePizzaOrder;
