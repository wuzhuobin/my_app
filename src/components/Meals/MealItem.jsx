import React from "react";
import style from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import Context from "../../store";

const MealItem = function (
  props = { id: "m1", name: "Name", description: "Description", price: 0 }
) {
  const ctx = React.useContext(Context);
  return (
    <React.Fragment>
      <div className={style.meal}>
        <ul>
          <li>
            <h3>{props.name}</h3>
          </li>
          <li className={style.description}>{props.description}</li>
          <li className={style.price}>{`$ ${props.price.toFixed(2)}`}</li>
        </ul>
        <MealItemForm
          onSubmitHandler={(value) => {
            const items = {};
            items[props.id] = value;
            ctx.cartDispatch({ items });
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default MealItem;
