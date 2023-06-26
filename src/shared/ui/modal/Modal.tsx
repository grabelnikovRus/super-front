import {
  type FC,
  type MouseEvent,
  useState,
  useEffect,
  useRef,
} from "react"
import { classNames } from "@shared/helpers"
import { Portal } from "../portal/Portal"

import s from "./Modal.module.scss"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  containerMount?: HTMLElement
}

const DELAY_MODAL = 300

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  containerMount
}) => {
  const [openModal, setOpenModal] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(null)

  const onClickContent = (e: MouseEvent<HTMLDivElement>) => { e.stopPropagation(); }

  const onClickOverlay = () => {
    setOpenModal(false);
    timer.current = setTimeout(() => {
      onClose();
    }, DELAY_MODAL)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClickOverlay()
  }

  useEffect(() => {
    if (isOpen) {
      timer.current = setTimeout(() => { setOpenModal(true); }, DELAY_MODAL)
      document.addEventListener("keydown", onKeyDown)
    }
    return () => {
      clearTimeout(timer.current)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Portal container={containerMount}>
      <div className={classNames(s.modal, { [s.modal__close]: !isOpen })}>
        <div
          onClick={onClickOverlay}
          className={classNames(s.modal_overlay, {
            [s.modal_overlay__open]: openModal
          })}
        >
          <div
            onClick={onClickContent}
            className={classNames(s.modal_content, {
              [s.modal_content__open]: openModal,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
