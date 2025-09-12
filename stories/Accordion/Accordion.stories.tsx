import type { Meta, StoryObj } from '@storybook/react';
import { Text, View } from 'react-native';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Huma/Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Informações Gerais',
    children: (
      <Text>
        Este é o conteúdo do accordion. Aqui você pode colocar qualquer tipo de informação que deseja mostrar quando o accordion estiver expandido.
      </Text>
    ),
  },
};

export const Expanded: Story = {
  args: {
    title: 'Accordion Expandido',
    defaultExpanded: true,
    children: (
      <Text>
        Este accordion inicia expandido por padrão. Útil quando você quer mostrar o conteúdo imediatamente.
      </Text>
    ),
  },
};

export const WithComplexContent: Story = {
  args: {
    title: 'Conteúdo Complexo',
    children: (
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Lista de itens:</Text>
        <Text>• Item 1</Text>
        <Text>• Item 2</Text>
        <Text>• Item 3</Text>
      </View>
    ),
  },
};