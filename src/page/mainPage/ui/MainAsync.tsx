import { lazy } from "react";

export const MainAsync = lazy(
  async () => await import("./Main").then((module) => ({ default: module.Main }))
);
