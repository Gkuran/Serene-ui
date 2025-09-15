import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Serene/Atoms/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Tag padrão",
  },
};

export const Success: Story = {
  args: {
    label: "Sucesso",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    label: "Atenção",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Erro",
    variant: "error",
  },
};

export const Removable: Story = {
  args: {
    label: "Tag removível",
    removable: true,
    onRemove: () => alert("Tag removida!"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Tag label="Padrão" />
      <Tag label="Sucesso" variant="success" />
      <Tag label="Atenção" variant="warning" />
      <Tag label="Erro" variant="error" />
      <Tag label="Removível" removable onRemove={() => alert("Removida!")} />
    </View>
  ),
};
