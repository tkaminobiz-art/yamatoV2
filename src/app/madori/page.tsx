import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Users, PenLine } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "間取り集",
  description:
    "「花鳥風月」やまとの家の間取り集。吹き抜けのある家・収納たっぷりな家など、実際に建てた住宅の間取り実例を多数掲載。全邸フルオーダーの自由設計。",
};

/* ── 詳細紹介（2事例） ── */
const FEATURED = [
  {
    id: "soratobori",
    title: "空間と調和した吹き抜けのある家",
    gradient: "linear-gradient(135deg, #5A6B4A 0%, #8FAF75 100%)",
    points: [
      {
        no: "01",
        subtitle: "家族の絆を深めるリビング",
        desc: "玄関横の土間収納の便利さ。アウトドアからの帰り道、荷物をすぐに片付けられます。家族が集まる20帖のLDKは、吹き抜けのある空間でリラックスできます。和室は畳のぬくもりと押し入れ・物入れによる収納が充実し、心を落ち着かせてくれる空間です。広い洗面室と浴室は、日々の疲れを癒すリフレッシュスペースです。",
      },
      {
        no: "02",
        subtitle: "ゆとりとくつろぎの場",
        desc: "2階には3つの個性的な部屋が。5.2帖の洋室、クローゼット付きの6帖の洋室には自分だけのプライベートスペースが広がります。6帖の部屋にはバルコニーもあり、新鮮な空気を取り入れる場所になるでしょう。8帖の主寝室にもバルコニーがあり、さらに4帖の大空間収納付き。",
      },
    ],
    tags: ["吹き抜けリビング", "20帖LDK", "土間収納", "和室あり", "主寝室8帖+WIC"],
  },
  {
    id: "danran",
    title: "広々団らん空間と収納が沢山な家",
    gradient: "linear-gradient(135deg, #7B5A2A 0%, #B8935A 100%)",
    points: [
      {
        no: "01",
        subtitle: "家族団らん、笑顔があふれるリビング",
        desc: "玄関を開けると、家族が集まる23.5帖のLDKへ。広々としたリビングでは子どもたちが自由に遊び、大人たちは心地よくリラックスできます。リビングには充実の収納スペースが5つ、パントリーもあり生活用品をすっきりと整理できます。縁側からは季節を感じながらリラックスすることもできます。",
      },
      {
        no: "02",
        subtitle: "心地よい眠りを実現し、プライベートを保つ空間",
        desc: "2階には特徴的な3つの洋室が。主寝室は8帖で広々とした空間にはバルコニーと大きな収納スペースがあります。6帖の洋室が2つあり、それぞれにバルコニーとクローゼットが設けられています。バルコニーは2部屋で共用可能で、豊富な収納で衣替えもスムーズです。",
      },
    ],
    tags: ["23.5帖LDK", "収納5か所", "パントリー", "縁側", "主寝室8帖+WIC"],
  },
] as const;

/* ── 花鳥風月ギャラリー（8プラン） ── */
const GALLERY = [
  { no: "⑧", gradient: "linear-gradient(135deg, #4A5568 0%, #718096 100%)" },
  { no: "⑦", gradient: "linear-gradient(135deg, #6B5A3A 0%, #9B8A6A 100%)" },
  { no: "⑥", gradient: "linear-gradient(135deg, #3A4A5A 0%, #6A7A8A 100%)" },
  { no: "⑤", gradient: "linear-gradient(135deg, #5A6B4A 0%, #8FAF75 100%)" },
  { no: "④", gradient: "linear-gradient(135deg, #7B5A2A 0%, #B8935A 100%)" },
  { no: "③", gradient: "linear-gradient(135deg, #8A6A5A 0%, #C0A090 100%)" },
  { no: "②", gradient: "linear-gradient(135deg, #4A6B5A 0%, #8AAF9A 100%)" },
  { no: "①", gradient: "linear-gradient(135deg, #6B5A7A 0%, #9A8AAA 100%)" },
] as const;

export default function MadoriPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div style={{ background: "#1C2B1E", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px",
            }}>
              Floor Plan
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em", lineHeight: 1.4,
              marginBottom: "16px",
            }}>
              「花鳥風月」やまとの家<br />間取り集
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              過去に建築した住宅の間取りをまとめました。それぞれの住宅には、建て主の想いが込められています。<br className="hidden md:block" />
              全邸フルオーダー。掲載プランをベースにアレンジすることも可能です。
            </p>
          </div>
        </div>

        {/* ─── 特徴3点 ─── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Home,    label: "自由設計",       desc: "こだわりを実現できるフルオーダー。間取りから素材まですべて一から提案します。" },
              { icon: Users,   label: "過去事例から参考", desc: "実際に建てた住宅の間取りをまとめました。それぞれに建て主の想いが込められています。" },
              { icon: PenLine, label: "専属設計士が担当", desc: "間取りの打ち合わせは専属設計士と。納得いくまで、約3ヶ月かけて丁寧に設計します。" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-xl" style={{
                background: "white", border: "1px solid rgba(0,0,0,0.07)",
              }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{
                  background: "rgba(123,101,68,0.1)",
                }}>
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "14px", fontWeight: 500, color: "var(--text)", marginBottom: "4px",
                  }}>{label}</p>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "12px", color: "var(--text-light)", lineHeight: 1.7,
                  }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 詳細2事例 ─── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <p style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
            textTransform: "uppercase", marginBottom: "8px",
          }}>
            Featured Plans
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
            fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 400,
            color: "var(--text)", letterSpacing: "0.05em", marginBottom: "40px",
          }}>
            こだわりを実現した自由設計の実例
          </h2>

          <div className="flex flex-col gap-20 md:gap-28">
            {FEATURED.map((plan, pi) => (
              <div key={plan.id} className={`flex flex-col ${pi % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16`}>

                {/* ビジュアル */}
                <div className="w-full md:w-[45%] shrink-0 rounded-2xl overflow-hidden" style={{
                  aspectRatio: "4/3", background: plan.gradient,
                }}>
                  <div className="h-full flex flex-col justify-between p-6" style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45) 100%)",
                  }}>
                    <div className="flex flex-wrap gap-2">
                      {plan.tags.map((tag) => (
                        <span key={tag} style={{
                          padding: "3px 10px", borderRadius: "2px",
                          fontSize: "10px", background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(6px)", color: "rgba(255,255,255,0.9)",
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          letterSpacing: "0.05em",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "clamp(15px,2vw,18px)", fontWeight: 400,
                      color: "rgba(255,255,255,0.9)", letterSpacing: "0.06em",
                      lineHeight: 1.6,
                    }}>
                      {plan.title}
                    </p>
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex-1 flex flex-col gap-8">
                  {plan.points.map((pt) => (
                    <div key={pt.no}>
                      <div className="flex items-center gap-3 mb-3">
                        <span style={{
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                          fontSize: "10px", color: "var(--accent)",
                          background: "rgba(196,133,31,0.1)",
                          padding: "2px 8px", borderRadius: "2px",
                          letterSpacing: "0.08em",
                        }}>
                          point {pt.no}
                        </span>
                        <h3 style={{
                          fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                          fontSize: "clamp(15px,1.8vw,18px)", fontWeight: 400,
                          color: "var(--text)", letterSpacing: "0.04em",
                        }}>
                          {pt.subtitle}
                        </h3>
                      </div>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "14px", color: "var(--text-light)", lineHeight: 2,
                      }}>
                        {pt.desc}
                      </p>
                    </div>
                  ))}

                  <Link
                    href="/contact?type=madori"
                    className="inline-flex items-center gap-1.5 group mt-2 self-start"
                    style={{
                      fontSize: "13px", color: "var(--primary)",
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      letterSpacing: "0.04em",
                      textDecoration: "underline", textUnderlineOffset: "3px",
                      textDecorationColor: "rgba(123,101,68,0.3)",
                    }}
                  >
                    このプランをベースに相談する
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 花鳥風月ギャラリー ─── */}
        <div style={{ background: "var(--wood-light)", paddingTop: "64px", paddingBottom: "64px" }}>
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              Gallery
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em", marginBottom: "12px",
            }}>
              「花鳥風月」やまとの家 間取り集
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 1.9, marginBottom: "32px",
            }}>
              過去の間取りをこちらで見るだけで夢が膨らむ間取り集。<br className="hidden md:block" />
              家族が集まるオープンなリビング、プライベートな寝室、使い勝手抜群のキッチンなど、様々なプランをご覧いただけます。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY.map((g) => (
                <div key={g.no} className="rounded-xl overflow-hidden" style={{
                  aspectRatio: "3/4", background: g.gradient, position: "relative",
                }}>
                  <div className="absolute inset-0 flex flex-col justify-between p-4" style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "10px", color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.08em",
                    }}>
                      間取り事例{g.no}
                    </span>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "11px", color: "rgba(255,255,255,0.5)",
                      letterSpacing: "0.06em",
                    }}>
                      間取り図 準備中
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6" style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "12px", color: "var(--text-light)",
              letterSpacing: "0.04em",
            }}>
              ※ 詳細な間取り図はモデルハウスにてご覧いただけます。
            </p>
          </div>
        </div>

        {/* ─── 下部CTA ─── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20">
          <div className="text-center p-10 rounded-2xl" style={{
            background: "rgba(123,101,68,0.05)",
            border: "1px solid rgba(123,101,68,0.1)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px,2.4vw,26px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.7, marginBottom: "12px",
            }}>
              「なんとなくこんな家が欲しい」<br />
              その段階から、ご相談いただけます。
            </p>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)",
              lineHeight: 1.9, marginBottom: "28px",
            }}>
              専属の設計士が、ヒアリングから間取り提案まで対応します。<br className="hidden md:block" />
              間取りの打ち合わせは約3ヶ月。納得いくまで一緒に考えます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 32px", borderRadius: "4px",
                  fontSize: "15px", background: "#06C755",
                  boxShadow: "0 4px 16px rgba(6,199,85,0.28)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                LINEで間取りを相談する
              </Link>
              <Link
                href="/contact?type=visit"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                モデルハウスで相談する
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
