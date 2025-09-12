import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Tag.styles';

export interface TagProps {
  /** Texto da tag */
  label: string;
  /** Variante da tag */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Se a tag pode ser removida */
  removable?: boolean;
  /** Função chamada ao remover */
  onRemove?: () => void;
}

export const Tag = ({
  label,
  variant = 'default',
  removable = false,
  onRemove,
}: TagProps) => {
  return (
    <View style={[styles.container, styles[variant]]}>
      <Text style={[styles.label, styles[`${variant}Text`]]}>{label}</Text>
      {removable && (
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Text style={[styles.removeIcon, styles[`${variant}Text`]]}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};