import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../../assest/icon/notification.svg"
import { Popover } from "./Popover";

const meta = {
  title: "shared/Popover",
  component: Popover,
  tags: ["autodocs"],
  decorators: [ 
    (S) => <div style={{ 
      padding: "100px", 
      width: "300px", 
      height: "300px", 
      background: "gray" 
    }}>
      <S />
    </div>
  ]
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>dsdsdsdsd</div>,
    trigger: <Icon />
  }
};
