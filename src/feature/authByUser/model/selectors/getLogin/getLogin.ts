import { type StateType } from "@app/providers/storeProvider";
const a = { username: "", password: "", isLoading: false, error: "" }
export const getLogin = (state: StateType) => state.login || a
