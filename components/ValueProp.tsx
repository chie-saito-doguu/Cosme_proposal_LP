import React from 'react';
import { Zap, Layers, Sparkles, Check, Search, Clock } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "毎日可愛いを更新",
    desc: "手持ちアイテムだけで、新鮮なメイクを。"
  },
  {
    icon: <Layers className="w-8 h-8 text-white" />,
    title: "直感的に選べる",
    desc: "「こうなりたい」を画像で選ぶだけ。"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "今日の最適解",
    desc: "気分や服に合わせてAIが提案。"
  },
  {
    icon: <Check className="w-8 h-8 text-white" />,
    title: "失敗しない",
    desc: "自分の色味だから、肌に馴染む。"
  },
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: "価値を再発見",
    desc: "眠っていたコスメが、宝物に。"
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "考えなくていい",
    desc: "やり方まで全部教えてくれる。"
  }
];

const ValueProp: React.FC = () => {
  return (
    <section className="py-32 bg-accent text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/20 pb-8">
          <div>
            <h2 className="text-white/60 font-bold tracking-widest uppercase text-sm mb-2">
              OUR VALUE
            </h2>
            <h3 className="text-4xl md:text-6xl font-black leading-none">
              このアプリで<br/>できること
            </h3>
          </div>
          <p className="text-lg md:text-xl font-bold mt-6 md:mt-0 max-w-md text-white/90">
            あなたのポーチが、<br/>専属メイクアップアーティストに。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-black mb-3">{feature.title}</h4>
              <p className="text-white/70 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;