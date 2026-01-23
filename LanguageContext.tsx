import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './i18n/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.ja;
    hasSelectedLanguage: boolean;
    confirmLanguageSelection: () => void;
}

// Type guard to ensure language is valid
const isValidLanguage = (lang: string): lang is Language => {
    return lang === 'ja' || lang === 'id' || lang === 'en';
};

const LANGUAGE_SELECTED_KEY = 'cosmeai_language_selected';

// ブラウザの言語設定を検出
const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || navigator.languages?.[0];

    if (!browserLang) return 'ja';

    // インドネシア語（id）のチェック
    if (browserLang.startsWith('id')) {
        return 'id';
    }

    // 英語（en）のチェック
    if (browserLang.startsWith('en')) {
        return 'en';
    }

    // 日本語（ja）のチェック - デフォルト
    return 'ja';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());
    const [hasSelectedLanguage, setHasSelectedLanguage] = useState<boolean>(true); // 常にtrueでモーダルを表示しない

    // Check if user has already selected language
    useEffect(() => {
        const hasSelected = localStorage.getItem(LANGUAGE_SELECTED_KEY) === 'true';
        setHasSelectedLanguage(true); // 常にtrue
    }, []);

    const handleSetLanguage = (lang: Language) => {
        if (isValidLanguage(lang)) {
            setLanguage(lang);
            localStorage.setItem(LANGUAGE_SELECTED_KEY, 'true');
            setHasSelectedLanguage(true);
        }
    };

    const confirmLanguageSelection = () => {
        localStorage.setItem(LANGUAGE_SELECTED_KEY, 'true');
        setHasSelectedLanguage(true);
    };

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
        hasSelectedLanguage,
        confirmLanguageSelection,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
