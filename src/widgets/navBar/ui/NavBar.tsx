import { useState, type FC, useCallback, useEffect, useMemo } from "react";
import { AppLink, Avatar, Button, Dropdown, Popover } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@feature/authByUser";
import { useSelector } from "react-redux";
import { getAuthData, isAdmin, isManager, userActions } from "@entities/user";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import Icon from "@shared/assest/icon/notification.svg"
import { RouterPath } from "@app/router/consts";

import s from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);
  const { t } = useTranslation();

  const isAdn = useSelector(isAdmin);
  const isMng = useSelector(isManager)
  const isVisiblePanel = isAdn || isMng

  const toggleAuthModal = useCallback(() => {
    setOpenAuthModal((prev) => !prev);
  }, []);

  const listDropdown = useMemo(() => ([
    { content: t("profile"), href: RouterPath.PROFILE.replace(":id", authData?.id || "") },
    { content: t("logout"), onClick: () => dispatch(userActions.logout()) },
    ...(isVisiblePanel 
        ? [{ content: t("admin_panel"), href: RouterPath.ADMIN_PANEL }] 
        : []
      ),
  ]), [authData?.id])  

  useEffect(() => {
    if (authData) setOpenAuthModal(false);
  }, [authData]);

  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        {authData && <>
          <AppLink 
            to={RouterPath.ARTICLES_CREATE}  
            className={s.navbar__create} >
              {t("create")}
          </AppLink>
          <Popover trigger={<Icon className={s.navbar__icon}/>}>fdfsdfsdfsdfsdf</Popover>
        </>
        }
        {authData 
          ? (
              <Dropdown 
                trigger={<Avatar src={authData.avatar} theme="s"/>} 
                list={listDropdown}
              />
            )
          : (
              <Button 
                theme="outline" 
                className={s.navbar__link} 
                onClick={() => { setOpenAuthModal(true); }}
              >
                {t("sign_in")}
              </Button>
          )}
        <LoginModal isOpen={openAuthModal} onClose={toggleAuthModal} />
      </div>
    </div>
  );
};
