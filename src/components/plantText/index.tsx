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

/**
 * Base interface for the PlantText component, defining common text styling properties.
 *
 * @interface IPlantTextBase
 * @property {IColors} [colorName] - Defines the color of the text. The value must be a key from the `colors` object, formatted as 'color.category' (e.g., 'green.main').
 * @property {IFonts} [fontFamily] - Defines the font family of the text. This corresponds to available font names in the `fonts` object.
 * @property {IFontSizes} [fontSize] - Specifies the font size of the text. The value comes from the `fontSizes` object.
 * @property {number} [top] - Optional margin at the top of the text.
 * @property {number} [marginHorizontal] - Optional horizontal margin for the text.
 * @property {number} [paddingTop] - Optional padding at the top of the text.
 * @property {number} [paddingBottom] - Optional padding at the bottom of the text.
 * @property {number} [letterSpacing] - Optional letter spacing for the text.
 * @property {number} [lineHeight] - Optional line height for the text.
 * @property {TextStyle['textAlign']} [textAlign] - Specifies the alignment of the text (e.g., 'left', 'center', 'right').
 * @property {React.ReactNode} [children] - Optional children elements that can be rendered inside the text.
 */

/**
 * Interface for the PlantText component when using a label as a string.
 *
 * @interface IPlantTextWithLabel
 * @extends IPlantTextBase
 * @property {string} label - Required label text to display. If this is provided, `children` should not be used.
 */

/**
 * Interface for the PlantText component when using children as React elements.
 *
 * @interface IPlantTextWithChildren
 * @extends IPlantTextBase
 * @property {React.ReactNode} children - Required children to be rendered inside the text. If this is provided, `label` should not be used.
 */

/**
 * Type definition for the PlantText component, which can either use a label or children for rendering text.
 *
 * @typedef {IPlantTextWithLabel | IPlantTextWithChildren} IPlantText
 * @example
 * ```tsx
 * <PlantText label="Hello World" colorName="green.main" />
 * <PlantText colorName="black.gray">Hello World</PlantText>
 * ```
 */

/**
 * A customizable Text component uses 'Text', that can render either a label or children.
 *
 * @param {Object} props - The props for the PlantText component.
 * @param {IColors} [colorName] - Defines the color of the text. The value must be a key from the `colors` object, formatted as 'color.category' (e.g., 'green.main').
 * @param {IFonts} [fontFamily] - Defines the font family of the text. This corresponds to available font names in the `fonts` object.
 * @param {IFontSizes} [fontSize] - Specifies the font size of the text. The value comes from the `fontSizes` object.
 * @param {number} [top] - Optional margin at the top of the text.
 * @param {number} [marginHorizontal] - Optional horizontal margin for the text.
 * @param {number} [paddingTop] - Optional padding at the top of the text.
 * @param {number} [paddingBottom] - Optional padding at the bottom of the text.
 * @param {number} [letterSpacing] - Optional letter spacing for the text.
 * @param {number} [lineHeight] - Optional line height for the text.
 * @param {TextStyle['textAlign']} [textAlign] - Specifies the alignment of the text (e.g., 'left', 'center', 'right').
 * @param {React.ReactNode} [children] - Optional children elements that can be rendered inside the text.
 * @param {IPlantTextWithLabel | IPlantTextWithChildren} IPlantText
 * @example
 * ```tsx
 * <PlantText label="Hello World" colorName="green.main" />
 * <PlantText colorName="black.gray">Hello World</PlantText>
 * ```
*/
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
