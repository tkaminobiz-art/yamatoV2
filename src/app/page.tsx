import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";

import { HeroSection }         from "@/components/sections/HeroSection";
import { ModelHouseSection }   from "@/components/sections/ModelHouseSection";
import { WorksGallerySection } from "@/components/sections/WorksGallerySection";
import { VoiceSection }        from "@/components/sections/VoiceSection";
import { InstagramSection }    from "@/components/sections/InstagramSection";
import { EventSection }        from "@/components/sections/EventSection";
import { BottomCtaSection }    from "@/components/sections/BottomCtaSection";

/**
 * トップページ — 写真で語る、5セクション構成
 *
 * Hero → ModelHouse → Works → Voice → CTA
 *
 * 価格説明・仕様比較・FAQ・フロー等は各独立ページへ。
 * トップは「見たい」「行きたい」を引き出すことだけに集中する。
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ModelHouseSection />
        <WorksGallerySection />
        <VoiceSection />
        <InstagramSection />
        <EventSection />
        <BottomCtaSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
