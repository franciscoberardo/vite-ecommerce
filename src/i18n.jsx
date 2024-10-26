import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locals/en.json';
import esTranslation from './locals/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
