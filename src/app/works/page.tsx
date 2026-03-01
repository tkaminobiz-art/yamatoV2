import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WORKS } from "@/lib/works";

export const metadata: Metadata = {
  title: "施工事例",
  description:
    "やまと不動産の施工事例一覧。奈良市・生駒市・大和郡山市・橿原市・京田辺市・木津川市など奈良・京都エリアの注文住宅をご紹介します。",
};

const STYLES = ["すべて", "モダン", "ナチュラル", "シンプルモダン", "インダストリアル", "和モダン", "北欧"] as const;

export default function WorksPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* Hero */}
        <div style={{ background: "#1C2B1E", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px",
            }}>
              Works
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em", lineHeight: 1.4,
              marginBottom: "16px",
            }}>
              奈良・京都で、<br className="md:hidden" />実際に建てたお客様の家。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              各事例の詳細ページでは、間取りの工夫・素材選びの理由・お客様のコメントをご紹介しています。
            </p>
          </div>
        </div>

        {/* 施工事例グリッド */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">

          {/* スタイルフィルター（表示のみ / 動的フィルタはPhase 2で実装） */}
          <div className="flex flex-wrap gap-2 mb-12">
            {STYLES.map((s, i) => (
              <span
                key={s}
                style={{
                  padding: "6px 16px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  background: i === 0 ? "var(--primary)" : "transparent",
                  color: i === 0 ? "white" : "var(--text-light)",
                  border: i === 0 ? "none" : "1px solid rgba(0,0,0,0.12)",
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* グリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WORKS.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {/* サムネイル */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/3", background: work.gradient }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.15)" }}
                  />
                  <div className="absolute top-3 left-3">
                    <span style={{
                      padding: "4px 10px", borderRadius: "4px",
                      fontSize: "11px", letterSpacing: "0.06em",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      color: "rgba(255,255,255,0.9)",
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    }}>
                      {work.style}
                    </span>
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} style={{ color: "var(--text-light)" }} />
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "var(--text-light)", letterSpacing: "0.04em",
                    }}>
                      {work.area} {work.name} — {work.spec}
                    </p>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                    fontSize: "16px", fontWeight: 400,
                    color: "var(--text)", letterSpacing: "0.04em", lineHeight: 1.6,
                  }}>
                    {work.title}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "13px", color: "var(--text-light)",
                    lineHeight: 1.7, marginTop: "4px",
                  }}>
                    {work.concept}
                  </p>
                </div>

                {/* フッター */}
                <div className="px-5 pb-5 flex items-center justify-between">
                  <span style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "11px", color: "rgba(0,0,0,0.25)", letterSpacing: "0.06em",
                  }}>
                    {work.year}
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300" style={{
                    fontSize: "13px", color: "var(--primary)",
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  }}>
                    詳細を見る
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 下部テキスト */}
          <div className="mt-16 text-center">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 1.9,
              marginBottom: "24px",
            }}>
              実物はモデルハウスでご確認いただけます。<br className="hidden md:block" />
              素材の質感・空間の広がりは、写真では伝わらない部分があります。
            </p>
            <Link
              href="/contact?type=visit"
              className="inline-flex items-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                height: "52px", padding: "0 36px", borderRadius: "4px",
                fontSize: "15px",
                background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                letterSpacing: "0.04em",
              }}
            >
              モデルハウスを予約する
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
