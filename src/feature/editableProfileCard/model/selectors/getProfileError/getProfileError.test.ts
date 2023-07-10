import { type DeepPartial } from "@reduxjs/toolkit"
import { getProfileError } from "./getProfileError"
import { type StateType } from "@app/providers/storeProvider"

describe("getProfileError", () => {
  test("get error", () => {
    const state: DeepPartial<StateType> = { profile: { error: "error" } }
    expect(getProfileError(state as StateType)).toBe("error")
  })
})
