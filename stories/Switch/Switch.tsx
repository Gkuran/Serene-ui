import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Switch.styles';

export interface SwitchProps {
  /** Se o switch está ativo */
  value?: boolean;
  /** Função chamada quando o valor muda */
  onValueChange?: (value: boolean) => void;
  /** Label do switch */
  label?: string;
  /** Se o switch está desabilitado */
  disabled?: boolean;
}

export const Switch = ({
  value = false,
  onValueChange,
  label,
  disabled = false,
}: SwitchProps) => {
  const handlePress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!value);
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
        styles.track,
        value ? styles.trackOn : styles.trackOff,
      ]}>
        <View style={[
          styles.thumb,
          value ? styles.thumbOn : styles.thumbOff,
        ]} />
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