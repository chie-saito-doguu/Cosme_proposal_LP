import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const LanguageModal: React.FC = () => {
    const { setLanguage, confirmLanguageSelection } = useLanguage();

    const handleLanguageSelect = (lang: 'ja' | 'id' | 'en') => {
        setLanguage(lang);
        confirmLanguageSelection();
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-[90%] mx-4 shadow-2xl">
                {/* アイコン */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                </div>

                {/* タイトル */}
                <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 mb-3">
                    Select Language
                </h2>
                <p className="text-center text-gray-600 font-bold text-sm md:text-base mb-8">
                    言語を選択してください
                </p>

                {/* 言語ボタン */}
                <div className="space-y-3">
                    <button
                        onClick={() => handleLanguageSelect('ja')}
                        className="w-full py-4 md:py-5 px-6 bg-gray-100 hover:bg-primary hover:text-white text-gray-900 rounded-2xl font-black text-lg md:text-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        日本語
                    </button>
                    <button
                        onClick={() => handleLanguageSelect('id')}
                        className="w-full py-4 md:py-5 px-6 bg-gray-100 hover:bg-primary hover:text-white text-gray-900 rounded-2xl font-black text-lg md:text-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Bahasa Indonesia
                    </button>
                    <button
                        onClick={() => handleLanguageSelect('en')}
                        className="w-full py-4 md:py-5 px-6 bg-gray-100 hover:bg-primary hover:text-white text-gray-900 rounded-2xl font-black text-lg md:text-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        English
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
