"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { WORKS } from "@/lib/works";

export function WorksGallerySection() {
  return (
    <section
      className="py-24 md:py-40"
      style={{ background: "#FAFAF7" }}
      aria-labelledby="works-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-24">
            <SectionHeader label="Works" title="実際に建てたお客様の家" align="left" />
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm text-primary shrink-0 hover:gap-3 transition-all duration-300 group"
            >
              すべての施工事例を見る
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeUp>

        {/* Grid: 1列大 + 2列中 / 2行 = 計6枚 */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-1">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={work.large ? "md:row-span-2" : ""}
            >
              <Link
                href={`/works/${work.id}`}
                className="group relative flex overflow-hidden rounded-xl"
                style={{ aspectRatio: work.large ? "4/5" : "4/3" }}
                aria-label={`${work.area} ${work.name} — ${work.title}`}
              >
                <div
                  className="absolute inset-0 group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ background: work.gradient }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)" }}
                />
                <div
                  className="absolute inset-0 bg-[rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-[rgba(255,255,255,0.65)] mb-1"
                    style={{ fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)", fontSize: "var(--text-micro)", letterSpacing: "0.1em" }}
                  >
                    {work.area} {work.name} — {work.spec}
                  </p>
                  <p
                    className="font-serif text-white"
                    style={{
                      fontSize: work.large ? "var(--text-h3)" : "var(--text-small)",
                      fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                      lineHeight: 1.5,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {work.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
