import { useState } from "react";
import { z } from "zod";
import { useOrderContext } from "~/hooks/useOrderContext";
import { breadsticksSizeList, breadBallsSizeList } from "~/data/names";
import { breadBallsPrice, breadsticksPrice } from "~/data/pizzaPrice";
import type { sidesOptionsList } from "~/data/names";

type SidesList = (typeof sidesOptionsList)[number];
type StickSizeList = (typeof breadsticksSizeList)[number];
type BallSizeList = (typeof breadBallsSizeList)[number];
type CreateSideProps = {
  activeSide: SidesList | undefined;
  setActiveSide: React.Dispatch<React.SetStateAction<SidesList | undefined>>;
};

const stickSizeEnum = z.enum(breadsticksSizeList);
const ballSizeEnum = z.enum(breadBallsSizeList);

const CreateBreadsticks: React.FC<CreateSideProps> = (
  props: CreateSideProps
) => {
  const [breadsticksSize, setBreadsticksSize] =
    useState<StickSizeList>("4-piece");

  const [breadstickQuantity, setBreadstickQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  const sizeList = breadsticksSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={size}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id;
            setBreadsticksSize(stickSizeEnum.parse(newSize));
          }}
          checked={size === breadsticksSize}
        />
        <label>{size}</label>
      </div>
    );
  });

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Breadsticks
      </div>
      <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex w-full flex-col justify-center">
          <p>Sticks of bread about six inches in length</p>
          {props.activeSide === "Breadsticks" && (
            <div className="flex justify-between">
              <form>{sizeList}</form>
              <div className="flex flex-col justify-center">
                <div className="m-2 flex justify-end">
                  <button
                    onClick={() => {
                      setBreadstickQuantity(breadstickQuantity - 1);
                    }}
                    disabled={breadstickQuantity <= 1}
                    className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                  >
                    -
                  </button>
                  <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                    {breadstickQuantity}
                  </div>
                  <button
                    onClick={() => {
                      setBreadstickQuantity(breadstickQuantity + 1);
                    }}
                    className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <div className="m-2 flex justify-end">
                  <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                    ${breadsticksPrice(breadstickQuantity, breadsticksSize)}
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
                              foodType: "SIDES",
                              size: breadsticksSize,
                              sideOption: "Breadsticks",
                              quantity: breadstickQuantity,
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
              </div>
            </div>
          )}
          {props.activeSide !== "Breadsticks" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveSide("Breadsticks");
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

const CreateBreadballs: React.FC<CreateSideProps> = (
  props: CreateSideProps
) => {
  const [breadballsSize, setBreadballsSize] =
    useState<BallSizeList>("16-piece");

  const [breadballQuantity, setBreadballQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  const sizeList = breadBallsSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={size}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id;
            setBreadballsSize(ballSizeEnum.parse(newSize));
          }}
          checked={size === breadballsSize}
        />
        <label>{size}</label>
      </div>
    );
  });

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Garlic Parm Bread Balls
      </div>
      <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex w-full flex-col justify-center">
          <p>
            You do not need to read this description. The name tells you all you
            need to know.
          </p>
          {props.activeSide === "Bread Balls" && (
            <div className="flex justify-between">
              <form>{sizeList}</form>
              <div className="flex flex-col justify-center">
                <div className="m-2 flex justify-end">
                  <button
                    onClick={() => {
                      setBreadballQuantity(breadballQuantity - 1);
                    }}
                    disabled={breadballQuantity <= 1}
                    className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                  >
                    -
                  </button>
                  <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                    {breadballQuantity}
                  </div>
                  <button
                    onClick={() => {
                      setBreadballQuantity(breadballQuantity + 1);
                    }}
                    className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                  >
                    +
                  </button>
                </div>
                <div className="m-2 flex justify-end">
                  <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                    ${breadBallsPrice(breadballQuantity, breadballsSize)}
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
                              foodType: "SIDES",
                              size: breadballsSize,
                              sideOption: "Bread Balls",
                              quantity: breadballQuantity,
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
              </div>
            </div>
          )}
          {props.activeSide !== "Bread Balls" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveSide("Bread Balls");
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

const CreateCheeseBread: React.FC<CreateSideProps> = (
  props: CreateSideProps
) => {
  const [cheeseBreadQuantity, setCheeseBreadQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Cheese Bread
      </div>
      <div className="flex max-h-full justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        <div className="flex flex-col justify-center">
          <p>
            Pull-apart breadsticks stuffed and covered with mozzarella and
            cheddar cheese
          </p>
          {props.activeSide === "Cheese Bread" && (
            <>
              <div className="m-2 flex justify-center">
                <button
                  onClick={() => {
                    setCheeseBreadQuantity(cheeseBreadQuantity - 1);
                  }}
                  disabled={cheeseBreadQuantity <= 1}
                  className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
                >
                  -
                </button>
                <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
                  {cheeseBreadQuantity}
                </div>
                <button
                  onClick={() => {
                    setCheeseBreadQuantity(cheeseBreadQuantity + 1);
                  }}
                  className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
                >
                  +
                </button>
              </div>
              <div className="m-2 flex justify-center">
                <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
                  $
                  {(Math.round(4.99 * cheeseBreadQuantity * 100) / 100).toFixed(
                    2
                  )}
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
                            foodType: "SIDES",
                            size: null,
                            sideOption: "Cheese Bread",
                            quantity: cheeseBreadQuantity,
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
          {props.activeSide !== "Cheese Bread" && (
            <div className="m-2 flex justify-center">
              <button
                className="rounded-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400"
                onClick={() => {
                  props.setActiveSide("Cheese Bread");
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

const SidesInCart: React.FC = () => {
  const { orderState, orderDispatch } = useOrderContext();

  const cartSides = orderState.Sides.map((sides, index) => {
    return (
      <div key={index} className="flex justify-between">
        <p key={index} className="m-2 text-lg text-zinc-50">
          • <span className="font-semibold">{sides.quantity}</span>
          {" - "}
          {sides.size} {sides.sideOption}
        </p>
        <button
          className="mx-2 text-white"
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
    );
  });

  return (
    <div className="my-2 w-full bg-gradient-to-br from-blue-700 to-blue-800 sm:rounded-xl">
      {cartSides.length > 0 ? (
        <>
          <p className="m-2 text-lg text-zinc-50">Sides in cart:</p>
          {cartSides}
        </>
      ) : (
        <p className="m-2 text-lg font-semibold text-red-200">
          NO SIDES IN CART
        </p>
      )}
    </div>
  );
};

export { CreateBreadsticks, CreateBreadballs, CreateCheeseBread, SidesInCart };
