import { useState } from "react";
import { createPortal } from "react-dom";

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <h1>App Content</h1>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Show Message
        </button>
        <AlertMessage
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Alert Message
          <br />
          Click to Close
        </AlertMessage>
      </div>
    </>
  );
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div onClick={onClose} style={{ background: "#777", padding: ".5rem" }}>
        {children}
      </div>
    </>,document.getElementById("modals")
  );
}
