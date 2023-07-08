import { useState } from "react";
import { useOrderContext } from "~/hooks/useOrderContext";
import {} from "~/data/names";
import {} from "~/data/pizzaPrice";
import type { dessertsOptionsList } from "~/data/names";

type DessertsList = (typeof dessertsOptionsList)[number];
type CreateDessertProps = {
  activeDessert: DessertsList | undefined;
  setActiveDessert: React.Dispatch<
    React.SetStateAction<DessertsList | undefined>
  >;
};

const CreateBigBrownie: React.FC<CreateDessertProps> = (
  props: CreateDessertProps
) => {
  const [brownieQuantity, setBrownieQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Big Brownie
      </div>
      <div className="flex max-h-full justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex flex-col justify-center">
          <p>
            Who doesn&apos;t love big, fudgy, chocolately brownies? You
            don&apos;t? Then you can lick the chocolate syrup off the top.
          </p>
          {props.activeDessert === "Big Brownie" && (
            <>
              <div className="m-2 flex justify-center">
                <button
                  onClick={() => {
                    setBrownieQuantity(brownieQuantity - 1);
                  }}
                  disabled={brownieQuantity <= 1}
                  className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                >
                  -
                </button>
                <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                  {brownieQuantity}
                </div>
                <button
                  onClick={() => {
                    setBrownieQuantity(brownieQuantity + 1);
                  }}
                  className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <div className="m-2 flex justify-center">
                <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                  ${(Math.round(6.99 * brownieQuantity * 100) / 100).toFixed(2)}
                </div>
                <button
                  className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                  onClick={() => {
                    orderDispatch({
                      type: "ADD",
                      payload: {
                        order: [
                          {
                            id: crypto.randomUUID(),
                            foodType: "DESSERTS",
                            dessertOption: "Big Brownie",
                            quantity: brownieQuantity,
                          },
                        ],
                        customerName: orderState.customerName,
                      },
                    });
                  }}
                >
                  Add to order
                </button>
              </div>
            </>
          )}
          {props.activeDessert !== "Big Brownie" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveDessert("Big Brownie");
                }}
              >
                ORDER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CreateBigCookie: React.FC<CreateDessertProps> = (
  props: CreateDessertProps
) => {
  const [cookieQuantity, setCookieQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Big Cookie
      </div>
      <div className="flex max-h-full justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex flex-col justify-center">
          <p>
            A big, warm, chocolate chip cookie. Designed to be shared, but
            technically you can eat it by yourself.
          </p>
          {props.activeDessert === "Big Cookie" && (
            <>
              <div className="m-2 flex justify-center">
                <button
                  onClick={() => {
                    setCookieQuantity(cookieQuantity - 1);
                  }}
                  disabled={cookieQuantity <= 1}
                  className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                >
                  -
                </button>
                <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                  {cookieQuantity}
                </div>
                <button
                  onClick={() => {
                    setCookieQuantity(cookieQuantity + 1);
                  }}
                  className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <div className="m-2 flex justify-center">
                <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                  ${(Math.round(6.99 * cookieQuantity * 100) / 100).toFixed(2)}
                </div>
                <button
                  className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                  onClick={() => {
                    orderDispatch({
                      type: "ADD",
                      payload: {
                        order: [
                          {
                            id: crypto.randomUUID(),
                            foodType: "DESSERTS",
                            dessertOption: "Big Cookie",
                            quantity: cookieQuantity,
                          },
                        ],
                        customerName: orderState.customerName,
                      },
                    });
                  }}
                >
                  Add to order
                </button>
              </div>
            </>
          )}
          {props.activeDessert !== "Big Cookie" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveDessert("Big Cookie");
                }}
              >
                ORDER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CreateCinnamonRolls: React.FC<CreateDessertProps> = (
  props: CreateDessertProps
) => {
  const [cinnamonRollQuantity, setCinnamonRollQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Pull-Apart Cinnamon Rolls
      </div>
      <div className="flex max-h-full justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex flex-col justify-center">
          <p>
            Like Grandma used to make, but better. Bite-sized cinnamon roll
            pieces drizzled with icing.
          </p>
          {props.activeDessert === "Pull-Apart Cinnamon Rolls" && (
            <>
              <div className="m-2 flex justify-center">
                <button
                  onClick={() => {
                    setCinnamonRollQuantity(cinnamonRollQuantity - 1);
                  }}
                  disabled={cinnamonRollQuantity <= 1}
                  className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                >
                  -
                </button>
                <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                  {cinnamonRollQuantity}
                </div>
                <button
                  onClick={() => {
                    setCinnamonRollQuantity(cinnamonRollQuantity + 1);
                  }}
                  className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <div className="m-2 flex justify-center">
                <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                  $
                  {(
                    Math.round(6.99 * cinnamonRollQuantity * 100) / 100
                  ).toFixed(2)}
                </div>
                <button
                  className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                  onClick={() => {
                    orderDispatch({
                      type: "ADD",
                      payload: {
                        order: [
                          {
                            id: crypto.randomUUID(),
                            foodType: "DESSERTS",
                            dessertOption: "Pull-Apart Cinnamon Rolls",
                            quantity: cinnamonRollQuantity,
                          },
                        ],
                        customerName: orderState.customerName,
                      },
                    });
                  }}
                >
                  Add to order
                </button>
              </div>
            </>
          )}
          {props.activeDessert !== "Pull-Apart Cinnamon Rolls" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveDessert("Pull-Apart Cinnamon Rolls");
                }}
              >
                ORDER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DessertsInCart: React.FC = () => {
  const { orderState, orderDispatch } = useOrderContext();

  const cartDesserts = orderState.Desserts.map((desserts, index) => {
    return (
      <div key={index} className="flex justify-between">
        <p key={index} className="m-2 text-lg text-zinc-50">
          • <span className="font-semibold">{desserts.quantity}</span>
          {" - "}
          {desserts.dessertOption}
        </p>
        <button
          className="mx-2 text-white"
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
    );
  });

  return (
    <div className="my-2 w-full bg-gradient-to-br from-blue-700 to-blue-800 sm:rounded-xl">
      {cartDesserts.length > 0 ? (
        <>
          <p className="m-2 text-lg text-zinc-50">Desserts in cart:</p>
          {cartDesserts}
        </>
      ) : (
        <p className="m-2 text-lg font-semibold text-red-200">
          NO DESSERTS IN CART
        </p>
      )}
    </div>
  );
};

export {
  CreateBigBrownie,
  CreateBigCookie,
  CreateCinnamonRolls,
  DessertsInCart,
};
