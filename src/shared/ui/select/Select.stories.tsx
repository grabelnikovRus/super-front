import type { Meta, StoryObj } from "@storybook/react";

import { SelectMemo as Select } from "./Select";

const meta = {
  title: "shared/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Деньги",
    defaultValue: 3,
    options: [
      { value: 1, content: "123" },
      { value: 2, content: "1234" },
      { value: 3, content: "12345" },
      { value: 4, content: "1234567" },
      { value: 5, content: "12345678" },
      { value: 6, content: "1234567890" }
    ]
  },
};
