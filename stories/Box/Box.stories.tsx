import type { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";
import { Box } from "./Box";

const meta = {
  title: "Serene/Atoms/Box",
  component: Box,
  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>Conteúdo do Box</Text>,
    p: "lg",
    bg: "primaryBg",
  },
};

export const Row: Story = {
  args: {
    direction: "row",
    p: "md",
    bg: "primaryPale",
    children: (
      <>
        <Text style={{ marginRight: 16 }}>Item 1</Text>
        <Text>Item 2</Text>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    align: "center",
    justify: "center",
    p: "xl",
    bg: "background",
    children: <Text>Centralizado</Text>,
  },
};
