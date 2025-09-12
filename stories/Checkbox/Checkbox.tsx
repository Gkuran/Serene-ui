import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Checkbox.styles';

export interface CheckboxProps {
  /** Se o checkbox está marcado */
  checked?: boolean;
  /** Texto do label */
  label?: string;
  /** Função chamada quando o estado muda */
  onPress?: (checked: boolean) => void;
  /** Se o checkbox está desabilitado */
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