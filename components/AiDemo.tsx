import React, { useState, useRef } from 'react';
import { generateMakeupAdvice } from '../services/geminiService';
import { Sparkles, Loader2, Upload, Image as ImageIcon } from 'lucide-react';

const AiDemo: React.FC = () => {
  const [mood, setMood] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!mood) return;
    
    setLoading(true);
    setResult(null);

    const advice = await generateMakeupAdvice(mood, imageBase64 || undefined);
    
    setResult(advice);
    setLoading(false);
  };

  return (
    <section id="demo" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
           <span className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
             Beta Version
           </span>
           <h3 className="text-3xl font-bold text-latte-800 mb-4">
             AIアドバイザーを試してみる
           </h3>
           <p className="text-latte-500">
             今の気分や、手持ちコスメの写真をアップして、<br className="hidden md:inline" />
             あなただけのメイクプランを受け取ってください。
           </p>
        </div>

        <div className="bg-brand-50 rounded-3xl p-6 md:p-10 shadow-inner">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-latte-800 mb-2">
                1. 手持ちコスメの写真 (任意)
              </label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-brand-200 rounded-xl p-6 flex flex-col items-center justify-center bg-white cursor-pointer hover:border-brand-400 transition-colors"
              >
                {imageBase64 ? (
                  <div className="relative w-full h-48">
                    <img src={imageBase64} alt="Uploaded cosmetics" className="w-full h-full object-contain rounded-lg" />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">変更する</div>
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-brand-300 mb-2" />
                    <p className="text-sm text-latte-500">タップして写真をアップロード</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-latte-800 mb-2">
                2. 今日の気分・予定
              </label>
              <textarea 
                className="w-full p-4 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none h-32"
                placeholder="例：今日は友達とカフェに行くので、ナチュラルだけど写真映えするメイクがしたい！オレンジ系の服を着ます。"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              ></textarea>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={loading || !mood}
              className="w-full py-4 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-300 text-white rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  AIが思考中...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 mr-2" />
                  メイクプランを作成
                </>
              )}
            </button>
          </div>

          {/* Result Display */}
          {result && (
            <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg border border-brand-100 animate-fade-in">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-600" />
                </div>
                <h4 className="font-bold text-xl text-latte-800">あなたへの提案</h4>
              </div>
              <div className="prose prose-brand max-w-none whitespace-pre-wrap text-latte-600 leading-relaxed">
                {result}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-50 text-center">
                <p className="text-xs text-gray-400">※ AIによる提案です。肌に合わない場合は使用を中止してください。</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiDemo;
