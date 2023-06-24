import { type DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";
import { type StateType } from "@app/providers/storeProvider";

describe("getCounter", () => {
  test("return counter", () => {
    const state: DeepPartial<StateType> = { counter: { value: 10 } }
    expect(getCounter(state as StateType)).toEqual({ value: 10 })
  })
})
