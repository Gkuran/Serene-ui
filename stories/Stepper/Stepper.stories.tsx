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
    title: "Basic Details",
    description: "Enter your personal information",
  },
  {
    title: "Company Details",
    description: "Provide company information",
  },
  {
    title: "Subscription Plan",
    description: "Choose your plan",
  },
  {
    title: "Payment Details",
    description: "Enter payment information",
  },
  {
    title: "Confirmation",
    description: "Review and confirm",
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
        title: "Basic Details",
        description: "Enter your personal information",
        content: (
          <View style={{ padding: 16, backgroundColor: "#F1F8E9", borderRadius: 8 }}>
            <Text style={{ color: "#2E7D32", fontSize: 14 }}>
              This is the content for the Basic Details step. You can add any React Native components here.
            </Text>
          </View>
        ),
      },
      {
        title: "Company Details",
        description: "Provide company information",
        content: (
          <View style={{ padding: 16, backgroundColor: "#E3F2FD", borderRadius: 8 }}>
            <Text style={{ color: "#1976D2", fontSize: 14 }}>
              Company details form would go here.
            </Text>
          </View>
        ),
      },
      {
        title: "Subscription Plan",
        description: "Choose your plan",
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
        title: "Basic Details",
        description: "Enter your personal information",
      },
      {
        title: "Company Details",
        description: "Provide company information",
        disabled: true,
      },
      {
        title: "Subscription Plan",
        description: "Choose your plan",
      },
    ],
    currentStep: 0,
  },
};

export const LongTitles: Story = {
  args: {
    steps: [
      {
        title: "Very Long Step Title That Might Wrap",
        description: "This is a longer description that explains what this step is about in more detail",
      },
      {
        title: "Another Long Title",
        description: "Another detailed description for this step",
      },
      {
        title: "Short",
        description: "Brief",
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
        title: "Basic Details",
        description: "Enter your personal information and contact details",
      },
      {
        title: "Company Details",
        description: "Provide company information and business details",
      },
      {
        title: "Subscription Plan",
        description: "Choose the plan that best fits your needs",
      },
      {
        title: "Payment Details",
        description: "Enter your payment information securely",
      },
      {
        title: "Confirmation",
        description: "Review and confirm your registration",
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
