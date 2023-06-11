import { createContext, useReducer } from "react";
import type { FullOrderType } from "~/data/ordertypes";

export const OrderContext = createContext<ContextType | null>(null);

type ContextType = {
  orderState: FullOrderType;
  orderDispatch: React.Dispatch<OrderReducerAction>;
};

type OrderContextProviderProps = {
  children: React.ReactNode;
};

type OrderReducerState = FullOrderType;

type OrderReducerAction = {
  type: "CHANGE";
  payload: OrderReducerState;
};

export const orderReducer = (
  state: OrderReducerState,
  action: OrderReducerAction
) => {
  switch (action.type) {
    case "CHANGE": {
      return action.payload;
    }
  }
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
    CustomerName: "",
  });

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
