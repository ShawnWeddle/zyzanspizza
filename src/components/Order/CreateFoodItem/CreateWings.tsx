import { useState } from "react";
import { z } from "zod";
import { useOrderContext } from "~/hooks/useOrderContext";
import { wingsSauceList, wingsSizeList } from "~/data/names";
import type {
  WingsSizeListType,
  WingsSauceListType,
  WingsBoneListType,
} from "~/data/ordertypes";
import { wingsPrice } from "~/data/priceCalculator";
import { WingsInCartSpan } from "~/components/CartItems/CartItems";

const sizeEnum = z.enum(wingsSizeList);
const boneEnum = z.enum(["Bone-in", "Boneless"]);
const sauceEnum = z.enum(wingsSauceList);

const CreateWings: React.FC = () => {
  const [wingsSize, setWingsSize] = useState<WingsSizeListType>("12-piece");
  const [wingsSauce, setWingsSauce] = useState<WingsSauceListType>("Plain");
  const [wingsBone, setWingsBone] = useState<WingsBoneListType>("Bone-in");
  const [wingsQuantity, setWingsQuantity] = useState<number>(1);

  const { orderState, orderDispatch } = useOrderContext();

  const wingsDescription = `${wingsQuantity} - ${wingsSize} ${wingsBone} ${wingsSauce} Wings`;

  const cartWings = orderState.Wings.map((wings, index) => {
    return (
      <div key={index} className="flex justify-between  text-white">
        <WingsInCartSpan wings={wings} index={index} />
        <button
          className="mx-2"
          onClick={() => {
            orderDispatch({
              type: "REMOVE",
              payload: {
                order: [wings],
              },
            });
          }}
        >
          ✕
        </button>
      </div>
    );
  });

  const sizeList = wingsSizeList.map((size, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={size}
          name="size_group"
          onChange={(e) => {
            const newSize = e.target.id;
            setWingsSize(sizeEnum.parse(newSize));
          }}
          checked={size === wingsSize}
        />
        <label>{size}</label>
      </div>
    );
  });

  const sauceList = wingsSauceList.map((sauce, index) => {
    return (
      <div key={index} className="m-1 flex gap-2">
        <input
          type="radio"
          id={sauce}
          name="sauce_group"
          onChange={(e) => {
            const newSauce = e.target.id;
            setWingsSauce(sauceEnum.parse(newSauce));
          }}
          checked={sauce === wingsSauce}
        />
        <label>{sauce}</label>
      </div>
    );
  });

  const boneList = (
    <>
      <div className="m-1 flex gap-2">
        <input
          type="radio"
          id="Bone-in"
          name="bone-in_group"
          onChange={(e) => {
            const newBone = e.target.id;
            setWingsBone(boneEnum.parse(newBone));
          }}
          checked={wingsBone === "Bone-in"}
        />
        <label>Bone-in</label>
      </div>
      <div className="m-1 flex gap-2">
        <input
          type="radio"
          id="Boneless"
          name="boneless_group"
          onChange={(e) => {
            const newBone = e.target.id;
            setWingsBone(boneEnum.parse(newBone));
          }}
          checked={wingsBone === "Boneless"}
        />
        <label>Boneless</label>
      </div>
    </>
  );

  return (
    <div className="mt-2 w-full sm:max-w-screen-sm">
      <div className="bg-gradient-to-br from-green-700 to-green-800 p-2 text-center text-4xl text-zinc-50 sm:rounded-t">
        Wings
      </div>
      <div className="max-h-full border-gray-500 pt-3 sm:rounded-b sm:border-2 sm:bg-green-800/10 sm:pt-1">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <form>{boneList}</form>
          </div>
          <div className="m-2 flex justify-center">
            <button
              onClick={() => {
                setWingsQuantity(wingsQuantity - 1);
              }}
              disabled={wingsQuantity <= 1}
              className="h-10 w-10 rounded-l-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600 disabled:bg-green-200"
            >
              -
            </button>
            <div className="h-10 w-10 border-y bg-zinc-50 pt-1 text-center text-lg font-semibold dark:text-black">
              {wingsQuantity}
            </div>
            <button
              onClick={() => {
                setWingsQuantity(wingsQuantity + 1);
              }}
              className="h-10 w-10 rounded-r-full border bg-green-800 font-mono text-2xl font-bold text-zinc-50 hover:bg-green-600"
            >
              +
            </button>
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
          <div className="my-4 flex justify-center">
            <form>
              <div className="m-1">
                <span className="p-1 font-bold italic text-red-500 dark:rounded-md dark:bg-red-500 dark:text-zinc-50">
                  Sauces:
                </span>
              </div>
              {sauceList}
            </form>
          </div>
          <div className="col-span-2 text-center text-xl">
            <span className="font-semibold">
              {wingsQuantity > 1 ? wingsQuantity : ""}
            </span>{" "}
            {wingsSize} {wingsSauce} {wingsBone} Wings
          </div>
          <div className="col-span-2 m-2 flex justify-center">
            <div className="rounded-l-full border bg-white p-1 pl-2 text-lg font-semibold dark:text-black">
              ${wingsPrice(wingsQuantity, wingsSize, wingsBone).text}
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
                        foodType: "WINGS",
                        quantity: wingsQuantity,
                        size: wingsSize,
                        bone: wingsBone === "Bone-in",
                        sauce: wingsSauce,
                        price: wingsPrice(wingsQuantity, wingsSize, wingsBone)
                          .number,
                        description: wingsDescription,
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
        <div className="bg-gradient-to-br from-blue-700 to-blue-800 py-0.5 sm:m-2 sm:rounded-xl">
          {cartWings.length > 0 ? (
            <>
              <p className="m-2 text-lg text-zinc-50">Wings in cart:</p>
              {cartWings}
            </>
          ) : (
            <p className="m-2 text-lg font-semibold text-red-200">
              NO WINGS IN CART
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateWings;
