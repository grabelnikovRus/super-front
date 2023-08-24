import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [styleDecorator("dark")],
};
