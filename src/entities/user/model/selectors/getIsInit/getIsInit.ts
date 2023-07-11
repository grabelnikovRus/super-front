import { type StateType } from "@app/providers/storeProvider";

export const getIsInit = (state: StateType) => state.user._isInit;
