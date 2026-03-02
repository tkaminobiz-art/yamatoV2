"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

// 花鳥風月シリーズ — 京(最安)を先頭に
const HOUSES = [
  {
    id: "kyo",
    name: "京",
    nameEn: "KYO",
    price: "2,180万円〜",
    priceNote: "（税込・コミコミ）",
    layout: "3LDK / 28坪",
    keyword: "コンパクト × 都市型",
    description: "28坪でも、4人家族が窮屈に感じない間取り。\nイクタ社フローリング・ハイドアで広さを体感できます。",
    cta: "京を見学する",
    gradient: "linear-gradient(135deg, #C4A265 0%, #7B6544 100%)",
    image: "/images/modelhouse/kyo.jpg",
  },
  {
    id: "hana",
    name: "花",
    nameEn: "HANA",
    price: "2,380万円〜",
    priceNote: "（税込・コミコミ）",
    layout: "4LDK / 31坪",
    keyword: "充実仕様 × こだわり",
    description: "1F天井高2,500mm。クリナップ「ステディア」標準。\nキッチンに立つたびに、選んで良かったと思える家です。",
    cta: "花を見学する",
    gradient: "linear-gradient(135deg, #D4A574 0%, #8B6914 100%)",
    image: "/images/modelhouse/hana.jpg",
  },
  {
    id: "kaze",
    name: "風",
    nameEn: "KAZE",
    price: "2,380万円〜",
    priceNote: "（税込・コミコミ）",
    layout: "4LDK / 30坪",
    keyword: "スマート × 子育て",
    description: "長期優良住宅対応・MIRAIE標準。\n子どもが独立した後も、資産として残る家を目指しました。",
    cta: "風を見学する",
    gradient: "linear-gradient(135deg, #7BA97B 0%, #4A7C59 100%)",
    image: "/images/modelhouse/kaze.jpg",
  },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export function ModelHouseSection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="modelhouse-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <SectionHeader
            id="modelhouse-heading"
            label="Model House"
            title="大手と同じ素材で、2,000万台。"
            description="京・花・風。3棟まとめて見学できます。大和郡山市内、常時公開中。"
            className="mb-16 md:mb-24"
          />
        </FadeUp>

        {/* Cards — モバイルは横スクロールsnap */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 md:mx-0 px-6 md:px-0">
          {HOUSES.map((house, i) => (
            <motion.div
              key={house.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="snap-start shrink-0 w-[300px] md:w-auto"
            >
              <Link
                href={`/modelhouse#${house.id}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden h-full micro-border-top transition-all duration-500"
                style={{
                  boxShadow: "var(--shadow-card-lg)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12), 0 24px 64px rgba(0,0,0,0.10)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-lg)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                {/* モデルハウス画像 */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "16/9", background: house.gradient }}
                  aria-label={`モデルハウス「${house.name}」`}
                >
                  <Image
                    src={house.image}
                    alt={`モデルハウス「${house.name}」外観`}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 50%)" }}
                  />
                </div>

                <div className="p-8 flex flex-col flex-1 gap-3">
                  {/* Keyword */}
                  <span
                    className="uppercase text-text-light"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.12em" }}
                  >
                    {house.keyword}
                  </span>

                  {/* Name + Price on one line */}
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span
                      className="font-serif text-text"
                      style={{ fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)", fontSize: "var(--text-h3)", letterSpacing: "0.06em" }}
                    >
                      {house.name} <span style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-light)" }}>{house.nameEn}</span>
                    </span>
                    <span
                      className="font-semibold text-accent"
                      style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "clamp(1.25rem,2vw,1.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
                    >
                      {house.price}
                    </span>
                  </div>

                  {/* Layout */}
                  <p
                    className="text-text-light"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "13px" }}
                  >
                    {house.layout}
                  </p>

                  {/* Description — 2行まで */}
                  <p className="text-text-light leading-relaxed flex-1 whitespace-pre-line" style={{ fontSize: "var(--text-small)", WebkitLineClamp: 3, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {house.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-[rgba(0,0,0,0.06)] mt-auto">
                    <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>{house.cta}</span>
                    <ArrowRight size={16} style={{ color: "var(--accent)" }} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
