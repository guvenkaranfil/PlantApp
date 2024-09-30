export type IColors =
  | 'green.main'
  | 'green.light'
  | 'green.gray'
  | 'green.white'
  | 'green.dark'
  | 'green.darker'
  | 'green.translucent10'
  | 'green.translucent70'
  | 'green.paywallOfferButtonLinear'
  | 'black.main'
  | 'black.indigo'
  | 'black.gray'
  | 'black.translucent24'
  | 'black.translucent40'
  | 'black.grayTranslucent25'
  | 'black.grayTranslucent10'
  | 'white.main'
  | 'white.off'
  | 'white.translucent92'
  | 'white.translucent95'
  | 'white.translucent52'
  | 'white.translucent05'
  | 'white.translucent07'
  | 'white.translucent30'
  | 'white.translucent08'
  | 'gray.light'
  | 'gray.mediumLight'
  | 'gray.mediumDark';

export default {
  green: {
    main: '#28AF6E',
    light: '#5DC794',
    gray: '#597165',
    white: '#FDFFFE',
    dark: '#13231B',
    darker: '#101E17',
    translucent10: 'rgba(19, 35, 27, 0.1)',
    translucent70: 'rgba(19, 35, 27, 0.7)',
    paywallOfferButtonLinear: [
      'rgba(40, 175, 110, 0)',
      'rgba(40, 175, 110, 0.05)',
      'rgba(40, 175, 110, 0.08)',
      'rgba(40, 175, 110, 0.15)',
    ],
  },
  black: {
    main: '#000000',
    indigo: '#13231B40',
    gray: '#1E1E1E',
    translucent24: 'rgba(0, 0, 0, 0.24)',
    translucent40: 'rgba(0, 0, 0, 0.4)',
    grayTranslucent25: 'rgba(60, 60, 67, 0.25)',
    grayTranslucent10: 'rgba(60, 60, 67, 0.1)',
  },
  white: {
    main: '#ffffff',
    off: '#FBFAFA',
    translucent92: 'rgba(255, 255, 255, 0.92)',
    translucent95: 'rgba(255, 255, 255, 0.95)',
    translucent52: 'rgba(255, 255, 255, 0.52)',
    translucent05: 'rgba(255, 255, 255, 0.05)',
    translucent07: 'rgba(255, 255, 255, 0.7)',
    translucent30: 'rgba(255, 255, 255, 0.3)',
    translucent08: 'rgba(255, 255, 255, 0.08)',
  },
  gray: {
    light: '#979798',
    mediumLight: '#BDBDBD',
    mediumDark: '#AFAFAF',
  },
} as const;
