import { specialtyPizzaNameList } from "./names"
import type { SpecialtyToppingsType } from "./names"

type PizzaNameType = typeof specialtyPizzaNameList[number];

const specialtyToppingAlg = (pizza:PizzaNameType) : SpecialtyToppingsType[] => {
  switch(pizza) {
    case "Deluxe" : {
      return ["Pepperoni", "Italian Sausage", "Mushroom", "Onion", "Green Pepper"];
    }
    case "Many Meat" : {
      return ["Pepperoni", "Italian Sausage", "Beef", "Ham", "Bacon"]
    }
    case "Hawaiian" : {
      return ["Ham", "Chicken", "Bacon", "Pineapple"]
    }
    case "BBQ Chicken": {
      return ["Chicken", "Bacon", "Onion"]
    }
    case "Extreme Pepperoni": {
      return ["Double Pepperoni", "Cheddar Cheese", "Extra Cheese"]
    }
    case "Buffalo Chicken": {
      return ["Chicken", "Bacon", "Onion"]
    }
    case "Zesty Zyzan": {
      return ["Pepperoni", "Salami", "Spicy Sausage", "Banana Pepper"]
    }
    case "Chicken Bacon Ranch": {
      return ["Chicken", "Bacon", "Diced Tomato"]
    }
    case "Veggie": {
      return ["Mushroom", "Green Pepper", "Black Olives", "Diced Tomato", "Spinach"]
    }
  }
}

export default specialtyToppingAlg;