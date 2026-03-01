"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SITE } from "@/lib/constants";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 300);
  });

  return (
    <>
      {/* Desktop: 右下 — LINE優先の1アクション + 電話は小さく上 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        animate={visible
          ? { opacity: 1, scale: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, scale: 0.85, y: 16, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-2"
        aria-label="クイックアクション"
      >
        {/* 電話 — 小さく控えめ */}
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center gap-2 px-4 py-2 rounded-[4px] text-white text-xs transition-all duration-300"
          style={{
            background: "rgba(28,43,30,0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
            letterSpacing: "0.04em",
            fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
          }}
          aria-label={`電話する: ${SITE.phone}`}
        >
          <Phone size={13} />
          {SITE.phone}
        </a>

        {/* LINE — メインアクション（ホバーでテキスト展開） */}
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <Link
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[4px] text-white font-medium transition-all duration-400 overflow-hidden"
            style={{
              background: "#06C755",
              boxShadow: "0 4px 20px rgba(6,199,85,0.40), inset 0 1px 0 rgba(255,255,255,0.2)",
              padding: "14px 20px",
              fontSize: "14px",
              letterSpacing: "0.02em",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-label="LINEで相談する"
          >
            <MessageCircle size={20} />
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  気軽に聞いてみる
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile: 画面下部バー — LINE中央大・来場予約・電話小 */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={visible
          ? { y: 0, opacity: 1, pointerEvents: "auto" }
          : { y: 80, opacity: 0, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        aria-label="クイックアクション"
      >
        <div className="flex gap-2 px-4 py-3">
          {/* LINE — メインアクション（幅広め） */}
          <Link
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 rounded-[4px] font-medium text-white"
            style={{
              background: "#06C755",
              height: "48px",
              fontSize: "var(--text-small)",
              boxShadow: "0 2px 12px rgba(6,199,85,0.35)",
            }}
          >
            <MessageCircle size={16} />
            LINEで相談
          </Link>

          {/* 来場予約 */}
          <Link
            href="/contact?type=visit"
            className="flex-[2] flex items-center justify-center gap-2 rounded-[4px] font-medium text-white"
            style={{
              height: "48px",
              fontSize: "var(--text-small)",
              background: "linear-gradient(135deg, #C4921A 0%, #D4A830 100%)",
              boxShadow: "0 2px 12px rgba(196,146,26,0.35)",
            }}
          >
            <CalendarCheck size={16} />
            来場予約
          </Link>

          {/* 電話 — 小さく補助 */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 rounded-[4px]"
            style={{
              height: "48px",
              background: "rgba(28,43,30,0.08)",
              color: "var(--primary)",
            }}
            aria-label={`電話する: ${SITE.phone}`}
          >
            <Phone size={16} />
            <span style={{ fontSize: "10px", letterSpacing: "0.02em" }}>電話</span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
