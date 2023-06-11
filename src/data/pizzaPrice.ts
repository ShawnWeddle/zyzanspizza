import type {
  pizzaSizeList,
  pizzaToppingsList,
} from "~/data/names";

type SizeType = typeof pizzaSizeList[number];
type ToppingsType = typeof pizzaToppingsList[number];

export const pizzaPrice = (quantity: number, size: SizeType, toppings: ToppingsType[]) => {
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
  price = (Math.round(price * 100) / 100);
  return price * quantity;
}