import type { Meta, StoryObj } from "@storybook/react";
import { type StateType } from "@app/providers/storeProvider";
import { NavBar } from "./NavBar";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";

const meta = {
  title: "widgets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const state = {
  counter: { value: 1 },
  user: {
    _isInit: true,
    authData: {
      password: "123",
      username: "admin",
      id: 1,
    }
  }
}
export const Default: Story = {};
Default.decorators = [storeDecorator(state as StateType)]
