import React from "react";
import style from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = function (props) {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartButtonClick}></HeaderCartButton>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
