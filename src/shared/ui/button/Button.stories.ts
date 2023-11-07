import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { styleDecorator } from "../../helpers/storybook/styleDecorator";

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

export const M: Story = {
  args: {
    children: "Кнопка",
    theme: "m",
  },
};

export const L: Story = {
  args: {
    children: "Кнопка",
    theme: "l",
  },
};

export const Xl: Story = {
  args: {
    children: "Кнопка",
    theme: "xl",
  },
};

export const Outline: Story = {
  args: {
    children: "Кнопка",
    theme: "outline",
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Кнопка",
    theme: "outline",
  },
  decorators: [styleDecorator("dark")],
};
