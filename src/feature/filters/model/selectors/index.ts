import { type StateType } from "@app/providers/storeProvider";

export const getFilterView = (state: StateType) =>
  state.filter?.view ?? "small";
export const getFilterLimit = (state: StateType) => state.filter?.limit;
export const getFilterOrder = (state: StateType) => state.filter?.order ?? "asc";
export const getFilterSearch = (state: StateType) => state.filter?.search ?? ""
export const getFilterSort = (state: StateType) => state.filter?.sort ?? "createdAt";
export const getType = (state: StateType) => state.filter?.type ?? "IT";
