import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";

const meta = {
  title: "page/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
const state = { profile: {} }
Default.decorators = [storeDecorator(state as StateType)]
