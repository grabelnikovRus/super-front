import type { Meta, StoryObj } from "@storybook/react";
import { ArticlePage } from "./ArticlePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";
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
    view: "small",
    isLoading: false,
    ids: [1],
    entities: {
      "1": articleMock
    }
  },
}

const reducer = { articlePage: articlePageReducer }

Default.decorators = [
  storeDecorator(
    state as StateType,
    reducer as ReducersMapObject<StateType>
  ),
]
