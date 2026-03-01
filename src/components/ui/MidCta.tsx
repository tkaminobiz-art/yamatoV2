"use client";

import Link from "next/link";
import { Home, Calendar, MessageCircle, ClipboardList } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SITE } from "@/lib/constants";

/**
 * 中間CTA-A: 標準仕様セクション直後
 * 「モデルハウスを見る」— Ghost + アクセントボーダー
 */
export function MidCtaA() {
  return (
    <section className="py-16 text-center" style={{ background: "var(--bg)" }}>
      <FadeUp>
        <p
          className="mb-5"
          style={{
            fontSize: "15px",
            color: "var(--text-light)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            letterSpacing: "0.03em",
          }}
        >
          外壁・断熱・キッチン…全9項目の標準仕様をまとめました。
        </p>
        <Link
          href="/standard"
          className="inline-flex items-center gap-2 font-medium btn-ghost-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          style={{
            fontSize: "15px",
            height: "48px",
            padding: "0 32px",
            borderRadius: "4px",
            letterSpacing: "0.03em",
          }}
        >
          <ClipboardList size={18} />
          標準仕様を詳しく見る
        </Link>
      </FadeUp>
    </section>
  );
}

/**
 * 中間CTA-B: 比較表セクション直後
 * 「LINEで聞いてみる」— LINE グリーン
 */
export function MidCtaB() {
  return (
    <section className="py-16 text-center" style={{ background: "var(--wood-light)" }}>
      <FadeUp>
        <p
          className="mb-5"
          style={{
            fontSize: "15px",
            color: "var(--text-light)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            letterSpacing: "0.03em",
          }}
        >
          ここまでで気になることがあれば、お聞かせください。
        </p>
        <Link
          href={SITE.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06C755] focus-visible:ring-offset-2 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            fontSize: "15px",
            height: "48px",
            padding: "0 32px",
            borderRadius: "4px",
            background: "#06C755",
            boxShadow: "0 4px 16px rgba(6,199,85,0.30), inset 0 1px 0 rgba(255,255,255,0.2)",
            letterSpacing: "0.03em",
          }}
        >
          <MessageCircle size={18} />
          LINEで聞いてみる
        </Link>
      </FadeUp>
    </section>
  );
}

/**
 * 中間CTA-C: お客様の声セクション直後
 * 「来場予約する」— Primary グラデーション
 */
export function MidCtaC() {
  return (
    <section className="py-16 text-center" style={{ background: "var(--bg)" }}>
      <FadeUp>
        <p
          className="mb-5"
          style={{
            fontSize: "15px",
            color: "var(--text-light)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            letterSpacing: "0.03em",
          }}
        >
          写真や数字の先に、実物があります。ぜひ一度ご覧ください。
        </p>
        <Link
          href="/contact?type=visit"
          className="inline-flex items-center gap-2 text-white font-medium btn-primary-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          style={{
            fontSize: "15px",
            height: "48px",
            padding: "0 32px",
            borderRadius: "4px",
            letterSpacing: "0.03em",
          }}
        >
          <Calendar size={18} />
          来場予約する
        </Link>
      </FadeUp>
    </section>
  );
}
