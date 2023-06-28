import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";

const meta = {
  title: "feature/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const state = {
  login: {
    password: "123",
    username: "admin",
    isLoading: false,
  }
}

export const Default: Story = {};
Default.decorators = [storeDecorator(state as StateType)]
