import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FF6B6B',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },
  disabled: {
    borderColor: '#BDC3C7',
    backgroundColor: '#F8F9FA',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#2C3E50',
  },
  labelDisabled: {
    color: '#BDC3C7',
  },
});