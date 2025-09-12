import { Image, View } from 'react-native';
import { styles, statusStyles, statusColors } from './Avatar.styles';

export interface AvatarProps {
  /** URL da imagem do usuário */
  imageUrl: string;
  /** Status do usuário */
  status?: 'online' | 'away' | 'offline';
  /** Tamanho do avatar */
  size?: 'small' | 'medium' | 'large';
}

export const Avatar = ({
  imageUrl,
  status = 'offline',
  size = 'medium',
}: AvatarProps) => {
  const avatarStyle = styles[size];
  const statusStyle = statusStyles[size];
  const statusColor = statusColors[status];

  return (
    <View style={[styles.container, avatarStyle]}>
      <Image source={{ uri: imageUrl }} style={[styles.image, avatarStyle]} />
      <View style={[styles.statusIndicator, statusStyle, { backgroundColor: statusColor }]} />
    </View>
  );
};