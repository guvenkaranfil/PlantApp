export type IFontSizes =
  | 'extraSmall'
  | 'small'
  | 'smallLarge'
  | 'medium'
  | 'body'
  | 'mediumLarge'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

export default {
  extraSmall: 9, // Extra small text, e.g., footnotes
  small: 11, // Small text, e.g., captions
  smallLarge: 12, // Small large text
  medium: 13, // Medium text, e.g., labels
  body: 14, // Base font size for body text
  mediumLarge: 15, // Medium large text
  h5: 16, // Header 5, typically for subheadings
  h4: 20, // Header 4, used for larger subheadings
  h3: 25, // Header 3, used for main headings
  h2: 28, // Header 2, used for prominent sections
  h1: 32, // Header 1, main title or heading
};
