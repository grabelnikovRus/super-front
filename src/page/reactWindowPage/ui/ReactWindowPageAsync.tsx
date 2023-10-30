import { lazy } from "react";

export const ReactWindowPageAsync = lazy(
    async () => await import("./ReactWindowPage")
        .then((Comp) => ({ default: Comp.ReactWindowPage})))