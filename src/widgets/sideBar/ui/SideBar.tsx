import { type FC, useState } from "react";
import { classNames } from "@shared/helpers";
import { AppLink, Button } from "@shared/ui";
import { ThemeSwitcher } from "@widgets/themeSwitcher";
import { LangSwitcher } from "@widgets/langSwitcher";
import { RouterPath } from "@app/router/config/config";
import { useTranslation } from "react-i18next";
import HomeIcon from "@shared/assest/icon/home.svg"
import About from "@shared/assest/icon/about_us.svg"

import s from "./SideBar.module.scss";

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.sidebar, {
        [s.sidebar__collapsed]: collapsed,
      })}
    >
      <div className={s.sidebar_links}>
        <AppLink to={RouterPath.MAIN} className={s.sidebar_link}>
          <HomeIcon />
          <span className={classNames(s.sidebar_text, {
            [s.sidebar_text__collapsed]: collapsed
          })}>
            {t("main")}
          </span>
        </AppLink>
        <AppLink to={RouterPath.ABOUT} className={s.sidebar_link}>
          <About />
          <span className={classNames(s.sidebar_text, {
            [s.sidebar_text__collapsed]: collapsed
          })}>
            {t("about_us")}
          </span>
        </AppLink>
      </div>
      <Button
        onClick={onToggle}
        data-testid="toggle-sidebar"
        theme="xl"
        className={s.sidebar_button}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={s.sidebar_switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
