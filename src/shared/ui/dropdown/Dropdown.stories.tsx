import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "shared/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  decorators: [
    (Story) => <div style={{ height: "300px "}}>{Story()}</div>
  ]
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: "ddddd",
    list: [
      {content: "dsdsd"},
      {content: "yyyyyyyy"},
      {content: "54545"},
    ]
  }
};
