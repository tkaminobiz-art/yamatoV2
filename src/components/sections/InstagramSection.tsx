"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const INSTAGRAM_URL = "https://www.instagram.com/yamatonoie/";
const HANDLE = "@yamatonoie";

/* 雰囲気を伝えるプレースホルダーグリッド（実素材差し替え予定）*/
const GRID_ITEMS = [
  { label: "外観施工事例", bg: "linear-gradient(135deg, #EDE3D5 0%, #D6C9B5 100%)", aspect: "square" },
  { label: "リビング", bg: "linear-gradient(135deg, #D6C9B5 0%, #C4B89E 100%)", aspect: "square" },
  { label: "キッチン", bg: "linear-gradient(135deg, #C4B89E 0%, #B5A88A 100%)", aspect: "square" },
  { label: "外観2", bg: "linear-gradient(135deg, #B5A88A 0%, #A59878 100%)", aspect: "square" },
  { label: "浴室", bg: "linear-gradient(135deg, #A59878 0%, #9B8F70 100%)", aspect: "square" },
  { label: "寝室", bg: "linear-gradient(135deg, #9B8F70 0%, #8C8066 100%)", aspect: "square" },
] as const;

export function InstagramSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
      aria-label="Instagram"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* ヘッダー */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: "var(--text-light)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Instagram
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 400,
                  color: "var(--text)",
                  letterSpacing: "0.05em",
                  lineHeight: 1.5,
                }}
              >
                実際の家を、<br className="md:hidden" />毎日更新しています。
              </h2>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "14px",
                  color: "var(--text-light)",
                  lineHeight: 1.8,
                }}
              >
                完成見学会の様子、施工中の写真、スタッフの日常。<br className="hidden md:block" />
                家づくりの「リアル」をInstagramで発信中です。
              </p>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 group transition-all duration-200 hover:-translate-y-0.5"
              style={{
                height: "44px",
                padding: "0 20px",
                borderRadius: "4px",
                fontSize: "14px",
                color: "var(--text)",
                border: "1px solid rgba(0,0,0,0.14)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                letterSpacing: "0.04em",
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Instagram size={16} style={{ color: "#E1306C" }} />
              {HANDLE}
              <ArrowUpRight size={14} style={{ color: "rgba(0,0,0,0.3)" }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </FadeUp>

        {/* フォトグリッド（プレースホルダー） */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {GRID_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group"
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "6px",
                background: item.bg,
              }}
              aria-label={`Instagram投稿: ${item.label}`}
            >
              {/* ホバーオーバーレイ */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.35)" }}
              >
                <Instagram size={22} style={{ color: "rgba(255,255,255,0.9)" }} />
              </div>
              {/* プレースホルダーテキスト（画像差し替え後は削除） */}
              <div className="absolute inset-0 flex items-end p-2">
                <span
                  style={{
                    fontSize: "9px",
                    color: "rgba(0,0,0,0.3)",
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* フォロー促進 */}
        <FadeUp>
          <div className="mt-8 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200 group"
              style={{
                fontSize: "13px",
                color: "var(--text-light)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                letterSpacing: "0.04em",
              }}
            >
              <Instagram size={14} style={{ color: "#E1306C" }} />
              Instagramをフォローして、最新の施工事例をチェック
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
