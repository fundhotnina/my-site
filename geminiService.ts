
import { GoogleGenAI } from "@google/genai";

export const getDesignCritique = async (patternName: string, concept: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `
    あなたは世界トップクラスのウェブデザイン批評家、かつ未来予測家です。
    2025年以降のデザイントレンド（モノクローム・ミニマリズム、キネティック・タイポグラフィ、物理ベースのインタラクションなど）の観点から、
    以下のコンセプトを分析してください。
    
    なぜこのデザインが、ユーザーに「時代を超越した洗練」と「直感的な使いやすさ」を同時に感じさせるのか、
    心理学的・構成学的・感性的な視点から250文字程度で鋭く論理的に述べてください。
    
    コンセプト名: ${patternName}
    概要: ${concept}
    
    出力は日本語で、プロフェッショナルかつ、読み手に新たなインスピレーションを与える、格調高いトーンにしてください。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "分析の取得に失敗しましたが、この構成は完璧な均衡と未来への展望を内包しています。";
  }
};
