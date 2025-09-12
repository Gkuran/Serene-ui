import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.white,
  },
});

export const variantStyles = {
  default: {
    backgroundColor: theme.colors.white,
    shadowColor: theme.shadow.color,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: theme.shadow.radius,
    elevation: theme.shadow.elevation,
  },
  elevated: {
    backgroundColor: theme.colors.white,
    shadowColor: theme.shadow.color,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderWidth: 1.5,
    borderColor: theme.colors.primaryPale,
  },
};

export const paddingStyles = {
  none: { padding: 0 },
  small: { padding: theme.spacing.md },
  medium: { padding: theme.spacing.lg },
  large: { padding: theme.spacing.xxl },
};