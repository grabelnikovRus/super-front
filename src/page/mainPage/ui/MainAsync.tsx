import { lazy } from "react";

export const MainAsync = lazy(() => import("./Main").then((module) => ({ default: module.Main })))