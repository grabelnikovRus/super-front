import { type FC } from "react";
import { AppRouter } from "./router";
import { useTheme } from "@app/providers/themeProviders";
import { classNames } from "@shared/helpers";
import { NavBar } from "@widgets/navBar";
import { SideBar } from "@widgets/sideBar";

import "@shared/config/i18n/config";

import "./styles/index.scss";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
      <div className={classNames("app", theme)}>
        <NavBar />
        <main className="main">
          <SideBar />
          <AppRouter />
        </main>
      </div>
  );
};
