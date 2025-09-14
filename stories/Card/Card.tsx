import { ReactNode } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { styles, variantStyles, paddingStyles } from './Card.styles';

export interface CardProps {
  /** Conteúdo customizado do card */
  children?: ReactNode;
  /** Variante do card */
  variant?: 'default' | 'elevated' | 'outlined';
  /** Padding interno */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** URL da imagem */
  imageUrl?: string;
  /** Título do card */
  title?: string;
  /** Descrição do card */
  description?: string;
  /** Data de publicação */
  publishDate?: string;
  /** Status do item */
  status?: 'available' | 'reserved' | 'delivered' | 'unavailable';
  /** Função chamada ao pressionar o card */
  onPress?: () => void;
}

export const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  imageUrl,
  title,
  description,
  publishDate,
  status,
  onPress,
}: CardProps) => {
  const variantStyle = variantStyles[variant];
  const paddingStyle = children ? paddingStyles[padding] : paddingStyles.none;
  
  const hasStructuredContent = imageUrl || title || description || publishDate || status;
  
  const getStatusText = (status?: string) => {
    switch (status) {
      case 'available': return 'Disponível';
      case 'reserved': return 'Reservado';
      case 'delivered': return 'Entregue';
      case 'unavailable': return 'Indisponível';
      default: return status;
    }
  };
  
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'available': return theme.colors.success;
      case 'reserved': return theme.colors.warning;
      case 'delivered': return theme.colors.disabled;
      case 'unavailable': return theme.colors.error;
      default: return theme.colors.primary;
    }
  };
  
  const CardContent = () => (
    <View style={[styles.card, variantStyle, paddingStyle]}>
      {hasStructuredContent ? (
        <View>
          <View style={styles.imageContainer}>
            {imageUrl ? (
              <Image source={{ uri: imageUrl }} style={styles.image} />
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>📦</Text>
              </View>
            )}
          </View>
          <View style={styles.content}>
            {title && <Text style={styles.title}>{title}</Text>}
            {description && <Text style={styles.description}>{description}</Text>}
            {(publishDate || status) && (
              <View style={styles.footer}>
                {publishDate && <Text style={styles.date}>{publishDate}</Text>}
                {status && <Text style={[styles.meta, { color: getStatusColor(status) }]}>{getStatusText(status)}</Text>}
              </View>
            )}
          </View>
        </View>
      ) : (
        children
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <CardContent />
      </TouchableOpacity>
    );
  }

  return <CardContent />;
};