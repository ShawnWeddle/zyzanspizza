import type {
  pizzaSizeList,
  wingsSizeList,
  breadBallsSizeList,
  breadsticksSizeList,
  drinksSizeList
} from "~/data/names";

import { specialtySizeToPrice } from "~/data/names";
import type { FullOrderType } from "./ordertypes";

type PizzaSizeType = typeof pizzaSizeList[number];
type WingsSizeType = typeof wingsSizeList[number];
type BreadsticksSizeType = typeof breadsticksSizeList[number];
type BreadBallsSizeType = typeof breadBallsSizeList[number];
type DrinksSizeType = typeof drinksSizeList[number];

export const pizzaPrice = (quantity: number, size: PizzaSizeType, toppingsNumber: number) => {
  let price = 0;
  switch(size){
    case "Extra Large": {
      price = 9.99 + (toppingsNumber * 2.25);
      break;
    }
    case "Large": {
      price = 8.99 + (toppingsNumber * 2.00);
      break
    }
    case "Medium": {
      price = 7.99 + (toppingsNumber * 1.75);
      break;
    }
    case "Small": {
      price = 6.99 + (toppingsNumber * 1.50);
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
}

export const specialtyPizzaPrice = (quantity: number, size: PizzaSizeType) => {
  let price = 0;
  price = specialtySizeToPrice[size];
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
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
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
}

export const sidesPrice = (quantity: number, size: BreadsticksSizeType | BreadBallsSizeType | null) => {
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
    case "16-piece": {
      price = 3.49;
      break;
    }
    case "32-piece": {
      price = 5.99;
      break;
    }
    case null: {
      price = 4.99;
      break;
    }
  }
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
}

export const dessertsPrice = (quantity: number) => {
  const price = 6.99;
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
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
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
}

export const saucesPrice = (quantity: number) => {
  const price = 0.75;
  const priceText = (Math.round(price * quantity * 100) / 100).toFixed(2);
  const priceNumber = Number(priceText);
  return {text: priceText, number: priceNumber};
}

export const wholePrice = (order: FullOrderType) => {
  const { Pizzas, Sides, Wings, Desserts, Drinks, Sauces } =
    order;

  const finalPrice =
  Math.round(
    100 *
      [...Pizzas, ...Wings, ...Sides, ...Desserts, ...Drinks, ...Sauces]
        .map((item) => item.price)
        .reduce((total, price) => total + price, 0)
  ) / 100;
  const finalPriceText = finalPrice.toFixed(2);

  return {number: finalPrice, text: finalPriceText}
}