import { resources } from '@src/translation';

declare module 'i18next' {
  export interface CustomTypeOptions {
    resources: (typeof resources)['en'];
    returnNull: false;
  }
}
