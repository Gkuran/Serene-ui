import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { FormControl } from "../FormControl/FormControl";
import { Card } from "../Card/Card";

const meta: Meta<typeof Modal> = {
  title: "Serene/Molecules/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithButton = ({ title, subtitle, children }: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        title={title}
        subtitle={subtitle}
      >
        {children}
      </Modal>
    </View>
  );
};

export const Default: Story = {
  render: () => (
    <ModalWithButton
      title="Nova Doação"
      subtitle="Compartilhe algo que pode ajudar alguém"
    >
      <Text>
        Conteúdo do modal aqui. Você pode adicionar qualquer componente.
      </Text>
    </ModalWithButton>
  ),
};

export const WithForm: Story = {
  render: () => (
    <ModalWithButton
      title="Solicitar Item"
      subtitle="Descreva o que você precisa"
    >
      <FormControl
        label="O que você precisa?"
        placeholder="Ex: Roupas de inverno para criança..."
      />
      <View style={{ marginTop: 16 }}>
        <FormControl
          label="Detalhes adicionais"
          placeholder="Tamanho, cor, urgência..."
        />
      </View>
    </ModalWithButton>
  ),
};

export const WithCard: Story = {
  render: () => (
    <ModalWithButton
      title="Detalhes da Doação"
      subtitle="Informações completas do item"
    >
      <Card
        title="Roupas de Inverno"
        description="Casacos, blusas e calças em ótimo estado para crianças de 5-8 anos"
        publishDate="2 horas atrás"
        status="available"
      />
    </ModalWithButton>
  ),
};

export const SimpleText: Story = {
  render: () => (
    <ModalWithButton
      title="Confirmação"
      subtitle="Tem certeza que deseja continuar?"
    >
      <Text style={{ textAlign: "center", marginBottom: 16 }}>
        Esta ação não pode ser desfeita.
      </Text>
      <Button title="Confirmar" variant="primary" />
    </ModalWithButton>
  ),
};
