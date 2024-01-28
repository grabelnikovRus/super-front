import type { Meta, StoryObj } from "@storybook/react";
import { Listbox } from "./ListBox";

const meta = {
  title: "shared/Listbox",
  component: Listbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const people = [
  { value: "1", content: "Durward Reynolds" },
  { value: "2", content: "Kenton Towne" },
  { value: "3", content: "Therese Wunsch" },
  { value: "4", content: "Benedict Kessler" },
  { value: "5", content: "Katelyn Rohan" },
]

export const Default: Story = {
  args: {
    list: people,
    defaultValue: people[4],
    onChangeValue: (item) => { console.log(item); },
    label: "1234566"
  },
};

Default.decorators = [
  (S) => (<div style={{ height: "500px" }}>{S()}</div>)
]
