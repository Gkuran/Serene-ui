import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";
import { Badge } from "./Badge";
import { Button } from "../Button/Button";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof Badge> = {
  title: "Serene/Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 3,
  },
};

export const HighCount: Story = {
  args: {
    count: 150,
    maxCount: 99,
  },
};

export const Dot: Story = {
  args: {
    count: 0,
    showDot: true,
  },
};

export const Zero: Story = {
  args: {
    count: 0,
  },
};

export const WithButton: Story = {
  render: () => (
    <View style={{ position: "relative" }}>
      <Button title="Notificações" />
      <View style={{ position: "absolute", top: -8, right: -8 }}>
        <Badge count={5} />
      </View>
    </View>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <View style={{ position: "relative" }}>
      <Avatar initials="JS" status="online" />
      <View style={{ position: "absolute", top: -4, right: -4 }}>
        <Badge count={2} />
      </View>
    </View>
  ),
};

export const NotificationExamples: Story = {
  render: () => (
    <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
      <View style={{ position: "relative" }}>
        <Button title="Mensagens" />
        <View style={{ position: "absolute", top: -8, right: -8 }}>
          <Badge count={12} />
        </View>
      </View>

      <View style={{ position: "relative" }}>
        <Button title="Doações" />
        <View style={{ position: "absolute", top: -8, right: -8 }}>
          <Badge showDot={true} />
        </View>
      </View>

      <View style={{ position: "relative" }}>
        <Button title="Solicitações" />
        <View style={{ position: "absolute", top: -8, right: -8 }}>
          <Badge count={999} />
        </View>
      </View>
    </View>
  ),
};
