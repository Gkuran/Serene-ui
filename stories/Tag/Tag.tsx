import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Tag.styles';

export interface TagProps {
  /** Tag text */
  label: string;
  /** Tag variant */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** If tag can be removed */
  removable?: boolean;
  /** Function called when removing */
  onRemove?: () => void;
  /** Function called when pressing the tag */
  onPress?: () => void;
}

export const Tag = ({
  label,
  variant = 'default',
  removable = false,
  onRemove,
  onPress,
}: TagProps) => {
  const TagContent = () => (
    <View style={[styles.container, styles[variant]]}>
      <Text style={[styles.label, styles[`${variant}Text`]]}>{label}</Text>
      {removable && (
        <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
          <Text style={[styles.removeIcon, styles[`${variant}Text`]]}>×</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (onPress && !removable) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <TagContent />
      </TouchableOpacity>
    );
  }

  return <TagContent />;
};