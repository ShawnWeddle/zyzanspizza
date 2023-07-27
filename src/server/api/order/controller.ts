import { createOrder, findOrders, deleteOrder } from "./service";
import type { OrderInput } from "./schema";

export const createOrderHandler = async ({
  input
} : {
  input: OrderInput
}) => {
  try {
    const order = await createOrder({
      pizzas: input.Pizzas,
      wings: input.Wings,
      sides: input.Sides,
      desserts: input.Desserts,
      drinks: input.Drinks,
      sauces: input.Sauces,
      customer: input.customer,
      User: {
        connect: {
          id: input.customer.userId
        }
      }
    });

    return {
      status: 'success',
      data: {
        order
      },
    };
  } catch (error) {
    throw error;
  }
}

export const findAllOrders = async({
  input
} : {
  input: string
}) => {
  try {
    const orders = await findOrders({
      userId: input
    })

    return{
      status: "success",
      data: {
        orders
      }
    }
  } catch (error) {
    throw error;
  }
}

export const deleteOrderHandler = async({
  input
} : {
  input: string
}) => {
  try {
    const order = await deleteOrder({
      id: input
    })

    return{
      status: "success"
    }
  } catch (error) {
    throw error;
  }
}