import { loginActions, loginReducer } from "./loginSlice";
import { type LoginSchema } from "../types/loginSchema";

describe("loginSlice", () => {
  const state: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
  };

  test("set Username", () => {
    expect(loginReducer(state, loginActions.setUsername("123"))).toEqual({
      ...state,
      username: "123",
    });
  });

  test("set Password", () => {
    expect(loginReducer(state, loginActions.setPassword("123"))).toEqual({
      ...state,
      password: "123",
    });
  });
});
