import { memo, type FC } from "react";
import s from "./SideBarItem.module.scss";
import { AppLink } from "@shared/ui";
import { classNames } from "@shared/helpers/lib";
import { type SideBarItemsType } from "../config/config";
import { useTranslation } from "react-i18next";

interface SideBarItemProps {
  collapsed: boolean;
  item: SideBarItemsType;
}

const SideBarItem: FC<SideBarItemProps> = ({
  item: { Icon, path, title },
  collapsed,
}) => {
  const { t } = useTranslation();

  return (
    <AppLink to={path} className={s.item_link}>
      <Icon />
      <span
        className={classNames(s.item_text, {
          [s.item_text__collapsed]: collapsed,
        })}
      >
        {t(title)}
      </span>
    </AppLink>
  );
};

export const SideBarItemMemo = memo(SideBarItem);
