"use client";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const MAJOR = [
  { label: "建物本体",      amount: "2,800万円",  muted: false },
  { label: "展示場費",      amount: "+400万円",   muted: true  },
  { label: "広告宣伝費",    amount: "+300万円",   muted: true  },
  { label: "中間マージン",  amount: "+500万円",   muted: true  },
  { label: "相談窓口紹介料", amount: "+200万円",  muted: true  },
] as const;

const YAMATO = [
  { label: "建物本体",   amount: "2,400万円", badge: false },
  { label: "建築確認費", amount: "込み",      badge: true  },
  { label: "地盤改良費", amount: "込み",      badge: true  },
  { label: "外構費",     amount: "込み",      badge: true  },
] as const;

export function PriceBreakdownSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="price-breakdown-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <SectionHeader
            label="Price"
            title="同じ間取り、同じ設備。この差はどこから？"
            className="mb-16 md:mb-24"
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* 大手 — 全体を opacity: 0.5 で控えめに */}
          <FadeUp delay={0}>
            <div
              className="flex flex-col rounded-2xl border border-[rgba(0,0,0,0.06)] overflow-hidden"
              style={{ opacity: 0.5 }}
            >
              <div className="px-8 py-6 bg-[#F5F5F5]">
                <p className="text-text-light font-medium" style={{ fontSize: "var(--text-small)", letterSpacing: "0.04em" }}>
                  大手ハウスメーカーの場合
                </p>
              </div>
              <div className="px-8 py-6 flex flex-col gap-4 bg-white flex-1">
                {MAJOR.map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className={row.muted ? "text-text-light" : "text-text"} style={{ fontSize: "var(--text-small)" }}>
                      {row.label}
                    </span>
                    <span
                      className={row.muted ? "text-text-light" : "text-text font-medium"}
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-small)" }}
                    >
                      {row.amount}
                    </span>
                  </div>
                ))}
                <div
                  className="flex items-center justify-between pt-4 mt-2"
                  style={{ borderTop: "2px solid rgba(0,0,0,0.08)" }}
                >
                  <span className="font-medium text-text">合計</span>
                  {/* 大手合計: 小さく + line-through */}
                  <span
                    className="line-through text-text-light"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "1.25rem" }}
                  >
                    4,200万円〜
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* やまと不動産 — 主役 */}
          <FadeUp delay={0.15}>
            <div
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                border: "2px solid #C4851F",
                boxShadow: "0 8px 32px rgba(196,133,31,0.15)",
              }}
            >
              <div className="px-8 py-6" style={{ background: "#C4851F" }}>
                <p className="text-white font-medium" style={{ fontSize: "var(--text-small)", letterSpacing: "0.04em" }}>
                  やまと不動産の場合
                </p>
              </div>
              <div className="px-8 py-6 flex flex-col gap-4 bg-white flex-1">
                {YAMATO.map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-text" style={{ fontSize: "var(--text-small)" }}>
                      {row.label}
                    </span>
                    {row.badge ? (
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-medium tracking-wide"
                        style={{ background: "rgba(107,143,113,0.12)", color: "#6B8F71" }}
                      >
                        込み
                      </span>
                    ) : (
                      <span
                        className="text-text font-medium"
                        style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-small)" }}
                      >
                        {row.amount}
                      </span>
                    )}
                  </div>
                ))}
                <div
                  className="flex items-center justify-between pt-4 mt-2"
                  style={{ borderTop: "2px solid rgba(196,133,31,0.3)" }}
                >
                  <span className="font-medium text-text">合計</span>
                  {/* やまと合計: 大きく accent */}
                  <span
                    className="font-bold text-accent"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "clamp(1.75rem,3vw,3rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
                  >
                    2,600万円〜
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Step 3-2 追加テキスト */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-10 space-y-2">
            <p className="text-text-light" style={{ fontSize: "15px", lineHeight: 1.9 }}>
              建物そのものにかけている金額は、実はほぼ同じ。
              <br />
              違うのは「建物以外」のコストです。
            </p>
            <p className="text-text-light" style={{ fontSize: "13px" }}>
              ※やまと不動産の見積額は最終金額とほぼ変わりません。
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
