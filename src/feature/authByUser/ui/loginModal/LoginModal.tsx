import { type FC } from "react"

import { Modal } from "@shared/ui"
import { LoginForm } from "../loginForm/LoginForm"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      containerMount={document.body}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
