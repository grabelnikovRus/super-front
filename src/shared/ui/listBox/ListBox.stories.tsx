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
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
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
