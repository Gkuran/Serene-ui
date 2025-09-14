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

export const SofaDonation: Story = {
  args: {
    variant: 'elevated',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    title: 'Sofá 3 lugares em bom estado',
    description: 'Sofá de couro marrom, usado mas bem conservado. Ideal para sala de estar. Retirada no bairro Centro.',
    publishDate: 'Há 2 horas',
    status: 'available',
    onPress: () => alert('Ver detalhes do item'),
  },
};

export const TableDonation: Story = {
  args: {
    variant: 'outlined',
    title: 'Mesa de jantar com 4 cadeiras',
    description: 'Mesa de madeira com algumas marcas de uso, acompanha 4 cadeiras. Perfeita para quem está começando.',
    publishDate: 'Ontem',
    status: 'reserved',
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Conteúdo Customizado</Text>
        <Text style={{ color: '#666' }}>Você ainda pode usar o card com conteúdo totalmente customizado.</Text>
      </View>
    ),
  },
};

export const ElectronicsDonation: Story = {
  args: {
    variant: 'elevated',
    title: 'TV 32 polegadas',
    status: 'delivered',
  },
};

export const BooksDonation: Story = {
  args: {
    variant: 'elevated',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
    title: 'Coleção de livros didáticos',
    description: 'Livros do ensino médio em ótimo estado. Matemática, Português, História e Ciências. Podem ajudar estudantes.',
    publishDate: '3 dias atrás',
    status: 'available',
    onPress: () => alert('Entrar em contato'),
  },
};

export const UnavailableItem: Story = {
  args: {
    variant: 'elevated',
    title: 'Geladeira com defeito',
    description: 'Item não está mais disponível para doação.',
    publishDate: '1 semana atrás',
    status: 'unavailable',
  },
};