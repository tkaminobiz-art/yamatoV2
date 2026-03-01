import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "モデルハウス",
  description: "花・風・月の3棟を大和郡山市内に常設展示中。",
};

export default function ModelHousePage() {
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
            モデルハウス
          </h1>
          <p className="text-text-light">（コンテンツは制作中です）</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
