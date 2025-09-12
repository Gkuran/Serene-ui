import { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './Box.styles';
import { theme } from '../../theme';

export interface BoxProps {
  /** Conteúdo do box */
  children: ReactNode;
  /** Padding */
  p?: keyof typeof theme.spacing;
  /** Margin */
  m?: keyof typeof theme.spacing;
  /** Background color */
  bg?: keyof typeof theme.colors;
  /** Flex direction */
  direction?: 'row' | 'column';
  /** Align items */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /** Justify content */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}

export const Box = ({
  children,
  p,
  m,
  bg,
  direction = 'column',
  align,
  justify,
}: BoxProps) => {
  const boxStyle = [
    styles.box,
    p && { padding: theme.spacing[p] },
    m && { margin: theme.spacing[m] },
    bg && { backgroundColor: theme.colors[bg] },
    { flexDirection: direction },
    align && { alignItems: align },
    justify && { justifyContent: justify },
  ];

  return <View style={boxStyle}>{children}</View>;
};