import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./ArticleList";
import { articlesMock } from "../mock"

const meta = {
  title: "entities/ArticleList",
  component: ArticleList,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    articles: articlesMock,
    isLoading: false,
    articleView: "big"
  }
};

export const Small: Story = {
  args: {
    articles: articlesMock,
    isLoading: false,
    articleView: "small"
  }
};

export const BigIsLoading: Story = {
  args: {
    articles: articlesMock,
    isLoading: true,
    articleView: "big"
  }
};

export const SmallIsLoading: Story = {
  args: {
    articles: articlesMock,
    isLoading: true,
    articleView: "small"
  }
};
