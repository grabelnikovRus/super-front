import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "100%",
    height: "200px"
  }
};

export const Circle: Story = {
  args: {
    borderRadius: "50%",
    height: "200px",
    width: "200px",
  }
};

export const DefaultDark: Story = {
  args: {
    width: "100%",
    height: "200px"
  }
};
DefaultDark.decorators = [styleDecorator("dark")]

export const CircleDark: Story = {
  args: {
    borderRadius: "50%",
    height: "200px",
    width: "200px",
  }
};
CircleDark.decorators = [styleDecorator("dark")]
