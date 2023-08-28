import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./ArticleListItem";
import { articleMock } from "../mock"

const meta = {
  title: "entities/ArticleListItem",
  component: ArticleListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    article: articleMock,
    articleView: "big"
  }
};

export const Small: Story = {
  args: {
    article: articleMock,
    articleView: "small"
  }
};