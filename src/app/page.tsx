import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { MidCtaA, MidCtaB, MidCtaC } from "@/components/ui/MidCta";

// ─── セクション ──────────────────────────────────────
import { HeroSection }           from "@/components/sections/HeroSection";
// ValuePropsSection → 比較表・価格カードと重複のため削除
import { SmartChoiceSection }    from "@/components/sections/SmartChoiceSection";
import { PriceBreakdownSection } from "@/components/sections/PriceBreakdownSection";
import { ModelHouseSection }     from "@/components/sections/ModelHouseSection";
// StandardSpecSection → /standard 独立ページに移設
import { GroundCostSection }     from "@/components/sections/GroundCostSection";
import { SpecTableSection }      from "@/components/sections/SpecTableSection";
import { WorksGallerySection }   from "@/components/sections/WorksGallerySection";
import { AfterServiceSection }   from "@/components/sections/AfterServiceSection";
import { LandInfoSection }       from "@/components/sections/LandInfoSection";
import { VoiceSection }          from "@/components/sections/VoiceSection";
import { FlowSection }           from "@/components/sections/FlowSection";
import { FaqSection }            from "@/components/sections/FaqSection";
import { InstagramSection }      from "@/components/sections/InstagramSection";
import { EventSection }          from "@/components/sections/EventSection";
import { BottomCtaSection }      from "@/components/sections/BottomCtaSection";

/**
 * 感情設計 5フェーズ
 *
 * Phase 1: 共感    — Hero
 * Phase 2: 納得    — SmartChoice → PriceBreakdown → ModelHouse
 * Phase 3: 実感    — GroundCost → SpecTable（標準仕様詳細は /standard へ）
 * Phase 4: 信頼    — Works → AfterService → LandInfo → Voice
 * Phase 5: 行動    — Flow → FAQ → Instagram → Event → BottomCta
 *
 * 中間CTAチェックリスト:
 * ✅ MidCta-A: SectionTransition 直後（標準仕様ページへ誘導）
 * ✅ MidCta-B: SpecTable 直後（資料を無料で請求する）
 * ✅ MidCta-C: Voice 直後（LINEで聞く / モデルハウス予約）
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Phase 1: 共感 ── */}
        {/* Hero: 「この常識を変えにきた」— ただし価格はまだ出さない */}
        <HeroSection />

        {/* ── Phase 2: 納得 ── */}
        {/* なぜ大手は高いのか → やまとはなぜ適正価格なのか */}
        <SmartChoiceSection />

        {/* 数字で納得: 大手 vs やまとの価格内訳 */}
        <PriceBreakdownSection />

        {/*
          ★ 修正1: 価格カードをここに移動
          「大手が高い理由」を理解した直後に価格を見ると
          「このクオリティでこの値段？」という反応が生まれる
        */}
        <SectionTransition text="なるほど。で、実際いくら？" />
        <ModelHouseSection />

        {/* ── Phase 3: 実感 ── */}
        {/* 価格を見た後に「でも中身は？」という疑問に答える */}
        <SectionTransition text="価格が適正なのはわかった。でも、中身は？" />

        {/* 中間CTA-A: 標準仕様詳細ページへ誘導 */}
        <MidCtaA />

        {/* 地盤改良費100%負担: 隠れコストの不安を潰す */}
        <GroundCostSection />

        {/* 大手との仕様比較一覧 */}
        <SpecTableSection />

        {/* 中間CTA-B: 比較表を見た人に資料請求を促す */}
        <MidCtaB />

        {/* ── Phase 4: 信頼 ── */}
        <SectionTransition text="比較はわかった。実際に建てた人の家を見てみたい。" />
        <WorksGallerySection />

        {/* アフターサービス: 買った後も安心 */}
        <AfterServiceSection />

        {/* 土地情報: 土地探しもワンストップ */}
        <SectionTransition text="あとは、土地。" />
        <LandInfoSection />

        {/* お客様の声: 同じ立場の人の成功体験 */}
        <VoiceSection />

        {/* 中間CTA-C: 「信頼」フェーズのピークで行動誘導 */}
        <MidCtaC />

        {/* ── Phase 5: 行動 ── */}
        {/* 家づくりの流れ: 行動のハードルを下げる */}
        <FlowSection />

        {/* よくあるご質問: 残った不安を解消 */}
        <FaqSection />

        {/* Instagram: リアルな施工現場・スタッフの日常 */}
        <InstagramSection />

        {/* イベント案内: 具体的な次のアクション */}
        <EventSection />

        {/* 最終CTA: ここまで読んでくれた人への感謝 + 3ボタン */}
        <BottomCtaSection />

      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
