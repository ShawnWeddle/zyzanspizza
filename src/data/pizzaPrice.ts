import type {
  pizzaSizeList,
  pizzaToppingsList,
  wingsSizeList,
  breadBallsSizeList,
  breadsticksSizeList,
  drinksSizeList
} from "~/data/names";

import { specialtySizeToPrice } from "~/data/names";

type PizzaSizeType = typeof pizzaSizeList[number];
type ToppingsType = typeof pizzaToppingsList[number];
type WingsSizeType = typeof wingsSizeList[number];
type BreadsticksSizeType = typeof breadsticksSizeList[number];
type BreadBallsSizeType = typeof breadBallsSizeList[number];
type DrinksSizeType = typeof drinksSizeList[number];

export const pizzaPrice = (quantity: number, size: PizzaSizeType, toppings: ToppingsType[]) => {
  let price = 0;
  const toppingsTotal = toppings.length;
  switch(size){
    case "Extra Large": {
      price = 9.99 + (toppingsTotal * 2.25);
      break;
    }
    case "Large": {
      price = 8.99 + (toppingsTotal * 2.00);
      break
    }
    case "Medium": {
      price = 7.99 + (toppingsTotal * 1.75);
      break;
    }
    case "Small": {
      price = 6.99 + (toppingsTotal * 1.50);
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}

export const specialtyPizzaPrice = (quantity: number, size: PizzaSizeType) => {
  let price = 0;
  price = specialtySizeToPrice[size];
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}

export const wingsPrice = (quantity: number, size: WingsSizeType, bone: "Bone-in" | "Boneless") => {
  let price = 0;
  switch(size){
    case "8-piece": {
      price = bone === "Bone-in" ? 9.99 : 7.99 ;
      break;
    }
    case "12-piece": {
      price = bone === "Bone-in" ? 14.49 : 11.49 ;
      break;
    }
    case "16-piece": {
      price = bone === "Bone-in" ? 18.49 : 14.49 ;
      break;
    }
    case "24-piece": {
      price = bone === "Bone-in" ? 23.99 : 18.99 ;
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}

export const breadsticksPrice = (quantity: number, size: BreadsticksSizeType) => {
  let price = 0;
  switch(size){
    case "4-piece": {
      price = 2.99;
      break;
    }
    case "8-piece": {
      price = 4.99;
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}

export const breadBallsPrice = (quantity: number, size: BreadBallsSizeType) => {
  let price = 0;
  switch(size){
    case "16-piece": {
      price = 3.49;
      break;
    }
    case "32-piece": {
      price = 5.99;
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}

export const drinksPrice = (quantity: number, size: DrinksSizeType) => {
  let price = 0;
  switch(size){
    case "2-liter": {
      price = 2.99;
      break;
    }
    case "20 oz": {
      price = 1.99;
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  return priceText;
}