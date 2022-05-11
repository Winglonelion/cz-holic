import React, { useMemo } from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';

type HeaderLevelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IProps {
  children: React.ReactNode;
  level?: HeaderLevelType;
  color?: ColorValue;
  style?: TextStyle;
  lineHeight?: number;
  fontWeight?: TextStyle['fontWeight'];
}

const TextHeader: React.FC<IProps> = ({
  children,
  level = 'h3',
  color = '#112',
  lineHeight,
  style,
  fontWeight = 'bold',
}) => {
  const calculatedStyle = useMemo(
    () => resolveStyle(level, color, lineHeight, fontWeight),
    [level, color, lineHeight, fontWeight],
  );

  return <Text style={[calculatedStyle, style]}>{children}</Text>;
};

function resolveStyle(
  level: HeaderLevelType,
  color: ColorValue,
  lineHeight?: number,
  fontWeight?: TextStyle['fontWeight'],
): TextStyle | undefined {
  switch (level) {
    case 'h1':
      return {
        fontSize: 24,
        lineHeight: lineHeight ?? 30,
        fontWeight: fontWeight,
        color,
      };

    case 'h2':
      return {
        fontSize: 20,
        lineHeight: lineHeight ?? 24,
        fontWeight: fontWeight,
        color,
      };

    case 'h3':
      return {
        fontSize: 16,
        lineHeight: lineHeight ?? 20,
        fontWeight: fontWeight,
        color,
      };

    case 'h4':
      return {
        fontSize: 14,
        lineHeight: lineHeight ?? 18,
        fontWeight: fontWeight,
        color,
      };

    case 'h5':
      return {
        fontSize: 12,
        lineHeight: lineHeight ?? 16,
        fontWeight: fontWeight,
        color,
      };

    case 'h6':
      return {
        fontSize: 10,
        lineHeight: lineHeight ?? 14,
        fontWeight: fontWeight,
        color,
      };

    default:
      return undefined;
  }
}

export default React.memo(TextHeader);
