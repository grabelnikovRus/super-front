import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileIsLoading } from "./getProfileIsLoading";
import { type StateType } from "@app/providers/storeProvider";

describe("getProfileIsLoading", () => {
  test("get loading", () => {
    const state: DeepPartial<StateType> = { profile: { isLoading: true } };
    expect(getProfileIsLoading(state as StateType)).toBe(true);
  });
});
