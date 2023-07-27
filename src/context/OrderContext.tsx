import { createContext, useReducer, useEffect } from "react";
import type { FullOrderType, AnyFoodType } from "~/data/ordertypes";

export const OrderContext = createContext<ContextType | null>(null);

type ContextType = {
  orderState: FullOrderType;
  orderDispatch: React.Dispatch<OrderReducerAction>;
};

type OrderContextProviderProps = {
  children: React.ReactNode;
};

type Action = "ADD" | "REMOVE";

type OrderReducerAction = {
  type: Action;
  payload: { order: AnyFoodType[] };
};

export const orderReducer = (
  state: FullOrderType,
  action: OrderReducerAction
) => {
  const { payload } = action;
  let newState = { ...state };

  if (action.type === "ADD") {
    for (let i = 0; i < payload.order.length; i++) {
      const currentItem = payload.order[i];
      if (currentItem) {
        switch (currentItem.foodType) {
          case "PIZZA": {
            if (!newState.Pizzas.find((pizza) => pizza.id === currentItem.id)) {
              newState = {
                ...newState,
                Pizzas: [...newState.Pizzas, currentItem],
              };
            }
            break;
          }
          case "WINGS": {
            if (!newState.Wings.find((wings) => wings.id === currentItem.id)) {
              newState = {
                ...newState,
                Wings: [...newState.Wings, currentItem],
              };
            }
            break;
          }
          case "SIDES": {
            if (!newState.Sides.find((side) => side.id === currentItem.id)) {
              newState = {
                ...newState,
                Sides: [...newState.Sides, currentItem],
              };
            }
            break;
          }
          case "DESSERTS": {
            if (
              !newState.Desserts.find(
                (dessert) => dessert.id === currentItem.id
              )
            ) {
              newState = {
                ...newState,
                Desserts: [...newState.Desserts, currentItem],
              };
            }
            break;
          }
          case "DRINKS": {
            if (!newState.Drinks.find((drink) => drink.id === currentItem.id)) {
              newState = {
                ...newState,
                Drinks: [...newState.Drinks, currentItem],
              };
            }
            break;
          }
          case "SAUCES": {
            if (!newState.Sauces.find((sauce) => sauce.id === currentItem.id)) {
              newState = {
                ...newState,
                Sauces: [...newState.Sauces, currentItem],
              };
            }
            break;
          }
        }
      }
    }
  } else if (action.type === "REMOVE") {
    for (let i = 0; i < payload.order.length; i++) {
      const currentItem = payload.order[i];
      if (currentItem) {
        switch (currentItem.foodType) {
          case "PIZZA": {
            const findPizzaIndex = newState.Pizzas.map((pizza) => {
              return pizza.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findPizzaIndex > -1) {
              newState.Pizzas.splice(findPizzaIndex, 1);
            }
            break;
          }
          case "WINGS": {
            const findWingsIndex = newState.Wings.map((wings) => {
              return wings.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findWingsIndex > -1) {
              newState.Wings.splice(findWingsIndex, 1);
            }
            break;
          }
          case "SIDES": {
            const findSidesIndex = newState.Sides.map((sides) => {
              return sides.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findSidesIndex > -1) {
              newState.Sides.splice(findSidesIndex, 1);
            }
            break;
          }
          case "DESSERTS": {
            const findDessertsIndex = newState.Desserts.map((desserts) => {
              return desserts.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findDessertsIndex > -1) {
              newState.Desserts.splice(findDessertsIndex, 1);
            }
            break;
          }
          case "DRINKS": {
            const findDrinksIndex = newState.Drinks.map((drinks) => {
              return drinks.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findDrinksIndex > -1) {
              newState.Drinks.splice(findDrinksIndex, 1);
            }
            break;
          }
          case "SAUCES": {
            const findSaucesIndex = newState.Sauces.map((sauces) => {
              return sauces.id === currentItem.id;
            }).findIndex((bool) => bool);
            if (findSaucesIndex > -1) {
              newState.Sauces.splice(findSaucesIndex, 1);
            }
            break;
          }
        }
      }
    }
  } else {
    console.log("D");
  }
  localStorage.setItem("order", JSON.stringify(newState));
  return newState;
};

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    Pizzas: [],
    Wings: [],
    Sides: [],
    Desserts: [],
    Drinks: [],
    Sauces: [],
  });

  useEffect(() => {
    const orderCheck: string | null = localStorage.getItem("order");
    const order: FullOrderType | null = orderCheck //eslint-disable-line
      ? JSON.parse(orderCheck) //eslint-disable-line
      : null; //eslint-disable-line

    if (order) {
      orderDispatch({
        type: "ADD",
        payload: {
          order: [
            ...order.Pizzas,
            ...order.Wings,
            ...order.Sides,
            ...order.Desserts,
            ...order.Drinks,
            ...order.Sauces,
          ],
        },
      });
    }
  }, []);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
