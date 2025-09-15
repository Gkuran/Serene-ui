import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { View } from "react-native";

import { Button } from "./Button";

const meta = {
  title: "Serene/Atoms/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    title: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    title: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    title: "Button",
  },
};
