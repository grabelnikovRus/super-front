import { useState, useEffect, useRef, type ReactNode } from "react";
import { classNames } from "../../helpers/lib";
import { Portal } from "../portal/Portal";
import { Overlay } from "../overlay/Overlay";

import s from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode
  isOpen: boolean;
  onClose: () => void;
  containerMount?: HTMLElement;
}

const DELAY_MODAL = 300;

export const Modal = ({ children, isOpen, onClose, containerMount }: ModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const onClickOverlay = () => {
    setOpenModal(false);
    timer.current = setTimeout(() => {
      onClose();
    }, DELAY_MODAL);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClickOverlay();
  };

  useEffect(() => {
    if (isOpen) {
      timer.current = setTimeout(() => {
        setOpenModal(true);
      }, DELAY_MODAL);
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timer.current);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal container={containerMount}>
      <div className={classNames(s.modal, { [s.modal__close]: !isOpen })}>
        <Overlay isOpen={openModal} onClick={onClickOverlay}/>
        <div
          className={classNames(s.modal_content, {
            [s.modal_content__open]: openModal,
          })}
        >
            {children}
        </div>
      </div>
    </Portal>
  );
};
