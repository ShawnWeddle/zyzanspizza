import { z } from "zod";
import type { TypeOf } from "zod";
import { breadBallsSizeList, breadsticksSizeList, dessertsOptionsList, drinksOptionsList, drinksSizeList, pizzaCrustFlavorList, pizzaCrustList, pizzaSauceList, pizzaSizeList, pizzaToppingsList, sauceOptionsList, sidesOptionsList, specialBakeList, specialCutList, specialtyPizzaNameList, wingsSauceList, wingsSizeList, } from "~/data/names";

export const orderSchema = z.object({
  Pizzas: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("PIZZA"),
      size: z.enum(pizzaSizeList),
      crust: z.enum(pizzaCrustList),
      sauce: z.enum(pizzaSauceList),
      toppings: z.array(z.enum([...pizzaToppingsList , "Double Pepperoni", "Extra Cheese"])),
      crustFlavor: z.enum(pizzaCrustFlavorList),
      quantity: z.number(),
      specialBakeInstructions: z.enum(specialBakeList),
      specialCutInstructions: z.enum(specialCutList),
      isSpecialtyPizza: z.boolean(),
      specialtyPizzaName: z.optional(z.enum(specialtyPizzaNameList)),
      removedToppings: z.array(z.enum([...pizzaToppingsList , "Double Pepperoni", "Extra Cheese"])),
      price: z.number(),
      description: z.string(),
    })
  ),
  Wings: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("WINGS"),
      size: z.enum(wingsSizeList),
      bone: z.boolean(),
      sauce: z.enum(wingsSauceList),
      quantity: z.number(),
      price: z.number(),
      description: z.string(),
    })
  ),
  Sides: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("SIDES"),
      sideOption: z.enum(sidesOptionsList),
      size: z.enum([...breadsticksSizeList, ...breadBallsSizeList, "1-piece"]),
      quantity: z.number(),
      price: z.number(),
      description: z.string(),
    })
  ),
  Desserts: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("DESSERTS"),
      dessertOption: z.enum(dessertsOptionsList),
      quantity: z.number(),
      price: z.number(),
      description: z.string(),
    })
  ),
  Drinks: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("DRINKS"),
      drinkOption: z.enum(drinksOptionsList),
      size: z.enum(drinksSizeList),
      quantity: z.number(),
      price: z.number(),
      description: z.string(),
    })
  ),
  Sauces: z.array(
    z.object({
      id: z.string(),
      foodType: z.literal("SAUCES"),
      sauceOption: z.enum(sauceOptionsList),
      quantity: z.number(),
      price: z.number(),
      description: z.string(),
    })
  ),
  customer: z.object({
    userId: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  }),
  number: z.number(),
})

export type OrderInput = TypeOf<typeof orderSchema>;