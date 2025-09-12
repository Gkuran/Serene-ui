import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: theme.borderRadius.lg,
    shadowColor: theme.shadow.color,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: theme.shadow.opacity,
    shadowRadius: theme.shadow.radius,
    elevation: theme.shadow.elevation,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  primaryText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeight.semibold,
  },
  secondary: {
    backgroundColor: theme.colors.primaryBg,
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
  },
  secondaryText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.semibold,
  },
  small: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
  },
  smallText: {
    fontSize: theme.fontSize.sm,
  },
  medium: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xxl,
  },
  mediumText: {
    fontSize: theme.fontSize.md,
  },
  large: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xxxl,
  },
  largeText: {
    fontSize: theme.fontSize.lg,
  },
});

export const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};