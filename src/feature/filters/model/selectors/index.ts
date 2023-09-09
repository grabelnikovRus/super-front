import { type StateType } from "@app/providers/storeProvider";

export const getFilterView = (state: StateType) =>
  state.filter?.view ?? "small";
export const getFilterLimit = (state: StateType) => state.filter?.limit;
export const getFilterIsInit = (state: StateType) => state.filter?._isInit;
