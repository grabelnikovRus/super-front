import { combineReducers } from "@reduxjs/toolkit";
import { type ArticleDetailsPageScheme } from "../types";
import { articleCommentsReducer } from "./articleCommentsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
    articleComments: articleCommentsReducer
})