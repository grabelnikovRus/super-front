import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";
import { profileReducer } from "@feature/editableProfileCard";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "@entities/user";

const meta = {
  title: "page/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const profileState = {
  name: "Ruslan",
  surname: "GrabelnikovR",
  age: 35,
  id: "1",
  city: "Tomsk",
  username: "admin",
  avatar:
    // eslint-disable-next-line max-len
    "https://w7.pngwing.com/pngs/607/878/png-transparent-avatar-batman-comics-hero-avatars-xmas-giveaway-icon.png",
};

const state: Partial<StateType> = {
  user: {
    _isInit: true,
    authData: {
      id: "1",
      username: "Ram",
      role: "USER"
    }
  },
  profile: {
    form: profileState,
    data: profileState,
    readonly: true,
    isLoading: false,
    error: "",
  },
};

const reducer = { 
  profile: profileReducer,
  user: userReducer
};

export const Default: Story = {
  decorators: [
    storeDecorator(
      state as StateType,
      reducer as ReducersMapObject<StateType>
    ),
    styleDecorator("dark"),
  ],
};
