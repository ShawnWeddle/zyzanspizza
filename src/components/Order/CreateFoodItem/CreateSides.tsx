import { useState } from "react";
import { z } from "zod";
import { useOrderContext } from "~/hooks/useOrderContext";
import { useOrderHandler } from "~/data/orderHandler";
import { breadsticksSizeList, breadBallsSizeList } from "~/data/names";
import { breadBallsPrice, breadsticksPrice } from "~/data/pizzaPrice";
import type { sidesOptionsList } from "~/data/names";
import type { SidesType } from "~/data/ordertypes";

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
      {props.activeSide === "Breadsticks" && (
        <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <div className="flex">
            <form>{sizeList}</form>
          </div>
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
              <button className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400">
                Add to order
              </button>
            </div>
          </div>
        </div>
      )}
      {props.activeSide !== "Breadsticks" && (
        <div className="flex max-h-full flex-col justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <p>Sticks of bread about six inches in length</p>
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
        </div>
      )}
    </div>
  );
};

const CreateBreadballs: React.FC<CreateSideProps> = (
  props: CreateSideProps
) => {
  const [breadballsSize, setBreadballsSize] =
    useState<BallSizeList>("16-piece");

  const [breadballQuantity, setBreadballQuantity] = useState<number>(1);

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
      {props.activeSide === "Bread Balls" && (
        <div className="flex max-h-full justify-between border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <div className="flex">
            <form>{sizeList}</form>
          </div>
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
              <button className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400">
                Add to order
              </button>
            </div>
          </div>
        </div>
      )}
      {props.activeSide !== "Bread Balls" && (
        <div className="flex max-h-full flex-col justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
          <p>
            You do not need to read this description. The name tells you all you
            need to know.
          </p>
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
        </div>
      )}
    </div>
  );
};

const CreateCheeseBread: React.FC<CreateSideProps> = (
  props: CreateSideProps
) => {
  const [cheeseBreadQuantity, setCheeseBreadQuantity] = useState<number>(1);

  return (
    <div className="my-2">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-xl text-zinc-50 sm:rounded-t sm:p-0">
        Cheese Bread
      </div>
      <div className="flex max-h-full justify-center border-gray-500 p-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:p-1">
        {props.activeSide === "Cheese Bread" && (
          <div className="flex flex-col justify-center">
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
              <button className="rounded-r-full bg-red-500 p-1 pr-2 text-lg text-white hover:bg-red-400">
                Add to order
              </button>
            </div>
          </div>
        )}
        {props.activeSide !== "Cheese Bread" && (
          <div className="flex flex-col justify-center">
            <p>
              Pull-apart breadsticks stuffed and covered with mozzarella and
              cheddar cheese
            </p>
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
          </div>
        )}
      </div>
    </div>
  );
};

export { CreateBreadsticks, CreateBreadballs, CreateCheeseBread };
