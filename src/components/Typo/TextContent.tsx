import React from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';

/**
 * an text component targeted on easy to use and read
 */
interface IProps {
  children: React.ReactNode;
  color?: ColorValue;
  italic?: boolean;
  numberOfLines?: number;
  level?: 'fat' | 'big' | 'medium' | 'small' | 'tiny';
  style?: (TextStyle | undefined)[] | TextStyle;
  fontWeight?: TextStyle['fontWeight'];
  adjustsFontSizeToFit?: boolean;
}

const TextContent: React.FC<IProps> = ({
  children,
  italic = false,
  level = 'medium',
  color = 'black',
  style,
  fontWeight = 'normal',
  numberOfLines,
  adjustsFontSizeToFit,
}) => {
  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}
      style={[
        resolveStyle({
          level,
          italic,
          color,
        }),
        style,
        { fontWeight }, // more respect font weight from props rather than style
      ]}>
      {children}
    </Text>
  );
};

function resolveStyle({
  italic,
  level,
  color,
}: Omit<IProps, 'children'>): TextStyle {
  return {
    fontSize: resolveFontsizeByLevel(level),
    fontStyle: italic ? 'italic' : 'normal',
    color,
  };
}

function resolveFontsizeByLevel(level: IProps['level']) {
  switch (level) {
    case 'fat':
      return 18;
    case 'big':
      return 16;
    case 'medium':
      return 14;
    case 'small':
      return 12;
    case 'tiny':
      return 10;
    default:
      return 14;
  }
}

export default React.memo(TextContent);
