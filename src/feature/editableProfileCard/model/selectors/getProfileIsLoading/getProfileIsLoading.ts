import { type StateType } from "@app/providers/storeProvider";

export const getProfileIsLoading = (state: StateType) => state.profile?.isLoading;
