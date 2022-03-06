import React from "react";
import DUMMY_MEALS from "./dummy-meals";
import hooks from "../hooks";

const cartReducer = function (state, action) {
  if (!action.items) {
    return state;
  }
  const newState = { ...state };
  for (let item in action.items) {
    if (newState[item] === undefined) {
      newState[item] = 0;
    }
    newState[item] += action.items[item];
  }
  return newState;
};
const ContextProvider = function (props) {
  // const [cart, cartDispatch] = React.useReducer(cartReducer, {});
  const [cart, cartDispatch] = hooks.useCart();
  // const context = { cart, cartDispatch, meals: DUMMY_MEALS };
  const context = { cart, cartDispatch, meals: hooks.useDummyMeals() };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
const defaultContext = {
  meals: DUMMY_MEALS,
  cart: {},
  cartDispatch: () => {},
};
const Context = React.createContext(defaultContext);
Context.ContextProvider = ContextProvider;
export default Context;
