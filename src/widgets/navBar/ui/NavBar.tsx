import { type FC } from "react";
import { AppLink } from "@shared/ui";
import { RouterPath } from "@app/router/config/config";

import s from "./NavBar.module.scss";

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__links}>
        <AppLink to={RouterPath.MAIN} className={s.navbar__link}>
          главная
        </AppLink>
      </div>
    </div>
  );
};
