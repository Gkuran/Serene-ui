import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<{}> = {
  title: "Documentation/Introduction",
  component: () => null,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
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
          marginBottom: "60px",
          padding: "40px",
          background: "#60ac4e",
          borderRadius: "16px",
        }}
      >
        <img
          src="/stories/assets/Serene-UI.png"
          alt="Serene UI Logo"
          style={{
            maxWidth: "300px",
            height: "auto",
            marginBottom: "24px",
            filter: "drop-shadow(0 4px 8px rgba(102, 187, 106, 0.2))",
          }}
        />
        <p
          style={{
            fontSize: "20px",
            color: "#ffffffff",
            margin: "0",
            fontWeight: "500",
          }}
        >
          O design system para aplicações sustentáveis
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            padding: "32px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(102, 187, 106, 0.1)",
            border: "1px solid #C8E6C9",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#2E7D32",
            }}
          >
            Simplicidade
          </h3>
          <p style={{ margin: "0", color: "#66BB6A" }}>
            Componentes intuitivos e fáceis de usar
          </p>
        </div>

        <div
          style={{
            padding: "32px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(102, 187, 106, 0.1)",
            border: "1px solid #C8E6C9",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#2E7D32",
            }}
          >
            Acessibilidade
          </h3>
          <p style={{ margin: "0", color: "#66BB6A" }}>
            Inclusivo para todos os usuários
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#F1F8E9",
          borderRadius: "16px",
          border: "2px solid #C8E6C9",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#2E7D32",
          }}
        >
          Vamos juntos criar interfaces que conectam pessoas!
        </h2>
        <p style={{ fontSize: "16px", color: "#66BB6A", margin: "0" }}>
          Explore os componentes na sidebar e comece a construir experiências
          incríveis
        </p>
      </div>
    </div>
  ),
};
