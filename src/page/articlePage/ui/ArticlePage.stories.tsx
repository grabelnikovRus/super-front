import type { Meta, StoryObj } from "@storybook/react";

import { ArticlePage } from "./ArticlePage";

const meta = {
  title: "page/ArticlePage",
  component: ArticlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
