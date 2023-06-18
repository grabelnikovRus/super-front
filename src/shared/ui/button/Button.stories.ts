import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";

const meta = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Кнопка",
  },
};

export const Xl: Story = {
  args: {
    children: "Кнопка",
    theme: "xl"
  },
};

export const Outline: Story = {
  args: {
    children: "Кнопка",
    theme: "outline"
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Кнопка",
    theme: "outline"
  },
  decorators: [styleDecorator("dark")]
};
