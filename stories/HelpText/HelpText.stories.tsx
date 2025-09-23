import type { Meta, StoryObj } from "@storybook/react";
import { Text, View } from "react-native";
import { HelpText } from "./HelpText";

const meta: Meta<typeof HelpText> = {
  title: "Serene/Atoms/HelpText",
  component: HelpText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};

export const MediumDefault: Story = {
  args: {
    size: "md",
    variant: "default",
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};

export const Negative: Story = {
  args: {
    variant: "negative",
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "❌",
    variant: "negative",
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "A senha precisa ter mais de 6 caracteres.",
  },
};
