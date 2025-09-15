import type { Meta, StoryObj } from "@storybook/react";
import { FilteredList } from "./FilteredList";

const meta: Meta<typeof FilteredList> = {
  title: "Serene/Organisms/FilteredList",
  component: FilteredList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    title: "Roupas de Inverno",
    description:
      "Casacos, blusas e calças em ótimo estado para crianças de 5-8 anos",
    publishDate: "2 horas atrás",
    status: "available" as const,
  },
  {
    title: "Livros Didáticos",
    description: "Coleção completa do ensino médio, matemática e português",
    publishDate: "1 dia atrás",
    status: "reserved" as const,
  },
  {
    title: "Móveis para Quarto",
    description: "Cama de solteiro, guarda-roupa e mesa de estudos",
    publishDate: "3 dias atrás",
    status: "available" as const,
  },
  {
    title: "Alimentos Não Perecíveis",
    description: "Arroz, feijão, macarrão e óleo. Validade até dezembro",
    publishDate: "5 horas atrás",
    status: "delivered" as const,
  },
  {
    title: "Brinquedos Educativos",
    description: "Jogos de montar, quebra-cabeças e livros infantis",
    publishDate: "1 semana atrás",
    status: "available" as const,
  },
  {
    title: "Eletrodomésticos",
    description: "Geladeira pequena e micro-ondas funcionando perfeitamente",
    publishDate: "2 dias atrás",
    status: "unavailable" as const,
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    numColumns: 2,
    searchPlaceholder: "Buscar doações...",
    sortLabel: "Apenas disponíveis",
  },
};

export const ThreeColumns: Story = {
  args: {
    data: sampleData,
    numColumns: 3,
    searchPlaceholder: "O que você precisa?",
  },
};

export const WithoutTags: Story = {
  args: {
    data: sampleData,
    numColumns: 2,
    searchPlaceholder: "Procurar ajuda...",
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    numColumns: 2,
    searchPlaceholder: "Buscar doações...",
  },
};
