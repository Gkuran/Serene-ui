import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: theme.spacing.md,
    alignItems: "center",
    width: "100%",
  },
  default: {
    color: "black",
  },
  negative: {
    color: "#F44336",
  },
  success: {
    color: "#4CAF50",
  },
  disabled: {
    color: "#9E9E9E",
  },
  text_sm: {
    fontSize: theme.fontSize.sm,
  },
  text_md: {
    fontSize: theme.fontSize.md,
  },
});
