import type { Meta, StoryObj } from "@storybook/react";
import { ArticlePage } from "./ArticlePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type ReducerList, type StateType } from "@app/providers/storeProvider";
import { articleMock } from "@shared/assest/mock/mocks";
import { articlePageReducer } from "../model/slice/articlePageSlice";

const meta = {
  title: "page/ArticlePage",
  component: ArticlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const state: Partial<StateType> = {
  articlePage: {
    isLoading: false,
    error: "",
    page: 1,
    hasMore: false,
    _isInit: true,
    ids: [1],
    entities: {
      "1": articleMock
    }
  },
}

const reducer: ReducerList = { articlePage: articlePageReducer }

Default.decorators = [
  storeDecorator(
    state as StateType,
    reducer as ReducersMapObject<StateType>
  ),
]
