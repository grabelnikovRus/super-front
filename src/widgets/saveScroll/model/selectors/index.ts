import { type StateType } from "@app/providers/storeProvider";
import { createSelector } from "@reduxjs/toolkit";

export const getScroll = (state: StateType) => state.scroll
export const getScrollPosition = createSelector(
    getScroll, 
    (state: StateType, pathname: string) => pathname,
    (scroll, pathname) => scroll[pathname] || 0
)
