// TODO
// eslint-disable-next-line plugin-grabelnikov/layer-imports
import { useTheme } from "@shared/hooks/useTheme";
import { memo, type FC } from "react";
import IconDark from "@shared/assest/icon/theme-dark.svg";
import IconLight from "@shared/assest/icon/theme-light.svg";

import { Button } from "@shared/ui";

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="">
      {theme === "dark" ? <IconDark /> : <IconLight />}
    </Button>
  );
};

export const ThemeSwitcherMemo = memo(ThemeSwitcher);
