import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Huma/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  {
    variant: 'elevated' as const,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    title: 'Sofá 3 lugares',
    description: 'Sofá de couro marrom em bom estado.',
    publishDate: 'Há 2 horas',
    status: 'available' as const,
  },
  {
    variant: 'elevated' as const,
    title: 'Mesa de jantar',
    description: 'Mesa com 4 cadeiras.',
    publishDate: 'Ontem',
    status: 'reserved' as const,
  },
  {
    variant: 'elevated' as const,
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
    title: 'Livros didáticos',
    description: 'Coleção completa do ensino médio.',
    publishDate: '3 dias atrás',
    status: 'available' as const,
  },
  {
    variant: 'elevated' as const,
    title: 'TV 32 polegadas',
    status: 'delivered' as const,
  },
  {
    variant: 'elevated' as const,
    title: 'Geladeira',
    description: 'Item não disponível.',
    publishDate: '1 semana atrás',
    status: 'unavailable' as const,
  },
];

export const TwoColumns: Story = {
  args: {
    data: mockData,
    numColumns: 2,
  },
};

export const ThreeColumns: Story = {
  args: {
    data: mockData,
    numColumns: 3,
  },
};