import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RadioButton.styles';

export interface RadioButtonProps {
  /** If radio button is selected */
  selected?: boolean;
  /** Label text */
  label?: string;
  /** Function called when selected */
  onPress?: () => void;
  /** If radio button is disabled */
  disabled?: boolean;
}

export const RadioButton = ({
  selected = false,
  label,
  onPress,
  disabled = false,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[
        styles.radio,
        selected && styles.selected,
        disabled && styles.disabled,
      ]}>
        {selected && <View style={styles.dot} />}
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