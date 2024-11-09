import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import enTranslation from './components/en.json';
import esTranslation from './components/es.json';


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'es', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
