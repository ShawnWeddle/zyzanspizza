import type { Order } from "@prisma/client";
import { wholeOrderedPrice } from "~/data/priceCalculator";

interface OrderAdminProps {
  order: Order;
}

const OrderAdmin: React.FC<OrderAdminProps> = (props: OrderAdminProps) => {
  const { order } = props;
  const {
    pizzas,
    sides,
    wings,
    desserts,
    drinks,
    sauces,
    createdAt,
    number,
    id: orderId,
    customer,
  } = order;

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
      <div className="flex justify-between bg-yellow-400 text-red-600">
        <p className="px-1">
          Order #{number} placed {createdAt.toLocaleString()} by{" "}
          {customer.firstName} {customer.lastName}
        </p>
      </div>

      {FoodItemList.length > 0 ? (
        FoodItemList
      ) : (
        <div className="flex items-center justify-center">
          <p className="m-2 font-bold">This order is empty.</p>
        </div>
      )}
      <div className="flex justify-end gap-4 border-t-2">
        <p className="text-xl font-bold">Subtotal</p>
        <p className="text-xl font-bold">${wholeOrderedPrice(order).text}</p>
      </div>
    </div>
  );
};

export default OrderAdmin;
