import React from 'react';

const examples = [
  {
    title: "カフェラテ風メイク",
    desc: "眠っていたブラウンリップが大活躍！",
    tag: "AI提案",
    img: "https://picsum.photos/id/338/300/400",
    match: "低いけど可愛い！"
  },
  {
    title: "透明感ブルー",
    desc: "使いにくかった青ラメが主役に。",
    tag: "マッチ度98%",
    img: "https://picsum.photos/id/325/300/400",
    match: "定番化決定"
  },
  {
    title: "ハンサム眉",
    desc: "いつものパウダーで印象激変。",
    tag: "仕事モード",
    img: "https://picsum.photos/id/331/300/400",
    match: "信頼感UP"
  }
];

const Examples: React.FC = () => {
  return (
    <section className="py-20 bg-latte-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-2">REAL VOICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-latte-800">AI提案 × 実際にやってみた</h3>
          <p className="text-latte-500 mt-4">意外な組み合わせが、新しい自分に出会う鍵。</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {examples.map((ex, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl w-full md:w-80 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={ex.img} alt={ex.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                  {ex.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-latte-800">{ex.title}</h4>
                  <span className="text-xs font-bold bg-brand-100 text-brand-700 px-2 py-1 rounded">{ex.match}</span>
                </div>
                <p className="text-latte-500 text-sm">
                  {ex.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
