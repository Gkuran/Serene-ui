import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

import { View, Text } from "react-native";

import { Stepper } from "./Stepper";

const meta = {
  title: "Serene/Molecules/Stepper",
  component: Stepper,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 20, backgroundColor: "#FAFAFA" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onStepPress: fn() },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const basicSteps = [
  {
    title: "Detalhes Básicos",
    description: "Insira suas informações pessoais",
  },
  {
    title: "Detalhes da Empresa",
    description: "Forneça informações da empresa",
  },
  {
    title: "Plano de Assinatura",
    description: "Escolha seu plano",
  },
  {
    title: "Detalhes de Pagamento",
    description: "Insira informações de pagamento",
  },
  {
    title: "Confirmação",
    description: "Revise e confirme",
  },
];

const StepperWithState = ({ steps, ...props }: any) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Stepper
      {...props}
      steps={steps}
      currentStep={currentStep}
      onStepPress={setCurrentStep}
      onPrevious={() => setCurrentStep(Math.max(0, currentStep - 1))}
      onNext={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
    />
  );
};

export const Default: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const Interactive: Story = {
  render: (args) => <StepperWithState {...args} steps={basicSteps} />,
};

export const WithContent: Story = {
  args: {
    steps: [
      {
        title: "Detalhes Básicos",
        description: "Insira suas informações pessoais",
        content: (
          <View
            style={{ padding: 16, backgroundColor: "#F1F8E9", borderRadius: 8 }}
          >
            <Text style={{ color: "#2E7D32", fontSize: 14 }}>
              Este é o conteúdo para a etapa de Detalhes Básicos. Você pode
              adicionar qualquer componente React Native aqui.
            </Text>
          </View>
        ),
      },
      {
        title: "Detalhes da Empresa",
        description: "Forneça informações da empresa",
        content: (
          <View
            style={{ padding: 16, backgroundColor: "#E3F2FD", borderRadius: 8 }}
          >
            <Text style={{ color: "#1976D2", fontSize: 14 }}>
              O formulário de detalhes da empresa iria aqui.
            </Text>
          </View>
        ),
      },
      {
        title: "Plano de Assinatura",
        description: "Escolha seu plano",
      },
    ],
    currentStep: 0,
  },
};

export const Vertical: Story = {
  args: {
    steps: basicSteps,
    currentStep: 2,
    orientation: "vertical",
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const WithoutNumbers: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    showNumbers: false,
  },
};

export const WithoutDescriptions: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    showDescriptions: false,
  },
};

export const CompletedSteps: Story = {
  args: {
    steps: basicSteps,
    currentStep: 3,
  },
};

export const DisabledStep: Story = {
  args: {
    steps: [
      {
        title: "Detalhes Básicos",
        description: "Insira suas informações pessoais",
      },
      {
        title: "Detalhes da Empresa",
        description: "Forneça informações da empresa",
        disabled: true,
      },
      {
        title: "Plano de Assinatura",
        description: "Escolha seu plano",
      },
    ],
    currentStep: 0,
  },
};

export const LongTitles: Story = {
  args: {
    steps: [
      {
        title: "Título de Etapa Muito Longo Que Pode Quebrar Linha",
        description:
          "Esta é uma descrição mais longa que explica o que esta etapa trata com mais detalhes",
      },
      {
        title: "Outro Título Longo",
        description: "Outra descrição detalhada para esta etapa",
      },
      {
        title: "Curto",
        description: "Breve",
      },
    ],
    currentStep: 1,
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const WithoutNavigation: Story = {
  args: {
    steps: basicSteps,
    currentStep: 2,
    showNavigation: false,
  },
};

export const CustomButtonText: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    previousText: "Voltar",
    nextText: "Continuar",
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const MobileOptimized: Story = {
  args: {
    steps: [
      {
        title: "Dados",
        description: "Pessoais",
      },
      {
        title: "Empresa",
        description: "Detalhes",
      },
      {
        title: "Plano",
        description: "Escolha",
      },
      {
        title: "Pagamento",
        description: "Info",
      },
      {
        title: "Confirmação",
        description: "Final",
      },
    ],
    currentStep: 2,
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const VerticalSpaced: Story = {
  args: {
    steps: [
      {
        title: "Detalhes Básicos",
        description: "Insira suas informações pessoais e detalhes de contato",
      },
      {
        title: "Detalhes da Empresa",
        description: "Forneça informações da empresa e detalhes do negócio",
      },
      {
        title: "Plano de Assinatura",
        description: "Escolha o plano que melhor atende suas necessidades",
      },
      {
        title: "Detalhes de Pagamento",
        description: "Insira suas informações de pagamento com segurança",
      },
      {
        title: "Confirmação",
        description: "Revise e confirme seu registro",
      },
    ],
    currentStep: 2,
    orientation: "vertical",
    onPrevious: fn(),
    onNext: fn(),
  },
};

export const HorizontalClean: Story = {
  args: {
    steps: [
      {
        title: "Dados",
        description: "Pessoais",
      },
      {
        title: "Empresa",
        description: "Detalhes",
      },
      {
        title: "Plano",
        description: "Escolha",
      },
      {
        title: "Pagamento",
        description: "Info",
      },
      {
        title: "Confirmação",
        description: "Final",
      },
    ],
    currentStep: 2,
    orientation: "horizontal",
    onPrevious: fn(),
    onNext: fn(),
  },
};
