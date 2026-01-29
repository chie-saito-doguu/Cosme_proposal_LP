import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
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

        {/* Instagramセクション（スマホ版のみ） */}
        <div className="mt-12 md:mt-16 md:hidden">
          {/* 吹き出しデザイン */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-black text-sm md:text-base shadow-lg inline-flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span>{t.footer.instagram_title}</span>
              </div>
              {/* 吹き出しの三角形 */}
              <div className="absolute left-20 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-500"></div>
            </div>
          </div>

          {/* Instagram投稿カード */}
          <div className="flex justify-center max-w-4xl mx-auto">
            {/* 投稿1 */}
            <a
              href="https://www.instagram.com/p/DTqS1W7EmZy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-32 h-44 md:w-40 md:h-56 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white"
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

            {/* 投稿2 */}
            <a
              href="https://www.instagram.com/p/DTuDHmtEiIg/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-32 h-44 md:w-40 md:h-56 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
