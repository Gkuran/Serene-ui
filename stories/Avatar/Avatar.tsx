import { Image, Text, View } from 'react-native';
import { sizeStyles, statusColors, styles } from './Avatar.styles';

export interface AvatarProps {
  /** Avatar size */
  size?: 'small' | 'medium' | 'large';
  /** Image source URL */
  src?: string;
  /** User initials when no image */
  initials?: string;
  /** User status indicator */
  status?: 'online' | 'away' | 'offline';
}

export const Avatar = ({
  size = 'medium',
  src,
  initials,
  status,
}: AvatarProps) => {
  const sizeStyle = sizeStyles[size];

  return (
    <View style={[styles.container, sizeStyle.avatar]}>
      <View style={[styles.avatar, sizeStyle.avatar]}>
        {src ? (
          <Image
            source={{ uri: src }}
            style={[styles.image, sizeStyle.avatar]}
          />
        ) : (
          <Text style={[styles.initials, sizeStyle.initials]}>
            {initials}
          </Text>
        )}
      </View>
      {status && (
        <View
          style={[
            styles.statusIndicator,
            sizeStyle.status,
            { backgroundColor: statusColors[status] },
          ]}
        />
      )}
    </View>
  );
};