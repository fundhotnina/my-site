
import { DesignPatternType, PatternData } from './types';

export const PATTERNS: PatternData[] = [
  {
    id: DesignPatternType.MINIMALIST_EDITORIAL,
    name: "OBSCURA",
    tagline: "闇が光を定義する。エディトリアル・ノワール",
    concept: "2025年のミニマリズムは、単なる欠如ではなく『存在感の強調』です。高コントラストなモノクロームと巨大なタイポグラフィが、ブランドの圧倒的な自信を伝えます。",
    elements: [
      { title: "ダーク・シネマティック", description: "深い黒 (#000) を基調とし、一筋の光（コンテンツ）を際立たせる構成。", impact: "神秘性・最高級" },
      { title: "オーバーサイズ・タイポ", description: "画面を横断する巨大な文字が、装飾としての役割を果たす。", impact: "インパクト・権威" },
      { title: "フェード・エントランス", description: "すべての要素が煙のように現れ、静かに消えていくモーション。", impact: "エレガンス・余裕" }
    ],
    colors: ["#000000", "#FFFFFF", "#111111"],
    fonts: ["Playfair Display", "Space Grotesk"]
  },
  {
    id: DesignPatternType.SOFT_ORGANIC,
    name: "AXIS",
    tagline: "秩序が美に変わる。ブルータリスト・ロジック",
    concept: "1pxの極細線と厳格なグリッドシステム。装飾を排除し、情報の構造そのものをデザインとして美しく見せる、理系的アプローチの極致です。",
    elements: [
      { title: "テクニカル・ボーダー", description: "すべてのセクションを繊細な線で区切り、建築図面のような精密さを演出。", impact: "信頼性・正確" },
      { title: "モノ・スペースの知性", description: "等幅フォントをアクセントに使い、プログラミング的な美しさを付与。", impact: "モダン・技術" },
      { title: "インダストリアル・グレー", description: "白と黒の間に、冷徹なグレーのグラデーションを配置。", impact: "洗練・機能美" }
    ],
    colors: ["#FFFFFF", "#000000", "#E2E8F0"],
    fonts: ["Space Grotesk", "monospace"]
  },
  {
    id: DesignPatternType.STRUCTURED_SWISS,
    name: "VELOCITY",
    tagline: "静止画を否定する。キネティック・フルイド",
    concept: "スクロールと連動して形を変えるレイアウト。2025年のウェブは、ページを『読む』ものではなく『体験する』ものへと進化します。",
    elements: [
      { title: "リキッド・スクロール", description: "慣性を感じさせる滑らかなスクロールと、要素の遅延移動（Parallax）。", impact: "没入感・革新" },
      { title: "ダイナミック・マスク", description: "画像が図形に合わせて切り抜かれ、動きながら現れる視覚効果。", impact: "驚き・クリエイティブ" },
      { title: "インタラクティブ・グレイン", description: "マウスの動きに合わせてノイズの密度が変化する微細な反応。", impact: "質感・ライブ感" }
    ],
    colors: ["#FFFFFF", "#000000", "#000000"],
    fonts: ["Space Grotesk", "Space Grotesk"]
  }
];
