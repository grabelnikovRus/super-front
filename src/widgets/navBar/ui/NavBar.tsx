import { useState, type FC, useCallback, useEffect } from "react";
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
    setOpenAuthModal((prev) => !prev);
  }, [])

  const onClickBtn = useCallback(() => {
    if (authData) dispatch(userActions.logout());
    else setOpenAuthModal(true);
  }, [openAuthModal, authData])

  useEffect(() => {
    if (authData) setOpenAuthModal(false)
  }, [authData])

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <Button
          theme="outline"
          className={s.navbar__link}
          onClick={onClickBtn}
        >
          {t(authData ? "logout" : "sign_in")}
        </Button>
        <LoginModal isOpen={openAuthModal} onClose={toggleAuthModal}/>
      </div>
    </div>
  );
};
