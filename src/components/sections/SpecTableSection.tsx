"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check, X,
  Layers, Thermometer, ShieldCheck, UtensilsCrossed,
  Bath, Flame, DoorOpen, ChevronsUp, Shovel, Headset, CalendarCheck,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  データ                                                              */
/* ------------------------------------------------------------------ */

const ITEMS = [
  { label: "外壁",     icon: Layers,          yamato: "旭化成パワーボード",    major: "窯業系サイディング" },
  { label: "断熱",     icon: Thermometer,     yamato: "吹付ウレタン断熱",      major: "グラスウール" },
  { label: "耐震",     icon: ShieldCheck,     yamato: "等級3＋MIRAIE標準",     major: "等級3はオプション" },
  { label: "キッチン", icon: UtensilsCrossed, yamato: "クリナップ最上級・食洗機", major: "標準グレード" },
  { label: "浴室",     icon: Bath,            yamato: "TOTOサザナ 1.25坪",     major: "標準ユニットバス" },
  { label: "床暖房",   icon: Flame,           yamato: "大阪ガスヌック 標準",   major: "オプション +50万〜" },
  { label: "玄関ドア", icon: DoorOpen,        yamato: "LIXIL高断熱スマートキー", major: "標準断熱ドア" },
  { label: "建具",     icon: ChevronsUp,      yamato: "ハイドア 2.4m",         major: "一般的な高さ 2.0m" },
  { label: "地盤改良", icon: Shovel,          yamato: "会社が全額負担",        major: "別途 +100〜200万" },
  { label: "アフター", icon: Headset,         yamato: "電話1本 翌日対応",      major: "数日待ちになることも" },
  { label: "定期点検", icon: CalendarCheck,   yamato: "20年 無料",             major: "10年（延長有料）" },
] as const;

/* ------------------------------------------------------------------ */
/*  サブコンポーネント                                                   */
/* ------------------------------------------------------------------ */

function RowItem({
  item,
  index,
}: {
  item: (typeof ITEMS)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center"
      style={{
        /* 3列: ラベル | やまと(広め) | 大手(狭め) */
        gridTemplateColumns: "40px 1fr 1fr",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        paddingTop: "8px",
        paddingBottom: "8px",
        minHeight: "44px",
      }}
    >
      {/* 左: アイコン + ラベル */}
      <div className="flex flex-col items-center gap-0.5">
        <Icon size={14} style={{ color: "rgba(0,0,0,0.28)" }} />
        <span
          style={{
            fontSize: "9px",
            color: "rgba(0,0,0,0.35)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            letterSpacing: "0.03em",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {item.label}
        </span>
      </div>

      {/* 中: やまと — 強調 */}
      <div
        className="flex items-center gap-1 rounded-md"
        style={{
          background: "rgba(196,146,26,0.07)",
          padding: "5px 7px",
          marginRight: "4px",
        }}
      >
        <Check
          size={11}
          style={{ color: "var(--green)", flexShrink: 0 }}
          aria-hidden="true"
        />
        <span
          style={{
            fontSize: "11px",
            color: "var(--text)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontWeight: 500,
            lineHeight: 1.4,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.yamato}
        </span>
      </div>

      {/* 右: 大手 — 控えめ */}
      <div className="flex items-center gap-1 px-1.5">
        <X
          size={10}
          style={{ color: "rgba(0,0,0,0.18)", flexShrink: 0 }}
          aria-hidden="true"
        />
        <span
          style={{
            fontSize: "10px",
            color: "rgba(0,0,0,0.32)",
            fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            fontWeight: 400,
            lineHeight: 1.4,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.major}
        </span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  メインコンポーネント                                                 */
/* ------------------------------------------------------------------ */

export function SpecTableSection() {
  return (
    <section
      className="pt-12 pb-16 md:pt-16 md:pb-24"
      style={{ background: "var(--bg)" }}
      aria-label="やまと不動産と大手ハウスメーカーの仕様比較"
    >
      <div className="max-w-[900px] mx-auto px-4 md:px-10">

        {/* ━━━ ダッシュボードカード本体 ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            boxShadow: "var(--shadow-card-lg)",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* ── ヘッダー行 ── */}
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "40px 1fr 1fr",
              background: "var(--primary)",
              padding: "14px 0",
            }}
          >
            {/* 空白 */}
            <div />

            {/* やまと */}
            <div style={{ padding: "0 10px", marginRight: "6px" }}>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                }}
              >
                Standard
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.95)",
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}
              >
                やまと不動産
              </p>
            </div>

            {/* 大手 */}
            <div style={{ padding: "0 6px" }}>
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.22)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  textTransform: "uppercase",
                  marginBottom: "3px",
                }}
              >
                Typical
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.38)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                大手ハウスメーカー
              </p>
            </div>
          </div>

          {/* ── 比較行リスト ── */}
          <div className="px-3 md:px-5">
            {ITEMS.map((item, i) => (
              <RowItem key={item.label} item={item} index={i} />
            ))}
          </div>

          {/* ── 総額フッター ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid items-stretch"
            style={{
              gridTemplateColumns: "40px 1fr 1fr",
              borderTop: "2px solid rgba(0,0,0,0.06)",
              marginTop: "4px",
            }}
          >
            {/* ラベル */}
            <div
              className="flex flex-col items-center justify-center gap-1 px-2 py-5"
              style={{ background: "rgba(0,0,0,0.02)" }}
            >
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(0,0,0,0.35)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.06em",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                総額目安<br />（30坪）
              </span>
            </div>

            {/* やまと総額 */}
            <div
              className="flex flex-col justify-center gap-1 px-4 py-5"
              style={{
                background: "linear-gradient(135deg, rgba(196,146,26,0.06) 0%, rgba(196,146,26,0.12) 100%)",
                marginRight: "8px",
                borderRadius: "0 0 0 8px",
              }}
            >
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                コミコミ価格
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "clamp(1.4rem,3vw,2rem)",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                2,180<span style={{ fontSize: "0.55em", fontWeight: 500, letterSpacing: 0 }}>万〜</span>
              </p>
              <p style={{ fontSize: "11px", color: "var(--text-light)", marginTop: "2px" }}>
                税込・追加費用なし
              </p>
            </div>

            {/* 大手総額 */}
            <div
              className="flex flex-col justify-center gap-1 px-4 py-5"
            >
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  color: "rgba(0,0,0,0.3)",
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                目安
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "clamp(1.1rem,2.2vw,1.5rem)",
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.3)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(0,0,0,0.15)",
                }}
              >
                3,500<span style={{ fontSize: "0.6em", letterSpacing: 0 }}>万〜</span>
              </p>
              <p style={{ fontSize: "11px", color: "rgba(0,0,0,0.25)", marginTop: "2px" }}>
                ※諸費用別途のケース多数
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── キャプション + 標準仕様ページリンク ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 flex flex-col items-center gap-4"
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(0,0,0,0.3)",
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
            }}
          >
            やまと不動産の標準仕様を、大手ハウスメーカーと比べてみてください。
          </p>
          <Link
            href="/standard"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 group"
            style={{
              fontSize: "13px",
              color: "var(--primary)",
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              letterSpacing: "0.04em",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "rgba(123,101,68,0.35)",
            }}
          >
            各仕様の詳細・採用理由を見る
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
