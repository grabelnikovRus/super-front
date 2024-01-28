import { lazy } from "react"

export const AdminPanelPageAsync = lazy(
    async () => await import("./AdminPanelPage")
        .then((module) => ({ default: module.AdminPanelPage}))
)