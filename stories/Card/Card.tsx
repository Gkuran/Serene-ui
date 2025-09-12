import { ReactNode } from 'react';
import { View } from 'react-native';
import { styles, variantStyles, paddingStyles } from './Card.styles';

export interface CardProps {
  /** Conteúdo do card */
  children: ReactNode;
  /** Variante do card */
  variant?: 'default' | 'elevated' | 'outlined';
  /** Padding interno */
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
}: CardProps) => {
  const variantStyle = variantStyles[variant];
  const paddingStyle = paddingStyles[padding];

  return (
    <View style={[styles.card, variantStyle, paddingStyle]}>
      {children}
    </View>
  );
};