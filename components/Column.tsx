import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { ChevronDown } from 'lucide-react';
import { getOptimizedImage } from '../utils/imageUtils';

// 画像切り替えカスタムフック
const useImageSlideshow = (imageCount: number, interval: number = 4000) => {
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

const Column: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const columnImages = [getOptimizedImage('/column1.jpg'), getOptimizedImage('/column2.jpg')];
  const currentIndex = useImageSlideshow(isOpen ? columnImages.length : 0, 4000);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル - クリックで開閉 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-center mb-3 md:mb-12 group cursor-pointer"
          >
            <span className="inline-block text-primary font-black tracking-widest uppercase text-[10px] md:text-xs mb-2 md:mb-3">
              COLUMN
            </span>
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-xl md:text-4xl font-black text-text-main">
                {t.column.title}
              </h2>
              <ChevronDown
                className={`w-6 h-6 md:w-8 md:h-8 text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {/* アコーディオンコンテンツ */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {/* メインコンテンツ：左画像・右テキスト */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-12 items-start pt-4">

              {/* 左側：画像スライドショー */}
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="relative w-full max-w-[240px] md:max-w-[320px] min-w-[200px] md:min-w-[240px] mx-auto md:mx-0">
                  {/* 画像コンテナ：3:4比率 */}
                  <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                    {columnImages.map((src, index) => (
                      <img
                        key={src}
                        src={src}
                        alt={`コラム画像 ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                  {/* インジケーター */}
                  {isOpen && (
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                      {columnImages.map((_, index) => (
                        <span
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 右側：テキストエリア */}
              <div className="w-full max-w-[305px] md:max-w-[500px] mx-auto md:mx-0">
                <div className="text-gray-700 text-xs md:text-sm leading-snug space-y-4 md:space-y-5">
                  {/* 挨拶文 */}
                  <div className="whitespace-pre-line">
                    {t.column.greeting}
                  </div>

                  {/* Before/Afterの話 */}
                  <div className="whitespace-pre-line">
                    {t.column.story1}
                  </div>

                  {/* アイシャドウの話 */}
                  <div className="whitespace-pre-line">
                    {t.column.story2}
                  </div>

                  {/* 開発者の動機 */}
                  <div className="whitespace-pre-line">
                    {t.column.motivation}
                  </div>

                  {/* メリットリスト */}
                  <div className="bg-gray-50 rounded-xl p-5 mt-4">
                    <p className="mb-3">{t.column.benefitsIntro}</p>
                    <ul className="space-y-2">
                      {t.column.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-primary text-sm">✦</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 締めくくり */}
                  <div className="text-center pt-2">
                    {t.column.closing}
                  </div>

                  {/* 開発者名 */}
                  <div className="pt-4 border-t border-gray-200 text-center">
                    <span className="text-primary font-black text-xs">
                      {t.column.developer}
                    </span>
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

export default Column;
