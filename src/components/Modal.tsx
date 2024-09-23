import { type ReactNode } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  const modalRoot = document.getElementById("file-modal") as HTMLElement;
  return createPortal(
    <dialog
      style={{
        zIndex: "50",
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(1px)",
      }}
    >
      <div
        className="window"
        style={{
          alignSelf: "center",
          padding: "0.5rem",
        }}
      >
        {children}
      </div>
    </dialog>,
    modalRoot,
  );
}
