import { useEffect, type ReactNode, useRef, useState } from "react";
import { classNames } from "../../helpers/lib";
import { Portal } from "../portal/Portal";
import { Overlay } from "../overlay/Overlay";

import s from "./BottomSheet.module.scss";

interface BottomSheetProps {
  children: ReactNode
  isOpen: boolean;
  trigger: ReactNode
  onClose: () => void;
}

const DELAY_MODAL = 300;

export const BottomSheet = ({ children, isOpen, trigger, onClose }: BottomSheetProps) => {
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

  if (!isOpen) return <>{trigger}</>;

  return (
    <div className={s.block_wrapper}>
      {trigger}
      <Portal>
        <div className={classNames(s.block, { [s.block__close]: !isOpen })}>
          <Overlay isOpen={openModal} onClick={onClickOverlay}/>
          <div
            className={classNames(s.block_content, {
              [s.block_content__open]: openModal,
            })}
          >
            {children}
          </div>
        </div>
      </Portal>
    </div>
  );
};
