import i18n from 'i18next';
import { reactI18nextModule, initReactI18next, } from 'react-i18next';
import localesResources from '@assets/locales';
import { getLanguage } from '@commons/storage';

const language = getLanguage();
i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: language,
    fallbackLng: 'vi',
    resources: localesResources,
    interpolation: {
        escapeValue: false
    },
    defaultNS:'commons',
    react: {
        useSuspense: false,
    }
});

export default i18n;
