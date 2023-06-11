import type { FoodType, FullOrderType} from "~/data/ordertypes";
import { useOrderContext } from "~/hooks/useOrderContext";

export const useOrderHandler: (food: FoodType, action: "ADD" | "REMOVE") => FullOrderType = (food, action) => {
  const {orderState} = useOrderContext();
  const order = orderState;

  let newPizzas = [...order.Pizzas];
  let newWings = [...order.Wings];
  let newSides = [...order.Sides];
  let newDesserts = [...order.Desserts];
  let newDrinks = [...order.Drinks];
  let newSauces = [...order.Sauces];

  const removeItem = () => {
    console.log("Finish later");
  }

  if(action === "ADD"){
    switch(food.foodType){
      case "PIZZA": {
        newPizzas = [...newPizzas, food];
        break;
      }
      case "WINGS": {
        newWings = [...newWings, food];
        break;
      }
      case "SIDES": {
        newSides = [...newSides, food];
        break;
      }
      case "DESSERTS": {
        newDesserts = [...newDesserts, food];
        break;
      }
      case "DRINKS": {
        newDrinks = [...newDrinks, food];
        break;
      }
      case "SAUCES": {
        newSauces = [...newSauces, food];
        break;
      }
    }
  }

  return ({
    Pizzas: newPizzas,
    Wings: newWings,
    Sides: newSides,
    Desserts: newDesserts,
    Drinks: newDrinks,
    Sauces: newSauces,
    CustomerName: orderState.CustomerName,
  })
}