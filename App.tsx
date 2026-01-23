import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import LanguageModal from './components/LanguageModal';
import ScrollTracking from './components/ScrollTracking';
import { useLanguage } from './LanguageContext';
import HomePage from './pages/HomePage';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Tokushoho from './pages/tokushoho';

const App: React.FC = () => {
  const { t, hasSelectedLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-text-main font-black">
      {/* スクロール追跡（32段階） */}
      <ScrollTracking />

      {/* 言語選択モーダル（初回のみ） */}
      {!hasSelectedLanguage && <LanguageModal />}

      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-dark/10">
        <div className="
          container mx-auto px-6 h-16 md:h-20 
          flex md:flex justify-between items-center
        ">

          {/* 左：ロゴ（スマホは左端、PCも左端） */}
          <div className="flex-1">
            <Link
              to="/"
              className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight"
            >
              Cosme AI
            </Link>
          </div>

          {/* 中央：言語セレクター（🔥スマホのみ表示） */}
          <div className="flex-1 flex justify-center md:hidden">
            <LanguageSelector />
          </div>

          {/* 右：はじめるボタン＋PC用LanguageSelector */}
          <div className="flex-1 flex justify-end items-center gap-4">

            {/* 🔥 PCではここに言語セレクターを表示 */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            <a
              href="https://cosme-proposal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 
                        px-5 py-2.5 rounded-full 
                        text-xs sm:text-sm md:text-base 
                        font-black transition-colors shadow-md 
                        flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 fill-primary" />
              {t.header.start}
            </a>
          </div>

        </div>
      </header>

      <main className="flex-grow pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tokushoho" element={<Tokushoho />} />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">

          {/* お知らせ欄 */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 mb-4 text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500/30 text-yellow-100 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">
                  {t.footer.announcement_label}
                </span>
                <span className="text-yellow-200/70 text-[10px] sm:text-xs">
                  {t.footer.announcement_date}
                </span>
              </div>
              <p className="text-yellow-100 text-xs sm:text-sm font-bold">
                {t.footer.announcement}
              </p>
            </div>
          </div>

          <div className="text-2xl font-black mb-6">Cosme AI</div>
          <p className="text-gray-400 text-sm font-black mb-10">
            {t.footer.copyright}
          </p>
          <div className="flex justify-center gap-6 text-[10px] sm:text-sm text-gray-300 font-black">
            <Link to="/privacy" className="hover:text-white transition">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-white transition">{t.footer.terms}</Link>
            <Link to="/tokushoho" className="hover:text-white transition">{t.footer.tokushoho}</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
