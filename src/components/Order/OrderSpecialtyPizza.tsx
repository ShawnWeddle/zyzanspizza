import { useState } from "react";
import { specialtyPizzaNameList } from "~/data/names";
import CreateSpecialtyPizza from "./CreateSpecialtyPizza";

type SpecialtyPizzaNameType = (typeof specialtyPizzaNameList)[number];

const OrderSpecialtyPizza: React.FC = () => {
  const [activePizza, setActivePizza] = useState<SpecialtyPizzaNameType>();
  const Specialties = specialtyPizzaNameList.map((pizza, index) => {
    return (
      <CreateSpecialtyPizza
        name={pizza}
        key={index}
        activePizza={activePizza}
      />
    );
  });

  return <div className="grid grid-cols-1 lg:grid-cols-2">{Specialties}</div>;
};

export default OrderSpecialtyPizza;
