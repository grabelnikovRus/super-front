import { type StateType } from "@app/providers/storeProvider";

export const getProfileData = (state: StateType) => state.profile?.data;
