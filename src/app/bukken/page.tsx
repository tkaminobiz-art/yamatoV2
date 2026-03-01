"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Train,
  Home,
  ArrowRight,
  Users,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import {
  BUKKEN_LIST,
  BUILD_PRICES,
  getAreas,
  getActiveBukken,
  type Bukken,
  type BukkenStatus,
} from "@/lib/bukken";

/* ── 定数 ── */
const ALL_AREAS = ["すべて", ...getAreas(BUKKEN_LIST)] as const;
const STATUS_COLORS: Record<BukkenStatus, { bg: string; text: string; dot: string }> = {
  募集中:     { bg: "rgba(107,143,113,0.12)", text: "#3A6B40",  dot: "#6B8F71" },
  残りわずか: { bg: "rgba(196,133,31,0.12)",  text: "#8B5E10",  dot: "#C4851F" },
  完売:       { bg: "rgba(100,100,100,0.10)", text: "#666666",  dot: "#999999" },
};

/* ── 物件カード ── */
function BukkenCard({ b }: { b: Bukken }) {
  const sc = STATUS_COLORS[b.status];
  const totalKyo  = b.landPrice != null ? b.landPrice + BUILD_PRICES.kyo  : null;
  const totalHana = b.landPrice != null ? b.landPrice + BUILD_PRICES.hana : null;
  const isSoldOut = b.status === "完売";
  const mainPhoto = b.photos[0] ?? null;

  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        opacity: isSoldOut ? 0.55 : 1,
      }}
    >
      {/* ── 写真エリア ── */}
      <div
        className="relative"
        style={{
          paddingBottom: "62%",
          overflow: "hidden",
          background: "#1C2B1E",
        }}
      >
        {mainPhoto && (
          <Image
            src={mainPhoto}
            alt={b.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="object-cover"
            style={{ transition: "transform 0.4s ease" }}
          />
        )}
        {/* ステータスバッジ */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            background: sc.bg,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: `1px solid ${sc.dot}30`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: sc.dot }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: sc.text,
            }}
          >
            {b.status}
          </span>
        </div>

        {/* 残り区画 */}
        {!isSoldOut && (
          <div
            className="absolute top-3 right-3 flex flex-col items-end"
          >
            <div
              className="flex items-baseline gap-0.5 px-3 py-1 rounded-full"
              style={{
                background: "rgba(28,28,28,0.55)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {b.remainingLots}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1,
                }}
              >
                /{b.totalLots}区画
              </span>
            </div>
          </div>
        )}

        {/* エリア名（下部） */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "0.06em",
            }}
          >
            {b.name}
          </p>
        </div>
      </div>

      {/* ── 本文エリア ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* アクセス */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Train size={13} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "13px",
                color: "var(--text-light)",
                letterSpacing: "0.02em",
              }}
            >
              {b.station}　{b.stationAccess}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={13} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
            <span
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "12px",
                color: "var(--text-light)",
                letterSpacing: "0.02em",
              }}
            >
              {b.address}
            </span>
          </div>
        </div>

        {/* コンセプト文 */}
        <p
          style={{
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "var(--text)",
            letterSpacing: "0.03em",
          }}
        >
          {b.concept}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-2">
          {b.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded"
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "11px",
                background: "var(--wood-light)",
                color: "var(--primary)",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 土地面積 */}
        <div
          className="flex items-center gap-4 pt-1"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: "12px",
          }}
        >
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "10px",
                color: "var(--text-light)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              土地面積
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--text)",
              }}
            >
              {b.landTsubo}
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--text-light)",
                  marginLeft: "2px",
                }}
              >
                坪 / {b.landM2}㎡
              </span>
            </span>
          </div>
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "10px",
                color: "var(--text-light)",
                letterSpacing: "0.06em",
              }}
            >
              建ぺい率／容積率
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                fontSize: "13px",
                color: "var(--text-light)",
              }}
            >
              {b.coverageRatio}%／{b.floorAreaRatio}%
            </span>
          </div>
        </div>

        {/* 価格ブロック */}
        {!isSoldOut ? (
          <div
            className="rounded-xl p-4 flex flex-col gap-3"
            style={{ background: "var(--wood-light)" }}
          >
            {/* 土地価格 */}
            <div className="flex items-baseline justify-between">
              <span
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px",
                  color: "var(--text-light)",
                }}
              >
                土地価格
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--primary)",
                }}
              >
                {b.landPrice != null ? b.landPrice.toLocaleString() : "—"}
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text-light)",
                    marginLeft: "2px",
                  }}
                >
                  万円
                </span>
              </span>
            </div>

            {/* 建物込み総額 */}
            {totalKyo != null && totalHana != null && (
              <div
                style={{
                  borderTop: "1px solid rgba(123,101,68,0.15)",
                  paddingTop: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "11px",
                    color: "var(--text-light)",
                    marginBottom: "8px",
                    letterSpacing: "0.04em",
                  }}
                >
                  建物込み・コミコミ総額（税込）
                </p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                        fontSize: "11px",
                        background: "rgba(123,101,68,0.15)",
                        color: "var(--primary)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      京 KYO
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {totalKyo.toLocaleString()}
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--text-light)",
                          marginLeft: "2px",
                        }}
                      >
                        万円〜
                      </span>
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span
                      className="px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                        fontSize: "11px",
                        background: "rgba(196,133,31,0.12)",
                        color: "#8B5E10",
                        letterSpacing: "0.08em",
                      }}
                    >
                      花・風 HANA / KAZE
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "var(--text)",
                      }}
                    >
                      {totalHana.toLocaleString()}
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--text-light)",
                          marginLeft: "2px",
                        }}
                      >
                        万円〜
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className="rounded-xl p-4 text-center"
            style={{
              background: "rgba(100,100,100,0.06)",
              border: "1px solid rgba(100,100,100,0.12)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "14px",
                color: "#999999",
              }}
            >
              完売いたしました
            </p>
          </div>
        )}

        {/* CTAボタン */}
        {!isSoldOut && (
          <Link
            href={`/contact?area=${b.id}&type=visit`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all duration-200 group"
            style={{
              background: "var(--primary)",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#6A5538";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--primary)";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "14px",
                letterSpacing: "0.04em",
              }}
            >
              この物件について相談する
            </span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        )}
      </div>
    </article>
  );
}

/* ── メインページ ── */
export default function BukkenPage() {
  const [selectedArea, setSelectedArea] = useState<string>("すべて");
  const [selectedStatus, setSelectedStatus] = useState<string>("すべて");
  const [isAreaOpen, setIsAreaOpen] = useState(false);

  const filtered = BUKKEN_LIST.filter((b) => {
    const areaOk = selectedArea === "すべて" || b.area === selectedArea;
    const statusOk =
      selectedStatus === "すべて" || b.status === selectedStatus;
    return areaOk && statusOk;
  });

  const activeLots = getActiveBukken(BUKKEN_LIST)
    .reduce((acc, b) => acc + (b.remainingLots ?? 0), 0);

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>
        {/* ── ヒーロー ── */}
        <div
          style={{
            background: "linear-gradient(to bottom, #1C2B1E 0%, #111A13 100%)",
            paddingTop: "72px",
            paddingBottom: "72px",
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p
              style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Properties
            </p>
            <h1
              className="font-serif"
              style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.35,
                letterSpacing: "0.04em",
                marginBottom: "20px",
              }}
            >
              自社分譲地一覧
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "clamp(14px,1.6vw,16px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.04em",
              }}
            >
              やまと不動産が自社で開発した分譲地のご案内です。<br className="hidden md:block" />
              土地の仕入れから造成・建築まで一貫して手がけるため、中間マージンが発生しません。
            </p>

            {/* サマリー数字 */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { num: "71", unit: "区画", label: "総分譲区画数" },
                { num: String(activeLots), unit: "区画", label: "現在販売中" },
                { num: "8", unit: "エリア", label: "対応エリア" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "32px",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {s.unit}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.06em",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── フィルターバー ── */}
        <div
          style={{
            background: "#FFFFFF",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            position: "sticky",
            top: "80px",
            zIndex: 20,
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-3 flex flex-wrap items-center gap-3">
            {/* エリア選択（ドロップダウン） */}
            <div className="relative">
              <button
                onClick={() => setIsAreaOpen(!isAreaOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  background: selectedArea !== "すべて" ? "var(--wood-light)" : "rgba(0,0,0,0.04)",
                  border: `1px solid ${selectedArea !== "すべて" ? "rgba(123,101,68,0.3)" : "rgba(0,0,0,0.1)"}`,
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "13px",
                  color: selectedArea !== "すべて" ? "var(--primary)" : "var(--text)",
                  letterSpacing: "0.03em",
                }}
              >
                <MapPin size={13} />
                {selectedArea}
                <ChevronDown
                  size={13}
                  style={{
                    transform: isAreaOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {isAreaOpen && (
                <div
                  className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    minWidth: "160px",
                    zIndex: 30,
                  }}
                >
                  {ALL_AREAS.map((area) => (
                    <button
                      key={area}
                      onClick={() => {
                        setSelectedArea(area);
                        setIsAreaOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 transition-colors hover:bg-[var(--wood-light)]"
                      style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px",
                        color: area === selectedArea ? "var(--primary)" : "var(--text)",
                        fontWeight: area === selectedArea ? 500 : 400,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ステータスフィルター */}
            <div className="flex gap-2">
              {(["すべて", "募集中", "残りわずか"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStatus(s)}
                  className="px-3 py-2 rounded-lg transition-all text-[13px]"
                  style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    background:
                      selectedStatus === s
                        ? "var(--primary)"
                        : "rgba(0,0,0,0.04)",
                    color: selectedStatus === s ? "#FFFFFF" : "var(--text-light)",
                    border: `1px solid ${selectedStatus === s ? "var(--primary)" : "rgba(0,0,0,0.1)"}`,
                    letterSpacing: "0.03em",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* 件数表示 */}
            <div className="ml-auto">
              <span
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px",
                  color: "var(--text-light)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--primary)",
                  }}
                >
                  {filtered.length}
                </span>
                &nbsp;件表示
              </span>
            </div>
          </div>
        </div>

        {/* ── 物件グリッド ── */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-16">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b) => (
                <BukkenCard key={b.id} b={b} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <Home
                size={40}
                style={{ color: "var(--text-light)", margin: "0 auto 16px" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "15px",
                  color: "var(--text-light)",
                }}
              >
                条件に合う物件が見つかりませんでした。
              </p>
              <button
                onClick={() => {
                  setSelectedArea("すべて");
                  setSelectedStatus("すべて");
                }}
                className="mt-4 text-sm underline"
                style={{ color: "var(--primary)", textUnderlineOffset: "3px" }}
              >
                条件をリセットする
              </button>
            </div>
          )}
        </div>

        {/* ── CSVデータ更新バナー（管理者向け案内） ── */}
        <div
          className="max-w-[1100px] mx-auto px-6 md:px-10 pb-8"
        >
          <div
            className="rounded-xl px-6 py-4 flex items-center gap-3"
            style={{
              background: "rgba(123,101,68,0.06)",
              border: "1px dashed rgba(123,101,68,0.3)",
            }}
          >
            <Users size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "12px",
                color: "var(--text-light)",
                lineHeight: 1.7,
              }}
            >
              物件情報は随時更新しています。最新の区画状況・価格はお電話またはLINEでご確認ください。
            </p>
          </div>
        </div>

        {/* ── 下部CTA ── */}
        <div
          style={{
            background: "var(--wood-light)",
            paddingTop: "64px",
            paddingBottom: "64px",
          }}
        >
          <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center flex flex-col gap-6">
            <p
              style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(20px,3vw,28px)",
                fontWeight: 400,
                color: "var(--text)",
                lineHeight: 1.5,
                letterSpacing: "0.04em",
              }}
            >
              「予算と希望に合う土地を<br />探してほしい」
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--text-light)",
              }}
            >
              掲載以外の土地情報もございます。通勤・学区・ご予算を
              お聞かせいただければ、担当者が一緒にお探しします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.lineUrl}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all"
                style={{
                  background: "#06C755",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "15px",
                  letterSpacing: "0.03em",
                  fontWeight: 500,
                }}
              >
                <MessageCircle size={18} />
                LINEで土地を相談する
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all"
                style={{
                  background: "#FFFFFF",
                  color: "var(--text)",
                  border: "1px solid rgba(0,0,0,0.12)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "15px",
                  letterSpacing: "0.06em",
                }}
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "12px",
                color: "var(--text-light)",
              }}
            >
              {SITE.businessHours}　しつこい営業・勧誘は一切行いません。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
