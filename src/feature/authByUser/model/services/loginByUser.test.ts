import { loginByUser } from "./loginByUser";
import { type UserType, userActions } from "@entities/user";
import { TestAsyncThunk } from "@shared/helpers/test/testAsyncThunk";

const action = new TestAsyncThunk(loginByUser);

describe("loginByUser", () => {
  //   let dispatch: Dispatch;
  //   let getState: () => StateType;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  //   test("success login", async () => {
  //     const userValue = { username: "admin", password: "123", id: 1 };
  //     mockedAxios.post.mockResolvedValue({ data: userValue });
  //     const action = loginByUser({ username: "admin", password: "123" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toBeCalledTimes(3)
  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //     expect(result.payload).toEqual(userValue)
  //   });

  //   test("reject login", async () => {
  //     const errorValue = { response: { status: 403 } };
  //     mockedAxios.post.mockRejectedValue(errorValue);
  //     const action = loginByUser({ username: "", password: "" });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toBeCalledTimes(2);
  //     expect(result.payload).toBe("check_username")
  //   });

  test("success login", async () => {
    const userValue: UserType = { username: "admin", id: "1", role: ["ADMIN"] };
    action.api.post.mockResolvedValue({ data: userValue });
    const result = await action.callThunk({ username: "admin", password: "123" });

    expect(action.dispatch).toBeCalledTimes(3);
    expect(action.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue)); // проверяет с каким аргументом была вызвана функция
    expect(result.payload).toEqual(userValue);
  });

  test("reject login", async () => {
    const errorValue = { response: { status: 403 } };
    action.api.post.mockRejectedValue(errorValue);
    const result = await action.callThunk({ username: "", password: "" });

    expect(action.dispatch).toBeCalledTimes(2);
    expect(result.payload).toBe("error");
  });
});
