import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';

i18n
  .use(LanguageDetector)      // reads navigator.language / localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    fallbackLng: 'en',        // default language
    supportedLngs: ['en', 'pt'],
    interpolation: {
      escapeValue: false,     // React already sanitizes output
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // persist the user's choice across sessions
    },
  });

export default i18n;
