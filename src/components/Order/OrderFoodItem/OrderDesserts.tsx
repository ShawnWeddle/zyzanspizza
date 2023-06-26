import { useState } from "react";
import {
  CreateBigBrownie,
  CreateBigCookie,
  CreateCinnamonRolls,
} from "../CreateFoodItem/CreateDesserts";
import type { dessertsOptionsList } from "~/data/names";

type DessertsList = (typeof dessertsOptionsList)[number];

const OrderDesserts: React.FC = () => {
  const [activeDessert, setActiveDessert] = useState<DessertsList>();
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <CreateBigBrownie
        activeDessert={activeDessert}
        setActiveDessert={setActiveDessert}
      />
      <CreateBigCookie
        activeDessert={activeDessert}
        setActiveDessert={setActiveDessert}
      />
      <CreateCinnamonRolls
        activeDessert={activeDessert}
        setActiveDessert={setActiveDessert}
      />
    </div>
  );
};

export default OrderDesserts;
