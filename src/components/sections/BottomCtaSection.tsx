"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

export function BottomCtaSection() {
  return (
    <section
      className="py-24 md:py-40 noise-texture"
      style={{ background: "var(--primary)" }}
      aria-labelledby="bottom-cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <FadeUp>
          {/* Step 3-9: 感謝テキスト */}
          <p
            className="mb-6"
            style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}
          >
            最後まで見ていただき、ありがとうございます。
          </p>
          <p
            className="text-[rgba(255,255,255,0.4)] uppercase mb-8"
            style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-micro)", letterSpacing: "0.2em" }}
          >
            First Step
          </p>
          <h2
            id="bottom-cta-heading"
            className="font-serif text-[#FAFAF7] mb-8"
            style={{
              fontSize: "clamp(2rem,3.5vw,2.5rem)",
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              letterSpacing: "0.06em",
              lineHeight: 1.4,
            }}
          >
            最初の一歩はLINEから始めませんか？
          </h2>
          <p
            className="leading-[2] mb-12 max-w-[480px] mx-auto"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "var(--text-body)" }}
          >
            ご相談は無料です。<br />
            設計士が直接、お返事いたします。
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — グラデーション（最重要アクション） */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-primary-glow font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{ height: "56px", padding: "0 40px", borderRadius: "4px", fontSize: "var(--text-body)" }}
            >
              来場予約する
              <ArrowRight size={20} />
            </Link>

            {/* Glass — ダーク背景上 */}
            <Link
              href="/contact?type=document"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 hover:bg-[rgba(255,255,255,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{
                height: "56px",
                padding: "0 36px",
                borderRadius: "4px",
                fontSize: "var(--text-body)",
                color: "rgba(255,255,255,0.88)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              資料をもらう
            </Link>

            {/* LINEボタン */}
            <Link
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                height: "56px",
                padding: "0 36px",
                borderRadius: "4px",
                background: "#06C755",
                color: "#FFFFFF",
                fontSize: "var(--text-body)",
                boxShadow: "0 4px 16px rgba(6,199,85,0.35)",
              }}
            >
              <MessageCircle size={20} />
              LINEで聞いてみる
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
