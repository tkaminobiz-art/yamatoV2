import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Train, ArrowRight, Home, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "対応エリア | 奈良・京都の新築一戸建て",
  description:
    "やまと不動産の対応エリア一覧。奈良市・生駒市・大和郡山市・橿原市・天理市・斑鳩町・京田辺市・田原本町で新築一戸建て・土地の販売を行っています。",
};

/* ── エリアデータ ── */
const AREAS = [
  {
    id: "nara",
    name: "奈良市",
    en: "Nara City",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #2C3E2D 0%, #1C2B1E 100%)",
    stations: ["近鉄奈良駅", "大和西大寺駅", "新大宮駅", "近鉄奈良線 各駅"],
    landPrice: "坪単価 20〜50万円（エリアにより異なる）",
    feature: "奈良県の県庁所在地。世界遺産・歴史的景観と利便性を両立したエリア。",
    strengths: [
      "近鉄・JR奈良駅からのアクセスが良好",
      "大型商業施設・病院が充実",
      "子育て環境・学校区の選択肢が豊富",
    ],
    completedCount: "32棟",
    popularSpots: ["学研奈良登美ヶ丘エリア", "大宮町・二条大路エリア", "西大寺エリア"],
  },
  {
    id: "ikoma",
    name: "生駒市",
    en: "Ikoma City",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #3D3520 0%, #2A2510 100%)",
    stations: ["近鉄生駒駅", "学研奈良登美ヶ丘駅", "東生駒駅"],
    landPrice: "坪単価 18〜40万円",
    feature: "大阪・奈良どちらへもアクセス良好なベッドタウン。子育て世帯に人気。",
    strengths: [
      "大阪難波まで近鉄で約25分",
      "緑豊かで静かな住環境",
      "子育て支援が充実した市政",
    ],
    completedCount: "28棟",
    popularSpots: ["辻町エリア", "小平尾エリア", "学研エリア"],
  },
  {
    id: "ikaruga",
    name: "生駒郡斑鳩町",
    en: "Ikaruga Town",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #4A3C28 0%, #2E2418 100%)",
    stations: ["JR法隆寺駅", "近鉄筒井駅"],
    landPrice: "坪単価 12〜22万円",
    feature: "法隆寺をはじめとする歴史的環境。比較的リーズナブルな土地価格が魅力。",
    strengths: [
      "JR大和路線で大阪方面へアクセス可能",
      "土地価格が奈良市中心部より抑えられる",
      "静かで緑豊かな住環境",
    ],
    completedCount: "14棟",
    popularSpots: ["法隆寺周辺エリア", "昭和エリア"],
  },
  {
    id: "kyotanabe",
    name: "京田辺市",
    en: "Kyotanabe City",
    pref: "京都府",
    gradient: "linear-gradient(135deg, #2C3E4A 0%, #1C2B38 100%)",
    stations: ["近鉄新田辺駅", "JR京田辺駅", "近鉄興戸駅"],
    landPrice: "坪単価 20〜38万円",
    feature: "京都府南部の住宅都市。奈良・大阪・京都へのアクセスが抜群。",
    strengths: [
      "3方向へのアクセスが良い立地",
      "大型商業施設が集積",
      "奈良との県境で価格も比較的お手頃",
    ],
    completedCount: "18棟",
    popularSpots: ["田辺エリア", "興戸エリア", "多々羅エリア"],
  },
  {
    id: "yamato-koriyama",
    name: "大和郡山市",
    en: "Yamato Koriyama City",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #3A4A2A 0%, #28381A 100%)",
    stations: ["近鉄郡山駅", "JR大和小泉駅", "近鉄筒井駅"],
    landPrice: "坪単価 14〜28万円",
    feature: "やまと不動産の地元エリア。自社分譲地が最も充実したエリアです。",
    strengths: [
      "自社分譲地を最多保有",
      "郡山城址・金魚の町としての親しみやすい環境",
      "大阪方面へのアクセス良好",
    ],
    completedCount: "48棟",
    popularSpots: ["矢田町エリア", "下三橋エリア", "筒井エリア"],
    isMain: true,
  },
  {
    id: "kashihara",
    name: "橿原市",
    en: "Kashihara City",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #4A3020 0%, #2E1E10 100%)",
    stations: ["近鉄大和八木駅", "近鉄橿原神宮前駅", "近鉄岡寺駅"],
    landPrice: "坪単価 16〜30万円",
    feature: "橿原神宮をはじめとする奈良南部の拠点都市。交通の要所。",
    strengths: [
      "近鉄大和八木駅が主要路線の乗換駅",
      "大型病院・商業施設が充実",
      "奈良盆地の中心部でアクセス抜群",
    ],
    completedCount: "22棟",
    popularSpots: ["八木エリア", "醍醐エリア", "真菅エリア"],
  },
  {
    id: "tenri",
    name: "天理市",
    en: "Tenri City",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #2A3A4A 0%, #1A2838 100%)",
    stations: ["JR・近鉄天理駅", "近鉄天理線 各駅"],
    landPrice: "坪単価 12〜20万円",
    feature: "天理大学を擁する落ち着いた学術都市。閑静な住環境が人気。",
    strengths: [
      "比較的リーズナブルな土地価格",
      "閑静な住宅地が多い",
      "前栽町などの整備された住環境",
    ],
    completedCount: "16棟",
    popularSpots: ["前栽町エリア", "山田エリア", "勾田エリア"],
  },
  {
    id: "tawaramoto",
    name: "磯城郡田原本町",
    en: "Tawaramoto Town",
    pref: "奈良県",
    gradient: "linear-gradient(135deg, #3A2A20 0%, #281810 100%)",
    stations: ["近鉄田原本駅", "近鉄西田原本駅", "JR三輪駅"],
    landPrice: "坪単価 10〜18万円",
    feature: "奈良盆地の農業地帯。広い土地を比較的手頃な価格で取得できるエリア。",
    strengths: [
      "奈良県内でも土地価格が比較的抑えめ",
      "広い敷地でゆとりある家づくりが可能",
      "静かで落ち着いた住環境",
    ],
    completedCount: "8棟",
    popularSpots: ["田原本エリア", "唐古エリア"],
  },
] as const;

export default function AreaPage() {
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
              Service Area
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px,3.5vw,48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em", lineHeight: 1.4,
              marginBottom: "20px",
            }}>
              奈良・京都で、<br />
              新築一戸建てを建てる。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              やまと不動産は奈良県全域・京都府南部を対応エリアとしています。<br className="hidden md:block" />
              自社分譲地71区画から、通勤・学区・ご予算に合わせてお探しします。
            </p>
          </div>
        </div>

        {/* ─── 実績サマリー ─── */}
        <div style={{ background: "white", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { num: "8", unit: "エリア", label: "奈良・京都の対応エリア" },
                { num: "186", unit: "棟", label: "累計施工実績" },
                { num: "71", unit: "区画", label: "自社分譲地" },
                { num: "2,180", unit: "万円〜", label: "コミコミ価格（税込）" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "clamp(24px,3vw,36px)", color: "var(--primary)",
                    letterSpacing: "0.04em", lineHeight: 1,
                  }}>
                    {s.num}
                    <span style={{ fontSize: "clamp(13px,1.5vw,16px)", marginLeft: "3px" }}>{s.unit}</span>
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "11px", color: "var(--text-light)",
                    letterSpacing: "0.04em", marginTop: "4px",
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── エリア一覧 ─── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <p style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
            textTransform: "uppercase", marginBottom: "8px",
          }}>
            Areas
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
            fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400,
            color: "var(--text)", letterSpacing: "0.05em", marginBottom: "40px",
          }}>
            対応エリア 8市町
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AREAS.map((area) => (
              <div
                key={area.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: area.isMain
                    ? "2px solid rgba(123,101,68,0.4)"
                    : "1px solid rgba(0,0,0,0.07)",
                  boxShadow: area.isMain
                    ? "0 4px 24px rgba(123,101,68,0.12)"
                    : "none",
                }}
              >
                {/* カードヘッダー */}
                <div className="flex items-end p-6" style={{
                  background: area.gradient, minHeight: "100px",
                }}>
                  <div className="flex items-end justify-between w-full">
                    <div>
                      {area.isMain && (
                        <span style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "10px", color: "white",
                          background: "var(--accent)", padding: "2px 8px", borderRadius: "2px",
                          letterSpacing: "0.06em", display: "block", marginBottom: "6px",
                          width: "fit-content",
                        }}>
                          地元エリア・分譲地最多
                        </span>
                      )}
                      <p style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "10px", letterSpacing: "0.14em",
                        color: "rgba(255,255,255,0.5)", marginBottom: "4px",
                      }}>
                        {area.pref} / {area.en}
                      </p>
                      <h3 style={{
                        fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                        fontSize: "clamp(22px,2.5vw,28px)", fontWeight: 400,
                        color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
                      }}>
                        {area.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "22px", color: "rgba(255,255,255,0.9)",
                        letterSpacing: "0.04em", lineHeight: 1,
                      }}>
                        {area.completedCount}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "10px", color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.06em",
                      }}>
                        施工実績
                      </p>
                    </div>
                  </div>
                </div>

                {/* カードボディ */}
                <div className="p-6 flex flex-col gap-5">
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "14px", color: "var(--text-light)", lineHeight: 1.8,
                  }}>
                    {area.feature}
                  </p>

                  {/* 最寄り駅 */}
                  <div className="flex items-start gap-2">
                    <Train size={13} style={{ color: "var(--primary)", marginTop: "3px", flexShrink: 0 }} />
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "var(--text-light)", lineHeight: 1.8,
                    }}>
                      {area.stations.join("・")}
                    </p>
                  </div>

                  {/* 土地価格目安 */}
                  <div className="flex items-center gap-2">
                    <MapPin size={13} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "var(--text-light)",
                    }}>
                      {area.landPrice}
                    </p>
                  </div>

                  {/* 強み */}
                  <ul className="flex flex-col gap-2">
                    {area.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span style={{
                          width: "4px", height: "4px", borderRadius: "50%",
                          background: "var(--green)", marginTop: "8px", flexShrink: 0, display: "block",
                        }} />
                        <span style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "13px", color: "var(--text)", lineHeight: 1.7,
                        }}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* 人気スポット */}
                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "11px", color: "var(--text-light)",
                      letterSpacing: "0.06em", marginBottom: "8px",
                    }}>
                      施工実績が多いエリア
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.popularSpots.map((spot) => (
                        <span key={spot} style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "11px", color: "var(--primary)",
                          background: "rgba(123,101,68,0.08)",
                          padding: "3px 10px", borderRadius: "3px",
                          letterSpacing: "0.04em",
                        }}>
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/contact?area=${area.id}`}
                    className="inline-flex items-center gap-1.5 group mt-1 self-start"
                    style={{
                      fontSize: "13px", color: "var(--primary)",
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      letterSpacing: "0.04em",
                      textDecoration: "underline", textUnderlineOffset: "3px",
                      textDecorationColor: "rgba(123,101,68,0.3)",
                    }}
                  >
                    {area.name}で土地・建物を相談する
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── エリア外の相談も歓迎 ── */}
        <div style={{ background: "var(--wood-light)", paddingTop: "56px", paddingBottom: "56px" }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-10 text-center">
            <Home size={24} style={{ color: "var(--primary)", margin: "0 auto 16px" }} />
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px,2.2vw,24px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em", lineHeight: 1.7, marginBottom: "12px",
            }}>
              上記以外のエリアもご相談ください。
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 1.9, marginBottom: "28px",
            }}>
              奈良県・京都府内であれば、記載エリア以外でも対応できる場合があります。<br className="hidden md:block" />
              まずはお気軽にご相談ください。
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
                LINEで相談する
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 32px", borderRadius: "4px",
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
            </div>
          </div>
        </div>

        {/* ─── 検索キーワード向け関連リンク ── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12">
          <p style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "12px", color: "var(--text-light)",
            letterSpacing: "0.06em", marginBottom: "14px",
          }}>
            エリアから探す
          </p>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <Link
                key={area.id}
                href={`/contact?area=${area.id}`}
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px", color: "var(--text-light)",
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.09)",
                  padding: "5px 14px", borderRadius: "3px",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {area.name}の新築一戸建て
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
