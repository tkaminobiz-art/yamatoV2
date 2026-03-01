import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "イベント",
  description: "見学会・相談会のスケジュール。完全無料・予約制で開催中。",
};

export default function EventPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-40">
          <h1
            className="font-serif text-text mb-8"
            style={{
              fontSize: "var(--text-h1)",
              fontFamily: "var(--font-serif-loaded, 'Noto Serif JP', serif)",
              letterSpacing: "0.06em",
            }}
          >
            イベント
          </h1>
          <p className="text-text-light">（コンテンツは制作中です）</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
