import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.medium,
    fontFamily: theme.fontFamily.body,
  },
  disabled: {
    opacity: 0.6,
  },
});

export const variantStyles = {
  primary: {
    button: {
      backgroundColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.white,
    },
  },
  secondary: {
    button: {
      backgroundColor: theme.colors.primaryPale,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.textPrimary,
    },
  },
  outline: {
    button: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.primary,
    },
  },
  ghost: {
    button: {
      backgroundColor: 'transparent',
    },
    text: {
      color: theme.colors.primary,
    },
  },
};

export const sizeStyles = {
  small: {
    button: {
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
    },
    text: {
      fontSize: theme.fontSize.sm,
    },
  },
  medium: {
    button: {
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
    },
    text: {
      fontSize: theme.fontSize.md,
    },
  },
  large: {
    button: {
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.xl,
    },
    text: {
      fontSize: theme.fontSize.lg,
    },
  },
};