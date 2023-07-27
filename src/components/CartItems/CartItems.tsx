import type {
  PizzaType,
  WingsType,
  SidesType,
  DessertsType,
  DrinksType,
  SaucesType,
} from "~/data/ordertypes";

type PizzaInCartProps = {
  pizza: PizzaType;
  index: number;
};

export const PizzaInCartSpan: React.FC<PizzaInCartProps> = (
  props: PizzaInCartProps
) => {
  const { pizza, index } = props;
  return (
    <p key={index} className="m-2 w-full text-lg">
      • {pizza.description}
    </p>
  );
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
      • {wings.description}
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
      • {sides.description}
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
      • {desserts.description}
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
      • {drinks.description}
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
      • {sauces.description}
    </p>
  );
};
