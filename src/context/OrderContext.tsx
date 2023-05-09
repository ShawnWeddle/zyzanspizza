import { createContext, useReducer } from "react";
import type { OrderType } from "~/data/ordertypes";

export const OrderContext = createContext<ContextType | null>(null);

type ContextType = {
  orderState: OrderReducerState;
  orderDispatch: React.Dispatch<OrderReducerAction>;
};

type OrderContextProviderProps = {
  children: React.ReactNode;
};

type OrderReducerState = {
  order: OrderType;
};

type OrderReducerAction = {
  type: "CHANGE";
  payload: OrderReducerState;
};

export const orderReducer = (
  state: OrderReducerState,
  action: OrderReducerAction
) => {
  switch (action.type) {
    case "CHANGE":
      return {
        order: action.payload.order,
      };

    default:
      return state;
  }
};

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    order: { CustomerName: "" },
  });

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
