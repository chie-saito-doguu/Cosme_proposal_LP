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
      <div className="relative w-full aspect-[9/13] bg-gray-100 rounded-xl overflow-hidden">
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
        {/* 画像番号表示（複数枚の場合のみ） */}
        {images.length > 1 && (
          <div className="absolute bottom-1.5 right-1.5 bg-black/40 text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
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

  const prefix = getImagePrefix();

  // Step 1の画像: コスメ登録（all1-1.pngは言語共通）
  const step1Images = [getOptimizedImage('/all1-1.png')];

  // Step 2の画像: 気分入力→提案（2-1, 3-1, 3-4）
  const step2Images = [
    getOptimizedImage(`/${prefix}2-1.png`),
    getOptimizedImage(`/${prefix}3-1.png`),
    getOptimizedImage(`/${prefix}3-4.png`),
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-sm md:text-base font-bold text-primary tracking-widest">
            {t.howto.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            {t.howto.title}
          </h2>
        </div>

        {/* ステップ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto items-center">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[90%] mx-auto">
            <div className="p-5 md:p-8">
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-xl md:text-2xl">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-bold text-sm md:text-xl leading-relaxed">
                    {t.howto.desc1.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < t.howto.desc1.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 md:px-6 md:pb-8 flex justify-center">
              <div className="relative w-[80%] md:w-[85%]">
                <ImageSlideshow images={step1Images} alt="ステップ1" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-[90%] mx-auto">
            <div className="p-5 md:p-8">
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-xl md:text-2xl">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-bold text-sm md:text-xl leading-relaxed">
                    {t.howto.desc2.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < t.howto.desc2.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 md:px-6 md:pb-8 flex justify-center">
              <div className="relative w-[80%] md:w-[85%]">
                <ImageSlideshow images={step2Images} alt="ステップ2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
