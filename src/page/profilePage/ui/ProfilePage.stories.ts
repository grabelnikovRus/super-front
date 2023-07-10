import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";
import { profileReducer } from "@feature/editableProfileCard";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import avatar from "@shared/assest/mock/1655360011_1.jpg"

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
  age: "35",
  currency: "RUB",
  country: "RUS",
  city: "Tomsk",
  username: "admin",
  avatar
}

const state = {
  profile: {
    form: profileState,
    data: profileState,
    readonly: true,
    isLoading: false,
    error: ""
  }
}

const reducer = { profile: profileReducer }

export const Default: Story = {
  decorators: [
    storeDecorator(
      state as unknown as StateType,
      reducer as ReducersMapObject<StateType>
    ),
    styleDecorator("dark")
  ]
};
