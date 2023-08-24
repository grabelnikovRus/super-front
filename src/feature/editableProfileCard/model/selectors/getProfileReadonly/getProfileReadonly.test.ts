import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileReadonly } from "./getProfileReadonly";
import { type StateType } from "@app/providers/storeProvider";

describe("getProfileReadonly", () => {
  test("get readonly", () => {
    const state: DeepPartial<StateType> = {
      profile: { error: "error", readonly: true },
    };
    expect(getProfileReadonly(state as StateType)).toBe(true);
  });
});
