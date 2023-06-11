import type { 
  pizzaSizeList, pizzaCrustList, pizzaSauceList, pizzaToppingsList, pizzaCrustFlavorList, specialBakeList, specialCutList, 
  wingsSizeList, wingsSauceList, sidesOptionsList, dessertsOptionsList, drinksOptionsList, drinksSizeList, sauceOptionsList
} from "./names";

type PizzaSizeList = typeof pizzaSizeList[number];
type PizzaCrustList = typeof pizzaCrustList[number];
type PizzaSauceList = typeof pizzaSauceList[number];
type PizzaToppingsList = typeof pizzaToppingsList[number];
type PizzaCrustFlavorList = typeof pizzaCrustFlavorList[number];
type SpecialBakeList = typeof specialBakeList[number];
type SpecialCutList = typeof specialCutList[number];

type WingsSizeList = typeof wingsSizeList[number];
type WingsSauceList = typeof wingsSauceList[number];
type SidesOptionsList = typeof sidesOptionsList[number];
type DessertsOptionsList = typeof dessertsOptionsList[number];
type DrinksOptionsList = typeof drinksOptionsList[number];
type DrinksSizeList = typeof drinksSizeList[number];
type SauceOptionsList = typeof sauceOptionsList[number];

export type PizzaType = {
  id: string;
  foodType: "PIZZA";
  size: PizzaSizeList;
  crust: PizzaCrustList;
  sauce: PizzaSauceList;
  toppings: PizzaToppingsList[];
  crustFlavor: PizzaCrustFlavorList;
  quantity: number;
  specialBakeInstructions: SpecialBakeList;
  specialCutInstructions: SpecialCutList;
  isSpecialtyPizza: boolean;
}

export type WingsType = {
  id: string;
  foodType: "WINGS";
  size: WingsSizeList;
  bone: boolean;
  sauce: WingsSauceList;
  quantity: number;
}

export type SidesType = {
  id: string;
  foodType: "SIDES";
  sideOption: SidesOptionsList;
  quantity: number;
}

export type DessertsType = {
  id: string;
  foodType: "DESSERTS";
  dessertOption: DessertsOptionsList;
  quantity: number;
}

export type DrinksType = {
  id: string;
  foodType: "DRINKS";
  drinkOption: DrinksOptionsList;
  size: DrinksSizeList;
  quantity: number;
}

export type SaucesType = {
  id: string;
  foodType: "SAUCES";
  sauceOption: SauceOptionsList;
  quantity: number;
}

export type FoodType = PizzaType | WingsType | SidesType | DessertsType | DrinksType | SaucesType;

export type FullOrderType = {
  Pizzas: PizzaType[];
  Wings: WingsType[];
  Sides: SidesType[];
  Desserts: DessertsType[];
  Drinks: DrinksType[];
  Sauces: SaucesType[];
  CustomerName: string;
}