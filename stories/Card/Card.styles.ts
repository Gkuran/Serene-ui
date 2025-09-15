import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  placeholder: {
    width: "100%",
    height: 200,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  placeholderText: {
    fontSize: 48,
    opacity: 0.3,
  },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.semibold,
    fontFamily: theme.fontFamily.heading,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  description: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.body,
    color: theme.colors.textSecondary,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.body,
    color: theme.colors.textSecondary,
  },
  meta: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.medium,
    fontFamily: theme.fontFamily.body,
    color: theme.colors.primary,
  },
});

export const variantStyles = {
  default: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: theme.shadow.color,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: theme.shadow.radius,
    elevation: theme.shadow.elevation,
  },
  elevated: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: theme.shadow.color,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
};

export const paddingStyles = {
  none: { padding: 0 },
  small: { padding: theme.spacing.md },
  medium: { padding: theme.spacing.lg },
  large: { padding: theme.spacing.xxl },
};
