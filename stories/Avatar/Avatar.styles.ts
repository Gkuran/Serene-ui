import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    borderRadius: 999,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#FFFFFF',
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
  online: '#4ECDC4',
  away: '#FFE66D',
  offline: '#95A5A6',
};