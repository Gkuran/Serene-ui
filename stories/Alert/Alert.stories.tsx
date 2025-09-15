import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Serene/Molecules/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Item doado com sucesso!",
    variant: "success",
    icon: "✅",
    dismissible: true,
    onDismiss: () => alert("Alert dismissed"),
  },
};

export const Warning: Story = {
  args: {
    message: "Atenção: Este item pode ter restrições de entrega.",
    variant: "warning",
    icon: "⚠️",
    dismissible: true,
    onDismiss: () => alert("Alert dismissed"),
  },
};

export const Error: Story = {
  args: {
    message: "Erro ao processar a doação. Tente novamente.",
    variant: "error",
    icon: "❌",
    dismissible: true,
    onDismiss: () => alert("Alert dismissed"),
  },
};

export const Info: Story = {
  args: {
    message: "Sua doação está sendo analisada pela equipe.",
    variant: "info",
    icon: "ℹ️",
  },
};

export const WithoutIcon: Story = {
  args: {
    message: "Mensagem simples sem ícone.",
    variant: "success",
    dismissible: true,
    onDismiss: () => alert("Alert dismissed"),
  },
};

export const NonDismissible: Story = {
  args: {
    message: "Esta é uma mensagem importante que não pode ser fechada.",
    variant: "info",
    icon: "📢",
  },
};
