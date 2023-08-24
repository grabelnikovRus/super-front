import type { Meta, StoryObj } from "@storybook/react";

import { AddCommentForm } from "./AddCommentForm";
import { storeDecorator } from "@shared/helpers/storybook/storeDecorator";
import { type StateType } from "@app/providers/storeProvider";
import { addCommentReducer } from "../../model/slice/addCommentSlice";
import { type ReducersMapObject } from "@reduxjs/toolkit";

const meta = {
  title: "feature/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "comment 1",
    onSend: () => {},
  },
};

const state: Partial<StateType> = {
  addComment: { text: "" },
};
const reducer = { addComment: addCommentReducer };

Default.decorators = [
  storeDecorator(state as StateType, reducer as ReducersMapObject<StateType>),
];
