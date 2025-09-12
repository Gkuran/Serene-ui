import type { Meta, StoryObj } from "@storybook/react";
import { StyleSheet, Text, View } from "react-native";

const ColorPalette = () => {
  const colors = [
    { name: "Primary", value: "#FF6B6B", description: "Cor principal do Huma" },
    {
      name: "Primary Dark",
      value: "#E55555",
      description: "Versão escura do primário",
    },
    {
      name: "Primary Light",
      value: "#FF9999",
      description: "Versão clara do primário",
    },
    {
      name: "Primary Soft",
      value: "#FFB3B3",
      description: "Versão suave do primário",
    },
    {
      name: "Primary Pale",
      value: "#FFE5E5",
      description: "Versão muito clara",
    },
    {
      name: "Primary Bg",
      value: "#FFF5F5",
      description: "Fundo com toque primário",
    },
    { name: "Text Primary", value: "#CC4444", description: "Texto principal" },
    {
      name: "Text Secondary",
      value: "#FF9999",
      description: "Texto secundário",
    },
    { name: "Background", value: "#FFFAFA", description: "Fundo principal" },
    { name: "Border", value: "#FFCCCC", description: "Bordas padrão" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paleta de Cores Huma</Text>
      <Text style={styles.subtitle}>
        Cores quentes e acolhedoras que promovem conexão humana
      </Text>
      <View style={styles.grid}>
        {colors.map((color) => (
          <View key={color.name} style={styles.colorCard}>
            <View
              style={[styles.colorSwatch, { backgroundColor: color.value }]}
            />
            <Text style={styles.colorName}>{color.name}</Text>
            <Text style={styles.colorValue}>{color.value}</Text>
            <Text style={styles.colorDescription}>{color.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FEFEFE",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#95A5A6",
    marginBottom: 32,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  colorCard: {
    width: 200,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  colorSwatch: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    marginBottom: 12,
  },
  colorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 4,
  },
  colorValue: {
    fontSize: 14,
    fontFamily: "monospace",
    color: "#95A5A6",
    marginBottom: 8,
  },
  colorDescription: {
    fontSize: 12,
    color: "#95A5A6",
    lineHeight: 16,
  },
});

const meta = {
  title: "Colors",
  component: ColorPalette,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {};
