import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "../theme";

const ColorSwatch = ({ color, name }: { color: string; name: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "12px",
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      border: "1px solid #C8E6C9",
      boxShadow: "0 2px 4px rgba(102, 187, 106, 0.05)",
    }}
  >
    <div
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: color,
        borderRadius: "8px",
        marginRight: "16px",
        border: "2px solid #FFFFFF",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
    <div>
      <div
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: "#2E7D32",
          marginBottom: "2px",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#66BB6A",
          fontFamily: "Monaco, Consolas, monospace",
        }}
      >
        {color}
      </div>
    </div>
  </div>
);

const SpacingBar = ({ size, name }: { size: number; name: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "12px",
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      border: "1px solid #C8E6C9",
      marginBottom: "8px",
    }}
  >
    <div
      style={{
        width: "60px",
        fontWeight: "600",
        fontSize: "14px",
        color: "#2E7D32",
      }}
    >
      {name}
    </div>
    <div
      style={{
        width: `${Math.max(size * 2, 20)}px`,
        height: "24px",
        backgroundColor: "#66BB6A",
        marginRight: "16px",
        borderRadius: "4px",
      }}
    />
    <div style={{ fontSize: "14px", color: "#66BB6A" }}>{size}px</div>
  </div>
);

const meta: Meta<{}> = {
  title: "Documentation/Design Tokens",
  component: () => null,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignTokens: Story = {
  render: () => (
    <div
      style={{
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: "1.6",
        color: "#2E7D32",
        maxWidth: "1000px",
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
          Design Tokens
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#66BB6A",
            margin: "0",
          }}
        >
          Sistema robusto de tokens para consistência visual
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(102, 187, 106, 0.1)",
          border: "1px solid #C8E6C9",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#2E7D32",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "12px" }}>🎨</span>
          Paleta de Cores
        </h2>

        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#4CAF50",
            }}
          >
            Cores Primárias
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "12px",
            }}
          >
            <ColorSwatch color={theme.colors.primary} name="Primary" />
            <ColorSwatch color={theme.colors.primaryDark} name="Primary Dark" />
            <ColorSwatch
              color={theme.colors.primaryLight}
              name="Primary Light"
            />
            <ColorSwatch color={theme.colors.primarySoft} name="Primary Soft" />
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#4CAF50",
            }}
          >
            Cores Semânticas
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "12px",
            }}
          >
            <ColorSwatch color={theme.colors.success} name="Success" />
            <ColorSwatch color={theme.colors.warning} name="Warning" />
            <ColorSwatch color={theme.colors.error} name="Error" />
            <ColorSwatch color={theme.colors.disabled} name="Disabled" />
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#4CAF50",
            }}
          >
            Texto e Layout
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "12px",
            }}
          >
            <ColorSwatch color={theme.colors.textPrimary} name="Text Primary" />
            <ColorSwatch
              color={theme.colors.textSecondary}
              name="Text Secondary"
            />
            <ColorSwatch color={theme.colors.background} name="Background" />
            <ColorSwatch color={theme.colors.border} name="Border" />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(102, 187, 106, 0.1)",
          border: "1px solid #C8E6C9",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#2E7D32",
            display: "flex",
            alignItems: "center",
          }}
        >
          Espaçamentos
        </h2>
        <div>
          {Object.entries(theme.spacing).map(([key, value]) => (
            <SpacingBar key={key} size={value} name={key} />
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(102, 187, 106, 0.1)",
          border: "1px solid #C8E6C9",
          marginBottom: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#2E7D32",
            display: "flex",
            alignItems: "center",
          }}
        >
          Tipografia
        </h2>

        <div style={{ marginBottom: "24px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#4CAF50",
            }}
          >
            Tamanhos de Fonte
          </h3>
          {Object.entries(theme.fontSize).map(([key, value]) => (
            <div
              key={key}
              style={{
                marginBottom: "12px",
                padding: "12px",
                backgroundColor: "#F1F8E9",
                borderRadius: "8px",
                border: "1px solid #C8E6C9",
              }}
            >
              <div
                style={{
                  fontSize: `${value}px`,
                  fontWeight: "600",
                  color: "#2E7D32",
                }}
              >
                {key} ({value}px) - Exemplo de texto
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#4CAF50",
            }}
          >
            Pesos de Fonte
          </h3>
          {Object.entries(theme.fontWeight).map(([key, value]) => (
            <div
              key={key}
              style={{
                marginBottom: "8px",
                padding: "12px",
                backgroundColor: "#F1F8E9",
                borderRadius: "8px",
                border: "1px solid #C8E6C9",
              }}
            >
              <span
                style={{
                  fontWeight: value,
                  fontSize: "16px",
                  color: "#2E7D32",
                }}
              >
                {key} ({value}) - Exemplo de texto
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F1F8E9",
          padding: "32px",
          borderRadius: "16px",
          border: "2px solid #C8E6C9",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#2E7D32",
          }}
        >
          💡 Como Usar
        </h2>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #C8E6C9",
            fontFamily: "Monaco, Consolas, monospace",
            fontSize: "13px",
            overflow: "auto",
          }}
        >
          <div style={{ color: "#4CAF50", marginBottom: "8px" }}>
            import &#123; theme &#125; from 'serene-ui';
          </div>
          <br />
          <div style={{ color: "#2E7D32" }}>
            const styles = StyleSheet.create(&#123;
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "16px" }}>
            container: &#123;
          </div>
          <div style={{ color: "#66BB6A", marginLeft: "32px" }}>
            backgroundColor: theme.colors.background,
          </div>
          <div style={{ color: "#66BB6A", marginLeft: "32px" }}>
            padding: theme.spacing.lg,
          </div>
          <div style={{ color: "#66BB6A", marginLeft: "32px" }}>
            borderRadius: theme.borderRadius.md,
          </div>
          <div style={{ color: "#2E7D32", marginLeft: "16px" }}>&#125;,</div>
          <div style={{ color: "#2E7D32" }}>&#125;);</div>
        </div>
      </div>
    </div>
  ),
};
