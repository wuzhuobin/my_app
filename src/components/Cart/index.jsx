import React from "react";
import style from "./Cart.module.css";

import Modal from "../General/Modal";
import CartItem from "./CartItem";
import Context from "../../store";
const Cart = function (props) {
  const { cart, meals, cartDispatch } = React.useContext(Context);
  const onRemove = function (id) {
    const items = {};
    items[id] = -1;
    cartDispatch({ items });
  };
  const onAdd = function (id) {
    const items = {};
    items[id] = 1;
    cartDispatch({ items });
  };
  const totalPrice = Object.entries(cart).reduce(
    (previousValue, currentValue) =>
      previousValue +
      meals.find((meal) => meal.id === currentValue[0]).price * currentValue[1],
    0
  );
  const CartItems = function () {
    return Object.keys(cart).map((item, index) => {
      const meal = meals.find((meal) => meal.id === item);
      return (
        cart[item] > 0 && (
          <CartItem
            key={index}
            name={meal.name}
            price={meal.price}
            amount={cart[item]}
            onAdd={() => onAdd(item)}
            onRemove={() => onRemove(item)}
          />
        )
      );
    });
  };
  return (
    <React.Fragment>
      <Modal>
        <CartItems />
        <div className={style.total}>
          <span>Total</span>
          <span>$ {totalPrice.toFixed(2)}</span>
        </div>
        <div className={style.actions}>
          <button
            className={style["button--alt"]}
            onClick={props.onCloseButtonClick}
          >
            Close
          </button>
          <button className={style.button} onClick={() => console.log(cart)}>
            Order
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default Cart;
