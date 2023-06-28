import { type StateType } from "@app/providers/storeProvider";

export const getAuthData = (state: StateType) => state.user.authData;
