import { type StateType } from "@app/providers/storeProvider";
import { getCounterValue } from "./getCounterValue";
import { type DeepPartial } from "@reduxjs/toolkit";

describe("getCounterValue", () => {
  test("return value", () => {
    const state: DeepPartial<StateType> = { counter: { value: 10 } };
    expect(getCounterValue(state as StateType)).toBe(10);
  });
});
