import { lazy } from "react";

export const AboutAsync = lazy(() => import("./About").then((module) =>({ default: module.About})));
// для того, чтобы страница подружалась по мере её запроса
