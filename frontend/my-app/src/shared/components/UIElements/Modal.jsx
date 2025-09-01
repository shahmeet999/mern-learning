import React, { useRef } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
  const nodeRef = useRef(null);

  const content = (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={`modal ${props.className}`}
        style={props.style}
      >
        <header className={`modal__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          className="modal__content"
          onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
        >
          <div className={`modal__content ${props.contentClass}`}>
            {props.children}
          </div>
          <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
          </footer>
        </form>
      </div>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <ModalOverlay {...props} />
    </React.Fragment>
  );
};

export default Modal;
