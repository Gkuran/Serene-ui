import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    fontSize: theme.fontSize.md,
    marginRight: theme.spacing.sm,
  },
  message: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.body,
    fontWeight: theme.fontWeight.medium,
    flex: 1,
  },
  success: {
    backgroundColor: theme.colors.primaryPale,
  },
  warning: {
    backgroundColor: "#FFF3E0",
  },
  error: {
    backgroundColor: "#FFEBEE",
  },
  info: {
    backgroundColor: theme.colors.primaryBg,
  },
  successText: {
    color: theme.colors.textPrimary,
  },
  warningText: {
    color: "#F57C00",
  },
  errorText: {
    color: "#C62828",
  },
  infoText: {
    color: theme.colors.textPrimary,
  },
});
