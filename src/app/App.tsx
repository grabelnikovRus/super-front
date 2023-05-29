import { FC, Suspense, useContext } from "react"
import { Link } from "react-router-dom";
import { AppRouter } from "./router";
import { useTheme } from "@app/providers/themeProviders";
import { classNames } from "@shared/helpers";

import "./styles/index.scss"

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
         <div className={classNames("app", theme)}>
            <Link to="/">главная</Link>
            <Link to="/about">о нас</Link>
            <button onClick={toggleTheme}>toggle</button>
            
                <AppRouter />
            
        </div>
    )
}