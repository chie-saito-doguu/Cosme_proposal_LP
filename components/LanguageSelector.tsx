import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 mr-4">
            <Globe className="w-5 h-5 text-white/80" />
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'ja' | 'id' | 'en')}
                className="bg-transparent text-white font-bold text-sm border border-white/30 rounded px-2 py-1 focus:outline-none focus:border-white cursor-pointer"
            >
                <option value="ja" className="text-black">日本語</option>
                <option value="id" className="text-black">Indonesia</option>
                <option value="en" className="text-black">English</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
