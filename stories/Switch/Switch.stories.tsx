import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { View } from 'react-native';
import { Switch } from './Switch';

const meta = {
  title: 'Huma/Input/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Notificações',
  },
};

export const Active: Story = {
  args: {
    value: true,
    label: 'Modo escuro',
  },
};

export const WithoutLabel: Story = {
  args: {
    value: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Opção desabilitada',
  },
};

export const DisabledActive: Story = {
  args: {
    value: true,
    disabled: true,
    label: 'Ativo mas desabilitado',
  },
};