import React from "react";
import ReactDom from "react-dom";
import style from "./Modal.module.css";

const Modal = function (props) {
  const modalDiv = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <div className={style.backdrop}>
          <div className={style.modal}>{props.children}</div>
        </div>,
        modalDiv
      )}
    </React.Fragment>
  );
};

export default Modal;
