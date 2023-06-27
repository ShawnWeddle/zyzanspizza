import type { sauceOptionsList } from "./names";

type SauceType = typeof sauceOptionsList[number];

const SauceNamer = (sauce: string) : SauceType => {
  switch(sauce) {
    case "Garlic" : {
      return "Garlic"
    }
    case "Spicy Garlic" : {
      return "Spicy Garlic"
    }
    case "Ranch" : {
      return "Ranch"
    }
    case "Spicy Ranch" : {
      return "Spicy Ranch"
    }
    case "Pizza Sauce" : {
      return "Pizza Sauce"
    }
    case "BBQ" : {
      return "BBQ"
    }
    case "Buffalo" : {
      return "Buffalo"
    }
    case "Garlic Parmesan" : {
      return "Garlic Parmesan"
    }
    case "Nacho Cheese" : {
      return "Nacho Cheese"
    }
    case "Blue Cheese" : {
      return "Blue Cheese"
    }
    case "Icing" : {
      return "Icing"
    }
    default : {
      return "Garlic"
    }
  }
}

export { SauceNamer }