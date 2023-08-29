import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsPage } from "./ArticleDetailsPage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { articleDetailsReducer } from "@entities/article/model/slice/articleDetailsSlice";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { type StateType } from "@app/providers/storeProvider";
import { articleCommentsReducer } from "../model/slice/articleCommentsSlice";
import { articleMock } from "@shared/assest/mock/mocks";
import { addCommentReducer } from "@feature/addComment";
import { Suspense } from "react";

const meta = {
  title: "page/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const state = {
  counter: { value: 0 },
  user: { _isInit: true },
  articles: {
    error: "",
    isLoading: false,
    data: articleMock,
  },
  articleComments: {
    isLoading: false,
    error: undefined,
    ids: [1, 2, 3],
    entities: {
      "1": {
        id: 1,
        text: "some comment",
        articleId: "1",
        userId: 1,
        user: {
          id: 1,
          username: "admin",
          role: "ADMIN",
          avatar:
            "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album",
        },
      },
      "2": {
        id: 2,
        text: "some comment 2",
        articleId: "1",
        userId: 2,
        user: {
          id: 2,
          username: "user",
          role: "USER",
          avatar: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
        },
      },
      "3": {
        id: 3,
        text: "some comment 3",
        articleId: "1",
        userId: 1,
        user: {
          id: 1,
          username: "admin",
          role: "ADMIN",
          avatar:
            "https://sun9-1.userapi.com/impg/SWPMaf_MSz9mzptUya0I9x8WWxEt7fwJ4uyD-g/EE4oVaRp3wI.jpg?size=604x604&quality=95&sign=177e4e821c4a6735db31fbeb84de41e2&c_uniq_tag=eunY8ZVj41jFPdcjxK3Tdq7WAayWGntN8dhmi3Hqliw&type=album",
        },
      },
    },
  },
  addComment: {
    text: "ghgj"
  }
};

const reducer = {
  articles: articleDetailsReducer,
  articleComments: articleCommentsReducer,
  addComment: addCommentReducer
};

Default.decorators = [
  (S) => <Suspense fallback={<div>Load</div>}>{S()}</Suspense>, // ленивая подгрузка для асинхронного компонента
  storeDecorator(state as StateType, reducer as ReducersMapObject<StateType>),
];
