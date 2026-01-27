import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { getOptimizedImage } from '../utils/imageUtils';

const Hero: React.FC = () => {
  const { t } = useLanguage();
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
    <section className="relative w-full pt-4 pb-12 md:pt-6 md:pb-16 bg-primary text-white overflow-hidden font-black">

      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">

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
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Shadow/Glow behind image */}
          <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-10 rounded-full"></div>

          <div className="bg-white rounded-[2.5rem] p-2 md:p-3 shadow-2xl rotate-1 md:rotate-0 transition-transform hover:rotate-0">
            <div className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              {/* Image (fade slideshow) */}
              <div className="w-full md:w-1/2 aspect-square relative overflow-hidden">
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
                <div className="absolute top-4 left-4 bg-white text-primary px-4 py-2 rounded-full text-sm font-black shadow-sm">
                  {t.hero.match}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-left bg-white text-text-main">
                <div className="mb-2 md:mb-4">
                  {/* 上の赤いライン */}
                  <span className="inline-block w-10 h-2 bg-primary rounded-full mb-3 md:mb-6"></span>

                  {/* タイトル（スマホだけ少し小さく） */}
                  <h3 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black leading-snug md:leading-tight mb-3 md:mb-4 text-primary">
                    {t.hero.subtitle.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < t.hero.subtitle.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                </div>
                <div className="space-y-4 mb-8">
                  <p className="text-text-main font-black text-base md:text-2xl leading-relaxed">
                    {t.hero.description.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < t.hero.description.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="-mt-2 p-3 md:p-4 bg-bg-soft rounded-xl border border-primary-light/20 flex items-center gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    {(t.hero.advisor_label || true) && (
                      <p className="text-xs md:text-sm text-primary font-black mb-0.5 hidden md:block">AI ADVISOR</p>
                    )}
                    <p className="text-base md:text-lg font-black text-text-main">
                      {t.hero.advisor_text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < t.hero.advisor_text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;