import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-black">
      {/* Decorative Background Text - Moved up to avoid overlap */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none opacity-[0.03]">
        <span className="text-[25vw] font-black leading-none text-black select-none translate-y-[-30%]">
          PROBLEM
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Reduced bottom margin to bring items closer */}
        <div className="max-w-5xl mx-auto mb-8 mt-8">
          <h2 className="text-primary font-black text-2xl tracking-widest mb-4 uppercase">
            PROBLEM
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-black leading-tight tracking-tight">
            こんな悩み、<br />ありませんか？
          </h3>
        </div>

        {/* Grid Layout - Centered and Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              01
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              新しいメイクしたいけど<br />
              組み合わせ方が<br />
              分からない
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              02
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              買ったけど<br />
              眠っているコスメが<br />
              けっこうある
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center group">
            <div className="text-7xl md:text-8xl font-black text-gray-100 group-hover:text-primary/20 transition-colors duration-300 leading-none mb-6">
              03
            </div>
            <p className="text-2xl md:text-3xl font-black text-black leading-snug">
              自分で考えるのが<br />
              面倒で、<br />
              いつも同じ顔
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;