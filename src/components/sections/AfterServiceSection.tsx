"use client";
import { FadeUp } from "@/components/ui/FadeUp";

export function AfterServiceSection() {
  return (
    <section
      className="py-24 md:py-40 overflow-hidden"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="after-service-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: text 6col */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <p
                className="text-text-light uppercase mb-2"
                style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-micro)", letterSpacing: "0.15em" }}
              >
                After Service
              </p>
              <h2
                id="after-service-heading"
                className="font-serif text-text mb-8"
                style={{
                  fontSize: "var(--text-h2)",
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  lineHeight: 1.4,
                  letterSpacing: "0.06em",
                }}
              >
                建ててからが、本番です。
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div
                className="space-y-5 leading-[2] text-text"
                style={{ fontSize: "var(--text-body)" }}
              >
                <p className="text-text-light">
                  大手ハウスメーカーに電話すると、<br />
                  フリーダイヤルのコールセンターに繋がって、<br />
                  そこから地域の担当に回されて、<br />
                  さらに下請けの業者に連絡がいって——<br />
                  結局来るのは1週間後。
                </p>
                <p>
                  やまと不動産は、
                  <strong className="font-semibold" style={{ color: "#7B6544" }}>電話1本で翌日対応。</strong><br />
                  床のきしみ、ドアの建付け、ちょっとした不具合。<br />
                  「こんなことで電話していいだろうか」<br />
                  と思うようなことでも、ご遠慮なく。
                </p>
                <p>
                  <strong className="font-semibold" style={{ color: "#6B8F71" }}>20年間、無料で点検します。</strong>
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: visual 6col */}
          <div className="order-1 lg:order-2">
            <FadeUp delay={0.15}>
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16/10",
                  background: "linear-gradient(135deg, #4A6B5A 0%, #7AA890 50%, #B0D4C0 100%)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                aria-label="メンテナンス作業シーン（後日差し替え）"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="text-[rgba(255,255,255,0.2)] font-serif"
                    style={{ fontSize: "clamp(2rem,4vw,3rem)", fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)", letterSpacing: "0.1em" }}
                  >
                    アフター
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
