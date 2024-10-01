import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '@src/translation/resources/en';
import tr from '@src/translation/resources/tr';

export const FALLBACK_LANGUAGE = 'en';

export const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: FALLBACK_LANGUAGE,
  fallbackLng: FALLBACK_LANGUAGE,
  interpolation: {escapeValue: false},
});

export const getLanguageList = () => {
  return Object.keys(i18n.services.resourceStore.data);
};
export default i18n;
