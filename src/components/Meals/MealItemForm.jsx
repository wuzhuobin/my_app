import React from "react";
import style from "./MealItemForm.module.css";

import Input from "../General/Input";

const MealItemForm = function (props) {
  const input = React.useRef();
  const [isInputValid, setInputValid] = React.useState(true);
  const onSubmitHandler = function (event) {
    event.preventDefault();
    const value = parseInt(input.current.value);
    if (value < 1 || value > 5) {
      setInputValid(false);
      return;
    }
    setInputValid(true);
    props.onSubmitHandler(value);
  };
  return (
    <React.Fragment>
      <form className={style.form} onSubmit={onSubmitHandler}>
        <Input
          input={{
            type: "number",
            defaultValue: 1,
            max: 5,
            min: 1,
            step: 1,
            ref: input,
          }}
        >
          Amount
        </Input>
        {!isInputValid && <p>Your input is not valid.</p>}
        <button>+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
