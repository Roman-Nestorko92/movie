import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import {
  BackDrop,
  ButtonCloseModal,
  Wrapper,
  WrapperContent,
} from "./modalForm.styled";

const modal = document.getElementById("modal");

export default function ModalForm({ onClose, children }) {
  useEffect(() => {
    const onPessKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onPessKeyDown);

    return () => window.removeEventListener("keydown", onPessKeyDown);
  }, [onClose]);

  const onBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <BackDrop onClick={onBackDropClick}>
      <Wrapper>
        <WrapperContent>
          <ButtonCloseModal
            type="button"
            onClick={onClose}
            className="closeModal"
          >
            x
          </ButtonCloseModal>
        </WrapperContent>
        {children}
      </Wrapper>
    </BackDrop>,
    modal
  );
}
