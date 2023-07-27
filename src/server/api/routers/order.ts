import { z } from "zod";
import { orderSchema } from "../order/schema";
import { createOrderHandler, findAllOrders, deleteOrderHandler } from "../order/controller";

import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";

export const orderRouter = createTRPCRouter({
  createOrder: privateProcedure
  .input(orderSchema)
  .mutation(({ input }) => createOrderHandler({ input })),

  findOrders: publicProcedure
  .input(z.string())
  .query(({ input }) => findAllOrders({ input })),

  deleteOrder: privateProcedure
  .input(z.string())
  .mutation(({ input }) => deleteOrderHandler({ input }))
}
);