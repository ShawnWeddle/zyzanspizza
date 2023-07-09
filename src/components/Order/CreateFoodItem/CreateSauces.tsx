import { useState } from "react";
import { useOrderContext } from "~/hooks/useOrderContext";
import { sauceOptionsList } from "~/data/names";
import type { SaucesType } from "~/data/ordertypes";
import { saucesPrice } from "~/data/priceCalculator";
import { SauceNamer } from "~/data/sauceNameAlg";
import { SaucesInCartSpan } from "~/components/CartItems/CartItems";

type SauceBreakdownType = {
  Garlic: number;
  "Spicy Garlic": number;
  Ranch: number;
  "Spicy Ranch": number;
  "Pizza Sauce": number;
  BBQ: number;
  Buffalo: number;
  "Garlic Parmesan": number;
  "Nacho Cheese": number;
  "Blue Cheese": number;
  Icing: number;
};

const emptySauces = {
  Garlic: 0,
  "Spicy Garlic": 0,
  Ranch: 0,
  "Spicy Ranch": 0,
  "Pizza Sauce": 0,
  BBQ: 0,
  Buffalo: 0,
  "Garlic Parmesan": 0,
  "Nacho Cheese": 0,
  "Blue Cheese": 0,
  Icing: 0,
};

const OrderSauces: React.FC = () => {
  const [sauceQuantity, setSauceQuantity] =
    useState<SauceBreakdownType>(emptySauces);

  const { orderState, orderDispatch } = useOrderContext();

  const cartSauces = orderState.Sauces.map((sauces, index) => {
    return (
      <div key={index} className="flex justify-between text-white">
        <SaucesInCartSpan sauces={sauces} index={index} />
        <button
          className="mx-2"
          onClick={() => {
            orderDispatch({
              type: "REMOVE",
              payload: {
                order: [sauces],
                customerName: orderState.customerName,
              },
            });
          }}
        >
          ✕
        </button>
      </div>
    );
  });

  const Sauces = sauceOptionsList.map((sauce, index) => {
    return (
      <div key={index} className="flex justify-between p-2 text-xl sm:mx-2">
        <p className="mr-1 whitespace-nowrap">{sauce}</p>
        <div className="flex">
          <button
            className="w-6 rounded-l border bg-green-800 font-bold text-zinc-50 disabled:bg-green-200"
            onClick={() => {
              setSauceQuantity({
                ...sauceQuantity,
                [sauce]: sauceQuantity[sauce] - 1,
              });
            }}
            disabled={sauceQuantity[sauce] < 1}
          >
            -
          </button>
          <p className="border-y bg-zinc-50 px-2 text-black">
            {sauceQuantity[sauce]}
          </p>
          <button
            className="w-6 rounded-r border bg-green-800 font-bold text-zinc-50"
            onClick={() => {
              setSauceQuantity({
                ...sauceQuantity,
                [sauce]: sauceQuantity[sauce] + 1,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="my-2 w-full sm:w-max">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        Sauces
      </div>
      <div className="grid grid-cols-1 border-gray-500 p-3 sm:grid-cols-2 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-0">
        {Sauces}
        <div className="flex justify-center sm:col-span-2">
          <button
            className="m-2 rounded-full bg-red-500 p-1 px-2 text-lg text-white hover:bg-red-400"
            onClick={() => {
              const fullSauces = Object.entries(sauceQuantity).filter(
                (saucePair) => saucePair[1] > 0
              );
              const newSauces: SaucesType[] = [...fullSauces].map(
                (saucePair) => {
                  return {
                    id: crypto.randomUUID(),
                    foodType: "SAUCES",
                    sauceOption: SauceNamer(saucePair[0]),
                    quantity: saucePair[1],
                    price: saucesPrice(saucePair[1]).number,
                  };
                }
              );
              orderDispatch({
                type: "ADD",
                payload: {
                  order: newSauces,
                  customerName: orderState.customerName,
                },
              });
              setSauceQuantity(emptySauces);
            }}
          >
            Add to order
          </button>
        </div>
        <div className="col-span-2 m-2 bg-gradient-to-br from-blue-700 to-blue-800 sm:rounded-xl">
          {cartSauces.length > 0 ? (
            <>
              <p className="m-2 text-lg text-zinc-50">Sauces in cart:</p>
              {cartSauces}
            </>
          ) : (
            <p className="m-2 text-lg font-semibold text-red-200">
              NO SAUCES IN CART
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSauces;
