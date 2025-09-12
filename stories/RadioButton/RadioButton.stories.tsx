import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Huma/Controls/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <RadioButton
        label="Opção padrão"
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    );
  },
};

export const Selected: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);
    return (
      <RadioButton
        label="Opção selecionada"
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Opção desabilitada",
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);
    return (
      <RadioButton
        selected={selected}
        onPress={() => setSelected(!selected)}
      />
    );
  },
};
