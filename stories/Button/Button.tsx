import { Text, TouchableOpacity } from 'react-native';
import { sizeStyles, styles, variantStyles } from './Button.styles';

export interface ButtonProps {
  /** Button text */
  title: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Function called on press */
  onPress?: () => void;
  /** If button is disabled */
  disabled?: boolean;
}

export const Button = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
}: ButtonProps) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyle.button,
        sizeStyle.button,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, variantStyle.text, sizeStyle.text]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};