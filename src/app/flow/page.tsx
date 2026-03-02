import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Home, CreditCard, FileText, PenLine,
  Wrench, CheckSquare, Key, Phone, Shield,
  ArrowRight, AlertCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "家づくりの流れ",
  description:
    "やまと不動産の家づくりの流れを18ステップで解説。土地探しから引き渡しまで、相談から入居まで丁寧にご案内します。",
};

/* ── 家づくりの流れ（18ステップ） ── */
const STEPS = [
  {
    no: "01",
    icon: MapPin,
    title: "土地探し",
    desc: "自社分譲地71区画から、通勤・学区に合わせてお探しします。LINEで「土地ありますか？」のひとことから始められます。",
    note: null,
    phase: "準備",
  },
  {
    no: "02",
    icon: Home,
    title: "モデルハウス見学",
    desc: "実際の仕様・広さ・使い勝手を体感いただけます。京・花・風の3棟をご用意。完全予約制・費用不要です。",
    note: null,
    phase: "準備",
  },
  {
    no: "03",
    icon: CreditCard,
    title: "住宅ローン事前審査",
    desc: "ご予算の目安を確認するための事前審査を行います。審査結果をもとに、土地・建物プランをご提案します。",
    note: null,
    phase: "準備",
  },
  {
    no: "04",
    icon: FileText,
    title: "土地売買契約締結",
    desc: "土地が決まったら売買契約を締結します。",
    note: null,
    phase: "契約",
  },
  {
    no: "05",
    icon: PenLine,
    title: "間取りの打ち合わせ開始",
    desc: "専属設計士と、納得いくまで。全邸フルオーダーで間取りを設計します。",
    note: "期間：約3ヶ月 / 当社の設計士と一緒に行います",
    phase: "設計",
  },
  {
    no: "06",
    icon: FileText,
    title: "建物建築工事の請負契約",
    desc: "間取りが確定したら、建築工事の請負契約を締結します。",
    note: null,
    phase: "契約",
  },
  {
    no: "07",
    icon: PenLine,
    title: "建物の打ち合わせ開始",
    desc: "LIXILやTOTO、クリナップのショールームをご見学いただけます。外壁の柄や色・フローリングの色・浴室や洗面台やキッチンの種類・クロスの色等について打ち合わせします。",
    note: "期間：約2ヶ月 / ショールーム見学は丸一日が目安",
    phase: "設計",
  },
  {
    no: "08",
    icon: FileText,
    title: "建築確認申請",
    desc: "建築確認申請を行います。地盤調査・地盤改良工事もこの期間に実施します。地鎮祭をご希望の場合は、この期間にお申し込みください。",
    note: "地盤改良費は全額会社負担（追加費用なし）",
    phase: "申請",
  },
  {
    no: "09",
    icon: CreditCard,
    title: "住宅ローン本申込",
    desc: "金融機関への住宅ローン本申込を行います。",
    note: null,
    phase: "申請",
  },
  {
    no: "10",
    icon: MapPin,
    title: "地盤調査",
    desc: "各種機器を使用した宅地地盤への調査に加え、周辺環境等多方面から徹底した調査を実施します。",
    note: null,
    phase: "工事",
  },
  {
    no: "11",
    icon: Wrench,
    title: "地盤改良",
    desc: "調査の結果に基づき、必要な地盤改良工事（柱状改良等）を行います。地盤改良費は追加費用なしで会社が全額負担します。",
    note: null,
    phase: "工事",
  },
  {
    no: "12",
    icon: Wrench,
    title: "基礎工事着工",
    desc: "基礎掘り方・捨てコンクリート打設・基礎配筋・コンクリート打設と進めます。",
    note: null,
    phase: "工事",
  },
  {
    no: "13",
    icon: CheckSquare,
    title: "建物打ち合わせ完了",
    desc: "建物に関するすべての仕様・設備の最終確認を行います。",
    note: null,
    phase: "工事",
  },
  {
    no: "14",
    icon: Home,
    title: "建物工事着工（上棟）",
    desc: "いよいよ工事着工。上棟後、建築中の写真を毎週LINEでお届けしています。",
    note: "期間：3ヶ月以内",
    phase: "工事",
  },
  {
    no: "15",
    icon: PenLine,
    title: "外構工事打ち合わせ開始",
    desc: "外構（玄関アプローチ・駐車場・フェンス等）の仕様を決定します。",
    note: null,
    phase: "工事",
  },
  {
    no: "16",
    icon: CreditCard,
    title: "銀行との借り入れ契約",
    desc: "建物完成2週間前に、お客様と銀行・司法書士同席のもとで融資に関しての契約を締結します。",
    note: null,
    phase: "引渡",
  },
  {
    no: "17",
    icon: CheckSquare,
    title: "建物完成・お客様チェック",
    desc: "完成した建物を一緒に確認します。気になる点があればこの段階でご指摘ください。",
    note: null,
    phase: "引渡",
  },
  {
    no: "18",
    icon: Key,
    title: "引渡・住宅ローン実行",
    desc: "銀行にて司法書士同席のもと所有権移転手続き等を行い、残代金のお支払い後、鍵をお渡しします。",
    note: null,
    phase: "引渡",
  },
] as const;

/* ── アフターフォロー対応内容 ── */
const AFTER_ITEMS = [
  "蛇口からの水漏れ",
  "異臭がする",
  "水栓の動きが硬い",
  "電気系統のトラブル",
  "壁紙の破損",
  "網戸の張替え希望",
  "扉の閉まり具合が悪い",
  "浄水器のカートリッジ交換",
  "部屋のクリーニング",
  "鍵の開け閉めが困難",
  "畳の交換希望",
  "その他、修理に関するお困りごと",
] as const;

/* フェーズ別カラー */
const PHASE_COLOR: Record<string, string> = {
  準備: "#6B8F71",
  契約: "#C4851F",
  設計: "#7B6544",
  申請: "#4A6B8F",
  工事: "#7B6544",
  引渡: "#C4851F",
};

export default function FlowPage() {
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
              Flow
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
              lineHeight: 1.5, marginBottom: "24px",
            }}>
              相談から入居まで、<br />
              18のステップでご案内します。
            </h1>
            <p style={{
              fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              土地探しから引き渡しまで、同じスタッフが担当します。<br className="hidden md:block" />
              どのステップからでもご相談いただけます。
            </p>
          </div>
        </div>

        {/* ─── ステップ一覧 ─── */}
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="relative">
            {/* タイムライン縦線 */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px hidden md:block" style={{
              background: "linear-gradient(to bottom, rgba(123,101,68,0.15), rgba(123,101,68,0.05))",
            }} />

            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const phaseColor = PHASE_COLOR[step.phase];
                const isLast = i === STEPS.length - 1;
                return (
                  <div key={step.no} className="flex gap-6 md:gap-8" style={{
                    paddingBottom: isLast ? "0" : "32px",
                  }}>
                    {/* 左: ステップ番号・アイコン */}
                    <div className="flex flex-col items-center shrink-0" style={{ width: "56px" }}>
                      <div className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 relative z-10" style={{
                        background: "white",
                        border: `2px solid ${phaseColor}22`,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      }}>
                        <span style={{
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                          fontSize: "9px", color: phaseColor,
                          letterSpacing: "0.08em", lineHeight: 1, marginBottom: "3px",
                        }}>
                          {step.no}
                        </span>
                        <Icon size={16} style={{ color: phaseColor }} />
                      </div>
                    </div>

                    {/* 右: コンテンツ */}
                    <div className="flex-1 pt-2 pb-2" style={{
                      borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.05)",
                      paddingBottom: isLast ? "0" : "28px",
                    }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "10px", color: "white",
                          background: phaseColor,
                          padding: "1px 8px", borderRadius: "2px",
                          letterSpacing: "0.06em",
                        }}>
                          {step.phase}
                        </span>
                      </div>
                      <h2 style={{
                        fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                        fontSize: "clamp(16px,2vw,20px)", fontWeight: 400,
                        color: "var(--text)", letterSpacing: "0.04em",
                        lineHeight: 1.4, marginBottom: "8px",
                      }}>
                        {step.title}
                      </h2>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "14px", color: "var(--text-light)",
                        lineHeight: 1.9,
                      }}>
                        {step.desc}
                      </p>
                      {step.note && (
                        <p className="mt-2 flex items-start gap-1.5" style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "12px", color: phaseColor,
                          lineHeight: 1.7,
                        }}>
                          <span style={{ marginTop: "2px", flexShrink: 0 }}>●</span>
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 諸手続き注意事項 */}
          <div className="mt-12 rounded-xl p-6" style={{
            background: "rgba(196,133,31,0.06)",
            border: "1px solid rgba(196,133,31,0.2)",
          }}>
            <div className="flex items-start gap-3">
              <AlertCircle size={16} style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }} />
              <div>
                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "13px", fontWeight: 500,
                  color: "var(--accent)", marginBottom: "8px", letterSpacing: "0.04em",
                }}>
                  ご注意ください
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "決済後、インターネット回線工事は2ヶ月待ちになることがよくあるため、早めのお申し込みをおすすめします。",
                    "カーテンレールと居室の照明は標準設置ではないため、事前にご用意ください。",
                  ].map((item) => (
                    <li key={item} style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "13px", color: "var(--text-light)", lineHeight: 1.8,
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ─── アフターフォロー ─── */}
        <div style={{ background: "var(--wood-light)", paddingTop: "64px", paddingBottom: "64px" }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-10">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.16em", color: "var(--text-light)",
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              After Follow
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em", marginBottom: "16px",
            }}>
              引き渡し後も、ずっとそばに。
            </h2>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)", lineHeight: 1.9, marginBottom: "32px",
            }}>
              やまと不動産は人とのつながりを大切にしており、アフターフォローを重要視しています。<br />
              引き渡し後もLINEでご相談いただけます。電話1本で翌日対応、定期点検は20年無料です。
            </p>

            {/* 対応内容 */}
            <div className="rounded-xl p-6 mb-8" style={{
              background: "white", border: "1px solid rgba(0,0,0,0.07)",
            }}>
              <p style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "12px", color: "var(--text-light)",
                letterSpacing: "0.08em", marginBottom: "16px",
              }}>
                こんなことにも対応しています
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AFTER_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: "var(--green)", flexShrink: 0, display: "block",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "13px", color: "var(--text)", lineHeight: 1.7,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 保証3種 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: "建物保証", desc: "保険期間中に瑕疵が発生した場合、修理費用が保険金として支払われます。" },
                { icon: Shield, title: "しろあり保証", desc: "土台とその1m上までの防蟻処理を行い、しろあり予防と駆除工事を保証します。" },
                { icon: Shield, title: "地盤保証 20年", desc: "地盤の不均一沈下による建物損害を引き渡し日から20年保証します（ハウスジーメン）。" },
              ].map((g) => {
                const GIcon = g.icon;
                return (
                  <div key={g.title} className="rounded-xl p-5" style={{
                    background: "white", border: "1px solid rgba(0,0,0,0.07)",
                  }}>
                    <div className="flex items-center gap-2 mb-3">
                      <GIcon size={14} style={{ color: "var(--green)" }} />
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px", color: "var(--text)",
                        fontWeight: 500, letterSpacing: "0.04em",
                      }}>
                        {g.title}
                      </p>
                    </div>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "var(--text-light)", lineHeight: 1.8,
                    }}>
                      {g.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── 下部CTA ─── */}
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-20">
          <div className="text-center flex flex-col items-center gap-6">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "15px", color: "var(--text-light)", lineHeight: 1.9,
            }}>
              最初の一歩はLINEから始めませんか？<br className="hidden md:block" />
              設計士が直接お返事いたします。
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
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
