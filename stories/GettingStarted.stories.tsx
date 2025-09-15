import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<{}> = {
  title: "Documentation/Getting Started",
  component: () => null,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GettingStarted: Story = {
  render: () => (
    <div
      style={{
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: "1.6",
        color: "#2E7D32",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            margin: "0 0 16px 0",
            color: "#2E7D32",
          }}
        >
          Getting Started
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#66BB6A",
            margin: "0",
          }}
        >
          Comece a usar o Serene UI em poucos minutos
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(102, 187, 106, 0.1)",
          border: "1px solid #C8E6C9",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#2E7D32",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "12px" }}>📦</span>
          Instalação
        </h2>
        <div
          style={{
            backgroundColor: "#F1F8E9",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #C8E6C9",
            fontFamily: "Monaco, Consolas, monospace",
            fontSize: "14px",
          }}
        >
          npm install serene-ui
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(102, 187, 106, 0.1)",
          border: "1px solid #C8E6C9",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#2E7D32",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "12px" }}>⚡</span>
          Uso Básico
        </h2>
        <div
          style={{
            backgroundColor: "#F1F8E9",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #C8E6C9",
            fontFamily: "Monaco, Consolas, monospace",
            fontSize: "13px",
            overflow: "auto",
          }}
        >
          <div style={{ color: "#4CAF50", marginBottom: "8px" }}>
            import &#123; Button, Card, Avatar &#125; from "serene-ui";
          </div>
          <br />
          <div style={{ color: "#2E7D32" }}>function App() &#123;</div>
          <div style={{ color: "#2E7D32", marginLeft: "16px" }}>return (</div>
          <div style={{ color: "#2E7D32", marginLeft: "32px" }}>
            &lt;Card&gt;
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "48px" }}>
            &lt;Avatar initials="JS" status="online" /&gt;
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "48px" }}>
            &lt;Button title="Conectar" variant="primary" /&gt;
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "32px" }}>
            &lt;/Card&gt;
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "16px" }}>);</div>
          <div style={{ color: "#2E7D32" }}>&#125;</div>
        </div>
      </div>
    </div>
  ),
};
