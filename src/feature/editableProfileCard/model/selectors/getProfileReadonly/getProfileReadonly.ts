import { type StateType } from "@app/providers/storeProvider";

export const getProfileReadonly = (state: StateType) => state.profile?.readonly;
