import { type FC, useState } from "react";
import { classNames } from "@shared/helpers/lib";
import { Button } from "@shared/ui";
import { ThemeSwitcher } from "@widgets/themeSwitcher";
import { LangSwitcher } from "@widgets/langSwitcher";
import { getSideBarItems } from "../model/selectors/getSideBarItems";
import { SideBarItemMemo as SideBarItem } from "./SideBarItem";

import s from "./SideBar.module.scss";
import { useSelector } from "react-redux";

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const sideBarItems = useSelector(getSideBarItems);

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
        {sideBarItems.map((item) => (
          <SideBarItem item={item} collapsed={collapsed} key={item.title} />
        ))}
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
