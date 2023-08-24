import { type StateType } from "@app/providers/storeProvider";

export const getCounter = (state: StateType) => state.counter;
