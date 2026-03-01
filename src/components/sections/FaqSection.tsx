"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const FAQS = [
  {
    q: "土地がなくても相談できますか？",
    a: "はい、ご相談いただけます。やまと不動産では自社分譲地を71区画保有しており、土地探しから住宅建築まで一括でお手伝いしています。「この学区に住みたい」「通勤時間〇分以内」といったご要望をお聞かせいただければ、条件に合う土地をご提案します。",
  },
  {
    q: "共働きで平日の打合せが難しいのですが。",
    a: "土曜・日曜・祝日も打合せが可能です。モデルハウスは10:00〜18:00で対応しており、完全予約制のため待ち時間もありません。また、設計の途中経過はLINEでお送りしていますので、お忙しい方でも進捗を確認しながら家づくりを進めていただけます。",
  },
  {
    q: "見積もりを出してもらった後に、金額が増えることはありますか？",
    a: "原則としてありません。やまと不動産の「コミコミ価格」は土地・建物・諸費用・地盤改良費をすべて含んだ総額です。見積もり提示後に「実は別途」が発生しないよう、最初の打合せで確認できる費用は全て含めてご提案しています。ただし、お客様からのプラン変更追加が生じた場合はその都度ご確認いたします。",
  },
  {
    q: "奈良県外でも建てられますか？",
    a: "現在は奈良県・京都府南部エリア（木津川市・京田辺市など）を施工エリアとしています。エリア外のご相談については個別にお問い合わせください。",
  },
  {
    q: "間取りはどこまで自由に決められますか？",
    a: "全邸フルオーダー設計です。専属の設計士が担当し、打合せを重ねながら間取り・素材・設備をすべてお客様のご要望に合わせて設計します。打合せ期間は平均約3ヶ月。「なんとなくこういう暮らしがしたい」という段階からご相談いただけます。",
  },
  {
    q: "住宅ローンの相談もできますか？",
    a: "はい、ファイナンシャルプランナー資格を持つスタッフが在籍しています。「毎月の返済をいくらに抑えたいか」から逆算した建物プランのご提案も可能です。金融機関のご紹介・ローン手続きのサポートも承ります。",
  },
  {
    q: "引き渡し後の保証・アフターサービスについて教えてください。",
    a: "引き渡し後20年間の無料定期点検、地盤保証20年（ハウスジーメン）、しろあり保証10年（建築テクノ）が標準で付きます。また、「床がきしむ」「ドアの建付けが悪い」といった日常の小さな不具合についても、電話1本で翌日対応を目標に対応しています。",
  },
] as const;

function FaqItem({
  item,
  index,
}: {
  item: (typeof FAQS)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 py-6 group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <span
            style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "13px",
              color: "var(--accent)",
              fontWeight: 500,
              lineHeight: 1,
              paddingTop: "2px",
              flexShrink: 0,
              letterSpacing: "0.02em",
            }}
          >
            Q
          </span>
          <span
            className="font-medium leading-relaxed"
            style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "clamp(14px, 1.6vw, 16px)",
              color: "var(--text)",
              lineHeight: 1.7,
            }}
          >
            {item.q}
          </span>
        </div>
        <span
          className="shrink-0 mt-1 transition-colors duration-200"
          style={{ color: open ? "var(--primary)" : "rgba(0,0,0,0.25)" }}
          aria-hidden="true"
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex items-start gap-4 pb-6">
              <span
                style={{
                  fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                  fontSize: "13px",
                  color: "var(--green)",
                  fontWeight: 500,
                  lineHeight: 1,
                  paddingTop: "2px",
                  flexShrink: 0,
                  letterSpacing: "0.02em",
                }}
              >
                A
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "15px",
                  color: "var(--text-light)",
                  lineHeight: 1.9,
                }}
              >
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--wood-light)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="mb-12 md:mb-16">
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
              FAQ
            </p>
            <h2
              id="faq-heading"
              style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "0.05em",
                lineHeight: 1.5,
              }}
            >
              よくあるご質問
            </h2>
          </div>
        </FadeUp>

        <div>
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} />
          ))}
        </div>

        {/* 解決しない場合の誘導 */}
        <FadeUp>
          <div
            className="mt-12 text-center py-8 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "14px",
                color: "var(--text-light)",
                marginBottom: "4px",
              }}
            >
              ここに載っていない質問は
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "15px",
                color: "var(--text)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              LINEでお気軽にお送りください。設計士が直接お答えします。
            </p>
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                height: "44px",
                padding: "0 28px",
                borderRadius: "4px",
                fontSize: "14px",
                background: "#06C755",
                boxShadow: "0 4px 14px rgba(6,199,85,0.28)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                letterSpacing: "0.04em",
              }}
            >
              LINEで質問する
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
