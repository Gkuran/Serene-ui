import { View, Text } from "react-native";
import { styles } from "./TextArea.styles";

export interface HelpTextProps {
  size?: "sm" | "md";
  label: string;
  text: string;
  variant?: "default" | "withHelp" | "withError";
  disabled?: boolean;
}

export const TextArea = ({
  size = "md",
  label,
  text,''
  variant = "default",
  disabled = false,
}: HelpTextProps) => {
  return (
    <View style={}>
      <Text style={}>{label}</Text>
      <Text style={}>{text}</Text>
    </View>
  );
};
