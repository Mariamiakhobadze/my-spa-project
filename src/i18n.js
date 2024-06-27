import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to the Home Page.",
      about: "About our project.",
      contact: "Contact Page",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit"
    }
  },
  ge: {
    translation: {
      welcome: "მოგესალმებით მთავარ გვერდზე.",
      about: "ჩვენი პროექტის შესახებ.",
      contact: "საკონტაქტო გვერდი",
      name: "სახელი",
      email: "ელ.ფოსტა",
      message: "შეტყობინება",
      submit: "გაგზავნა"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
