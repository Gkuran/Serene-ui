import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    alignSelf: 'flex-start',
  },
  default: {
    backgroundColor: theme.colors.primaryPale,
  },
  success: {
    backgroundColor: '#E8F5E8',
  },
  warning: {
    backgroundColor: '#FFF3E0',
  },
  error: {
    backgroundColor: '#FFEBEE',
  },
  label: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.medium,
  },
  defaultText: {
    color: theme.colors.textPrimary,
  },
  successText: {
    color: '#2E7D32',
  },
  warningText: {
    color: '#F57C00',
  },
  errorText: {
    color: '#C62828',
  },
  removeButton: {
    marginLeft: theme.spacing.xs,
    padding: 2,
  },
  removeIcon: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
  },
});