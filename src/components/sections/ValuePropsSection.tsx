"use client";

import { ShieldCheck, Package, PencilRuler } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

// Bentoレイアウト: カード1が大（左・縦長）、カード2・3が右側に積む
// 各カードで情報密度・背景・強調色に差をつける
const PROPS = [
  {
    icon: ShieldCheck,
    number: "耐震等級3",
    label: "SEISMIC GRADE",
    copy: "住友ゴムMIRAIE標準搭載。大きな地震が来ても、2回目以降も性能が落ちない。",
    detail: "繰り返す地震に、性能が劣化しない制振構造。",
    bg: "var(--primary)",       // ダーク深緑
    textColor: "rgba(255,255,255,0.92)",
    subtextColor: "rgba(255,255,255,0.55)",
    numberColor: "#C4921A",
    iconBg: "rgba(196,146,26,0.15)",
    iconColor: "#C4921A",
    shadow: "0 8px 32px rgba(28,43,30,0.35)",
    tall: true,                 // 縦長カード
  },
  {
    icon: Package,
    number: "2,180万〜",
    label: "ALL-IN PRICE",
    copy: "土地・建物・諸費用、全部入り。追加費用はない。",
    detail: null,
    bg: "white",
    textColor: "var(--text)",
    subtextColor: "var(--text-light)",
    numberColor: "var(--accent)",
    iconBg: "rgba(196,146,26,0.10)",
    iconColor: "var(--accent)",
    shadow: "var(--shadow-card-lg), var(--shadow-accent)",
    tall: false,
  },
  {
    icon: PencilRuler,
    number: "約3ヶ月",
    label: "DESIGN PERIOD",
    copy: "専属設計士と、納得いくまで。全邸フルオーダー。",
    detail: null,
    bg: "white",
    textColor: "var(--text)",
    subtextColor: "var(--text-light)",
    numberColor: "var(--green)",
    iconBg: "rgba(42,92,58,0.08)",
    iconColor: "var(--green)",
    shadow: "var(--shadow-card-lg), var(--shadow-green)",
    tall: false,
  },
] as const;

export function ValuePropsSection() {
  return (
    <section
      className="py-16 md:py-24 noise-texture"
      style={{ background: "var(--wood-light)" }}
      aria-label="やまと不動産の3つの強み"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Bentoグリッド: PC=左1大 + 右2積み / SP=縦3枚 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

          {/* カード1 — ダーク・縦長（左列全体） */}
          <FadeUp delay={0}>
            <div
              className="relative flex flex-col justify-between gap-6 p-8 md:p-10 rounded-2xl micro-border-top overflow-hidden"
              style={{
                background: PROPS[0].bg,
                boxShadow: PROPS[0].shadow,
              }}
            >
              {/* 背景グロー */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(196,146,26,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div className="flex flex-col gap-5 relative z-10">
                {/* ラベル */}
                <p
                  style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    color: PROPS[0].subtextColor,
                    textTransform: "uppercase",
                  }}
                >
                  {PROPS[0].label}
                </p>

                {/* アイコン */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: PROPS[0].iconBg }}
                >
                  <ShieldCheck size={28} style={{ color: PROPS[0].iconColor }} />
                </div>

                {/* 数字 */}
                <p
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "clamp(2rem,3.5vw,2.75rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    color: PROPS[0].numberColor,
                    filter: "drop-shadow(0 0 12px rgba(196,146,26,0.5))",
                  }}
                >
                  {PROPS[0].number}
                </p>

                {/* メインコピー */}
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    lineHeight: 1.85,
                    color: PROPS[0].textColor,
                    letterSpacing: "0.03em",
                  }}
                >
                  {PROPS[0].copy}
                </p>
              </div>

              {/* ディテール — カード下部 */}
              {PROPS[0].detail && (
                <p
                  className="relative z-10 pt-5"
                  style={{
                    fontSize: "var(--text-micro)",
                    color: PROPS[0].subtextColor,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {PROPS[0].detail}
                </p>
              )}
            </div>
          </FadeUp>

          {/* 右列 — 2枚縦積み */}
          <div className="flex flex-col gap-4 md:gap-5">
            {PROPS.slice(1).map((prop, i) => (
              <FadeUp key={prop.number} delay={(i + 1) * 0.12}>
                <div
                  className="relative flex flex-col gap-5 p-8 rounded-2xl micro-border-top overflow-hidden"
                  style={{
                    background: prop.bg,
                    boxShadow: prop.shadow,
                  }}
                >
                  {/* ラベル */}
                  <p
                    style={{
                      fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      color: prop.subtextColor,
                      textTransform: "uppercase",
                    }}
                  >
                    {prop.label}
                  </p>

                  <div className="flex items-start gap-5">
                    {/* アイコン */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: prop.iconBg }}
                    >
                      <prop.icon size={24} style={{ color: prop.iconColor }} />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      {/* 数字 */}
                      <p
                        className="leading-none"
                        style={{
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                          fontSize: "clamp(1.5rem,2.5vw,2rem)",
                          fontWeight: 300,
                          letterSpacing: "-0.02em",
                          color: prop.numberColor,
                        }}
                      >
                        {prop.number}
                      </p>

                      {/* コピー */}
                      <p
                        style={{
                          fontSize: "var(--text-small)",
                          lineHeight: 1.8,
                          color: prop.subtextColor,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {prop.copy}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
