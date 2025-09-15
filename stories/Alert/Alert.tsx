import { Text, View } from 'react-native';
import { CloseButton } from '../CloseButton/CloseButton';
import { styles } from './Alert.styles';

export interface AlertProps {
  /** Alert message text */
  message: string;
  /** Alert variant */
  variant?: 'success' | 'warning' | 'error' | 'info';
  /** Left icon (emoji or text) */
  icon?: string;
  /** If alert can be dismissed */
  dismissible?: boolean;
  /** Function called when dismissed */
  onDismiss?: () => void;
}

export const Alert = ({
  message,
  variant = 'info',
  icon,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  return (
    <View style={[styles.container, styles[variant]]}>
      <View style={styles.content}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={[styles.message, styles[`${variant}Text`]]}>{message}</Text>
      </View>
      {dismissible && (
        <CloseButton onPress={onDismiss} size="small" />
      )}
    </View>
  );
};