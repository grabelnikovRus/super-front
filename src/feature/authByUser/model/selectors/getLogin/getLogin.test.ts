import { type DeepPartial } from "@reduxjs/toolkit";
import { getLogin } from "./getLogin";
import { type StateType } from "@app/providers/storeProvider";

describe("getLogin", () => {
  test("return state login", () => {
    const state: DeepPartial<StateType> = {
      login: {
        username: "123",
        password: "123",
        isLoading: true,
      },
    };
    expect(getLogin(state as StateType)).toEqual({
      username: "123",
      password: "123",
      isLoading: true,
    });
  });

  test("empty state", () => {
    const state: DeepPartial<StateType> = {};
    expect(getLogin(state as StateType)).toBe(undefined);
  });
});
