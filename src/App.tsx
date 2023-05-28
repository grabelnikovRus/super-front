import { FC, Suspense, useContext } from "react"
import { Counter } from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import { AboutAsync } from "./page/About.async";
import { MainAsync } from "./page/MainAsync";
import { useTheme } from "./components/providers/useTheme";

import "./styles/index.scss"
import { classNames } from "./common/classNames";

export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
         <div className={classNames("app", theme)}>
            <Link to="/">главная</Link>
            <Link to="/about">о нас</Link>
            <button onClick={toggleTheme}>toggle</button>
            <Suspense fallback="Load">
                <Routes>
                    <Route path="/" element={<MainAsync />} />
                    <Route path="/about" element={<AboutAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}