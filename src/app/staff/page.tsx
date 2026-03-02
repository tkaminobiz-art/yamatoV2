import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description:
    "やまと不動産のスタッフを紹介します。営業・設計・工務・経理、19名のチームが家づくりをサポートします。",
};

/* ── 代表2名（詳細表示） ── */
const DIRECTORS = [
  {
    id: "kobayashi",
    name: "小林 敬昌",
    nameEn: "KOBAYASHI HIROMASA",
    role: "代表取締役",
    hometown: "奈良県奈良市",
    hobbies: "ダイビング・空手・ゴルフ",
    gradient: "linear-gradient(145deg, #2C3E2D 0%, #1C2B1E 100%)",
    message:
      "「大手と同じ素材で建てて、なぜ価格が違うのか」——その問いへの答えが、やまと不動産の出発点です。中間マージンを省けば、施主に返せるお金がある。その仕組みを作ることが私の仕事です。\n\n材料の仕入れ交渉から職人さんとのやり取りまで、すべての決済に私が関わっています。お客様から「あの値段で本当にこの品質が出せるのか？」と聞かれたとき、胸を張って「出せます」と言えるのは、そういう現場があるからです。",
    values: ["材料の仕入れから品質管理まで直接関与", "価格の透明性にこだわった家づくり", "地元・奈良の職人との長期的な信頼関係"],
  },
  {
    id: "furuya",
    name: "古谷 泰彦",
    nameEn: "FURUYA YASUHIKO",
    role: "代表取締役",
    hometown: "奈良県生駒市",
    hobbies: "釣り（特に海釣り）・ゴルフ",
    gradient: "linear-gradient(145deg, #4A3C28 0%, #2E2418 100%)",
    message:
      "一生に一度の家づくりで、後悔してほしくない。それだけです。\n\n大手ハウスメーカーで家を建てようとすると、営業・設計・現場監督・アフター担当と、窓口が何人も変わります。そのたびに話を繰り返すストレスを感じたことがある方も多いのではないでしょうか。やまと不動産では、最初から最後まで担当者が変わりません。\n\n「自分が住む家を建ててもらうなら、この人に頼みたい」と思ってもらえる会社であり続けることが、私の目標です。",
    values: ["担当者が変わらない一貫体制", "お客様との長期的な関係構築", "奈良の地域に根ざした家づくり"],
  },
] as const;

/* ── その他スタッフ（カードグリッド） ── */
const STAFF_MEMBERS = [
  { name: "田中 信次",         nameEn: "TANAKA SHINJI",      dept: "営業本部長",          hometown: "奈良県奈良市",   hobbies: "ゴルフ・子供と遊ぶこと",                     initial: "田", color: "#2C3E2D" },
  { name: "山岡 洋一",         nameEn: "YAMAOKA YOICHI",     dept: "京都支店 支店長",     hometown: "奈良県橿原市",   hobbies: "スポーツ観戦・映画鑑賞・ゴルフ",             initial: "山", color: "#3A4A2A" },
  { name: "西口・クロフォード・丈", nameEn: "NISHIGUCHI JO",   dept: "営業課長",            hometown: "—",             hobbies: "ゴルフ・バスケット・野球",                   initial: "西", color: "#4A3C28" },
  { name: "柏崎 修平",         nameEn: "KASHIZAKI SHUHEI",   dept: "本店営業部",          hometown: "奈良県天理市",   hobbies: "車・バイク・釣り",                           initial: "柏", color: "#2C3E2D" },
  { name: "三野 雄資",         nameEn: "MINO YUSUKE",        dept: "営業部",              hometown: "兵庫県神戸市",   hobbies: "寺社仏閣巡り・スポーツ観戦・犬猫と遊ぶ",    initial: "三", color: "#3D3520" },
  { name: "入江 将大",         nameEn: "IRIE MASAHIRO",      dept: "本社工務部 部長",     hometown: "奈良県奈良市",   hobbies: "ゴルフ・サッカー",                           initial: "入", color: "#2C3E2D" },
  { name: "澤 佳純",           nameEn: "SAWA KASUMI",        dept: "本店工務部",          hometown: "京都府精華町",   hobbies: "動画鑑賞",                                   initial: "澤", color: "#4A3C28" },
  { name: "稲塚 康員",         nameEn: "INAZUKA YASUKAZU",   dept: "本店工務部",          hometown: "奈良県奈良市",   hobbies: "—",                                          initial: "稲", color: "#3A4A2A" },
  { name: "尾田 洋基",         nameEn: "ODA HIROKI",         dept: "本社工務部",          hometown: "奈良県大和郡山市", hobbies: "バイク・ゴルフ・野球観戦",                 initial: "尾", color: "#2C3E2D" },
  { name: "栗野 佑也",         nameEn: "KURINO YUYA",        dept: "住宅設計部 責任者",   hometown: "奈良県橿原市",   hobbies: "読書・家族でお出かけ",                       initial: "栗", color: "#3D3520" },
  { name: "岩佐 篤志",         nameEn: "IWASA ATSUSHI",      dept: "建築設計部",          hometown: "奈良県橿原市",   hobbies: "野球・DIY・間取りを考えること",              initial: "岩", color: "#4A3C28" },
  { name: "河野 英宣",         nameEn: "KONO HIDENOBU",      dept: "開発設計部 部長",     hometown: "京都府伏見区",   hobbies: "バイク",                                     initial: "河", color: "#2C3E2D" },
  { name: "和田 詩織",         nameEn: "WADA SHIORI",        dept: "経理",                hometown: "奈良県奈良市",   hobbies: "オタ活・推し活",                             initial: "和", color: "#3A4A2A" },
  { name: "森下 嘉久",         nameEn: "MORISHITA YOSHIHISA",dept: "本店 土木部 部長",    hometown: "奈良県",         hobbies: "ゴルフ・釣り・旅行",                         initial: "森", color: "#2C3E2D" },
  { name: "イスル サンパツ",   nameEn: "ISURU SAMPATS",      dept: "土木部・工務部",      hometown: "—",             hobbies: "空手",                                       initial: "イ", color: "#4A3C28" },
  { name: "久我 英一",         nameEn: "KUGA EIICHI",        dept: "顧問",                hometown: "兵庫県",         hobbies: "ゴルフ",                                     initial: "久", color: "#3D3520" },
  { name: "多口 典子",         nameEn: "TAGUCHI NORIKO",     dept: "監査役員",            hometown: "奈良県奈良市",   hobbies: "ゴルフ",                                     initial: "多", color: "#2C3E2D" },
] as const;

export default function StaffPage() {
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
              Our Staff
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
              lineHeight: 1.5, marginBottom: "24px",
            }}>
              家を建てる前に、<br />
              担当者の顔を見てください。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              一生に一度の家づくりです。どんな人が建てるのかを、<br className="hidden md:block" />
              ご相談の前にどうかご確認ください。
            </p>
          </div>
        </div>

        {/* ─── 代表2名（詳細） ─── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <p style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
            textTransform: "uppercase", marginBottom: "40px",
          }}>
            Directors
          </p>
          <div className="flex flex-col gap-20 md:gap-28">
            {DIRECTORS.map((person, i) => (
              <article key={person.id} className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  {/* 写真プレースホルダー */}
                  <div
                    className="shrink-0 rounded-xl overflow-hidden"
                    style={{
                      width: "160px", height: "200px",
                      background: person.gradient,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                    aria-label={`${person.name}の写真（準備中）`}
                  >
                    <span style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "40px", color: "rgba(255,255,255,0.2)", fontWeight: 400,
                    }}>
                      {person.name.charAt(0)}
                    </span>
                  </div>

                  {/* 名前・基本情報 */}
                  <div className="flex flex-col justify-center gap-3">
                    <p style={{
                      fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                      fontSize: "10px", letterSpacing: "0.14em", color: "var(--text-light)",
                      textTransform: "uppercase", marginBottom: "2px",
                    }}>
                      {person.nameEn}
                    </p>
                    <h2 style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "clamp(22px,3vw,32px)", fontWeight: 400,
                      color: "var(--text)", letterSpacing: "0.08em", lineHeight: 1.3,
                    }}>
                      {person.name}
                    </h2>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "13px", color: "var(--accent)", letterSpacing: "0.04em",
                    }}>
                      {person.role}
                    </p>
                    <div style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "var(--text-light)", lineHeight: 2,
                    }}>
                      <span>出身：{person.hometown}　</span>
                      <span>趣味：{person.hobbies}</span>
                    </div>
                  </div>
                </div>

                {/* メッセージ */}
                <div className="rounded-xl p-8" style={{
                  background: i === 0 ? "rgba(28,43,30,0.04)" : "rgba(123,101,68,0.05)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "15px", color: "var(--text)", lineHeight: 2, whiteSpace: "pre-line",
                  }}>
                    {person.message}
                  </p>
                </div>

                {/* 大切にしていること */}
                <div>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "11px", color: "var(--text-light)",
                    letterSpacing: "0.08em", marginBottom: "12px",
                  }}>
                    大切にしていること
                  </p>
                  <ul className="flex flex-col gap-2">
                    {person.values.map((v) => (
                      <li key={v} className="flex items-start gap-3">
                        <span style={{
                          width: "4px", height: "4px", borderRadius: "50%",
                          background: "var(--primary)", marginTop: "10px", flexShrink: 0, display: "block",
                        }} />
                        <span style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "14px", color: "var(--text)", lineHeight: 1.8,
                        }}>
                          {v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {i < DIRECTORS.length - 1 && (
                  <hr style={{ borderColor: "rgba(0,0,0,0.07)", marginTop: "8px" }} />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* ─── スタッフ一覧（カードグリッド） ─── */}
        <div style={{ background: "var(--wood-light)", paddingTop: "64px", paddingBottom: "64px" }}>
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              Our Team
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.06em", marginBottom: "40px",
            }}>
              家づくりを支える19名のチーム
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {STAFF_MEMBERS.map((s) => (
                <div
                  key={s.nameEn}
                  className="rounded-xl p-5 flex flex-col gap-3"
                  style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {/* アバター */}
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "8px",
                    background: `linear-gradient(135deg, ${s.color} 0%, ${s.color}99 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "18px", color: "rgba(255,255,255,0.6)", fontWeight: 400,
                    }}>
                      {s.initial}
                    </span>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "10px", color: "var(--text-light)", letterSpacing: "0.06em",
                      marginBottom: "3px",
                    }}>
                      {s.dept}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      fontSize: "15px", color: "var(--text)", letterSpacing: "0.05em",
                      fontWeight: 400,
                    }}>
                      {s.name}
                    </p>
                  </div>

                  {s.hobbies !== "—" && (
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "11px", color: "var(--text-light)", lineHeight: 1.6,
                    }}>
                      {s.hobbies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── ページ下部CTA ─── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-10">
          <div
            className="my-20 text-center flex flex-col items-center gap-6"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: "48px" }}
          >
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)", lineHeight: 1.9,
            }}>
              実際に会って話してみませんか。<br className="hidden md:block" />
              モデルハウスでのご相談は、完全予約制・費用不要です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 32px", borderRadius: "4px",
                  fontSize: "15px", background: "#06C755",
                  boxShadow: "0 4px 16px rgba(6,199,85,0.28)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                <MessageCircle size={16} />
                LINEで相談する
              </Link>
              <Link
                href="/contact?type=visit"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px", padding: "0 32px", borderRadius: "4px",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                来場予約をする
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
              style={{
                fontSize: "13px", color: "var(--text-light)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              }}
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
