"use client";
import { Building2, TrendingDown, X } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function SmartChoiceSection() {
  return (
    <section
      className="py-24 md:py-40 overflow-hidden"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="smart-choice-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">

          {/* Left: 5col */}
          <div className="lg:col-span-5">
            <FadeUp>
              <p
                className="text-text-light uppercase mb-2"
                style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em" }}
              >
                Smart Choice
              </p>
              <h2
                id="smart-choice-heading"
                className="font-serif text-text mb-8"
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                「賢い選択」の正体。
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div
                className="space-y-5 text-text"
                style={{ fontSize: "15px", lineHeight: 1.9, letterSpacing: "0.02em", maxWidth: "480px" }}
              >
                {/* 冒頭2行 — font-weight:500 */}
                <p className="font-medium text-text">
                  大手ハウスメーカーの住宅価格には、
                  <br />
                  建物以外のコストが大量に含まれています。
                </p>

                {/* リスト4行 — Xアイコン付き */}
                <ul className="space-y-2">
                  {[
                    "全国100箇所の展示場維持費。",
                    "ゴールデンタイムのテレビCM。",
                    "3次・4次の下請け構造。",
                    "住宅相談窓口への紹介料。",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-light">
                      <X size={16} className="mt-1 shrink-0" style={{ color: "#777777" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* キーメッセージ1 */}
                <p className="font-medium" style={{ color: "var(--accent)" }}>
                  これが全部、あなたの建物価格に上乗せされています。
                </p>

                <p className="text-text-light">
                  やまと不動産は、そのどれも持っていません。
                  <br />
                  だから同じものを、適正な価格で手に入れられます。
                </p>

                {/* 核心メッセージ */}
                <p className="font-medium" style={{ color: "var(--green)" }}>
                  見積もりの後で、金額が変わることもありません。
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: 7col — 2枚のポイントカード */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card ① — アクセントグロー */}
            <FadeUp delay={0.1}>
              <div
                className="flex gap-6 p-8 bg-white rounded-xl micro-border-top"
                style={{ boxShadow: "var(--shadow-card-lg), var(--shadow-accent)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(196,146,26,0.1)" }}
                >
                  <Building2 size={28} style={{ color: "var(--accent)" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-text-light uppercase"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em" }}
                  >
                    展示場にかかる年間コスト
                  </p>
                  <p
                    className="font-bold leading-none"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "clamp(1.75rem,3vw,2rem)", color: "var(--accent)", letterSpacing: "-0.02em" }}
                  >
                    年間 数百億円規模<span className="text-base font-medium">/大手1社あたり</span>
                  </p>
                  <p className="text-text-light leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
                    大手1社の展示場維持費は年間数百億円規模。
                    <br />
                    販売棟数で割ると、1棟ごとに数百〜数千万円が
                    建物以外のコストとして計上されています。
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Card ② — グリーングロー */}
            <FadeUp delay={0.2}>
              <div
                className="flex gap-6 p-8 bg-white rounded-xl micro-border-top"
                style={{ boxShadow: "var(--shadow-card-lg), var(--shadow-green)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(42,92,58,0.08)" }}
                >
                  <TrendingDown size={28} style={{ color: "var(--green)" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <p
                    className="text-text-light uppercase"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em" }}
                  >
                    中間マージンの実態
                  </p>
                  <p
                    className="font-bold leading-none"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "clamp(1.75rem,3vw,2rem)", color: "var(--green)", letterSpacing: "-0.02em" }}
                  >
                    価格の30〜40%
                  </p>
                  <p className="text-text-light leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
                    元請け→1次下請け→2次下請け…
                    <br />
                    工程ごとにマージンが抜かれ、実際の建物に使われるのは6割程度。
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
