import { View, Text } from "react-native";
import { styles } from "./HelpText.styles";

export interface HelpTextProps {
  size?: "sm" | "md";
  text: string;
  variant?: "default" | "negative" | "success";
  icon?: boolean;
  disabled?: boolean;
}

export const HelpText = ({
  size = "sm",
  text,
  variant = "default",
  icon,
  disabled = false,
}: HelpTextProps) => {
  return (
    <View style={styles.container}>
      {icon && <Text>{icon}</Text>}
      <Text
        style={[
          styles[variant],
          styles[`text_${size}`],
          disabled && styles.disabled,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
