import { type StateType } from "@app/providers/storeProvider";
import { type AsyncThunkAction, type Dispatch } from "@reduxjs/toolkit";

type ActionType<Return, Args> =
  (arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: string }>

export class TestAsyncThunk<Return, Args> {
  dispatch: Dispatch;
  getState: () => StateType;
  actionCreator: (arg: Args) => AsyncThunkAction<Return, Args, { rejectValue: string }>

  constructor(action: ActionType<Return, Args>) {
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.actionCreator = action
  }

  async callThunk(arg: Args) {
    const action = this.actionCreator(arg)
    const response = await action(this.dispatch, this.getState, undefined)
    return response
  }
}
