import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: '#FEFEFE',
  },
});

export const variantStyles = {
  default: {
    backgroundColor: '#FEFEFE',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  elevated: {
    backgroundColor: '#FEFEFE',
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  outlined: {
    backgroundColor: '#FEFEFE',
    borderWidth: 1.5,
    borderColor: '#FFE5E5',
  },
};

export const paddingStyles = {
  none: { padding: 0 },
  small: { padding: 12 },
  medium: { padding: 16 },
  large: { padding: 24 },
};