import { type FC, Suspense } from "react";
import { AppRouter } from "./router";
import { useTheme } from "@app/providers/themeProviders";
import { classNames } from "@shared/helpers";

import "./styles/index.scss";
import { NavBar } from "@widgets/navBar";
import { SideBar } from "@widgets/sideBar";

import "@shared/config/i18n/config";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="LOading">
      <div className={classNames("app", theme)}>
        <NavBar />
        <main className="main">
          <SideBar />
          <AppRouter />
        </main>
      </div>
    </Suspense>
  );
};
