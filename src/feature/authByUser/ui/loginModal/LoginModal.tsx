import { Suspense, type FC } from "react"

import { Loader, Modal } from "@shared/ui"
import { LoginFormAsync } from "../loginForm/LoginFormAsync"

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
