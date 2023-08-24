import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";

const meta = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit 
  anim id est laborum.`;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children,
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children,
  },
};
Dark.decorators = [styleDecorator("dark")];
