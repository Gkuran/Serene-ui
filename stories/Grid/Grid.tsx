import { ScrollView, View } from 'react-native';
import { Card, CardProps } from '../Card/Card';
import { styles } from './Grid.styles';

export interface GridProps {
  /** Array de dados para os cards */
  data: CardProps[];
  /** Número de colunas */
  numColumns?: 2 | 3;
}

export const Grid = ({
  data,
  numColumns = 2,
}: GridProps) => {
  const chunkArray = (array: CardProps[], size: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const rows = chunkArray(data, numColumns);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, itemIndex) => (
            <View key={itemIndex} style={[styles.cardWrapper, { flex: 1 / numColumns }]}>
              <Card {...item} />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};