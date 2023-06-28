import { useEffect, type FC } from "react";
import { AppRouter } from "./router";
import { NavBar } from "@widgets/navBar";
import { SideBar } from "@widgets/sideBar";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";

import "@shared/config/i18n/config";

import "./styles/index.scss";
import { userActions } from "@entities/user";

export const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initApp())
  }, [])

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
