import React from 'react';
import { useLanguage } from '../LanguageContext';

const HowTo: React.FC = () => {
  const { t } = useLanguage();

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
            <div className="relative z-10 text-center md:text-left mb-8">
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
            {/* Mobile Screen Placeholder - Shortened height (approx 2/3) */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto aspect-[9/13] bg-gray-100 rounded-[2rem] border-8 border-gray-50 shadow-inner overflow-hidden">
              <img
                src="/step1.png"
                alt="コスメ登録画面"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="absolute -right-4 -top-4 w-40 h-40 bg-primary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 text-center md:text-left mb-8">
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
            {/* Mobile Screen Placeholder - Shortened height (approx 2/3) */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto aspect-[9/13] bg-gray-100 rounded-[2rem] border-8 border-gray-50 shadow-inner overflow-hidden">
              <img
                src="/step2.png"
                alt="気分入力画面"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="absolute -right-4 -top-4 w-40 h-40 bg-primary rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative z-10 text-center md:text-left mb-8">
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
            </div>
            {/* Mobile Screen Placeholder - Shortened height (approx 2/3) */}
            <div className="mt-auto relative w-full max-w-[320px] md:max-w-[360px] mx-auto aspect-[9/13] bg-gray-100 rounded-[2rem] border-8 border-gray-50 shadow-inner overflow-hidden">
              <img
                src="/step3.png"
                alt="メイク提案画面"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowTo;