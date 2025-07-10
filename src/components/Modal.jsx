import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
      open() {
        dialog.current.showModal();
      }
  }));

  return createPortal(<dialog ref={dialog} className="modal">{children}</dialog>,
    document.getElementById("modal-root")
);
});

export default Modal;