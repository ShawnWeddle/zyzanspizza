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
  payload: AnyFoodType[];
};

export const orderReducer = (
  state: FullOrderType,
  action: OrderReducerAction
) => {
  const { payload } = action;
  let newState = { ...state };

  switch (action.type) {
    case "ADD": {
      for (let i = 0; i < payload.length; i++) {
        const currentItem = payload[i];
        if (currentItem) {
          switch (currentItem.foodType) {
            case "PIZZA": {
              if (
                !newState.Pizzas.find((pizza) => pizza.id === currentItem.id)
              ) {
                newState = {
                  ...newState,
                  Pizzas: [...newState.Pizzas, currentItem],
                };
              }
              break;
            }
            case "WINGS": {
              if (
                !newState.Wings.find((wings) => wings.id === currentItem.id)
              ) {
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
              if (
                !newState.Drinks.find((drink) => drink.id === currentItem.id)
              ) {
                newState = {
                  ...newState,
                  Drinks: [...newState.Drinks, currentItem],
                };
              }
              break;
            }
            case "SAUCES": {
              if (
                !newState.Sauces.find((sauce) => sauce.id === currentItem.id)
              ) {
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
    }
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
    CustomerName: null,
  });

  useEffect(() => {
    const orderCheck: string | null = localStorage.getItem("order");
    const order: FullOrderType | null = orderCheck //eslint-disable-line
      ? JSON.parse(orderCheck) //eslint-disable-line
      : null; //eslint-disable-line

    if (order) {
      orderDispatch({
        type: "ADD",
        payload: [
          ...order.Pizzas,
          ...order.Wings,
          ...order.Sides,
          ...order.Desserts,
          ...order.Drinks,
          ...order.Sauces,
        ],
      });
    }
  }, []);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
