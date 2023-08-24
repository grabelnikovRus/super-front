import { type StateType } from "@app/providers/storeProvider";
import { type DeepPartial, type AsyncThunkAction, type Dispatch } from "@reduxjs/toolkit";
import axios, { type AxiosStatic } from "axios";

type ActionType<Return, Args> = (
  arg: Args
) => AsyncThunkAction<Return, Args, { rejectValue: string }>;

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Args> {
  dispatch: Dispatch;
  getState: () => StateType;
  actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: string }>;
  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(action: ActionType<Return, Args>, state?: DeepPartial<StateType>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateType);
    this.api = mockedAxios;
    this.actionCreator = action;
  }

  async callThunk(arg: Args) {
    const action = this.actionCreator(arg);
    const response = await action(this.dispatch, this.getState, {
      api: this.api,
    });
    return response;
  }
}
