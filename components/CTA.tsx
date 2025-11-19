import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface CtaProps {
  onClick: () => void;
}

const CTA: React.FC<CtaProps> = ({ onClick }) => {
  return (
    <section className="py-32 md:py-48 bg-primary text-white text-center font-black relative overflow-hidden">
      {/* Custom styles for the heart animation */}
      <style>{`
        @keyframes heart-burst-1 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(-150%, -150%) scale(1.5) rotate(-15deg); opacity: 0; }
        }
        @keyframes heart-burst-2 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(50%, -180%) scale(1.2) rotate(15deg); opacity: 0; }
        }
        @keyframes heart-burst-3 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(-120%, -100%) scale(1.0) rotate(-30deg); opacity: 0; }
        }
        @keyframes heart-burst-4 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(120%, -120%) scale(1.4) rotate(10deg); opacity: 0; }
        }
        @keyframes heart-burst-5 {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(0%, -200%) scale(1.3); opacity: 0; }
        }

        .animate-heart-1 { animation: heart-burst-1 1.5s ease-out infinite; }
        .animate-heart-2 { animation: heart-burst-2 1.8s ease-out infinite 0.2s; }
        .animate-heart-3 { animation: heart-burst-3 1.6s ease-out infinite 0.4s; }
        .animate-heart-4 { animation: heart-burst-4 1.7s ease-out infinite 0.1s; }
        .animate-heart-5 { animation: heart-burst-5 2.0s ease-out infinite 0.3s; }
      `}</style>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Adjusted font size for mobile to prevent overflow */}
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-12 leading-none tracking-tight">
          あなたのポーチに、<br />
          革命を。
        </h2>
        
        {/* Added break for mobile to control line length */}
        <p className="text-lg sm:text-xl md:text-3xl font-black mb-10 md:mb-16 text-white/90 leading-relaxed">
          買い足さずに、新しい自分へ。<br className="block md:hidden" />
          30秒で始められます。
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <button 
            onClick={onClick}
            className="group relative min-w-[240px] md:min-w-[300px] py-4 px-8 md:py-6 md:px-12 bg-white text-primary rounded-full font-black text-2xl md:text-4xl shadow-2xl hover:shadow-white/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center overflow-visible cursor-pointer"
          >
            {/* Hearts Container - Triggers on hover, active (click/touch), and focus */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
               <Heart className="absolute w-8 h-8 text-white/80 fill-white/60 opacity-0 group-hover:animate-heart-1 group-active:animate-heart-1 group-focus:animate-heart-1" />
               <Heart className="absolute w-6 h-6 text-white/90 fill-white/80 opacity-0 group-hover:animate-heart-2 group-active:animate-heart-2 group-focus:animate-heart-2" />
               <Heart className="absolute w-10 h-10 text-white/70 fill-white/40 opacity-0 group-hover:animate-heart-3 group-active:animate-heart-3 group-focus:animate-heart-3" />
               <Heart className="absolute w-5 h-5 text-white fill-white opacity-0 group-hover:animate-heart-4 group-active:animate-heart-4 group-focus:animate-heart-4" />
               <Heart className="absolute w-7 h-7 text-white/80 fill-white/50 opacity-0 group-hover:animate-heart-5 group-active:animate-heart-5 group-focus:animate-heart-5" />
            </div>

            <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-4 fill-primary transition-colors relative z-10" />
            <span className="relative z-10">はじめる</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;