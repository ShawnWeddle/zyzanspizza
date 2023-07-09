import { useRouter } from "next/router";
import { useOrderContext } from "~/hooks/useOrderContext";
import {
  PizzaInCartSpan,
  WingsInCartSpan,
  SidesInCartSpan,
  DessertsInCartSpan,
  DrinksInCartSpan,
  SaucesInCartSpan,
} from "./CartItems/CartItems";
import { wholePrice } from "~/data/priceCalculator";

const CheckoutList: React.FC = () => {
  const router = useRouter();
  const { orderState, orderDispatch } = useOrderContext();
  const { Pizzas, Sides, Wings, Desserts, Drinks, Sauces, customerName } =
    orderState;

  const PizzaList = Pizzas.map((pizza, index) => {
    return (
      <div
        key={`pizza-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <PizzaInCartSpan pizza={pizza} index={index} />
        <p className="font-bold">${pizza.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
            onClick={() => {
              orderDispatch({
                type: "REMOVE",
                payload: {
                  order: [pizza],
                  customerName: orderState.customerName,
                },
              });
            }}
          >
            ✕
          </button>
        </div>
      </div>
    );
  });
  const WingsList = Wings.map((wings, index) => {
    return (
      <div
        key={`wings-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <WingsInCartSpan wings={wings} index={index} />
        <p className="font-bold">${wings.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
            onClick={() => {
              orderDispatch({
                type: "REMOVE",
                payload: {
                  order: [wings],
                  customerName: orderState.customerName,
                },
              });
            }}
          >
            ✕
          </button>
        </div>
      </div>
    );
  });
  const SidesList = Sides.map((sides, index) => {
    return (
      <div
        key={`sides-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <SidesInCartSpan sides={sides} index={index} />
        <p className="font-bold">${sides.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
            onClick={() => {
              orderDispatch({
                type: "REMOVE",
                payload: {
                  order: [sides],
                  customerName: orderState.customerName,
                },
              });
            }}
          >
            ✕
          </button>
        </div>
      </div>
    );
  });
  const DessertsList = Desserts.map((desserts, index) => {
    return (
      <div
        key={`desserts-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <DessertsInCartSpan desserts={desserts} index={index} />
        <p className="font-bold">${desserts.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
            onClick={() => {
              orderDispatch({
                type: "REMOVE",
                payload: {
                  order: [desserts],
                  customerName: orderState.customerName,
                },
              });
            }}
          >
            ✕
          </button>
        </div>
      </div>
    );
  });
  const DrinksList = Drinks.map((drinks, index) => {
    return (
      <div
        key={`drinks-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <DrinksInCartSpan drinks={drinks} index={index} />
        <p className="font-bold">${drinks.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
            onClick={() => {
              orderDispatch({
                type: "REMOVE",
                payload: {
                  order: [drinks],
                  customerName: orderState.customerName,
                },
              });
            }}
          >
            ✕
          </button>
        </div>
      </div>
    );
  });
  const SaucesList = Sauces.map((sauces, index) => {
    return (
      <div
        key={`sauces-${index}`}
        className="flex items-center even:bg-green-800/10 hover:bg-green-800/20"
      >
        <SaucesInCartSpan sauces={sauces} index={index} />
        <p className="font-bold">${sauces.price}</p>
        <div>
          <button
            className="mx-4 rounded-full font-semibold text-red-500 hover:text-zinc-50"
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
      </div>
    );
  });

  const FoodItemList = [
    ...PizzaList,
    ...WingsList,
    ...SidesList,
    ...DessertsList,
    ...DrinksList,
    ...SaucesList,
  ];

  return (
    <div className="mt-2 w-full sm:max-w-screen-sm">
      <div className="relative bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        <div className="absolute top-4 left-2">
          <div className="text-base">
            <button
              className="hover:text-zinc-800"
              onClick={() => void router.push("/order")}
            >
              🡄 Edit Order
            </button>
          </div>
        </div>
        Your Order
      </div>
      <div className="max-h-full border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        {FoodItemList.length > 0 ? (
          FoodItemList
        ) : (
          <div className="flex items-center justify-center">
            <p className="m-2 font-bold">There is nothing in your cart.</p>
          </div>
        )}
        <div className="flex justify-center gap-4">
          <p className="text-2xl font-bold">Subtotal</p>
          <p className="text-2xl font-bold">${wholePrice(orderState).text}</p>
        </div>
        <div className="m-2 flex justify-center">
          <button
            className="rounded-full bg-red-500 p-1 px-2 text-lg text-white hover:bg-red-400 disabled:bg-red-200"
            disabled={FoodItemList.length === 0}
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
