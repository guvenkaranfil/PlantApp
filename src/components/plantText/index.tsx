import React from 'react';
import {ColorValue, Text, TextStyle} from 'react-native';

import colors, {IColors} from '@src/theme/colors';
import {IFonts} from '@src/theme/fonts';
import fontSizes, {IFontSizes} from '@src/theme/fontSizes';

interface IPlantTextBase {
  colorName?: IColors;
  fontFamily?: IFonts;
  fontSize?: IFontSizes;
  paddingTop?: number;
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
  paddingTop,
  textAlign,
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
    paddingTop,
    color: colorValue,
    fontFamily: fontFamily,
    fontSize: fontSize ? fontSizes[fontSize] : undefined,
    textAlign,
  };

  return <Text style={labelStyle}>{children ?? label}</Text>;
}
