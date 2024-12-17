import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Loads translations via HTTP (backend)
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language if detection fails
    debug: true, // Set to false in production
    interpolation: {
      escapeValue: false, // React already escapes content
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation JSON files
    },
    detection: {
      order: ["path", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
