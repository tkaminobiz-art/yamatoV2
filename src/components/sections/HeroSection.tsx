"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

// 花鳥風月シリーズ価格プレビュー
const PRICE_PREVIEW = [
  { name: "京", nameEn: "KYO",  price: "2,180万円〜", id: "kyo"  },
  { name: "花", nameEn: "HANA", price: "2,380万円〜", id: "hana" },
  { name: "風", nameEn: "KAZE", price: "2,380万円〜", id: "kaze" },
] as const;

// Heroスライダー 4枚
// heading: PC用
// headingSp: スマホ用（22px × 375px幅 = 1行約11〜12文字が目安）
const SLIDES = [
  {
    id: "philosophy",
    gradient: "linear-gradient(160deg, #2C1F10 0%, #5A3D1E 35%, #8B6340 65%, #C4A070 100%)",
    label: "やまと不動産について",
    heading: "大切な家族の家だから、\nハウスメーカーの都合で\n高くなっていいはずがない。",
    headingSp: "大切な家族の家だから、\nハウスメーカーの都合で\n高くなっていいはずがない。",
    sub: "その思いが、この会社の始まりです。",
    credit: "代表取締役 古谷 泰彦",
  },
  {
    id: "commitment",
    gradient: "linear-gradient(160deg, #1A2318 0%, #2E3D2A 35%, #4A6045 65%, #7B9474 100%)",
    label: "やまと不動産について",
    heading: "部材ひとつの交渉も、\nお客様に適正価格で\n住んでもらうため。",
    headingSp: "部材ひとつの交渉も、\nお客様に適正価格で\n住んでもらうため。",
    sub: "高いのではなく、余計なものが乗っていない。それがやまとの価格です。",
    credit: "代表取締役専務 小林 敬昌",
  },
  {
    id: "quality",
    gradient: "linear-gradient(160deg, #1E1A12 0%, #3D3220 35%, #6B5535 65%, #B8935A 100%)",
    label: "標準仕様について",
    heading: "旭化成・住友ゴム・クリナップ。\n全部、標準です。",
    headingSp: "旭化成・住友ゴム・\nクリナップ。\n全部、標準です。",
    sub: "大手と同じ素材で建てる家が、2,180万円から。追加費用はありません。",
    credit: null,
  },
  {
    id: "family",
    gradient: "linear-gradient(160deg, #1C1510 0%, #3A2A1A 35%, #6B4F2E 65%, #C4A070 100%)",
    label: "暮らしについて",
    heading: "家族が自然と集まる場所を、\n奈良に作り続けています。",
    headingSp: "家族が自然と集まる\n場所を、奈良に\n作り続けています。",
    sub: "奈良・京都で71区画。一生に一度の家づくりを、一緒に考えます。",
    credit: null,
  },
] as const;

const INTERVAL = 6000; // 6秒

// 価格カード内部の共通コンテンツ
function PriceCardContent({ item }: { item: typeof PRICE_PREVIEW[number] }) {
  return (
    <>
      <div className="flex items-baseline gap-2 mb-2">
        <span style={{ fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)", fontSize: "17px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.95)", fontWeight: 400 }}>
          {item.name}
        </span>
        <span style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "10px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
          {item.nameEn}
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "-0.02em", fontWeight: 300, color: "#E8A840", filter: "drop-shadow(0 0 8px rgba(196,133,31,0.45))", lineHeight: 1, marginBottom: "6px" }}>
        {item.price}
      </div>
      <div style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#6B8F71", fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)" }}>
        コミコミ価格
      </div>
    </>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = SLIDES[current];

  return (
    <section
      ref={ref}
      className="relative flex flex-col min-h-[600px] md:min-h-svh overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* スライド背景 — パララックス */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ background: slide.gradient }}
          />
        </AnimatePresence>
      </motion.div>

      {/* オーバーレイ */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)" }}
        aria-hidden="true"
      />

      {/* プログレスバー */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-6 md:px-10 pt-20 md:pt-24" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className="flex-1 h-0.5 overflow-hidden rounded-full"
            style={{ background: "rgba(255,255,255,0.2)" }}
            aria-label={`スライド ${i + 1}`}
          >
            {i === current && (
              <motion.div
                className="h-full rounded-full"
                style={{ background: "rgba(255,255,255,0.9)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                key={`${s.id}-progress`}
              />
            )}
            {i < current && (
              <div className="h-full w-full rounded-full" style={{ background: "rgba(255,255,255,0.9)" }} />
            )}
          </button>
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-24 md:pt-32 pb-8 md:pb-0">
        {/* スマホ: 左寄せ / PC: 左寄せ（非対称レイアウト） */}
        <div className="flex flex-col items-start">

          {/* スライドラベル */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`label-${slide.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease }}
              className="mb-3 md:mb-6"
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                textTransform: "uppercase",
              }}
            >
              {slide.label}
            </motion.p>
          </AnimatePresence>

          {/* h1 — レスポンシブ（単一要素・CSS clampで制御） */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${slide.id}`}
              id="hero-heading"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease }}
              className="font-serif text-[#FAFAF7] mb-4 md:mb-6 whitespace-pre-line w-full"
              style={{
                fontSize: "clamp(22px, 4.2vw, 56px)",
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                lineHeight: 1.5,
                letterSpacing: "0.04em",
                fontWeight: 400,
              }}
            >
              {slide.heading}
            </motion.h1>
          </AnimatePresence>

          {/* サブコピー */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${slide.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mb-2"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
                lineHeight: 1.8,
                letterSpacing: "0.03em",
                color: "rgba(255,255,255,0.75)",
                maxWidth: "520px",
              }}
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* クレジット（人物スライドのみ） */}
          <AnimatePresence mode="wait">
            {slide.credit ? (
              <motion.p
                key={`credit-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 md:mb-10"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                }}
              >
                — {slide.credit}
              </motion.p>
            ) : (
              <motion.div key={`credit-empty-${slide.id}`} className="mb-6 md:mb-10" style={{ height: "14px" }} />
            )}
          </AnimatePresence>

          {/* CTA — スマホは縦積み・PCは横並び */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            {/* Primary — グラデーション + グロー */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 btn-primary-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{
                height: "52px",
                padding: "0 36px",
                borderRadius: "4px",
                fontSize: "15px",
                fontWeight: 500,
                color: "white",
                letterSpacing: "0.03em",
              }}
            >
              モデルハウスを見に行く
              <ArrowRight size={18} />
            </Link>

            {/* Glass — ダーク背景上のGlassmorphism */}
            <Link
              href="/works"
              className="inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-300 hover:bg-[rgba(255,255,255,0.14)]"
              style={{
                height: "52px",
                padding: "0 32px",
                borderRadius: "4px",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.88)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                letterSpacing: "0.03em",
              }}
            >
              施工事例を見る
            </Link>
          </motion.div>

          {/* ドットナビゲーション */}
          <div className="flex items-center gap-3 mt-8 md:mt-10" role="tablist" aria-label="スライドナビゲーション">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`スライド ${i + 1}`}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 価格プレビューバー — Glassmorphism フローティング */}
      <motion.div
        className="relative z-10 w-full pb-8 md:pb-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease }}
        aria-label="モデルハウス価格一覧"
      >
        {/* ラベル */}
        <p
          className="text-center mb-3 px-6"
          style={{
            fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
          }}
        >
          Model House Series
        </p>

        {/* スマホ: 横スクロール / PC: 横並び固定 */}
        <div className="md:px-10">
          {/* PC表示: max-w固定・中央揃え */}
          <div
            className="hidden md:flex max-w-[760px] mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          >
            {PRICE_PREVIEW.map((item, i) => (
              <Link
                key={item.id}
                href={`/modelhouse#${item.id}`}
                className="group relative flex-1 flex flex-col px-6 py-5 transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset [&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-[rgba(255,255,255,0.08)]"
              >
                <PriceCardContent item={item} />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true">
                  <ArrowRight size={14} style={{ color: "rgba(255,255,255,0.5)" }} />
                </div>
              </Link>
            ))}
          </div>

          {/* スマホ表示: 横スクロール + snap */}
          {/* スマホ: 3列グリッド */}
          <div
            className="md:hidden grid grid-cols-3 gap-2 px-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          >
            {PRICE_PREVIEW.map((item, i) => (
              <Link
                key={item.id}
                href={`/modelhouse#${item.id}`}
                className={`flex flex-col py-4 px-2 ${i < PRICE_PREVIEW.length - 1 ? "border-r border-r-[rgba(255,255,255,0.08)]" : ""}`}
              >
                <PriceCardContent item={item} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
