import { lazy } from "react";

export const ArticleDetailsEditPageAsync = lazy(
    async () => 
        await import("./ArticleDetailsEditPage")
            .then((comp) => ({ default: comp.ArticleDetailsEditPage }))
)