"use client";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

// 各カードの1行目（太字化するキーセンテンス）+ 残りのテキスト
const VOICES = [
  {
    name: "T様",
    profile: "大和郡山市 / 4LDK / 32坪 / 30代夫婦+子2人",
    boldLine: "大手で見積もり取ったら4,800万って言われて、正直諦めかけてました。",
    rest: "やまと不動産さんで同じような仕様で2,800万。\n最初は『なんでこんなに安いの？怪しくない？』って思いました（笑）\nでも現場も見せてもらって、使ってる部材も確認して、納得できました。",
  },
  {
    name: "M様",
    profile: "奈良市 / 3LDK / 30坪 / 30代夫婦+子1人",
    boldLine: "電話したら翌日来てくれて、5分で直りました。",
    rest: "住んで半年くらいで、リビングのドアがちょっとキーキー言うようになって。\n前に住んでたマンションの管理会社は2週間放置だったので、感動しました。",
  },
  {
    name: "S様",
    profile: "大和郡山市 / 4LDK / 35坪 / 30代夫婦+子3人",
    boldLine: "最初の見積もりからほぼ金額が変わらなかったのがすごい。",
    rest: "他の会社は打ち合わせするたびに100万、200万と上がっていったので…\nコミコミって本当にコミコミなんだなと。",
  },
] as const;

export function VoiceSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="voice-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="px-6 md:px-10 mb-12 md:mb-16">
            <SectionHeader
              id="voice-heading"
              label="お客様の声 — 50組のご家族から"
              title="まずは隣人の言葉を聞いてください。"
              align="left"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div
            className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-10 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
            role="list"
            aria-label="お客様の声"
          >
            {VOICES.map((voice) => (
              <article
                key={voice.name}
                className="snap-start shrink-0 flex flex-col gap-6 bg-white rounded-2xl micro-border-top p-8 relative overflow-hidden"
                style={{
                  minWidth: "360px",
                  maxWidth: "420px",
                  boxShadow: "var(--shadow-card-lg)",
                }}
                role="listitem"
              >
                {/* 大きな装飾引用符 — 背景として配置 */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "-8px",
                    left: "20px",
                    fontFamily: "Georgia, serif",
                    fontSize: "120px",
                    lineHeight: 1,
                    color: "rgba(42,92,58,0.06)",
                    pointerEvents: "none",
                    userSelect: "none",
                    fontWeight: 700,
                  }}
                >
                  &#8220;
                </div>

                {/* 本文 — 1行目を太字 */}
                <blockquote
                  className="text-text flex-1 leading-[2] relative z-10"
                  style={{
                    fontSize: "var(--text-small)",
                    borderLeft: "3px solid var(--green)",
                    paddingLeft: "16px",
                    marginTop: "8px",
                  }}
                >
                  {/* 1行目: 太字・アクセント色 */}
                  <span
                    className="font-medium block mb-3"
                    style={{ color: "var(--text)", lineHeight: 1.7 }}
                  >
                    {voice.boldLine}
                  </span>
                  {/* 残り */}
                  <span className="text-text-light whitespace-pre-line" style={{ lineHeight: 1.9 }}>
                    {voice.rest}
                  </span>
                </blockquote>

                {/* 著者 */}
                <div
                  className="flex items-center gap-3 pt-5 relative z-10"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {/* アバタープレースホルダー */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-medium text-white text-sm"
                    style={{ background: "linear-gradient(135deg, var(--green), var(--primary))" }}
                  >
                    {voice.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{voice.name}</p>
                    <p className="text-text-light" style={{ fontSize: "var(--text-micro)" }}>{voice.profile}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
