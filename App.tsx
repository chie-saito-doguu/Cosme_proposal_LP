import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Instagram } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import LanguageModal from './components/LanguageModal';
import ScrollTracking from './components/ScrollTracking';
import { useLanguage } from './LanguageContext';
import HomePage from './pages/HomePage';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Tokushoho from './pages/tokushoho';
import { getOptimizedImage } from './utils/imageUtils';
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
          flex justify-between items-center
        ">

          {/* 左：ロゴ */}
          <div className="flex-none">
            <Link
              to="/"
              className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight"
            >
              Cosme AI
            </Link>
          </div>

          {/* 右：言語セレクター（スマホ版） */}
          <div className="md:hidden ml-auto">
            <LanguageSelector />
          </div>

          {/* 右：PC用LanguageSelector + ログインボタン */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />

            {/* デスクトップ版：フラットな白背景＋ピンク文字のボタン */}
            <a
              href="https://cosme-proposal.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Meta Pixel Leadイベント
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                }
              }}
              className="inline-flex bg-white text-primary rounded-full
                        px-6 py-2.5
                        text-base
                        font-black transition-all transform hover:-translate-y-0.5 active:scale-95
                        items-center whitespace-nowrap border-2 border-primary"
            >
              <span>{t.header.login}</span>
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

          {/* Instagramセクション（デスクトップ版のみ） */}
          <div className="hidden md:block mb-12">
            {/* 吹き出しデザイン */}
            <div className="relative inline-block mb-6">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-black text-sm md:text-base shadow-lg inline-flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span>{t.footer.instagram_title}</span>
              </div>
              {/* 吹き出しの三角形 */}
              <div className="absolute left-20 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-500"></div>
            </div>

            {/* Instagram投稿カード */}
            <div className="flex justify-center max-w-4xl mx-auto">
              {/* 投稿1（一番右） */}
              <a
                href="https://www.instagram.com/p/DTqS1W7EmZy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-40 h-56 md:w-52 md:h-72 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', {
                      'link_type': 'instagram_post',
                      'post_id': 'DTqS1W7EmZy',
                      'position': 1
                    });
                  }
                }}
              >
                <img
                  src={getOptimizedImage('/instagram-post-1.png')}
                  alt="Instagram投稿1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23E1306C" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" fill="white" text-anchor="middle" dy=".3em"%3EInstagram%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>

              {/* 投稿2（真ん中） */}
              <a
                href="https://www.instagram.com/p/DTuDHmtEiIg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-40 h-56 md:w-52 md:h-72 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', {
                      'link_type': 'instagram_post',
                      'post_id': 'DTuDHmtEiIg',
                      'position': 2
                    });
                  }
                }}
              >
                <img
                  src={getOptimizedImage('/instagram-post-2.jpeg')}
                  alt="Instagram投稿2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23E1306C" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" fill="white" text-anchor="middle" dy=".3em"%3EInstagram%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>

              {/* 投稿3（一番左） */}
              <a
                href="https://www.instagram.com/p/DTxY-dSEqvM/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-40 h-56 md:w-52 md:h-72 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click', {
                      'link_type': 'instagram_post',
                      'post_id': 'DTxY-dSEqvM',
                      'position': 3
                    });
                  }
                }}
              >
                <img
                  src={getOptimizedImage('/instagram-post-3.jpeg')}
                  alt="Instagram投稿3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23E1306C" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" fill="white" text-anchor="middle" dy=".3em"%3EInstagram%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* お知らせ欄 */}
          {t.footer.announcement && (
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
          )}

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
