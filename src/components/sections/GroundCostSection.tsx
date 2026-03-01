"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export function GroundCostSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#EDE3D5" }}
      aria-labelledby="ground-cost-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-8 max-w-[640px] mx-auto">
            <p
              className="text-text-light uppercase"
              style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-micro)", letterSpacing: "0.15em" }}
            >
              Ground Cost
            </p>
            <h2
              id="ground-cost-heading"
              className="font-serif text-primary"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontWeight: 400,
                lineHeight: 1.35,
                letterSpacing: "0.04em",
              }}
            >
              地盤改良費、
              <span
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontWeight: 700,
                  color: "#C4851F",
                  letterSpacing: "-0.02em",
                }}
              >
                100%
              </span>
              {" "}会社負担。
            </h2>
            <div
              className="text-text space-y-4 leading-[2] text-left w-full"
              style={{ fontSize: "var(--text-body)" }}
            >
              <p className="text-text-light">
                奈良盆地の地盤は場所によって大きく異なります。
                <br />
                地盤調査の結果、改良が必要になった場合——
                <br />
                他社なら50万〜100万の追加費用が発生します。
              </p>
              <p>
                やまと不動産は、
                <span className="font-medium text-text">全額会社が負担します。</span>
                <br />
                <span className="font-medium text-text">お客様に追加請求は一切しません。</span>
                <br />
                これが「コミコミ」の意味です。
              </p>
            </div>
            <Link
              href="/concept"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
              style={{ fontSize: "var(--text-body)" }}
            >
              コミコミ価格の詳細を見る
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
