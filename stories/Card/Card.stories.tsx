import type { Meta, StoryObj } from '@storybook/react';
import { Text, View } from 'react-native';
import { Card } from './Card';

const meta = {
  title: 'Huma/Layout/Card',
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Título do Card</Text>
        <Text style={{ color: '#666' }}>Este é o conteúdo do card padrão.</Text>
      </View>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Card Elevado</Text>
        <Text style={{ color: '#666' }}>Card com sombra para destacar do fundo.</Text>
      </View>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Card com Borda</Text>
        <Text style={{ color: '#666' }}>Card com borda sutil.</Text>
      </View>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'small',
    variant: 'elevated',
    children: (
      <Text>Card com padding pequeno</Text>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    variant: 'elevated',
    children: (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Card Espaçoso</Text>
        <Text style={{ color: '#666' }}>Card com padding grande para mais respiração.</Text>
      </View>
    ),
  },
};