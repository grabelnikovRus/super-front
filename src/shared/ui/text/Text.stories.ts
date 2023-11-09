import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};

export const ErrorS: Story = {
  args: {
    theme: "error",
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};

export const ErroM: Story = {
  args: {
    size: "m",
    theme: "error",
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};

export const ErrorXL: Story = {
  args: {
    size: "xl",
    theme: "error",
    title: "Авторизация",
    text: "Авторизация. Reducers, slices, async thunk. Custom text",
  },
};
