import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.border,
    overflow: "hidden",
    borderWidth: 1,
  },
  header: {
    backgroundColor: theme.colors.primaryBg,
    justifyContent: "space-between",
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fontFamily.heading,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.md,
    flex: 1,
  },
  icon: {
    fontWeight: theme.fontWeight.bold,
    fontFamily: theme.fontFamily.body,
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSize.lg,
    color: theme.colors.primary,
  },
  content: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
  },
});
