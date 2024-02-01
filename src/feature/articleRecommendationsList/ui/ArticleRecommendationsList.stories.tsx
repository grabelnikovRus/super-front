import type { Meta, StoryObj } from "@storybook/react";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";
import { articlesMock } from "@shared/assest/mock/mocks";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { rtkApi } from "@shared/api/rtkApi";

const meta = {
  title: "feature/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  tags: ["autodocs"],
  parameters: {
    mockData: [
        {
            url: `${_API_}/articles?_expand=user&_limit=3`,
            method: "GET",
            status: 200,
            response: articlesMock,
        },
    ],
  }
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const reducer = { api: rtkApi.reducer };

export const Default: Story = {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Default.decorators = [storeDecorator({}, reducer)];
