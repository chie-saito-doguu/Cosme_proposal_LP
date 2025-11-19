import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// The API key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a makeup suggestion based on user mood and optional cosmetic image.
 * Uses gemini-2.5-flash for speed and multimodal capabilities.
 */
export const generateMakeupAdvice = async (
  mood: string,
  imageBase64?: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      あなたはプロのメイクアップアーティストです。
      ユーザーの「今日の気分」や「着ていく服」の情報に基づいて、
      手持ちのコスメ（画像がある場合）を使った最適なメイクプランを提案してください。

      ユーザーの入力: ${mood}

      提案のフォーマット:
      1. テーマタイトル (短くキャッチーに)
      2. メイクのポイント (なぜこのメイクなのか)
      3. 簡単な手順 (3ステップ)

      トーン＆マナー:
      親しみやすく、「可愛い」「おしゃれ」な雰囲気で。
      絵文字を適度に使ってください。
      手持ちコスメを褒めて、肯定感を上げてください。
    `;

    const parts: any[] = [{ text: prompt }];

    if (imageBase64) {
      // Extract base64 data if it includes the prefix (e.g. data:image/jpeg;base64,...)
      const base64Data = imageBase64.split(',')[1] || imageBase64;
      
      parts.unshift({
        inlineData: {
          mimeType: 'image/jpeg', // Assuming JPEG for simplicity from input
          data: base64Data
        }
      });
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents: { parts },
      config: {
        temperature: 0.7, // Balanced creativity
      }
    });

    return response.text || "申し訳ありません。提案を生成できませんでした。もう一度お試しください。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "エラーが発生しました。しばらく待ってから再試行してください。";
  }
};
