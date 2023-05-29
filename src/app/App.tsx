import { FC, Suspense, useContext } from "react"
import { Route, Routes, Link } from "react-router-dom";
import { AboutAsync } from "@page/aboutPage";
import { MainAsync } from "@page/mainPage";
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
            <Suspense fallback="Load">
                <Routes>
                    <Route path="/" element={<MainAsync />} />
                    <Route path="/about" element={<AboutAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}