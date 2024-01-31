import { type ThemeType } from "@app/providers/themeProviders";
import { type FC, useEffect } from "react";

import "../../../app/styles/index.scss";

export const styleDecorator =
  (theme: ThemeType = "light") =>
  (Story: FC) => {
    useEffect(() => {
      document.body.classList.remove(theme === "light" ? "dark" : "light");
      document.body.classList.add(theme);
    }, [theme]);

    return <Story />;
  };
