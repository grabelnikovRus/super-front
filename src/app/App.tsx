import { type FC } from "react";
import { AppRouter } from "./router";
import { NavBar } from "@widgets/navBar";
import { SideBar } from "@widgets/sideBar";

import "@shared/config/i18n/config";

import "./styles/index.scss";

export const App: FC = () => {
  return (
    <>
      <NavBar />
      <main className="main">
        <SideBar />
        <AppRouter />
      </main>
    </>
  );
};
