// Import necessary React hooks and utility for rendering outside the root DOM tree
import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

// Define a Modal component that can be controlled via refs using forwardRef
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  // Create a ref to the dialog element so we can programmatically open it
  const dialog = useRef();
  // Expose an 'open' method to parent components via the forwarded ref
  useImperativeHandle(ref, () => ({
      open() {
        dialog.current.showModal();
      }
  }));

  // Render the modal dialog into a separate DOM node (modal-root) using React Portal
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900-90 p-4 rounded-md shadow-md w-1/3 max-w-2xl"
    >
      {children}
      {/* Button form with action="dialog" closes the modal automatically when clicked */}
      <form action="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;