import { useState, type FC, useCallback } from "react";
import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@feature/authByUser";
import { useSelector } from "react-redux";
import { getAuthData, userActions } from "@entities/user";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";

import s from "./NavBar.module.scss";

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const dispatch = useAppDispatch()
  const authData = useSelector(getAuthData)
  const { t } = useTranslation()

  const toggleAuthModal = useCallback(() => {
    authData ? dispatch(userActions.logout()) : setOpenAuthModal((prev) => !prev);
  }, [openAuthModal, authData])

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <Button
          theme="outline"
          className={s.navbar__link}
          onClick={toggleAuthModal}
        >
          {t(authData ? "logout" : "sign_in")}
        </Button>
        <LoginModal isOpen={openAuthModal} onClose={toggleAuthModal}/>
      </div>
    </div>
  );
};
