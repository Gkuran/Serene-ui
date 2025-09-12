import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontWeight: theme.fontWeight.light,
    lineHeight: 1,
  },
});

export const sizeStyles = {
  small: { width: 24, height: 24 },
  medium: { width: 32, height: 32 },
  large: { width: 40, height: 40 },
};

export const textSizeStyles = {
  small: { fontSize: theme.fontSize.md },
  medium: { fontSize: theme.fontSize.xl },
  large: { fontSize: theme.fontSize.xxl },
};

export const variantStyles = {
  default: { backgroundColor: theme.colors.background },
  light: { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  dark: { backgroundColor: 'rgba(204, 68, 68, 0.1)' },
};

export const textVariantStyles = {
  default: { color: theme.colors.textSecondary },
  light: { color: theme.colors.textSecondary },
  dark: { color: theme.colors.textPrimary },
};