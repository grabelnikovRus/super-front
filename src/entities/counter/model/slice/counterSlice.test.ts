import { counterReducer, counterActions } from "./counterSlice";
import { type CounterShema } from "../types/counterShema";

describe("counterSlice", () => {
  test("increment", () => {
    const state: CounterShema = { value: 0 };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 1 });
  });
  test("decrement", () => {
    const state: CounterShema = { value: 0 };
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: -1,
    });
  });
});
