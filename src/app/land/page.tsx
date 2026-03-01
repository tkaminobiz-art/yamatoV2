import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Train, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "土地情報・自社分譲地",
  description:
    "やまと不動産の自社分譲地情報。奈良市・大和郡山市・天理市・橿原市ほか奈良エリアの土地を多数取り扱っています。土地探しから住宅建築まで一括サポート。",
};

const LANDS = [
  {
    id: "yamatokoriyama-yata",
    area: "大和郡山市",
    name: "矢田町 分譲地",
    price: "800万〜1,200万円",
    size: "45〜65坪",
    access: "近鉄橿原線 近鉄郡山駅 徒歩15分圏内",
    schoolDistrict: "矢田小学校区",
    status: "販売中",
    lots: 8,
    feature: "区画整理済み。若いファミリー層に人気のエリア。",
    points: ["区画整理済みで整形地が多い", "大和郡山市内で人気の住宅地", "スーパー・ドラッグストア徒歩圏内"],
    gradient: "linear-gradient(135deg, #5A7A5A 0%, #8AAA8A 100%)",
  },
  {
    id: "tenri-sensai",
    area: "天理市",
    name: "前栽町 分譲地",
    price: "1,000万〜1,500万円",
    size: "50〜80坪",
    access: "近鉄天理線沿線",
    schoolDistrict: "前栽小学校区",
    status: "販売中",
    lots: 5,
    feature: "近鉄天理線沿線。閑静な住環境を求める方に。",
    points: ["閑静な住宅街で子育てしやすい環境", "大型スーパーへのアクセス良好", "比較的広めの敷地が確保できるエリア"],
    gradient: "linear-gradient(135deg, #7A9A7A 0%, #A0C0A0 100%)",
  },
  {
    id: "tanabe-area",
    area: "田辺エリア",
    name: "田辺周辺 分譲地",
    price: "600万〜1,000万円",
    size: "55〜90坪",
    access: "近鉄大阪線・JR利用可",
    schoolDistrict: "（区画により異なる）",
    status: "要相談",
    lots: 3,
    feature: "広い敷地が取れる。庭付き希望の方におすすめ。",
    points: ["広めの敷地で庭・駐車場を確保しやすい", "比較的リーズナブルな価格帯", "大阪方面へのアクセスも便利"],
    gradient: "linear-gradient(135deg, #9A8A6A 0%, #C0B090 100%)" ,
  },
  {
    id: "nara-city",
    area: "奈良市内",
    name: "奈良市内 各エリア",
    price: "1,200万〜2,500万円",
    size: "30〜60坪",
    access: "近鉄奈良線・JR奈良線沿線",
    schoolDistrict: "（区画により異なる）",
    status: "随時更新",
    lots: 0,
    feature: "奈良市内の各エリア。通勤・通学の利便性重視の方に。",
    points: ["奈良市内で通勤・通学に便利な立地", "駅徒歩圏内の物件も多数", "学区指定でのご相談も承ります"],
    gradient: "linear-gradient(135deg, #6A7A9A 0%, #90A0C0 100%)",
  },
] as const;

const SOLD_AREAS = [
  "奈良市 辻町", "生駒市 辻町", "大和郡山市 小南町", "天理市 指柳町",
  "橿原市 法華寺町", "大和郡山市 下三橋", "由紀寺町", "大和郡山市 番条町",
  "奈良市 七条西町", "神殿町", "生駒市 辻町 第2期",
] as const;

export default function LandPage() {
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
              Land Information
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px, 3.5vw, 48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em", lineHeight: 1.4,
              marginBottom: "16px",
            }}>
              土地から、<br className="md:hidden" />いっしょに探します。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              自社分譲地71区画。土地探しから住宅建築まで、<br className="hidden md:block" />
              やまと不動産がワンストップでお手伝いします。
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-32">

          {/* 強み3点 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {[
              { num: "71", unit: "区画", label: "自社分譲地", desc: "奈良・京都エリアに自社で保有する分譲地" },
              { num: "0", unit: "円", label: "仲介手数料", desc: "自社物件のため仲介手数料は不要です" },
              { num: "1", unit: "社", label: "ワンストップ", desc: "土地探し〜設計〜施工〜アフターを一括対応" },
            ].map(({ num, unit, label, desc }) => (
              <div key={label} className="text-center p-6 rounded-xl" style={{
                background: "white", border: "1px solid rgba(0,0,0,0.07)",
              }}>
                <p style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "40px", fontWeight: 700,
                  color: "var(--primary)", lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}>
                  {num}
                  <span style={{ fontSize: "18px", fontWeight: 400, marginLeft: "4px" }}>{unit}</span>
                </p>
                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "14px", fontWeight: 500,
                  color: "var(--text)", marginTop: "8px", marginBottom: "4px",
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px", color: "var(--text-light)", lineHeight: 1.7,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* 販売中・分譲地一覧 */}
          <section className="mb-20">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Available Lots
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.5, marginBottom: "24px",
            }}>
              現在の取り扱いエリア
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LANDS.map((land) => (
                <div key={land.id} className="rounded-2xl overflow-hidden" style={{
                  background: "white", border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}>
                  {/* 画像プレースホルダー */}
                  <div style={{ height: "160px", background: land.gradient, position: "relative" }}>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span style={{
                        padding: "4px 10px", borderRadius: "4px",
                        fontSize: "11px", letterSpacing: "0.06em",
                        background: land.status === "販売中"
                          ? "rgba(107,143,113,0.9)"
                          : "rgba(0,0,0,0.4)",
                        color: "white",
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      }}>
                        {land.status}
                      </span>
                      {land.lots > 0 && (
                        <span style={{
                          padding: "4px 10px", borderRadius: "4px",
                          fontSize: "11px",
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(6px)",
                          color: "rgba(255,255,255,0.9)",
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        }}>
                          残{land.lots}区画
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "12px", color: "var(--accent)",
                          letterSpacing: "0.06em", marginBottom: "4px",
                        }}>
                          {land.area}
                        </p>
                        <h3 style={{
                          fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                          fontSize: "18px", fontWeight: 400,
                          color: "var(--text)", letterSpacing: "0.04em",
                        }}>
                          {land.name}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <p style={{
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                          fontSize: "18px", fontWeight: 700,
                          color: "var(--primary)", lineHeight: 1,
                          letterSpacing: "-0.02em",
                        }}>
                          {land.price}
                        </p>
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "11px", color: "var(--text-light)",
                          marginTop: "3px",
                        }}>
                          {land.size}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Train size={13} style={{ color: "var(--text-light)", flexShrink: 0 }} />
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "13px", color: "var(--text-light)",
                        }}>
                          {land.access}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={13} style={{ color: "var(--text-light)", flexShrink: 0 }} />
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "13px", color: "var(--text-light)",
                        }}>
                          {land.schoolDistrict}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-1.5 mb-5">
                      {land.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <Check size={13} style={{ color: "var(--green)", marginTop: "3px", flexShrink: 0 }} />
                          <span style={{
                            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                            fontSize: "13px", color: "var(--text)", lineHeight: 1.7,
                          }}>
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?type=land&area=${land.id}`}
                      className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                      style={{
                        height: "42px", borderRadius: "4px",
                        fontSize: "14px", color: "var(--primary)",
                        border: "1px solid var(--primary)",
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      この土地を詳しく聞く
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 完売実績 */}
          <section className="mb-20">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Sold Out
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.5, marginBottom: "8px",
            }}>
              完売実績エリア
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)",
              marginBottom: "20px", lineHeight: 1.8,
            }}>
              おかげさまで以下のエリアは完売しました。ありがとうございます。
            </p>
            <div className="flex flex-wrap gap-2">
              {SOLD_AREAS.map((area) => (
                <span key={area} style={{
                  padding: "6px 14px", borderRadius: "4px",
                  fontSize: "13px",
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "var(--text-light)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.03em",
                }}>
                  {area} ✓
                </span>
              ))}
            </div>
          </section>

          {/* 下部CTA */}
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{
            background: "rgba(28,43,30,0.05)",
            border: "1px solid rgba(28,43,30,0.1)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px, 2.4vw, 26px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.7, marginBottom: "12px",
            }}>
              希望のエリアがなくても、ご相談ください。
            </p>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)",
              lineHeight: 1.9, marginBottom: "28px",
            }}>
              「この学区に住みたい」「通勤〇分以内」など条件をお聞かせいただければ、<br className="hidden md:block" />
              条件に合う土地をお探しします。仲介物件も含めてご提案可能です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  letterSpacing: "0.06em",
                }}
              >
                {SITE.phone}
              </Link>
              <Link
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px", background: "#06C755",
                  boxShadow: "0 4px 16px rgba(6,199,85,0.28)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                LINEで土地を相談する
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
