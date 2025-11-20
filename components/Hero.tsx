import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full pt-12 pb-20 md:pt-24 md:pb-32 bg-primary text-white overflow-hidden font-black">
      
      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        
        {/* Badge */}
        <div className="mb-8 inline-block">
          <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 text-white font-black text-sm md:text-xl tracking-widest">
            AI MAKEUP ADVISOR
          </span>
        </div>
        
        {/* Main Heading - Adjusted font size for mobile to keep it in 3 lines */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-snug md:leading-relaxed tracking-tight mb-8 md:mb-8 drop-shadow-sm">
          買い足さなくていい。<br />
          「あなたの可愛い」は、<br />
          自分でアップデートできる。
        </h1>
        
        {/* Visual Content */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Shadow/Glow behind image */}
          <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-10 rounded-full"></div>
          
          <div className="bg-white rounded-[2.5rem] p-3 md:p-4 shadow-2xl rotate-1 md:rotate-0 transition-transform hover:rotate-0">
              <div className="bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-square relative">
                  <img 
                    src="/hero-image.png" 
                    alt="Makeup Model" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white text-primary px-4 py-2 rounded-full text-sm font-black shadow-sm">
                    MATCH 98%
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left bg-white text-text-main">
                <div className="mb-2 md:mb-4">
                  {/* 上の赤いライン */}
                  <span className="inline-block w-10 h-2 bg-primary rounded-full mb-3 md:mb-6"></span>

                  {/* タイトル（スマホだけ少し小さく） */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-snug md:leading-tight mb-3 md:mb-4 text-primary">
                      あなたのコスメで
                      <span className="block md:inline"></span>
                      <br className="hidden md:block" />
                      毎日メイクを提案
                    </h3>

                </div>
                   <div className="space-y-4 mb-8">
                     <p className="text-text-main font-black text-base md:text-xl leading-relaxed">
                       気分や着る服に合わせてくれる<br/>あなただけのメイクアドバイザー<br/>毎日のメイク時間が楽しくなる。
                     </p>
                   </div>
                   
                   <div className="mt-auto p-4 bg-bg-soft rounded-xl border border-primary-light/20 flex items-center gap-3">
                     <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                       <Sparkles className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="text-xs text-primary font-black mb-0.5">AI ADVISOR</p>
                       <p className="text-base font-black text-text-main">トレンドメイクを<br/>ご紹介します！</p>
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