import { useState } from "react";
import {
  CreateBreadsticks,
  CreateBreadballs,
  CreateCheeseBread,
} from "../CreateFoodItem/CreateSides";
import type { sidesOptionsList } from "~/data/names";

type SidesList = (typeof sidesOptionsList)[number];

const OrderSides: React.FC = () => {
  const [activeSide, setActiveSide] = useState<SidesList>();
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <CreateBreadballs activeSide={activeSide} setActiveSide={setActiveSide} />
      <CreateCheeseBread
        activeSide={activeSide}
        setActiveSide={setActiveSide}
      />
      <CreateBreadsticks
        activeSide={activeSide}
        setActiveSide={setActiveSide}
      />
    </div>
  );
};

export default OrderSides;
