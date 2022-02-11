import React from "react";
import style from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Context from "../../store";

const HeaderCartButton = function (props) {
  const { cart } = React.useContext(Context);
  const numberOfItemsInCart = Object.values(cart).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  const [isButtonBumped, setButtonBumped] = React.useState(false);
  React.useEffect(() => {
    if (numberOfItemsInCart <= 0) {
      return;
    }
    const timer = setTimeout(() => setButtonBumped(false), 300);
    setButtonBumped(true);
    return () => clearTimeout(timer);
  }, [numberOfItemsInCart]);
  return (
    <button
      className={style.button + (isButtonBumped ? " " + style.bump : "")}
      onClick={props.onClick}
    >
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
