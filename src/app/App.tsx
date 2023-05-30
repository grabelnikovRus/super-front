import { FC } from "react"
import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import { useTheme } from "@app/providers/themeProviders";
import { classNames } from "@shared/helpers";

import "./styles/index.scss"
import { NavBar } from "@widgets/navBar";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
         <div className={classNames("app", theme)}>
            <NavBar />
            <AppRouter />
        </div>
    )
}