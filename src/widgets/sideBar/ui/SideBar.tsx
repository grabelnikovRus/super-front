import { type FC, useState } from "react";

import s from "./SideBar.module.scss";
import { classNames } from "@shared/helpers";
import { Button } from "@shared/ui";
import { ThemeSwitcher } from "@widgets/themeSwitcher";
import { LangSwitcher } from "@widgets/langSwitcher";

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Button 
        onClick={onToggle}
        data-testid="toggle-sidebar"
      >
        toggle
        </Button>
      <div className={s.sidebar_switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
