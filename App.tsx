import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowTo from './components/HowTo';
import CTA from './components/CTA';
import { Sparkles } from 'lucide-react';
import LanguageSelector from './components/LanguageSelector';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-text-main font-black">

      <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-dark/10">
        <div className="container mx-auto px-6 h-16 md:h-20 flex justify-between items-center">

          <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Cosme AI
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            {/* ←ここを aタグ に変更 */}
            <a
              href="https://cosme-proposal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-2.5 rounded-full 
                        text-sm md:text-base font-black transition-colors shadow-md 
                        flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-primary" />
              {t.header.start}
            </a>
          </div>

        </div>
      </header>

      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <Problem />
        <HowTo />
        <CTA />
      </main>

      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-6">Cosme AI</div>
          <p className="text-gray-400 text-sm font-black mb-10">
            {t.footer.copyright}
          </p>
          <div className="flex justify-center gap-6 text-xs sm:text-sm text-gray-300 font-black">
            <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition">{t.footer.contact}</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
