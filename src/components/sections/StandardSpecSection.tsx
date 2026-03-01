"use client";
import { Blocks, ShieldCheck, UtensilsCrossed, Bath, Flame, DoorOpen, Thermometer, FileCheck, BadgeCheck } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const SPECS = [
  {
    icon: Blocks,
    brand: "旭化成ヘーベル ALC 37mm厚",
    title: "旭化成パワーボード外壁",
    description: "大手が採用する軽量気泡コンクリート。\n防火・断熱・遮音・耐久の4性能が標準で付く。",
  },
  {
    icon: ShieldCheck,
    brand: "住友ゴム MIRAIE",
    title: "耐震等級3 + 制震ダンパー",
    description: "地震の揺れを最大70%吸収。\n繰り返しの揺れにも、性能が落ちない。",
  },
  {
    icon: UtensilsCrossed,
    brand: "クリナップ（奈良県内最高グレード採用）",
    title: "クリナップ システムキッチン",
    description: "食洗乾燥機ビルトイン、カップボード標準。\n他社では追加50〜80万円のオプション。ここでは全部込み。",
  },
  {
    icon: Bath,
    brand: "TOTO",
    title: "TOTO サザナ 1.25坪",
    description: "「ほっカラリ床」と断熱浴槽「魔法びん浴槽」標準。\n浴室テレビも標準装備。他社ではオプション扱い。",
  },
  {
    icon: Flame,
    brand: "大阪ガス",
    title: "ガス温水床暖房 ヌック",
    description: "床下からの輻射熱で部屋全体を暖める。\nエアコンとは違う自然な暖かさ。\n冬場の奈良でも足元から快適。",
  },
  {
    icon: DoorOpen,
    brand: "LIXIL",
    title: "ハイドア + 高断熱玄関",
    description: "天井高2.4mのハイドアで開放感。\n玄関はLIXIL高断熱スマートキー対応ドア。\nリモコンキー・タッチキーで手がふさがっていても楽。",
  },
  {
    icon: Thermometer,
    brand: "現場施工",
    title: "現場吹付ウレタン断熱",
    description: "現場で直接吹き付ける。隙間ゼロ。\n光熱費が月5,000〜8,000円変わる家もある。",
  },
  {
    icon: FileCheck,
    brand: "全部コミコミ",
    title: "地盤改良費 全部込み",
    description: "地盤調査の結果、改良が必要になっても会社が全額負担。\n他社では50万〜100万の追加費用が発生するケースも。\nここでは見積もり後に「実は別途」はありません。",
  },
  {
    icon: BadgeCheck,
    brand: "ハウスジーメン / 建築テクノ",
    title: "第三者機関が、品質を証明する。",
    description: "地盤保証20年（ハウスジーメン）。しろあり保証10年（建築テクノ）。\n自社ではなく、第三者が検査しています。",
  },
] as const;

export function StandardSpecSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#1C1C1C" }}
      aria-labelledby="standard-spec-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="text-center mb-16 md:mb-24">
            <p
              className="text-text-light uppercase mb-2"
              style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em" }}
            >
              Standard
            </p>
            <h2
              id="standard-spec-heading"
              className="font-serif text-[#FAFAF7] mb-6"
              style={{
                fontSize: "clamp(22px, 3.2vw, 42px)",
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontWeight: 400,
                letterSpacing: "0.05em",
                lineHeight: 1.4,
                whiteSpace: "nowrap",
              }}
            >
              大手と同じ素材が、ここでは全部標準です。
            </h2>
            <p
              className="max-w-[560px] mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.9 }}
            >
              他社でオプション扱いの設備が、追加費用ゼロで最初から付いてきます。
            </p>
          </div>
        </FadeUp>

        {/* 4×2 グリッド（デスクトップ）/ 2×4（タブレット）/ 1カラム（モバイル）*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECS.map((spec, i) => (
            <FadeUp key={spec.title} delay={i * 0.06}>
              <div
                className="flex flex-col gap-4 p-7 rounded-xl h-full"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(123,101,68,0.15)" }}
                >
                  <spec.icon size={24} style={{ color: "#7B6544" }} />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  {/* ブランド名 — accent色、小さく */}
                  <p
                    className="font-medium"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "12px", color: "#C4851F", letterSpacing: "0.05em" }}
                  >
                    {spec.brand}
                  </p>
                  <h3
                    className="font-medium leading-snug"
                    style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)", fontSize: "15px" }}
                  >
                    {spec.title}
                  </h3>
                  <p
                    className="leading-relaxed whitespace-pre-line"
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.8 }}
                  >
                    {spec.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
