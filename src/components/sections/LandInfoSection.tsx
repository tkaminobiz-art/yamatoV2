"use client";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const AREAS = [
  { name: "大和郡山市 矢田町",   feature: "区画整理済み。若いファミリー層に人気。",   price: "土地 800万〜1,200万円" },
  { name: "天理市 前栽町",       feature: "近鉄天理線沿線。閑静な住環境を求める方に。",   price: "土地 1,000万〜1,500万円" },
  { name: "田辺エリア",   feature: "広い敷地が取れる。庭付き希望の方におすすめ。", price: "土地 600万〜1,000万円" },
] as const;

export function LandInfoSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FFFFFF" }}
      aria-labelledby="land-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">

          {/* Left: 5col テキスト */}
          <div className="lg:col-span-5">
            <FadeUp>
              <p
                className="text-text-light uppercase mb-2"
                style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-micro)", letterSpacing: "0.15em" }}
              >
                Land
              </p>
              <h2
                id="land-heading"
                className="font-serif text-text mb-8"
                style={{
                  fontSize: "clamp(22px, 2.2vw, 32px)",
                  fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                  lineHeight: 1.4,
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}
              >
                理想の土地は、ここにある。
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div
                className="space-y-4 leading-[2] text-text-light mb-8"
                style={{ fontSize: "var(--text-body)", maxWidth: "440px" }}
              >
                <p>
                  やまと不動産は、大和郡山市に特化しています。
                  <br />
                  地元の不動産ネットワークで、
                  <br />
                  SUUMOやHOME&apos;Sに載る前の土地情報を持っています。
                </p>
                <p>
                  「土地探しから」でも大丈夫。
                  <br />
                  土地＋建物のトータルで予算を組めるので、
                  <br />
                  思った以上に選択肢が広がります。
                </p>
              </div>
              <Link
                href="/contact?type=land"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
                style={{ fontSize: "var(--text-body)" }}
              >
                最新の土地情報を見る
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>

          {/* Right: 7col — エリアカード3枚縦積み */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {AREAS.map((area, i) => (
              <FadeUp key={area.name} delay={0.1 + i * 0.1}>
                <div
                  className="flex items-start gap-4 p-6 bg-white rounded-xl"
                  style={{ border: "1px solid #EDE3D5", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(107,143,113,0.1)" }}
                  >
                    <MapPin size={18} style={{ color: "#7B6544" }} />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <h3
                      className="font-serif text-text"
                      style={{ fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)", fontSize: "var(--text-h3)", letterSpacing: "0.04em" }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-text-light" style={{ fontSize: "var(--text-small)" }}>{area.feature}</p>
                    <p
                      className="font-medium mt-1"
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-small)", color: "#C4851F" }}
                    >
                      {area.price}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
