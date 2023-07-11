import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsPage } from "./ArticleDetailsPage";

const meta = {
  title: "shared/ArticleDetailsPage",
  component: ArticleDetailsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
