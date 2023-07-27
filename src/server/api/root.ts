import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { orderRouter } from "./routers/order";

export const appRouter = createTRPCRouter({
  user: userRouter,
  order: orderRouter,
});

export type AppRouter = typeof appRouter;
