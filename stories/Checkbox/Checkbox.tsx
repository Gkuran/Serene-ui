import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Checkbox.styles';

export interface CheckboxProps {
  /** If checkbox is checked */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Function called when state changes */
  onPress?: (checked: boolean) => void;
  /** If checkbox is disabled */
  disabled?: boolean;
}

export const Checkbox = ({
  checked = false,
  label,
  onPress,
  disabled = false,
}: CheckboxProps) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress(!checked);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[
        styles.checkbox,
        checked && styles.checked,
        disabled && styles.disabled,
      ]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && (
        <Text style={[
          styles.label,
          disabled && styles.labelDisabled,
        ]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};