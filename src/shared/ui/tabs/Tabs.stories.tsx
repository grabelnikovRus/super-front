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
      { content: "tab 1", value: "IT" },
      { content: "tab 2", value: "SCIENCE" },
      { content: "tab 3", value: "ECONOMY" },
    ],
    defaultValue: "SCIENCE",
    toggleTab: (item) => { console.log(item) }
  }
};
