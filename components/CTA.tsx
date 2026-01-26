import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 md:py-48 bg-primary text-white text-center font-black relative overflow-hidden">

      {/* --- Hearts Animation CSS --- */}
      <style>{`
        @keyframes heart-pop-1 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.9; }
          100% { transform: scale(1.5) translate(-40px, -40px); opacity: 0; }
        }
        @keyframes heart-pop-2 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.8; }
          100% { transform: scale(1.3) translate(40px, -60px); opacity: 0; }
        }
        @keyframes heart-pop-3 {
          0% { transform: scale(0) translate(0,0); opacity: 0; }
          30% { opacity: 0.7; }
          100% { transform: scale(1.7) translate(-20px, -80px); opacity: 0; }
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-12 leading-none tracking-tight">
          {t.cta.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < t.cta.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>


        <div className="flex flex-col items-center justify-center">

          {/* --- URLに飛ぶボタン --- */}
          <a
            href="https://cosme-proposal.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // Meta Pixel Leadイベント
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
            }}
            className="group relative min-w-[240px] md:min-w-[300px] py-4 px-8 md:py-6 md:px-12 bg-white text-primary rounded-full font-black text-2xl md:text-4xl shadow-2xl hover:shadow-white/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center overflow-visible cursor-pointer"
          >
            {/* --- Hearts floating (ポワポワ白ハート) --- */}
            <div className="absolute inset-0 pointer-events-none">
              <Heart
                className="absolute left-1/2 top-1/2 w-10 h-10 text-white fill-white opacity-0 blur-[2px]
                group-hover:opacity-90 group-hover:animate-[heart-pop-1_1.2s_ease-out]"
              />
              <Heart
                className="absolute left-1/2 top-1/2 w-8 h-8 text-white fill-white opacity-0 blur-[1px]
                group-hover:opacity-80 group-hover:animate-[heart-pop-2_1.4s_ease-out]"
              />
              <Heart
                className="absolute left-1/2 top-1/2 w-14 h-14 text-white fill-white opacity-0 blur-[3px]
                group-hover:opacity-70 group-hover:animate-[heart-pop-3_1.6s_ease-out]"
              />
            </div>

            <Sparkles className="w-6 h-6 md:w-8 md:h-8 mr-3 fill-primary relative z-10" />
            <span className="relative z-10">{t.cta.button}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
