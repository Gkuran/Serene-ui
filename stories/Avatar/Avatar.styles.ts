import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    borderRadius: theme.borderRadius.full,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 48,
    height: 48,
  },
  large: {
    width: 64,
    height: 64,
  },
});

export const statusStyles = {
  small: { width: 10, height: 10 },
  medium: { width: 14, height: 14 },
  large: { width: 18, height: 18 },
};

export const statusColors = {
  online: '#4CAF50',
  away: '#FF9800',
  offline: '#9E9E9E',
};