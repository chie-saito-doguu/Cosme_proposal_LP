import React, { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { getOptimizedImage } from '../utils/imageUtils';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const images = [
    getOptimizedImage('/hero-image_1.jpg'),
    getOptimizedImage('/hero-image_2.jpg'),
    getOptimizedImage('/hero-image_3.jpg'),
    getOptimizedImage('/hero-image_4.jpg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 約3秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <section className="relative w-full pt-4 pb-12 md:pt-6 md:pb-16 bg-primary text-white overflow-hidden font-black">

      {/* --- Hearts Animation CSS --- */}
      <style>{`
        @keyframes heart-pop-1 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.9; }
          100% { transform: scale(1.5) translate(-40px, -40px); opacity: 0; }
        }
        @keyframes heart-pop-2 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.8; }
          100% { transform: scale(1.3) translate(40px, -60px); opacity: 0; }
        }
        @keyframes heart-pop-3 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.7; }
          100% { transform: scale(1.7) translate(-20px, -80px); opacity: 0; }
        }
      `}</style>

      <div className="container mx-auto px-6 text-center max-w-7xl relative z-10">

        {/* Badge */}
        {t.hero.badge && (
          <div className="mb-8 inline-block">
            <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white font-black text-sm md:text-xl tracking-widest">
              {t.hero.badge}
            </span>
          </div>
        )}

        {/* Main Heading - Adjusted font size for mobile to keep it in 3 lines */}
        {t.hero.title && (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-snug md:leading-relaxed tracking-tight mb-8 md:mb-8 drop-shadow-sm">
            {t.hero.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.hero.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        )}

        {/* Visual Content */}
        <div className="relative w-full max-w-full mx-auto">
          {/* Shadow/Glow behind image */}
          <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-10 rounded-full"></div>

          <div className="bg-white rounded-[2.5rem] p-2 md:p-3 shadow-2xl rotate-1 md:rotate-0 transition-transform hover:rotate-0">
            <div className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              {/* Image (fade slideshow) */}
              <div className="w-full md:w-1/2 md:aspect-square relative overflow-hidden flex items-start justify-center">
                <div className="w-full aspect-square relative">
                {images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Makeup Model"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                </div>
                {images.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt="Makeup Model"
                    className={`absolute w-full h-auto object-cover transition-opacity duration-700 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-full text-sm md:text-lg md:px-6 font-black" style={{
                  background: 'linear-gradient(135deg, #db2777 0%, #be185d 50%, #9d174d 100%)',
                  boxShadow: '0 4px 12px rgba(190, 24, 93, 0.5), 0 2px 4px rgba(0, 0, 0, 0.15)'
                }}>
                  {t.hero.match}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-between text-left bg-white text-text-main self-stretch">
                {/* 上部コンテンツ */}
                <div className="mb-0 md:mb-4 md:mt-4">
                  {/* 上の赤いライン */}
                  <span className="inline-block w-10 md:w-16 h-2 bg-primary rounded-full mb-3 md:mb-6"></span>

                  {/* タイトル（スマホだけ少し小さく） */}
                  <h3 className="text-2xl sm:text-3xl md:text-[3.5rem] font-black leading-snug md:leading-none mb-3 md:mb-4 text-primary">
                    {t.hero.subtitle.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < t.hero.subtitle.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  <div className="space-y-4 mb-0 md:mb-8 md:mt-12">
                    <p className="text-text-main font-black text-base md:text-3xl leading-relaxed md:leading-[1.5]">
                      {t.hero.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < t.hero.description.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>

                {/* CTAボタン（デスクトップ版のみカード内に表示） */}
                <div className="mt-4 md:mt-0 hidden md:block">
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
                    className="group relative w-full py-4 md:py-7 px-6 md:px-12 text-primary rounded-full font-black text-lg md:text-3xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center overflow-visible cursor-pointer border-2 border-white/60"
                    style={{
                      background: 'linear-gradient(to bottom, #ffffff 0%, #ffeef2 30%, #ffc2d4 100%)',
                      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08), inset 0 3px 6px rgba(255, 255, 255, 1), inset 0 -3px 6px rgba(180, 140, 160, 0.5)'
                    }}
                  >
                    {/* 上部の光沢（丸みに沿って） */}
                    <div className="absolute top-1 left-1 right-1 h-[60%] rounded-t-full pointer-events-none" style={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)'
                    }}></div>

                    {/* 下部の影（丸みに沿って） */}
                    <div className="absolute bottom-1 left-2 right-2 h-[30%] rounded-b-full pointer-events-none" style={{
                      background: 'linear-gradient(to top, rgba(255, 200, 220, 0.3) 0%, rgba(255, 200, 220, 0.1) 60%, transparent 100%)'
                    }}></div>

                    {/* --- Hearts floating (ポワポワ白ハート) --- */}
                    <div className="absolute inset-0 pointer-events-none">
                      <Heart
                        className="absolute left-1/2 top-1/2 w-8 h-8 text-white fill-white opacity-0 blur-[2px]
                        group-hover:opacity-90 group-hover:animate-[heart-pop-1_1.2s_ease-out]"
                      />
                      <Heart
                        className="absolute left-1/2 top-1/2 w-6 h-6 text-white fill-white opacity-0 blur-[1px]
                        group-hover:opacity-80 group-hover:animate-[heart-pop-2_1.4s_ease-out]"
                      />
                      <Heart
                        className="absolute left-1/2 top-1/2 w-10 h-10 text-white fill-white opacity-0 blur-[3px]
                        group-hover:opacity-70 group-hover:animate-[heart-pop-3_1.6s_ease-out]"
                      />
                    </div>

                    <Sparkles className="w-5 h-5 md:w-9 md:h-9 mr-2 fill-primary relative z-10" />
                    <span className="relative z-10">{t.cta.button}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* スマホ版用固定ボタン（下部に常に表示） */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3">
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
        className="group relative w-[70%] mx-auto py-4 px-8 text-primary rounded-full font-black text-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center overflow-visible cursor-pointer border-2 border-white/60"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #ffeef2 30%, #ffc2d4 100%)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08), inset 0 3px 6px rgba(255, 255, 255, 1), inset 0 -3px 6px rgba(180, 140, 160, 0.5)'
        }}
      >
        {/* 上部の光沢 */}
        <div className="absolute top-1 left-1 right-1 h-[60%] rounded-t-full pointer-events-none" style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)'
        }}></div>

        {/* 下部の影 */}
        <div className="absolute bottom-1 left-2 right-2 h-[30%] rounded-b-full pointer-events-none" style={{
          background: 'linear-gradient(to top, rgba(255, 200, 220, 0.3) 0%, rgba(255, 200, 220, 0.1) 60%, transparent 100%)'
        }}></div>

        <Sparkles className="w-6 h-6 mr-3 fill-primary relative z-10" />
        <span className="relative z-10">{t.cta.button}</span>
      </a>
    </div>
    </>
  );
};

export default Hero;