import type { Meta, StoryObj } from "@storybook/react";

import { Article } from "./Article";

const meta = {
  title: "shared/Article",
  component: Article,
  tags: ["autodocs"],
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};

export const Error: Story = {
  args: {
    theme: "error",
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};
