import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Serene/Atoms/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Aceito os termos"
        checked={checked}
        onPress={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        label="Aceito os termos"
        checked={checked}
        onPress={setChecked}
      />
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onPress={setChecked} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Opção desabilitada",
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: "Opção desabilitada marcada",
  },
};
