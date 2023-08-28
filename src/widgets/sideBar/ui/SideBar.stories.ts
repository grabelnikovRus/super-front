import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "@entities/user";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const state: Partial<StateType> = {
  user: {
    _isInit: true,
    authData: {
      id: 1,
      username: "Ram",
      role: "USER"
    }
  },
}

const reducer = { user: userReducer };

const decorators = [
  storeDecorator(
    state as StateType,
    reducer as ReducersMapObject<StateType>
  ),
  styleDecorator("dark"),
]

export const Default: Story = { decorators };

export const Dark: Story = { decorators };
