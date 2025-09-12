import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { View } from 'react-native';
import { FormControl } from './FormControl';

const meta = {
  title: 'Huma/Input/FormControl',
  component: FormControl,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: {
    onChangeText: fn(),
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'email-invalido',
    error: 'Por favor, insira um email válido',
    required: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    secureTextEntry: true,
    required: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Buscar...',
  },
};