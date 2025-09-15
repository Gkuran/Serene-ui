import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Badge.styles';

export interface BadgeProps {
  /** Número a ser exibido no badge */
  count?: number;
  /** Se deve mostrar apenas um ponto quando count é 0 */
  showDot?: boolean;
  /** Número máximo a ser exibido (ex: 99+) */
  maxCount?: number;
}

export const Badge = ({
  count = 0,
  showDot = false,
  maxCount = 99,
}: BadgeProps) => {
  if (count === 0 && !showDot) {
    return null;
  }

  if (count === 0 && showDot) {
    return <View style={styles.dot} />;
  }

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{displayCount}</Text>
    </View>
  );
};