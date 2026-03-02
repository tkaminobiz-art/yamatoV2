import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, TrendingDown, Building2, Wrench } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "なぜこの価格で大手品質なのか | やまと不動産",
  description:
    "やまと不動産が大手ハウスメーカーと同じ素材・仕様で、なぜ2,000万円台から提供できるのか。中間マージンの仕組みと価格の透明性について解説します。",
};

const COST_ITEMS = [
  { label: "全国展示場の維持費",       desc: "年間数百億円規模のコストが販売棟数で割られ、1棟ごとに上乗せされます。" },
  { label: "ゴールデンタイムのテレビCM", desc: "知名度維持のための広告費も、最終的には建物価格に転嫁されています。" },
  { label: "3次・4次の下請け構造",      desc: "元請け→1次→2次→現場と流れるたびにマージンが抜かれ、実際の建物に使われるのは6割程度。" },
  { label: "住宅相談窓口への紹介料",    desc: "ポータルサイトや相談窓口への紹介手数料も、見積もりに含まれています。" },
] as const;

const YAMATO_ADVANTAGES = [
  {
    icon: Building2,
    title: "展示場を持たない",
    desc: "やまと不動産の「モデルハウス」は、実際に自社で建てた住宅をそのまま公開しています。何億円もかけた巨大展示場ではなく、本物の家が見られます。",
  },
  {
    icon: TrendingDown,
    title: "材料を直接仕入れる",
    desc: "旭化成・住友ゴム・クリナップなど主要メーカーとの直接取引で、中間マージンを省いています。同じ素材を、余分なコストなしに調達しています。",
  },
  {
    icon: Wrench,
    title: "地元の職人と直接契約",
    desc: "奈良・京都の職人と長年の信頼関係を築いています。多層的な下請け構造を持たないため、品質管理も代表が直接行います。",
  },
] as const;

const SPEC_COMPARE = [
  { label: "外壁",     yamato: "旭化成パワーボード（標準）",      major: "窯業系サイディング" },
  { label: "断熱",     yamato: "吹付ウレタン断熱（標準）",        major: "グラスウール" },
  { label: "耐震",     yamato: "等級3＋MIRAIE（標準）",           major: "等級3はオプション" },
  { label: "キッチン", yamato: "クリナップ最上級・食洗機（標準）", major: "標準グレード" },
  { label: "地盤改良", yamato: "会社が全額負担",                   major: "別途 +100〜200万円" },
  { label: "定期点検", yamato: "20年 無料",                        major: "10年（延長有料）" },
] as const;

export default function ConceptPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div style={{ background: "#1C2B1E", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="max-w-[860px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "20px",
            }}>
              Concept
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
              lineHeight: 1.5, marginBottom: "24px",
            }}>
              なぜ、大手と同じ素材で<br />
              2,000万円台で建てられるのか。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 2,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              maxWidth: "560px",
            }}>
              「安いから品質が低い」ではありません。<br />
              「余計なコストを乗せていない」から適正価格なのです。<br />
              その仕組みを、正直にお伝えします。
            </p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 md:py-32">

          {/* ─── セクション1: 大手の価格の仕組み ─── */}
          <section className="mb-20 md:mb-28">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              The Problem
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              大手の住宅価格には、<br />
              建物以外のコストが大量に含まれています。
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)",
              lineHeight: 2, marginBottom: "32px",
            }}>
              大手ハウスメーカーに支払う金額のうち、実際の建物（材料・職人の技術）に使われるのは、全体の6割程度と言われています。残りの4割は、建物とは直接関係のない費用です。
            </p>

            <div className="flex flex-col gap-4">
              {COST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <X size={18} style={{ color: "#aaa", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "14px", fontWeight: 500, color: "var(--text)",
                      marginBottom: "4px",
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "13px", color: "var(--text-light)", lineHeight: 1.8,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── セクション2: やまとの解決策 ─── */}
          <section className="mb-20 md:mb-28">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Our Approach
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              やまと不動産が<br />
              やっていないこと、の積み重ね。
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)",
              lineHeight: 2, marginBottom: "32px",
            }}>
              派手な広告も、豪華な展示場も、多層的な下請け構造も持っていません。その分のコストを、そのままお客様の建物の品質に充てています。
            </p>

            <div className="flex flex-col gap-6">
              {YAMATO_ADVANTAGES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-6 p-6 md:p-8 rounded-xl"
                    style={{ background: "white", border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(123,101,68,0.08)" }}
                    >
                      <Icon size={22} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "15px", fontWeight: 500, color: "var(--text)",
                        marginBottom: "8px",
                      }}>
                        {item.title}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "14px", color: "var(--text-light)", lineHeight: 1.9,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ─── セクション3: 仕様比較 ─── */}
          <section className="mb-20 md:mb-28">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Specification
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "8px",
            }}>
              これが全部、標準です。
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 1.8,
              marginBottom: "24px",
            }}>
              「追加オプション」として後から請求されるものが、やまと不動産では最初から含まれています。
            </p>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)", background: "white" }}>
              {/* ヘッダー行 */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "1fr 1.4fr 1fr",
                  background: "rgba(123,101,68,0.06)",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                  padding: "12px 20px",
                }}
              >
                <span style={{ fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)", fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.06em" }}>項目</span>
                <span style={{ fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)", fontSize: "11px", color: "var(--primary)", letterSpacing: "0.06em", fontWeight: 500 }}>やまと不動産</span>
                <span style={{ fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)", fontSize: "11px", color: "var(--text-light)", letterSpacing: "0.06em" }}>大手ハウスメーカー</span>
              </div>

              {SPEC_COMPARE.map((row, i) => (
                <div
                  key={row.label}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: "1fr 1.4fr 1fr",
                    padding: "14px 20px",
                    borderBottom: i < SPEC_COMPARE.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "13px", color: "var(--text-light)",
                  }}>
                    {row.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <Check size={13} style={{ color: "var(--green)", flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "13px", color: "var(--text)", fontWeight: 500,
                    }}>
                      {row.yamato}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "12px", color: "var(--text-light)",
                  }}>
                    {row.major}
                  </span>
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "12px", color: "var(--text-light)", lineHeight: 1.8,
              marginTop: "12px",
            }}>
              ※ 大手の仕様は一般的な標準グレードを参考に記載しています。各社の仕様は異なります。
            </p>
          </section>

          {/* ─── セクション4: 価格の透明性 ─── */}
          <section className="mb-20 md:mb-28">
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{ background: "rgba(28,43,30,0.05)", border: "1px solid rgba(28,43,30,0.1)" }}
            >
              <p style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(17px, 2.2vw, 22px)", fontWeight: 400,
                color: "var(--text)", letterSpacing: "0.06em",
                lineHeight: 1.8, marginBottom: "20px",
              }}>
                見積もりの後で、<br />
                金額が変わることはありません。
              </p>
              <p style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "15px", color: "var(--text-light)", lineHeight: 2,
              }}>
                やまと不動産の「コミコミ価格」は、土地・建物・諸費用・地盤改良費をすべて含んだ総額です。「実は別途追加で」が後から発生しないよう、最初の打ち合わせで確認できるすべての費用を含めてご提案します。
              </p>
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section className="text-center">
            <p style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.06em",
              lineHeight: 1.7, marginBottom: "16px",
            }}>
              まず、モデルハウスで<br />
              実際の仕様を確かめてください。
            </p>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 1.9,
              marginBottom: "32px",
            }}>
              百聞は一見にしかず。大和郡山市内のモデルハウス3棟を、<br className="hidden md:block" />
              完全予約制・費用無料でご案内しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.03em",
                }}
              >
                モデルハウスを予約する
                <ArrowRight size={18} />
              </Link>
              <Link
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px", background: "#06C755",
                  boxShadow: "0 4px 16px rgba(6,199,85,0.28)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.03em",
                }}
              >
                LINEで気軽に聞く
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
