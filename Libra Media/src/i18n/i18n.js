import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'az',
        resources: {
            az: {
                translation: {
                    home: 'Ana Səhifə',
                    category: 'Kateqoryalar',
                    like: 'Sevimlİlər',
                    profile: 'Profil',
                    cart: 'Səbət',
                }
            },
            en: {
                translation: {
                    home: 'Home',
                    category: 'Category',
                    like: 'Likes',
                    profile: 'Profile',
                    cart: 'Cart',
                }
            }
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
