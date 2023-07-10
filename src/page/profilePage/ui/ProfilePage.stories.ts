import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";
import { styleDecorator } from "@shared/helpers/storybook/styleDecorator";

const meta = {
  title: "page/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const profileState = {
  name: "Ruslan",
  surname: "GrabelnikovR",
  age: "35",
  currency: "RUB",
  country: "RUS",
  city: "Tomsk",
  username: "admin",
  avatar:
  "https://w7.pngwing.com/pngs/607/878/png-transparent-avatar-batman-comics-hero-avatars-xmas-giveaway-icon.png"
}
const state = { profile: { form: profileState, data: profileState } }
Default.decorators = [storeDecorator(state as unknown as StateType), styleDecorator("dark")]
