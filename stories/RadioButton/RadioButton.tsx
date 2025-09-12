import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './RadioButton.styles';

export interface RadioButtonProps {
  /** Se o radio button está selecionado */
  selected?: boolean;
  /** Texto do label */
  label?: string;
  /** Função chamada quando selecionado */
  onPress?: () => void;
  /** Se o radio button está desabilitado */
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