import React from "react";
import axios from "axios";

function useDummyMeals() {
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
    async function getMeals() {
      const response = await axios.get(
        "https://my-app-f5bae-default-rtdb.asia-southeast1.firebasedatabase.app/dummyMeals.json"
      );
      setMeals(response.data);
    }
    setTimeout(getMeals, 2000);
    // getMeals();
  }, []);
  return meals;
}

function useCart() {
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
    console.log(newState);
    axios.put(
      "https://my-app-f5bae-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      newState
    );
    return newState;
  };
  // async function getCart() {
  //   const response = await axios.get(
  //     "https://my-app-f5bae-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
  //   );
  //   return response.data;
  // }
  // const initializeCart = await getCart();
  const [cart, cartDispatch] = React.useReducer(cartReducer, {});

  React.useEffect(() => {
    async function getCart() {
      const response = await axios.get(
        "https://my-app-f5bae-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      cartDispatch({ items: response.data });
    }
    getCart();
  }, []);

  return [cart, cartDispatch];
}

const hooks = { useDummyMeals, useCart };
export default hooks;
