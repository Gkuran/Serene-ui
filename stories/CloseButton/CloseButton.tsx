import { Text, TouchableOpacity } from 'react-native';
import { styles, sizeStyles, textSizeStyles, variantStyles, textVariantStyles } from './CloseButton.styles';

export interface CloseButtonProps {
  /** Função chamada ao pressionar o botão */
  onPress?: () => void;
  /** Tamanho do botão */
  size?: 'small' | 'medium' | 'large';
  /** Cor do botão */
  variant?: 'default' | 'light' | 'dark';
}

export const CloseButton = ({
  onPress,
  size = 'medium',
  variant = 'default',
}: CloseButtonProps) => {
  const sizeStyle = sizeStyles[size];
  const variantStyle = variantStyles[variant];

  return (
    <TouchableOpacity
      style={[styles.button, sizeStyle, variantStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.icon, textSizeStyles[size], textVariantStyles[variant]]}>
        ×
      </Text>
    </TouchableOpacity>
  );
};