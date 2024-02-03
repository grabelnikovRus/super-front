import { fetchArticlePage } from "./fetchArticlePage";
import { articlesMock } from "@shared/assest/mock/mocks";
import { TestAsyncThunk } from "@shared/helpers/test/testAsyncThunk";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";

const state: DeepPartial<StateType> = {
  articlePage: {
    isLoading: false,
    error: "",
    hasMore: true,
    page: 1,
    ids: [],
    entities: {},
    _isInit: true
  }
}

const action = new TestAsyncThunk(fetchArticlePage, state);

describe("fetchArticlePage", () => {
  test("success login", async () => {
    action.api.get.mockResolvedValue({ data: articlesMock });
    const result = await action.callThunk(undefined);

    expect(action.dispatch).toBeCalledTimes(2);
    expect(result.payload).toEqual(articlesMock);
  });
});
