import { createContext, useReducer } from "react";
import type { FullOrderType, FoodTypes, AnyFoodType } from "~/data/ordertypes";

export const OrderContext = createContext<ContextType | null>(null);

type ContextType = {
  orderState: FullOrderType;
  orderDispatch: React.Dispatch<OrderReducerAction>;
};

type OrderContextProviderProps = {
  children: React.ReactNode;
};

type Action = "ADD" | "REMOVE";

type ActionFood = `${Action}-${FoodTypes}`;

type OrderReducerAction = {
  type: ActionFood;
  payload: AnyFoodType;
};

export const orderReducer = (
  state: FullOrderType,
  action: OrderReducerAction
) => {
  switch (action.type) {
    case "ADD-PIZZA": {
      if (action.payload.foodType === "PIZZA") {
        const newPizza = action.payload;
        return { ...state, Pizzas: [...state.Pizzas, newPizza] };
      } else {
        return state;
      }
    }
    case "ADD-WINGS": {
      if (action.payload.foodType === "WINGS") {
        const newWings = action.payload;
        return { ...state, Wings: [...state.Wings, newWings] };
      } else {
        return state;
      }
    }
  }
  return state;
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
