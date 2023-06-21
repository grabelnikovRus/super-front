import { useState, type FC, useCallback } from "react";
import { Button, Modal } from "@shared/ui";
import { useTranslation } from "react-i18next";

import s from "./NavBar.module.scss";

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const { t } = useTranslation()

  const toggleAuthModal = useCallback(
    () => { setOpenAuthModal((prev) => !prev); },
    [openAuthModal]
  )

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <Button
          theme="outline"
          className={s.navbar__link}
          onClick={toggleAuthModal}
        >
          {t("sign_in")}
        </Button>
        <Modal
          isOpen={openAuthModal}
          onClose={toggleAuthModal}
          containerMount={document.body}
        >
          dwdeewd wedwedwd wedwed
        </Modal>
      </div>
    </div>
  );
};
