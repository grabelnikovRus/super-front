import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

import ImgAvata from "../../assest/mock/1655360011_1.jpg";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const L: Story = {
  args: {
    src: ImgAvata,
  },
};

export const S: Story = {
  args: {
    src: ImgAvata,
    theme: "s",
  },
};
