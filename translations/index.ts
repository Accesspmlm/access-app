import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from './en.json';
import es from './es.json';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  debug: true,
  resources,
  lng: 'es',
  fallbackLng: 'es',
});

export const changeLanguage = (value: string): void => {
  i18n.changeLanguage(value);
};

export default i18n;
