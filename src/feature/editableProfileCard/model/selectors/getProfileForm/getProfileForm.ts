import { type StateType } from "@app/providers/storeProvider";

export const getProfileForm = (state: StateType) => state.profile?.form;
