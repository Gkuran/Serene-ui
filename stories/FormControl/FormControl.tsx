import { Text, TextInput, View } from "react-native";
import { styles } from './FormControl.styles';

export interface FormControlProps {
  /** Label do campo */
  label?: string;
  /** Placeholder do input */
  placeholder?: string;
  /** Valor do input */
  value?: string;
  /** Função chamada quando o valor muda */
  onChangeText?: (text: string) => void;
  /** Mensagem de erro */
  error?: string;
  /** Se o campo é obrigatório */
  required?: boolean;
  /** Se o input é para senha */
  secureTextEntry?: boolean;
}

export const FormControl = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  required = false,
  secureTextEntry = false,
}: FormControlProps) => {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#95A5A6"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};


