import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Avatar } from './Avatar';

const meta = {
  title: 'Huma/Media/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = {
  args: {
    status: 'online',
  },
};

export const Away: Story = {
  args: {
    status: 'away',
  },
};

export const Offline: Story = {
  args: {
    status: 'offline',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    status: 'online',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    status: 'online',
  },
};