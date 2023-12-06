import { z } from "zod";
import { orderSchema } from "../order/schema";
import { createOrderHandler, findAllUserOrders, findAllOrders, deleteOrderHandler } from "../order/controller";

import { createTRPCRouter, privateProcedure, publicProcedure } from "../trpc";

export const orderRouter = createTRPCRouter({
  createOrder: privateProcedure
  .input(orderSchema)
  .mutation(({ input }) => createOrderHandler({ input })),

  findOrders: publicProcedure
  .input(z.string())
  .query(({ input }) => findAllUserOrders({ input })),

  findAllOrders: publicProcedure
  .query(() => findAllOrders()),

  deleteOrder: privateProcedure
  .input(z.string())
  .mutation(({ input }) => deleteOrderHandler({ input }))
}
);