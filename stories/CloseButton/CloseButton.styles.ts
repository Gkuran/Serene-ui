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
    fontFamily: theme.fontFamily.body,
  },
});

export const sizeStyles = {
  small: { width: 24, height: 24 },
  medium: { width: 32, height: 32 },
  large: { width: 40, height: 40 },
};

export const textSizeStyles = {
  small: { fontSize: 16, lineHeight: 16 },
  medium: { fontSize: 20, lineHeight: 20 },
  large: { fontSize: 24, lineHeight: 24 },
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