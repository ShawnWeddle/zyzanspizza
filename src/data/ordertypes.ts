import type { 
  pizzaSizeList, pizzaCrustList, pizzaSauceList, pizzaToppingsList, pizzaCrustFlavorList, specialBakeList, specialCutList, 
  wingsSizeList, wingsSauceList, sidesOptionsList, dessertsOptionsList, drinksOptionsList, drinksSizeList, sauceOptionsList, breadsticksSizeList, breadBallsSizeList, SpecialtyToppingsType, specialtyPizzaNameList
} from "./names";


export type PizzaSizeListType = typeof pizzaSizeList[number];
export type PizzaCrustListType = typeof pizzaCrustList[number];
export type PizzaSauceListType = typeof pizzaSauceList[number];
export type PizzaToppingsListType = typeof pizzaToppingsList[number];
export type PizzaCrustFlavorListType = typeof pizzaCrustFlavorList[number];
export type SpecialBakeListType = typeof specialBakeList[number];
export type SpecialCutListType = typeof specialCutList[number];

export type WingsSizeListType = typeof wingsSizeList[number];
export type WingsSauceListType = typeof wingsSauceList[number];
export type WingsBoneListType = "Bone-in" | "Boneless";
export type SidesOptionsListType = typeof sidesOptionsList[number];
export type SidesSizeListType = typeof breadBallsSizeList[number] | typeof breadsticksSizeList[number] | "1-piece";
export type DessertsOptionsListType = typeof dessertsOptionsList[number];
export type DrinksOptionsListType = typeof drinksOptionsList[number];
export type DrinksSizeListType = typeof drinksSizeList[number];
export type SauceOptionsListType = typeof sauceOptionsList[number];

export type SpecialtyPizzaNameType = typeof specialtyPizzaNameList[number];

export type PizzaType = {
  id: string;
  foodType: "PIZZA";
  size: PizzaSizeListType;
  crust: PizzaCrustListType;
  sauce: PizzaSauceListType;
  toppings: PizzaToppingsListType[] | SpecialtyToppingsType[];
  crustFlavor: PizzaCrustFlavorListType;
  quantity: number;
  specialBakeInstructions: SpecialBakeListType;
  specialCutInstructions: SpecialCutListType;
  isSpecialtyPizza: boolean;
  specialtyPizzaName?: SpecialtyPizzaNameType;
  removedToppings: PizzaToppingsListType[] | SpecialtyToppingsType[];
  price: number;
  description: string;
}

export type WingsType = {
  id: string;
  foodType: "WINGS";
  size: WingsSizeListType;
  bone: boolean;
  sauce: WingsSauceListType;
  quantity: number;
  price: number;
  description: string;
}

export type SidesType = {
  id: string;
  foodType: "SIDES";
  sideOption: SidesOptionsListType;
  size: SidesSizeListType;
  quantity: number;
  price: number;
  description: string;
}

export type DessertsType = {
  id: string;
  foodType: "DESSERTS";
  dessertOption: DessertsOptionsListType;
  quantity: number;
  price: number;
  description: string;
}

export type DrinksType = {
  id: string;
  foodType: "DRINKS";
  drinkOption: DrinksOptionsListType;
  size: DrinksSizeListType;
  quantity: number;
  price: number;
  description: string;
}

export type SaucesType = {
  id: string;
  foodType: "SAUCES";
  sauceOption: SauceOptionsListType;
  quantity: number;
  price: number;
  description: string;
}

export type FoodTypes = "PIZZA" | "WINGS" | "SIDES" | "DESSERTS" | "DRINKS" | "SAUCES";

export type AnyFoodType = PizzaType | WingsType | SidesType | DessertsType | DrinksType | SaucesType;

export type FullOrderType = {
  Pizzas: PizzaType[];
  Wings: WingsType[];
  Sides: SidesType[];
  Desserts: DessertsType[];
  Drinks: DrinksType[];
  Sauces: SaucesType[];
}

export type UserType = {
  token: string;
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type CustomerType = Omit<UserType, "token">;