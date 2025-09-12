import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontWeight: '300',
    lineHeight: 1,
  },
});

export const sizeStyles = {
  small: { width: 24, height: 24 },
  medium: { width: 32, height: 32 },
  large: { width: 40, height: 40 },
};

export const textSizeStyles = {
  small: { fontSize: 16 },
  medium: { fontSize: 20 },
  large: { fontSize: 24 },
};

export const variantStyles = {
  default: { backgroundColor: '#F8F9FA' },
  light: { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
  dark: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
};

export const textVariantStyles = {
  default: { color: '#95A5A6' },
  light: { color: '#95A5A6' },
  dark: { color: '#2C3E50' },
};