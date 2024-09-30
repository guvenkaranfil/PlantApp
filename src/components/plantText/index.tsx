import React from 'react';
import {ColorValue, Text, TextStyle} from 'react-native';

import colors, {IColors} from '@src/theme/colors';
import {IFonts} from '@src/theme/fonts';
import fontSizes, {IFontSizes} from '@src/theme/fontSizes';

interface IPlantTextBase {
  colorName?: IColors;
  fontFamily?: IFonts;
  fontSize?: IFontSizes;
  top?: number;
  marginHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
  children?: React.ReactNode | undefined;
}

interface IPlantTextWithLabel extends IPlantTextBase {
  label: string;
  children?: never;
}

interface IPlantTextWithChildren extends IPlantTextBase {
  label?: never;
  children: React.ReactNode;
}

type IPlantText = IPlantTextWithLabel | IPlantTextWithChildren;

export default function PlantText({
  label,
  colorName,
  fontFamily,
  fontSize,
  top,
  marginHorizontal,
  paddingTop,
  paddingBottom,
  textAlign,
  letterSpacing,
  lineHeight,
  children,
}: IPlantText) {
  const colorMapping = colorName?.split('.') as [
    keyof typeof colors,
    keyof (typeof colors)[keyof typeof colors],
  ];

  const colorValue = colorMapping
    ? (colors[colorMapping[0]][colorMapping[1]] as ColorValue)
    : undefined;

  const labelStyle = {
    top,
    marginHorizontal,
    paddingTop,
    paddingBottom,
    color: colorValue,
    fontFamily: fontFamily ?? undefined,
    fontSize: fontSize ? fontSizes[fontSize] : undefined,
    textAlign,
    letterSpacing,
    lineHeight,
  };

  return <Text style={labelStyle}>{children ?? label}</Text>;
}
