import React from 'react';
import { useLanguage } from '../LanguageContext';

const Problem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-12 md:py-24 bg-white relative overflow-hidden font-black">
      {/* Decorative Background Text - Moved up to avoid overlap */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[25vw] font-black leading-none text-black select-none translate-y-[-30%]">
          {t.problem.label}
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Reduced bottom margin to bring items closer */}
        <div className="max-w-5xl mx-auto mb-8 mt-8">
          <h2 className="text-primary font-black text-2xl tracking-widest mb-4 uppercase">
            {t.problem.label}
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-black leading-tight tracking-tight">
            {t.problem.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.problem.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>

        {/* Grid Layout - スマホ版は縦並び、デスクトップ版は横並び */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

          {/* Item 1 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              01
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              {t.problem.item1.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.problem.item1.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              02
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              {t.problem.item2.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.problem.item2.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              03
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              {t.problem.item3.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.problem.item3.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;