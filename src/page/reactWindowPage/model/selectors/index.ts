import { type StateType } from "@app/providers/storeProvider";

export const getReactWindowPageIsLoading = (state: StateType) =>
    state.reactWindowPage?.isLoading ?? true;
export const getReactWindowPageHasMore = (state: StateType) => 
    state.reactWindowPage?.hasMore ?? true;
export const getReactWindowPageNumber = (state: StateType) => 
    state.reactWindowPage?.page ?? 1;