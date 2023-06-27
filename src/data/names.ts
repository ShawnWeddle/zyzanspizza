export const orderCategories = [
  "Create your own pizza",
  "Specialty Pizzas",
  "Wings",
  "Sides",
  "Desserts",
  "Drinks",
  "Sauces",
] as const;

export const specialtyPizzaNameList = [
  "Deluxe",
  "Many Meat",
  "Hawaiian",
  "BBQ Chicken",
  "Extreme Pepperoni",
  "Buffalo Chicken",
  "Zesty Zyzan",
  "Chicken Bacon Ranch",
  "Veggie",
] as const;

export const pizzaToppingsList= [
  "Pepperoni",
  "Italian Sausage",
  "Spicy Sausage",
  "Beef",
  "Ham",
  "Chicken",
  "Bacon",
  "Salami",
  "Mushroom",
  "Onion",
  "Green Pepper",
  "Banana Pepper",
  "Black Olives",
  "Pineapple",
  "Spinach",
  "Diced Tomato",
  "Jalapeno",
  "Cheddar Cheese",
] as const;

export const pizzaSauceList = [
  "Pizza sauce",
  "Alfredo",
  "Ranch",
  "BBQ",
  "Buffalo",
] as const;

export const pizzaSizeList = [
  "Small",
  "Medium",
  "Large",
  "Extra Large",
] as const;

export const pizzaCrustList = [
  "Original",
  "Thin",
] as const;

export const pizzaCrustFlavorList = [
  "None",
  "Garlic",
  "Parmesan",
  "Garlic Parmesan",
] as const;

export const specialCutList = [
  "Triangle Cut",
  "Square Cut",
  "No Cut",
] as const;

export const specialBakeList = [
  "Normal",
  "Well Done",
  "Light Bake",
] as const;

export const wingsSizeList = [
  "8-piece",
  "12-piece",
  "16-piece",
  "24-piece",
] as const;

export const wingsSauceList = [
  "Plain",
  "BBQ",
  "Buffalo",
  "Garlic Parmesan",
] as const;

export const sidesOptionsList = [
  "Breadsticks",
  "Cheese Bread",
  "Bread Balls",
] as const;

export const breadsticksSizeList = [
  "4-piece",
  "8-piece",
] as const;

export const breadBallsSizeList = [
  "16-piece",
  "32-piece",
] as const;

export const dessertsOptionsList = [
  "Big Brownie",
  "Big Cookie",
  "Pull-Apart Cinnamon Rolls",
] as const;

export const drinksOptionsList = [
  "Cola",
  "Diet Cola",
  "Lemon-Lime Soda",
  "Doctor Soda",
  "Orange Soda",
  "Root Beer",
] as const;

export const drinksSizeList = [
  "20 oz",
  "2-liter",
] as const;

export const sauceOptionsList = [
  "Garlic",
  "Spicy Garlic",
  "Ranch",
  "Spicy Ranch",
  "Pizza Sauce",
  "BBQ",
  "Buffalo",
  "Garlic Parmesan",
  "Nacho Cheese",
  "Blue Cheese",
  "Icing",
] as const;

export const sauceBreakdown: {[key: string] : number} = {
  Garlic: 0,
  "Spicy Garlic": 0,
  Ranch: 0,
  "Spicy Ranch": 0,
  "Pizza Sauce": 0,
  BBQ: 0,
  Buffalo: 0,
  "Garlic Parmesan": 0,
  "Nacho Cheese": 0,
  "Blue Cheese": 0,
  Icing: 0,
};

export const sizeToInches = {
  "Small": 10,
  "Medium": 12,
  "Large": 14,
  "Extra Large": 16
} as const;

export const specialtySizeToPrice = {
  "Small": 11.49,
  "Medium": 12.99,
  "Large": 14.99,
  "Extra Large": 16.99
} as const;

export const List = [
  
] as const;

export const specialtyPizzaDescriptions: [string, string][] = [
  ["Deluxe", "The one with everything on it. Pepperoni, Italian Sausage, Mushroom, Onion, and Green Pepper."],
  ["Many Meat", "Some of the meats, but not all. Pepperoni, Italian Sausage, Beef, Ham, and Bacon."],
  ["Hawaiian", "Say 'Aloha' (Hello AND Goodbye) to Ham, Chicken, Bacon, and Pineapple."],
  ["BBQ Chicken", "BBQ sauce base with Chicken, Bacon, and Onion."],
  ["Extreme Pepperoni", "Ray! That's Ricky's pepperoni! Double pepp, cheddar and extra cheese."],
  ["Buffalo Chicken", "Buffalo sauce base with Chicken, Bacon, and Onion."],
  ["Zesty Zyzan", "Our founder's favorite. Pepperoni, Salami, Spicy Sausage, and Banana Pepper."],
  ["Chicken Bacon Ranch", "Ranch dressing base with Chicken, Bacon, and Diced Tomato."],
  ["Veggie", "The least unhealthy option. Black Olives, Mushroom, Green Pepper, Diced Tomato, and Spinach"],
];

export const specialtyPizzaDescriptionsSearch= {
  Deluxe: "The one with everything on it. Pepperoni, Italian Sausage, Mushroom, Onion, and Green Pepper.",
  "Many Meat": "Some of the meats, but not all. Pepperoni, Italian Sausage, Beef, Ham, and Bacon.",
  Hawaiian: "Say 'Aloha' (Hello AND Goodbye) to Ham, Chicken, Bacon, and Pineapple.",
  "BBQ Chicken": "BBQ sauce base with Chicken, Bacon, and Onion.",
  "Extreme Pepperoni": "Ray! That's Ricky's pepperoni! Double pepp, cheddar and extra cheese.",
  "Buffalo Chicken": "Buffalo sauce base with Chicken, Bacon, and Onion.",
  "Zesty Zyzan": "Our founder's favorite. Pepperoni, Salami, Spicy Sausage, and Banana Pepper.",
  "Chicken Bacon Ranch": "Ranch dressing base with Chicken, Bacon, and Diced Tomato.",
  Veggie: "The least unhealthy option. Black Olives, Mushroom, Green Pepper, Diced Tomato, and Spinach",
} as const;

export type SpecialtyToppingsType = typeof pizzaToppingsList[number] | "Double Pepperoni" | "Extra Cheese"; 

export const specialtyPizzaToppings = [
  {name: "Deluxe", toppings: ["Pepperoni", "Italian Sausage", "Mushroom", "Onion", "Green Pepper"]},
  {name: "Many Meat", toppings: ["Pepperoni", "Italian Sausage", "Beef", "Ham", "Bacon"]},
  {name: "Hawaiian", toppings: ["Ham", "Chicken", "Bacon", "Pineapple"]},
  {name: "BBQ Chicken", toppings: ["Chicken", "Bacon", "Onion"]},
  {name: "Extreme Pepperoni", toppings: ["Double Pepperoni", "Cheddar Cheese", "Extra Cheese"]},
  {name: "Buffalo Chicken", toppings: ["Chicken", "Bacon", "Onion"]},
  {name: "Zesty Zyzan", toppings: ["Pepperoni", "Salami", "Spicy Sausage", "Banana Pepper"]},
  {name: "Chicken Bacon Ranch", toppings: ["Chicken", "Bacon", "Diced Tomato"]},
  {name: "Veggie", toppings: ["Mushroom", "Green Pepper", "Black Olives", "Diced Tomato", "Spinach"]},
]

export const specialtyPizzaToppingsList = {
  Deluxe: ["Pepperoni", "Italian Sausage", "Mushroom", "Onion", "Green Pepper"],
  "Many Meat": ["Pepperoni", "Italian Sausage", "Beef", "Ham", "Bacon"],
  Hawaiian: ["Ham", "Chicken", "Bacon", "Pineapple"],
  "BBQ Chicken": ["Chicken", "Bacon", "Onion"],
  "Extreme Pepperoni": ["Double Pepperoni", "Cheddar Cheese", "Extra Cheese"],
  "Buffalo Chicken": ["Chicken", "Bacon", "Onion"],
  "Zesty Zyzan": ["Pepperoni", "Salami", "Spicy Sausage", "Banana Pepper"],
  "Chicken Bacon Ranch": ["Chicken", "Bacon", "Diced Tomato"],
  Veggie: ["Mushroom", "Green Pepper", "Black Olives", "Diced Tomato", "Spinach"],
 } as const;

