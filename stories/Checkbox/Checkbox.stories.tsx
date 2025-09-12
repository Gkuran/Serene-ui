import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { View } from 'react-native';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Huma/Input/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onPress: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Aceito os termos',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Aceito os termos',
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Opção desabilitada',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Opção desabilitada marcada',
  },
};