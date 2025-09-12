import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Accordion.styles';

export interface AccordionProps {
  /** Título do accordion */
  title: string;
  /** Conteúdo do accordion */
  children: React.ReactNode;
  /** Se o accordion inicia expandido */
  defaultExpanded?: boolean;
}

export const Accordion = ({
  title,
  children,
  defaultExpanded = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? '−' : '+'}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
};