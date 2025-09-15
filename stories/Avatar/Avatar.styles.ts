import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primaryPale,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: theme.borderRadius.full,
  },
  initials: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.semibold,
    fontFamily: theme.fontFamily.heading,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: theme.borderRadius.full,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
});

export const sizeStyles = {
  small: {
    avatar: { width: 32, height: 32 },
    initials: { fontSize: theme.fontSize.sm },
    status: { width: 8, height: 8 },
  },
  medium: {
    avatar: { width: 48, height: 48 },
    initials: { fontSize: theme.fontSize.md },
    status: { width: 12, height: 12 },
  },
  large: {
    avatar: { width: 64, height: 64 },
    initials: { fontSize: theme.fontSize.lg },
    status: { width: 16, height: 16 },
  },
};

export const statusColors = {
  online: '#4CAF50',
  away: '#FF9800',
  offline: '#9E9E9E',
};