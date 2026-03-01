"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

// left: 暗いgradient + 白テキスト / right: 明るいgradient + ダークテキスト
const EVENTS = [
  {
    bg: "linear-gradient(135deg, #5A4030 0%, #7B6544 100%)",
    label: "Free Consultation",
    title: "家づくり無料相談会",
    sub: "毎日開催 — ご予約優先",
    body: "間取り・お金・土地のこと。何でも聞いてください。",
    tags: ["平日ゆっくり", "休日充実", "お仕事帰り", "オンライン"],
    tagNote: "全部対応しています。",
    cta: "相談会を予約する",
    href: "/contact?type=consultation",
    isDark: true,
    btnBg: "#FAFAF7",
    btnTextColor: "#7B6544",
  },
  {
    bg: "linear-gradient(135deg, #EDE3D5 0%, #D4C4A8 100%)",
    label: "Model House Tour",
    title: "モデルハウス見学会",
    sub: "京・花・風 — 3棟同時公開中",
    body: "大和郡山市内。キッズスペース完備。\n写真では伝わらない、木の香りと空気感を体感してください。",
    tags: [],
    tagNote: "",
    cta: "見学を予約する",
    href: "/contact?type=visit",
    isDark: false,
    btnBg: "#7B6544",
    btnTextColor: "#FAFAF7",
  },
] as const;

export function EventSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#EDE3D5" }}
      aria-labelledby="event-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <p
            id="event-heading"
            className="text-center text-text-light uppercase mb-16 md:mb-24"
            style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em" }}
          >
            Event
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EVENTS.map((ev, i) => {
            const textMain = ev.isDark ? "rgba(255,255,255,0.9)" : "#1C1C1C";
            const textSub  = ev.isDark ? "rgba(255,255,255,0.65)" : "rgba(28,28,28,0.55)";
            const textBody = ev.isDark ? "rgba(255,255,255,0.85)" : "rgba(28,28,28,0.75)";
            const tagBorder = ev.isDark ? "rgba(255,255,255,0.35)" : "rgba(28,28,28,0.2)";
            const tagText  = ev.isDark ? "rgba(255,255,255,0.85)" : "rgba(28,28,28,0.7)";

            return (
              <FadeUp key={ev.label} delay={i * 0.1}>
                <div
                  className="flex flex-col justify-between gap-8 rounded-2xl overflow-hidden"
                  style={{ background: ev.bg, padding: "48px", minHeight: "360px" }}
                >
                  <div className="flex flex-col gap-4">
                    <p
                      className="uppercase"
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em", color: textSub }}
                    >
                      {ev.label}
                    </p>
                    <h3
                      className="font-serif"
                      style={{
                        fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                        fontSize: "clamp(28px,4vw,44px)",
                        fontWeight: 400,
                        letterSpacing: "0.04em",
                        lineHeight: 1.4,
                        color: textMain,
                      }}
                    >
                      {ev.title}
                    </h3>
                    <p style={{ fontSize: "var(--text-small)", color: textSub }}>{ev.sub}</p>
                    <p className="whitespace-pre-line" style={{ fontSize: "var(--text-small)", lineHeight: 1.8, color: textBody }}>
                      {ev.body}
                    </p>
                    {ev.tags.length > 0 && (
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {ev.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1"
                              style={{ fontSize: "var(--text-micro)", borderRadius: "4px", border: `1px solid ${tagBorder}`, color: tagText }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {ev.tagNote && (
                          <p style={{ fontSize: "var(--text-small)", color: textSub }}>
                            {ev.tagNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <Link
                      href={ev.href}
                      className="inline-flex items-center gap-2 h-12 px-8 rounded-lg font-medium hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ fontSize: "var(--text-small)", background: ev.btnBg, color: ev.btnTextColor }}
                    >
                      {ev.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
