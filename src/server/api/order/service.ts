import { prisma } from "~/server/db";
import type { Prisma, Order } from '@prisma/client';

export const createOrder = async (input: Prisma.OrderCreateInput) => {
  return prisma.order.create({
    data: input,
  });
};

export const findOrder = async (
  where: Prisma.OrderWhereInput,
  select?: Prisma.OrderSelect
) => {
  return (await prisma.order.findFirst({
    where,
    select,
  })) as Order;
};

export const findOrders = async (
  where: Prisma.OrderWhereInput,
  select?: Prisma.OrderSelect
) => {
  return (await prisma.order.findMany({
    where,
    select,
  })) as Order[];
};

export const findUniqueOrder = async (
  where: Prisma.OrderWhereUniqueInput,
  select?: Prisma.OrderSelect
) => {
  return (await prisma.order.findUnique({
    where,
    select,
  })) as Order;
};

export const deleteOrder = async (
  where: Prisma.OrderWhereUniqueInput
) => {
  return ( await prisma.order.delete({where}));
}