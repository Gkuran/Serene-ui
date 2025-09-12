import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { View } from 'react-native';
import { CloseButton } from './CloseButton';

const meta = {
  title: 'Huma/Utilities/CloseButton',
  component: CloseButton,
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
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
};