import { getArticlesData } from "@entities/article";
import { getAuthData } from "@entities/user";
import { createSelector } from "@reduxjs/toolkit";

export const getCanEditArticle = createSelector(
    getAuthData, 
    getArticlesData, 
    (authData, article) => {
        if (!authData?.id || !article?.userId) return false;

        return authData.id === article.userId
    }
);
