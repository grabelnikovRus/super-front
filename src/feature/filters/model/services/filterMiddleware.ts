import { createListenerMiddleware } from "@reduxjs/toolkit";
import { KEY_STORAGE_VIEW } from "@shared/constants/common";

import { type StateType } from "@app/providers/storeProvider";
import { filterActions } from "../slice/filterSlice";
import { type ArticleViewType } from "@entities/article";

export const filterMiddleware = createListenerMiddleware<StateType>();

export const startFilterMiddleware = filterMiddleware.startListening;
startFilterMiddleware({
  actionCreator: filterActions.setView,
  effect: (action) => {
    localStorage.setItem(KEY_STORAGE_VIEW, JSON.stringify(action.payload));
  },
});

startFilterMiddleware({
  actionCreator: filterActions.init,
  effect: (_, { dispatch }) => {
    const view = localStorage.getItem(KEY_STORAGE_VIEW) as ArticleViewType | null;

    if (!view) return;

    dispatch(filterActions.setView(JSON.parse(view)));
  },
});
