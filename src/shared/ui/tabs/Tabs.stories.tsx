import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta = {
  title: "shared/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { content: "tab 1", value: "1" },
      { content: "tab 2", value: "2" },
      { content: "tab 3", value: "3" },
      { content: "tab 4", value: "4" },
    ],
    defaultValue: ["3"],
    toggleTab: (item) => { console.log(item) }
  }
};
