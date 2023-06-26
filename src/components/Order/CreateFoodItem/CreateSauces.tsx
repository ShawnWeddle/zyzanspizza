import { useState } from "react";
import type { sauceOptionsList } from "~/data/names";

type SauceOptionType = (typeof sauceOptionsList)[number];
type SauceProps = {
  name: SauceOptionType;
};

const CreateSauces: React.FC<SauceProps> = (props: SauceProps) => {
  const [sauceQuantity, setSauceQuantity] = useState<number>(0);
  return (
    <div className="flex justify-between bg-gradient-to-br p-2 text-xl even:from-green-700 even:to-green-800 even:text-zinc-50">
      <p>{props.name}</p>
      <div className="flex">
        <button
          className="w-6 rounded-l border bg-green-800 font-bold text-zinc-50 disabled:bg-green-200"
          onClick={() => {
            setSauceQuantity(sauceQuantity - 1);
          }}
          disabled={sauceQuantity < 1}
        >
          -
        </button>
        <p className="border-y bg-zinc-50 px-2 text-black">{sauceQuantity}</p>
        <button
          className="w-6 rounded-r border bg-green-800 font-bold text-zinc-50"
          onClick={() => {
            setSauceQuantity(sauceQuantity + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CreateSauces;
