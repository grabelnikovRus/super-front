import { fetchNextArticlePage } from "./fetchNextArticlePage";
import { articlePageActions } from "../slice/articlePageSlice";
import { articlesMock } from "@shared/assest/mock/mocks";
import { TestAsyncThunk } from "@shared/helpers/test/testAsyncThunk";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";

const state: DeepPartial<StateType> = {
  articlePage: {
    isLoading: false,
    view: "big",
    limit: 4,
    hasMore: true,
    page: 1,
    ids: [],
    entities: {}
  }
}

const action = new TestAsyncThunk(fetchNextArticlePage, state);

describe("fetchNextArticlePage", () => {
  test("success login", async () => {
    action.api.get.mockResolvedValue({ data: articlesMock });
    const result = await action.callThunk(undefined);

    expect(action.dispatch).toBeCalledTimes(3);
    expect(action.dispatch).toHaveBeenCalledWith(articlePageActions.setPage(2)); // проверяет с каким аргументом была вызвана функция
    expect(result.payload).toEqual(articlesMock);
  });


});
