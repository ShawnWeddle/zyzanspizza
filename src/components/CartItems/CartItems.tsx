import type {
  PizzaType,
  WingsType,
  SidesType,
  DessertsType,
  DrinksType,
  SaucesType,
} from "~/data/ordertypes";
import { sizeToInches } from "~/data/names";

type PizzaInCartProps = {
  pizza: PizzaType;
  index: number;
};

export const PizzaInCartSpan: React.FC<PizzaInCartProps> = (
  props: PizzaInCartProps
) => {
  const { pizza, index } = props;
  if (pizza.isSpecialtyPizza) {
    return (
      <p key={index} className="m-2 w-full text-lg">
        • <span className="font-semibold">{pizza.quantity}</span>
        {" - "}
        {sizeToInches[pizza.size]}&quot; {pizza.crust}{" "}
        {pizza.specialtyPizzaName} {pizza.quantity > 1 ? "pizzas" : "pizza"}
        {pizza.crustFlavor !== "None" ? ` with ${pizza.crustFlavor} crust` : ""}
      </p>
    );
  } else {
    return (
      <p key={index} className="m-2 w-full text-lg">
        • <span className="font-semibold">{pizza.quantity}</span>
        {" - "}
        {sizeToInches[pizza.size]}&quot; {pizza.crust}{" "}
        {pizza.quantity > 1 ? "pizzas" : "pizza"} with {pizza.sauce}
        {pizza.toppings.length > 0 ? ", " : ""}
        {pizza.toppings.join(", ")}
        {pizza.crustFlavor !== "None" ? `, and ${pizza.crustFlavor} crust` : ""}
      </p>
    );
  }
};

type WingsInCartProps = {
  wings: WingsType;
  index: number;
};

export const WingsInCartSpan: React.FC<WingsInCartProps> = (
  props: WingsInCartProps
) => {
  const { wings, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • <span className="font-semibold">{wings.quantity}</span>
      {" - "}
      {wings.size} {wings.sauce} {wings.bone} Wings
    </p>
  );
};

type SidesInCartProps = {
  sides: SidesType;
  index: number;
};

export const SidesInCartSpan: React.FC<SidesInCartProps> = (
  props: SidesInCartProps
) => {
  const { sides, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • <span className="font-semibold">{sides.quantity}</span>
      {" - "}
      {sides.size} {sides.sideOption}
    </p>
  );
};

type DessertsInCartProps = {
  desserts: DessertsType;
  index: number;
};

export const DessertsInCartSpan: React.FC<DessertsInCartProps> = (
  props: DessertsInCartProps
) => {
  const { desserts, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • <span className="font-semibold">{desserts.quantity}</span>
      {" - "}
      {desserts.dessertOption}
    </p>
  );
};

type DrinksInCartProps = {
  drinks: DrinksType;
  index: number;
};

export const DrinksInCartSpan: React.FC<DrinksInCartProps> = (
  props: DrinksInCartProps
) => {
  const { drinks, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • <span className="font-semibold">{drinks.quantity}</span>
      {" - "}
      {drinks.size} {drinks.drinkOption}
    </p>
  );
};

type SaucesInCartProps = {
  sauces: SaucesType;
  index: number;
};

export const SaucesInCartSpan: React.FC<SaucesInCartProps> = (
  props: SaucesInCartProps
) => {
  const { sauces, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • <span className="font-semibold">{sauces.quantity}</span>
      {" - "}
      {sauces.sauceOption}
    </p>
  );
};
