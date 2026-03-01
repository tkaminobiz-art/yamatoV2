"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        // BottomCtaの深緑（#1C2B1E）からシームレスに続く
        background: "linear-gradient(to bottom, #1C2B1E 0%, #111A13 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-10 md:pt-20 md:pb-12">

        {/* メインコンテンツ — 3カラム */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-16 mb-16 md:mb-20">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-xl tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-serif-loaded, 'Noto Serif JP', serif)",
                  color: "rgba(255,255,255,0.92)",
                  fontWeight: 400,
                }}
              >
                {SITE.name}
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-inter-loaded, 'Inter', sans-serif)",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                }}
              >
                {SITE.nameEn}
              </p>
            </div>

            {/* ブランドディスクリプション */}
            <p
              style={{
                fontSize: "var(--text-small)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.03em",
                maxWidth: "260px",
              }}
            >
              {SITE.description}
            </p>

            {/* アクセント区切り線 */}
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "linear-gradient(90deg, rgba(196,146,26,0.7), transparent)",
              }}
            />
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter-loaded, 'Inter', sans-serif)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-300"
                  style={{
                    fontSize: "var(--text-small)",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.03em",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.88)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="transition-colors duration-300"
                style={{
                  fontSize: "var(--text-small)",
                  color: "rgba(196,146,26,0.8)",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,146,26,1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(196,146,26,0.8)"; }}
              >
                来場予約・資料請求
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-inter-loaded, 'Inter', sans-serif)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 transition-colors duration-300 group"
                style={{ fontSize: "var(--text-small)", color: "rgba(255,255,255,0.5)" }}
              >
                <Phone size={14} className="shrink-0" style={{ color: "rgba(196,146,26,0.7)" }} />
                <span
                  style={{ fontFamily: "var(--font-inter-loaded, 'Inter', sans-serif)", letterSpacing: "0.06em" }}
                >
                  {SITE.phone}
                </span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 transition-colors duration-300"
                style={{ fontSize: "var(--text-small)", color: "rgba(255,255,255,0.5)" }}
              >
                <Mail size={14} className="shrink-0" style={{ color: "rgba(196,146,26,0.7)" }} />
                {SITE.email}
              </a>
              <div
                className="flex items-start gap-3"
                style={{ fontSize: "var(--text-small)", color: "rgba(255,255,255,0.5)" }}
              >
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "rgba(196,146,26,0.7)" }} />
                <div>
                  <p style={{ letterSpacing: "0.02em" }}>{SITE.address}</p>
                  <p
                    className="mt-1"
                    style={{ fontSize: "var(--text-micro)", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}
                  >
                    {SITE.businessHours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ボーダー区切り */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Copyright行 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-inter-loaded, 'Inter', sans-serif)",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "rgba(255,255,255,0.22)",
            }}
          >
            © {new Date().getFullYear()} 株式会社やまと不動産. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/company"
              style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.22)", transition: "color 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)"; }}
            >
              会社概要
            </Link>
            <Link
              href="/privacy"
              style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.22)", transition: "color 0.3s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)"; }}
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
