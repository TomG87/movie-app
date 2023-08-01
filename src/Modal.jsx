import React from "react";
import ShowMovie from "./ShowMovie";

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  } else {
    return null; // Render nothing if isOpen prop is false
  }
};

export default Modal;
