import { useState } from "react";
import type { Order } from "@prisma/client";
import { wholeOrderedPrice } from "~/data/priceCalculator";
import { api } from "~/utils/api";

interface OrderProfileProps {
  order: Order;
  userOrders: Order[];
  setUserOrders: React.Dispatch<React.SetStateAction<Order[]>>;
}

const OrderProfile: React.FC<OrderProfileProps> = (
  props: OrderProfileProps
) => {
  const { order, userOrders, setUserOrders } = props;
  const {
    pizzas,
    sides,
    wings,
    desserts,
    drinks,
    sauces,
    createdAt,
    id: orderId,
  } = order;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const deleteOrder = api.order.deleteOrder.useMutation();

  const handleDeleteOrder = (input: string) => {
    deleteOrder.mutate(input, {
      onSuccess(data) {
        const newOrders = [...userOrders];
        const findOrderIndex = [...userOrders]
          .map((order) => {
            return order.id === input;
          })
          .findIndex((bool) => bool);
        if (findOrderIndex > -1) {
          newOrders.splice(findOrderIndex, 1);
        }
        setUserOrders(newOrders);
        setDialogOpen(false);
      },
    });
  };

  const PizzaList = pizzas.map((pizza, index) => {
    return (
      <div
        key={`pizza-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{pizza.description}</p>
        <p className="font-bold">${pizza.price.toFixed(2)}</p>
      </div>
    );
  });
  const WingsList = wings.map((wings, index) => {
    return (
      <div
        key={`wings-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{wings.description}</p>
        <p className="font-bold">${wings.price.toFixed(2)}</p>
      </div>
    );
  });
  const SidesList = sides.map((sides, index) => {
    return (
      <div
        key={`sides-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{sides.description}</p>
        <p className="font-bold">${sides.price.toFixed(2)}</p>
      </div>
    );
  });
  const DessertsList = desserts.map((desserts, index) => {
    return (
      <div
        key={`desserts-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{desserts.description}</p>
        <p className="font-bold">${desserts.price.toFixed(2)}</p>
      </div>
    );
  });
  const DrinksList = drinks.map((drinks, index) => {
    return (
      <div
        key={`drinks-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{drinks.description}</p>
        <p className="font-bold">${drinks.price.toFixed(2)}</p>
      </div>
    );
  });
  const SaucesList = sauces.map((sauces, index) => {
    return (
      <div
        key={`sauces-${index}`}
        className="flex items-center justify-between odd:bg-green-800/10"
      >
        <p className="px-1">{sauces.description}</p>
        <p className="font-bold">${sauces.price.toFixed(2)}</p>
      </div>
    );
  });

  const FoodItemList = [
    ...PizzaList,
    ...WingsList,
    ...SidesList,
    ...DessertsList,
    ...DrinksList,
    ...SaucesList,
  ];

  return (
    <div className="relative my-1">
      <div className="flex justify-between bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <p className="px-1">Order placed {createdAt.toLocaleString()}</p>
        <button
          className="px-1"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          ✕
        </button>
      </div>

      {FoodItemList.length > 0 ? (
        FoodItemList
      ) : (
        <div className="flex items-center justify-center">
          <p className="m-2 font-bold">There is nothing in your cart.</p>
        </div>
      )}
      <div className="flex justify-end gap-4 border-t-2">
        <p className="text-xl font-bold">Subtotal</p>
        <p className="text-xl font-bold">${wholeOrderedPrice(order).text}</p>
      </div>
      {dialogOpen && (
        <div className="flex justify-between bg-red-600 text-white">
          <p className="px-1">Are you sure you want to delete this order?</p>
          <div className="flex justify-center">
            <button
              className="px-1 hover:underline"
              onClick={() => {
                handleDeleteOrder(orderId);
              }}
            >
              Delete
            </button>
            <button
              className="px-1 hover:underline"
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderProfile;
