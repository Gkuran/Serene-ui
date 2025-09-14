import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  },
  row: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  cardWrapper: {
    paddingHorizontal: theme.spacing.xs,
  },
});