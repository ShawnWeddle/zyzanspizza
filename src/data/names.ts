export const orderCategories = [
  "Create your own pizza",
  "Specialty Pizzas",
  "Wings",
  "Sides",
  "Desserts",
  "Drinks",
  "Sauces",
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
  "4-piece Breadsticks",
  "4-piece Breadsticks",
  "Cheese Bread",
  "16-piece Bread Balls",
  "32-piece Bread Balls",
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

export const sizeToInches: { [key: string] : number }= {
  "Small": 10,
  "Medium": 12,
  "Large": 14,
  "Extra Large": 16
} as const;

export const List = [
  
] as const;

export const specialtyPizzas: [string, string][] = [
  ["Deluxe", "The one with everything on it. Pepperoni, Italian Sausage, Mushroom, Onion, and Green Pepper."],
  ["Many Meat", "Some of the meats, but not all. Pepperoni, Italian Sausage, Beef, Ham, and Bacon."],
  ["Hawaiian", "Say 'Aloha' (Hello AND Goodbye) to Ham, Chicken, Bacon, and Pineapple."],
  ["BBQ Chicken", "BBQ sauce base with Chicken, Bacon, and Onion."],
  ["Extreme Pepperoni", "Ray! That's Ricky's pepperoni! Double pepp, cheddar and extra cheese. "],
  ["Buffalo Chicken", "Buffalo sauce base with Chicken, Bacon, and Onion."],
  ["Zesty Zyzan", "Our founder's favorite. Pepperoni, Salami, Spicy Sausage, and Banana Pepper."],
  ["Chicken Bacon Ranch", "Ranch dressing base with Chicken, Bacon, and Diced Tomato."],
  ["Veggie", "The least unhealthy option. Black Olives, Mushroom, Green Pepper, Diced Tomato, and Spinach"],
]