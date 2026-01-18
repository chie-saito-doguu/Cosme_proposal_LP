import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { getOptimizedImage } from '../utils/imageUtils';

// 画像切り替えカスタムフック
const useImageSlideshow = (imageCount: number, interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount);
    }, interval);

    return () => clearInterval(timer);
  }, [imageCount, interval]);

  return currentIndex;
};

// 画像スライドショーコンポーネント
const ImageSlideshow: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const currentIndex = useImageSlideshow(images.length, 3000);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* 画像コンテナ */}
      <div className="relative w-full aspect-[9/13] bg-gray-100 rounded-[2rem] border-8 border-gray-50 shadow-inner overflow-hidden">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {/* インジケーター */}
      {images.length > 1 && (
        <div className="absolute -bottom-6 right-0 flex gap-1">
          {images.map((_, index) => (
            <span
              key={index}
              className={`text-xs font-black transition-colors ${
                index === currentIndex ? 'text-gray-400' : 'text-gray-200'
              }`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const HowTo: React.FC = () => {
  const { t, language } = useLanguage();

  // 言語コードを画像プレフィックスに変換 (ja→jp, id→id, en→en)
  const getImagePrefix = () => {
    const prefixMap: Record<string, string> = {
      ja: 'jp',
      id: 'id',
      en: 'en'
    };
    return prefixMap[language] || 'jp';
  };

  // 各ステップの画像リストを生成
  const prefix = getImagePrefix();
  const step1Images = [`${prefix}1-1.png`, `${prefix}1-2.png`].map((img) => getOptimizedImage(`/${img}`));
  const step2Images = [`${prefix}2-1.png`].map((img) => getOptimizedImage(`/${img}`));
  const step3Images = [`${prefix}3-1.png`, `${prefix}3-2.png`, `${prefix}3-3.png`, `${prefix}3-4.png`].map((img) => getOptimizedImage(`/${img}`));

  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100 font-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-primary font-black tracking-widest uppercase text-2xl mb-4">
            {t.howto.label}
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-black">
            {t.howto.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Step 1 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="absolute -right-4 -top-4 w-40 h-40 bg-primary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 text-center md:text-left mb-2">
              <span className="block text-8xl font-black text-primary mb-6 leading-none">01</span>
              <h4 className="text-3xl md:text-4xl font-black text-black mb-6">{t.howto.step1_title}</h4>
              <p className="text-gray-600 font-black text-lg md:text-xl leading-relaxed">
                {t.howto.step1_desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t.howto.step1_desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
            {/* Mobile Screen with Slideshow */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto">
              <ImageSlideshow images={step1Images} alt="コスメ登録画面" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="absolute -right-4 -top-4 w-40 h-40 bg-primary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 text-center md:text-left mb-2">
              <span className="block text-8xl font-black text-primary mb-6 leading-none">02</span>
              <h4 className="text-3xl md:text-4xl font-black text-black mb-6">{t.howto.step2_title}</h4>
              <p className="text-gray-600 font-black text-lg md:text-xl leading-relaxed">
                {t.howto.step2_desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t.howto.step2_desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
            {/* Mobile Screen with Slideshow */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto">
              <ImageSlideshow images={step2Images} alt="気分入力画面" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="absolute -right-4 -top-4 w-40 h-40 bg-primary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 text-center md:text-left mb-2">
              <span className="block text-8xl font-black text-primary mb-6 leading-none">03</span>
              <h4 className="text-3xl md:text-4xl font-black text-black mb-6">{t.howto.step3_title}</h4>
              <p className="text-gray-600 font-black text-lg md:text-xl leading-relaxed">
                {t.howto.step3_desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t.howto.step3_desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
              <p className="text-gray-400 text-xs font-black mt-2">
                {t.howto.step3_note}
              </p>
            </div>
            {/* Mobile Screen with Slideshow */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto">
              <ImageSlideshow images={step3Images} alt="メイク提案画面" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowTo;
