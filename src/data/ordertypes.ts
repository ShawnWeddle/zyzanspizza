import type { 
  pizzaSizeList, pizzaCrustList, pizzaSauceList, pizzaToppingsList, pizzaCrustFlavorList, specialBakeList, specialCutList, 
  wingsSizeList, wingsSauceList, sidesOptionsList, dessertsOptionsList, drinksOptionsList, drinksSizeList, sauceOptionsList, breadsticksSizeList, breadBallsSizeList, SpecialtyToppingsType, specialtyPizzaNameList
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
type SidesSizeList = typeof breadBallsSizeList[number] | typeof breadsticksSizeList[number] | null;
type DessertsOptionsList = typeof dessertsOptionsList[number];
type DrinksOptionsList = typeof drinksOptionsList[number];
type DrinksSizeList = typeof drinksSizeList[number];
type SauceOptionsList = typeof sauceOptionsList[number];

type SpecialtyPizzaNameType = typeof specialtyPizzaNameList[number];

export type PizzaType = {
  id: string;
  foodType: "PIZZA";
  size: PizzaSizeList;
  crust: PizzaCrustList;
  sauce: PizzaSauceList;
  toppings: PizzaToppingsList[] | SpecialtyToppingsType[];
  crustFlavor: PizzaCrustFlavorList;
  quantity: number;
  specialBakeInstructions: SpecialBakeList;
  specialCutInstructions: SpecialCutList;
  isSpecialtyPizza: boolean;
  specialtyPizzaName?: SpecialtyPizzaNameType;
  price: number;
}

export type WingsType = {
  id: string;
  foodType: "WINGS";
  size: WingsSizeList;
  bone: boolean;
  sauce: WingsSauceList;
  quantity: number;
  price: number;
}

export type SidesType = {
  id: string;
  foodType: "SIDES";
  sideOption: SidesOptionsList;
  size: SidesSizeList;
  quantity: number;
  price: number;
}

export type DessertsType = {
  id: string;
  foodType: "DESSERTS";
  dessertOption: DessertsOptionsList;
  quantity: number;
  price: number;
}

export type DrinksType = {
  id: string;
  foodType: "DRINKS";
  drinkOption: DrinksOptionsList;
  size: DrinksSizeList;
  quantity: number;
  price: number;
}

export type SaucesType = {
  id: string;
  foodType: "SAUCES";
  sauceOption: SauceOptionsList;
  quantity: number;
  price: number;
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
  customerName: string | null;
}

