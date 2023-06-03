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
      className={classNames(s.sidebar, {
        [s.sidebar__collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={s.sidebar_switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
