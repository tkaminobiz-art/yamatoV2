import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, Clock, Car, Train } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社やまと不動産の会社概要・経営理念・アクセス情報。奈良県奈良市を拠点に、奈良・京都エリアで注文住宅・土地販売を行っています。",
};

const COMPANY_INFO = [
  { label: "商号",       value: "株式会社やまと不動産" },
  { label: "代表者",     value: "代表取締役社長 古谷 泰彦 / 代表取締役専務 小林 敬昌" },
  { label: "創立",       value: "2011年11月30日" },
  { label: "資本金",     value: "900万円" },
  { label: "本社所在地", value: `${SITE.addressZip} ${SITE.address}` },
  { label: "電話番号",   value: SITE.phone, isPhone: true },
  { label: "FAX",        value: SITE.fax },
  { label: "メール",     value: SITE.email, isEmail: true },
  { label: "営業時間",   value: SITE.businessHours },
  { label: "事業内容",   value: "宅地分譲・住宅建築・宅地造成・住宅リフォーム・不動産買取り 等" },
  { label: "宅建番号",   value: "国土交通大臣 (1) 第10516号" },
  { label: "主要取引銀行", value: "大和信用金庫・奈良中央信用金庫・京都中央信用金庫・奈良信用金庫・南都銀行・関西みらい銀行・りそな銀行・紀陽銀行" },
  { label: "関連会社",   value: "やまとグローバル開発、やまと総合技建" },
] as const;

const BRANCHES = [
  {
    name: "本社",
    address: "奈良県奈良市大宮町1丁目6番21",
    zip: "〒630-8115",
    phone: "0742-36-1123",
    fax: "0742-36-1888",
    hours: "9:00〜19:00（火・水定休）",
    access: "関西本線 奈良駅 徒歩5分 / 近鉄難波・奈良線 近鉄奈良駅 徒歩10分",
    parking: "10台可",
  },
  {
    name: "京都支店",
    address: "京都府宇治市小倉町西山67-5",
    zip: "",
    phone: "0774-25-1123",
    fax: "0774-25-3131",
    hours: "9:00〜19:00（火・水定休）",
    access: "近鉄京都線 小倉駅 徒歩5分 / JR奈良線 小倉駅 徒歩5分",
    parking: "5台可",
  },
] as const;

const LICENSES = [
  "宅地建物取引業 国土交通大臣 (1) 第10516号",
  "建設業許可（奈良県知事）",
  "一級建築士事務所登録",
  "住宅瑕疵担保責任保険 登録事業者",
  "長期優良住宅 建築等計画認定実績",
] as const;

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div style={{ background: "#1C2B1E", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="max-w-[860px] mx-auto px-6 md:px-10 text-center">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "20px",
            }}>
              Company
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
              lineHeight: 1.5, marginBottom: "24px",
            }}>
              会社概要
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)",
              lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              株式会社やまと不動産は、奈良を拠点に<br className="hidden md:block" />
              注文住宅の設計・施工・土地販売を行っています。
            </p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 md:py-32">

          {/* ─── 経営理念 ─── */}
          <section className="mb-20 md:mb-28" aria-labelledby="philosophy-heading">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Philosophy
            </p>
            <h2 id="philosophy-heading" style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              経営理念
            </h2>
            <div className="rounded-2xl p-8 md:p-12" style={{
              background: "rgba(28,43,30,0.05)",
              border: "1px solid rgba(28,43,30,0.1)",
            }}>
              <p style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(18px, 2.2vw, 24px)", fontWeight: 400,
                color: "var(--text)", letterSpacing: "0.06em",
                lineHeight: 1.8, marginBottom: "20px",
              }}>
                家族の数だけ、<br />
                理想の家がある。
              </p>
              <p style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "15px", color: "var(--text-light)",
                lineHeight: 2,
              }}>
                「あなたの家族には、どんな家が必要ですか？」——<br />
                この問いを、最初の打ち合わせで必ず聞きます。<br /><br />
                3人家族と5人家族では、正解が違います。<br />
                奈良での暮らしと、通勤優先の暮らしでも違います。<br /><br />
                やまと不動産は、決まったプランを売る会社ではありません。<br />
                大手ハウスメーカーの中間マージンを省き、材料の仕入れから職人まで直接関与することで、
                大手と同等の品質を適正価格でお届けする。毎回ゼロから、あなたのための家を設計します。
              </p>
            </div>
          </section>

          {/* ─── 会社概要テーブル ─── */}
          <section className="mb-20 md:mb-28" aria-labelledby="overview-heading">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              About Us
            </p>
            <h2 id="overview-heading" style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              会社概要
            </h2>
            <div className="rounded-2xl overflow-hidden" style={{
              border: "1px solid rgba(0,0,0,0.07)",
              background: "white",
            }}>
              {COMPANY_INFO.map((row, i) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row"
                  style={{
                    borderBottom: i < COMPANY_INFO.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  <div className="shrink-0 px-6 py-4 sm:py-5" style={{
                    width: "160px",
                    background: "rgba(123,101,68,0.04)",
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "13px", color: "var(--text-light)",
                    letterSpacing: "0.03em",
                    borderRight: "1px solid rgba(0,0,0,0.06)",
                    display: "flex", alignItems: "center",
                  }}>
                    {row.label}
                  </div>
                  <div className="px-6 py-4 sm:py-5 flex items-center flex-1" style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "14px", color: "var(--text)",
                    lineHeight: 1.8,
                  }}>
                    {"isPhone" in row && row.isPhone ? (
                      <a href={`tel:${row.value}`} style={{ color: "var(--primary)" }}>
                        {row.value}
                      </a>
                    ) : "isEmail" in row && row.isEmail ? (
                      <a href={`mailto:${row.value}`} style={{ color: "var(--primary)" }}>
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── 拠点情報 ─── */}
          <section className="mb-20 md:mb-28" aria-labelledby="branch-heading">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Branch
            </p>
            <h2 id="branch-heading" style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              拠点情報
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRANCHES.map((branch) => (
                <div key={branch.name} className="rounded-2xl p-7" style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}>
                  <p style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "10px", letterSpacing: "0.16em",
                    color: "var(--accent)", textTransform: "uppercase",
                    marginBottom: "14px",
                  }}>
                    {branch.name}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} style={{ color: "var(--primary)", marginTop: "3px", flexShrink: 0 }} />
                      <div>
                        {branch.zip && (
                          <p style={{
                            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                            fontSize: "12px", color: "var(--text-light)", marginBottom: "2px",
                          }}>{branch.zip}</p>
                        )}
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "14px", color: "var(--text)", lineHeight: 1.7,
                        }}>{branch.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                      <a href={`tel:${branch.phone}`} style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "15px", color: "var(--text)",
                        letterSpacing: "0.06em",
                      }}>
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px", color: "var(--text-light)",
                      }}>{branch.hours}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Train size={14} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px", color: "var(--text-light)", lineHeight: 1.7,
                      }}>{branch.access}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px", color: "var(--text-light)",
                      }}>{branch.parking}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── アクセスマップ ─── */}
          <section className="mb-20 md:mb-28" aria-labelledby="map-heading">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Access
            </p>
            <h2 id="map-heading" style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              アクセス
            </h2>
            {/* Google Maps埋め込み（奈良市大宮町1丁目） */}
            <div className="rounded-2xl overflow-hidden" style={{
              height: "400px",
              background: "rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.07)",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.9!2d135.8!3d34.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%E5%A5%88%E8%89%AF%E7%9C%8C%E5%A5%88%E8%89%AF%E5%B8%82%E5%A4%A7%E5%AE%AE%E7%94%BA1%E4%B8%81%E7%9B%AE16%E7%95%AA21!5e0!3m2!1sja!2sjp!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="やまと不動産 アクセスマップ"
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <MapPin size={14} style={{ color: "var(--primary)" }} />
              <p style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "14px", color: "var(--text-light)",
              }}>
                {SITE.addressZip} {SITE.address}
              </p>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px", color: "var(--primary)",
                  marginLeft: "8px", textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Google Mapsで開く
              </a>
            </div>
          </section>

          {/* ─── 資格・許可 ─── */}
          <section className="mb-20 md:mb-28" aria-labelledby="license-heading">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              License
            </p>
            <h2 id="license-heading" style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px, 2.6vw, 32px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.6, marginBottom: "24px",
            }}>
              資格・免許
            </h2>
            <div className="rounded-2xl p-7" style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.07)",
            }}>
              <ul className="flex flex-col gap-3">
                {LICENSES.map((lic) => (
                  <li key={lic} className="flex items-center gap-3">
                    <span style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: "var(--green)",
                      flexShrink: 0,
                      display: "block",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "14px", color: "var(--text)",
                      lineHeight: 1.7,
                    }}>
                      {lic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ─── 下部CTA ─── */}
          <div className="text-center flex flex-col items-center gap-6" style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
            paddingTop: "48px",
          }}>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)", lineHeight: 1.9,
            }}>
              ご質問・来場予約はお気軽にどうぞ。<br className="hidden md:block" />
              設計士が直接お答えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 36px", borderRadius: "4px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                来場予約・お問い合わせ
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 transition-colors duration-200"
                style={{
                  height: "52px", padding: "0 28px", borderRadius: "4px",
                  fontSize: "14px", color: "var(--text-light)",
                  border: "1px solid rgba(0,0,0,0.12)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 mt-2 transition-colors duration-200"
              style={{ fontSize: "13px", color: "var(--text-light)", fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)" }}
            >
              <ArrowLeft size={13} />
              トップページに戻る
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
