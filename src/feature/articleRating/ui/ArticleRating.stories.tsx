import type { Meta, StoryObj } from "@storybook/react";

import { ArticleRating } from "./ArticleRating";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { RoleTypes } from "@entities/user";

const meta = {
  title: "feature/ArticleRating",
  component: ArticleRating,
  tags: ["autodocs"],
  decorators: [
    storeDecorator({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      user: {
        authData: { 
          id: "1",
          username: "Rus",
          role: [RoleTypes.ADMIN]
        } 
      }
    })
  ]
} satisfies Meta<typeof ArticleRating>;

type Story = StoryObj<typeof meta>;

export const WithRating: Story = {
  args: {
    articleId: "1"
  },
};
WithRating.parameters = {
    mockData: [
        {
            url: `${_API_}/article-rating?userId=1&articleId=1`,
            method: "GET",
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
  };

export default meta;
  
