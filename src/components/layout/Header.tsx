"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  メガメニュー構成                                                   */
/* ------------------------------------------------------------------ */
const MEGA_NAV = [
  {
    label: "家づくり",
    items: [
      { label: "コンセプト",     href: "/concept",    desc: "なぜ大手と同じ品質で安いのか" },
      { label: "モデルハウス",   href: "/modelhouse", desc: "花鳥風月 3棟を実物でご確認" },
      { label: "標準仕様",       href: "/standard",   desc: "パワーボード・MIRAIE・クリナップ" },
      { label: "家づくりの流れ", href: "/flow",       desc: "相談から入居まで5ステップ" },
    ],
  },
  {
    label: "実例・間取り",
    items: [
      { label: "施工事例",   href: "/works",  desc: "奈良・京都の実際の建築事例" },
      { label: "間取り集",   href: "/madori", desc: "28〜35坪の実例プランを紹介" },
    ],
  },
  {
    label: "土地・エリア",
    items: [
      { label: "自社分譲地",   href: "/bukken", desc: "自社分譲地71区画・最新物件一覧" },
      { label: "対応エリア",   href: "/area",   desc: "奈良・京都8市町の施工実績・土地情報" },
    ],
  },
  {
    label: "会社情報",
    items: [
      { label: "会社概要",     href: "/company", desc: "経営理念・会社概要・アクセス" },
      { label: "スタッフ紹介", href: "/staff",   desc: "家づくりを担う担当者のご紹介" },
    ],
  },
] as const;

/* 単独リンク（ドロップダウンなし） */
const SINGLE_NAV_ITEMS = [
  { label: "イベント",         href: "/event" },
  { label: "来場予約・相談",   href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  DropdownMenu サブコンポーネント                                     */
/* ------------------------------------------------------------------ */
function DropdownMenu({
  group,
  scrolled,
}: {
  group: (typeof MEGA_NAV)[number];
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    /* 100ms の猶予を与えてパネルへの移動を許容する */
    closeTimer.current = setTimeout(() => setOpen(false), 100);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const textColor = scrolled ? "var(--text)" : "rgba(255,255,255,0.85)";
  const hoverUnderline = scrolled ? "var(--primary)" : "rgba(255,255,255,0.7)";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* トリガーボタン */}
      <button
        className="flex items-center gap-1 text-sm transition-colors duration-300 relative group py-1"
        style={{ letterSpacing: "0.04em", color: textColor }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          size={13}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
        {/* ホバーアンダーライン */}
        <span
          className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
          style={{
            background: hoverUnderline,
            width: open ? "100%" : "0%",
          }}
        />
      </button>

      {/*
        ボタンとパネルの間を埋める透明ブリッジ。
        これがあることでマウスがギャップを通過しても mouseLeave が発火しない。
      */}
      <div
        className="absolute top-full left-0 right-0"
        style={{ height: "12px" }}
        aria-hidden="true"
      />

      {/* ドロップダウンパネル — top-full + padding-top:12px でギャップを視覚的に再現 */}
      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 rounded-xl overflow-hidden transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        )}
        style={{
          minWidth: "220px",
          marginTop: "12px",
          background: "rgba(252,250,247,0.97)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
        role="menu"
      >
        {/* 上部アクセントライン */}
        <div style={{
          height: "2px",
          background: "linear-gradient(90deg, var(--primary), var(--accent))",
        }} />

        <div className="py-2">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="flex flex-col gap-0.5 px-5 py-3 transition-colors duration-150 group/item hover:bg-[rgba(123,101,68,0.06)]"
              onClick={() => setOpen(false)}
            >
              <span
                className="text-sm font-medium transition-colors duration-150 group-hover/item:text-primary"
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  color: "var(--text)",
                  letterSpacing: "0.03em",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "11px",
                  color: "var(--text-light)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MobileAccordion サブコンポーネント                                  */
/* ------------------------------------------------------------------ */
function MobileAccordion({
  group,
  onClose,
}: {
  group: (typeof MEGA_NAV)[number];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <button
        className="w-full flex items-center justify-between py-4 transition-colors"
        style={{
          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
          fontSize: "15px",
          color: "var(--text)",
          letterSpacing: "0.03em",
        }}
        onClick={() => setOpen(!open)}
      >
        {group.label}
        <ChevronDown
          size={16}
          style={{
            color: "var(--text-light)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.25s ease",
        }}
      >
        <div className="flex flex-col pb-2">
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 py-3 pl-4 transition-colors hover:text-primary"
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "14px",
                color: "var(--text-light)",
                letterSpacing: "0.03em",
              }}
              onClick={onClose}
            >
              <span style={{
                width: "4px", height: "4px", borderRadius: "50%",
                background: "var(--primary)", flexShrink: 0,
                display: "block",
              }} />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header メインコンポーネント                                         */
/* ------------------------------------------------------------------ */
export function Header() {
  const pathname = usePathname();
  const isTop = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  /* トップページ以外は常にスクロール済みスタイル（不透明ヘッダー）で初期化 */
  const [scrolled, setScrolled] = useState(!isTop);

  useEffect(() => {
    /* トップページ以外はセンチネル監視不要 */
    if (!isTop) {
      setScrolled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    const sentinel = document.getElementById("scroll-sentinel");
    if (sentinel) observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isTop]);

  /* モバイルメニュー開閉時にbodyスクロールをロック */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const textColor = scrolled ? "var(--text)" : "rgba(255,255,255,0.85)";

  return (
    <>
      {/* トップページのみ: スクロール検知用センチネル */}
      {isTop && <div id="scroll-sentinel" className="absolute top-40 left-0 w-px h-px" />}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "bg-transparent py-5"
        )}
        style={scrolled ? {
          background: "rgba(248,246,241,0.94)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        } : undefined}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* ── ロゴ ── */}
          <Link
            href="/"
            className="flex items-center gap-3 leading-none shrink-0"
            aria-label={SITE.name}
          >
            <Image
              src="/logo.png"
              alt="やまと不動産ロゴ"
              width={36}
              height={36}
              className="object-contain shrink-0 transition-all duration-500"
              style={{
                mixBlendMode: scrolled ? "normal" : "screen",
                filter: scrolled ? "none" : "brightness(1.8) saturate(0.9)",
              }}
              priority
            />
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  fontSize: "17px",
                  letterSpacing: "0.1em",
                  color: scrolled ? "var(--primary)" : "rgba(255,255,255,0.95)",
                  transition: "color 0.5s ease",
                }}
              >
                {SITE.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: scrolled ? "var(--text-light)" : "rgba(255,255,255,0.5)",
                  transition: "color 0.5s ease",
                  textTransform: "uppercase",
                }}
              >
                {SITE.nameEn}
              </span>
            </div>
          </Link>

          {/* ── PC ナビ（メガメニュー） ── */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="グローバルナビゲーション"
          >
            {MEGA_NAV.map((group) => (
              <DropdownMenu key={group.label} group={group} scrolled={scrolled} />
            ))}

            {/* 単独リンク */}
            {SINGLE_NAV_ITEMS.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="text-sm transition-colors duration-300 relative group py-1"
                style={{ letterSpacing: "0.04em", color: textColor }}
              >
                {nav.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: scrolled ? "var(--primary)" : "rgba(255,255,255,0.7)" }}
                />
              </Link>
            ))}
          </nav>

          {/* ── PC CTA ── */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: scrolled ? "var(--text-light)" : "rgba(255,255,255,0.65)" }}
            >
              <Phone size={14} />
              <span style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                letterSpacing: "0.06em",
                fontSize: "13px",
              }}>
                {SITE.phone}
              </span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => { window.location.href = "/contact"; }}
            >
              来場予約
            </Button>
          </div>

          {/* ── モバイル ハンバーガー ── */}
          <button
            className="lg:hidden p-2 transition-colors"
            style={{ color: scrolled ? "var(--text)" : "rgba(255,255,255,0.9)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── モバイルドロワー ── */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 top-0 z-[-1] transition-all duration-300",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            "lg:hidden fixed top-0 right-0 h-full w-[min(320px,90vw)] z-40 transition-transform duration-300 flex flex-col",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: "rgba(252,250,247,0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
          }}
        >
          {/* ドロワーヘッダー */}
          <div className="flex items-center justify-between px-6 py-5" style={{
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}>
            <span style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "15px", color: "var(--primary)", letterSpacing: "0.08em",
            }}>
              {SITE.name}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--text-light)", padding: "4px" }}
              aria-label="メニューを閉じる"
            >
              <X size={22} />
            </button>
          </div>

          {/* ドロワーボディ（スクロール可） */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* アコーディオングループ */}
            {MEGA_NAV.map((group) => (
              <MobileAccordion
                key={group.label}
                group={group}
                onClose={() => setIsOpen(false)}
              />
            ))}

            {/* 単独リンク */}
            {SINGLE_NAV_ITEMS.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                className="flex items-center py-4 transition-colors hover:text-primary"
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "15px", color: "var(--text)", letterSpacing: "0.03em",
                  borderBottom: "1px solid rgba(0,0,0,0.07)",
                }}
                onClick={() => setIsOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
          </div>

          {/* ドロワーフッター CTA */}
          <div className="px-6 py-5 flex flex-col gap-3" style={{
            borderTop: "1px solid rgba(0,0,0,0.07)",
          }}>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="primary" size="md" className="w-full">
                来場予約・資料請求
              </Button>
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 py-2 transition-colors"
              style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                fontSize: "15px", color: "var(--text-light)",
                letterSpacing: "0.06em",
              }}
            >
              <Phone size={15} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
