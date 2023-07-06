import { type StateType } from "@app/providers/storeProvider";

export const getProfileError = (state: StateType) => state.profile?.error;
