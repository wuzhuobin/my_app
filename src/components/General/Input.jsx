import React from "react";

import style from "./Input.module.css";
const Input = function (props, ref) {
  return (
    <React.Fragment>
      <div className={style.input}>
        <label>{props.children}</label>
        <input {...props.input}></input>
      </div>
    </React.Fragment>
  );
};

export default React.forwardRef(Input);
