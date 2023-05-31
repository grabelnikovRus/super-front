import { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../config/config";

export const AppRouter: FC = () => {
    return (
        <Suspense fallback="Load">
            <Routes>
                {Object.entries(routerConfig).map(([path, { element }]) => <Route path={path} key={path} element={<div className="content">{element}</div>} />)}
            </Routes>
        </Suspense>
    )
}