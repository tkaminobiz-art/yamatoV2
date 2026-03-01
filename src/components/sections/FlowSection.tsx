"use client";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STEPS = [
  {
    num: 1,
    title: "無料相談",
    desc: "LINEで「土地ありますか？」の\nひとことから始められます。",
  },
  {
    num: 2,
    title: "プラン提案",
    desc: "自社分譲地71区画から、\n通勤・学区に合わせてお探しします。",
  },
  {
    num: 3,
    title: "ご契約",
    desc: "納得いただけたらご契約。\n値引き交渉は不要です。最初から適正価格。",
  },
  {
    num: 4,
    title: "着工〜施工",
    desc: "上棟まで約3ヶ月。\n建築中の写真を毎週LINEでお届けしています。",
  },
  {
    num: 5,
    title: "お引渡し",
    desc: "引き渡し後もLINEでご相談いただけます。\n12種類の生活サポート。",
  },
] as const;

export function FlowSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="flow-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <SectionHeader
            id="flow-heading"
            label="Flow"
            title="相談から入居まで、5つのステップでご案内します。"
            className="mb-16 md:mb-24"
          />
        </FadeUp>

        {/* Desktop: 横並び */}
        <div className="hidden md:flex items-start">
          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.1} className="flex-1 min-w-0">
              <div className="flex items-start">
                <div className="flex flex-col items-center w-full">
                  {/* Number badge — グラデーション */}
                  <div
                    className="w-12 h-12 rounded-[4px] flex items-center justify-center shrink-0 mb-4 btn-primary-glow"
                  >
                    <span
                      className="text-white font-medium"
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "18px" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="font-serif text-text text-center mb-3"
                    style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "var(--text-h3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-text-light text-center whitespace-pre-line px-4"
                    style={{ fontSize: "var(--text-small)", lineHeight: 1.8 }}
                  >
                    {step.desc}
                  </p>
                </div>
                {/* Connector — 点線廃止、細い実線グラデーション */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "1px",
                      background: "linear-gradient(90deg, rgba(196,146,26,0.5), rgba(42,92,58,0.3))",
                      marginTop: "23px",
                    }}
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile: 縦積み */}
        <div className="md:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.08}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  {/* Number badge — グラデーション */}
                  <div
                    className="w-12 h-12 rounded-[4px] flex items-center justify-center shrink-0 btn-primary-glow"
                  >
                    <span
                      className="text-white font-medium"
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "18px" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        flexGrow: 1,
                        width: "1px",
                        minHeight: "32px",
                        marginTop: "4px",
                        marginBottom: "4px",
                        background: "linear-gradient(180deg, rgba(196,146,26,0.5), rgba(42,92,58,0.2))",
                      }}
                    />
                  )}
                </div>
                <div className="pb-8 pt-2 flex-1">
                  <h3
                    className="font-serif text-text mb-2"
                    style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "var(--text-h3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-light whitespace-pre-line" style={{ fontSize: "var(--text-small)", lineHeight: 1.8 }}>
                    {step.desc}
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
