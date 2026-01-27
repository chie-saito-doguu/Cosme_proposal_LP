import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Benefits: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollLeft =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 300);
    }
  };

  const benefits = [
    {
      title: t.benefits.item1_title,
      desc: t.benefits.item1_desc,
    },
    {
      title: t.benefits.item2_title,
      desc: t.benefits.item2_desc,
    },
    {
      title: t.benefits.item3_title,
      desc: t.benefits.item3_desc,
    },
    {
      title: t.benefits.item4_title,
      desc: t.benefits.item4_desc,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-bold tracking-wider mb-4">
            {t.benefits.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            {t.benefits.title}
          </h2>
        </div>

        {/* デスクトップ版: 横並び */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-[85rem] mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary/90 rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-snug min-h-[3.5rem] md:min-h-[4rem]">
                {benefit.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < benefit.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-white/90 font-bold text-base md:text-lg leading-relaxed mt-auto">
                {benefit.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < benefit.desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* スマホ版: 横スライド */}
        <div className="md:hidden relative">
          {/* スクロールコンテナ */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScroll}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] bg-primary/90 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex-1 flex flex-col justify-center min-h-[3.5rem]">
                  <h3 className="text-xl font-black text-white leading-snug">
                    {benefit.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < benefit.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
                <p className="text-white/90 font-bold text-base leading-relaxed mt-auto">
                  {benefit.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < benefit.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* スクロールボタン */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 z-10"
              aria-label="前へ"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 z-10"
              aria-label="次へ"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
