import type { Meta, StoryObj } from "@storybook/react";

import { ArticlePage } from "./ArticlePage";

const meta = {
  title: "shared/ArticlePage",
  component: ArticlePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
