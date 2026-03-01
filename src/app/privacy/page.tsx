import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社やまと不動産のプライバシーポリシー（個人情報の取り扱いについて）。",
};

const SECTIONS = [
  {
    title: "1. 個人情報の収集",
    body: `当社は、来場予約・資料請求・お問い合わせ・LINE相談等において、お客様の氏名・住所・電話番号・メールアドレス・ご相談内容等の個人情報を収集することがあります。これらの情報は、お客様のご同意のもとに提供いただくものです。`,
  },
  {
    title: "2. 個人情報の利用目的",
    body: `収集した個人情報は、以下の目的のために利用します。\n\n・ご来場予約・資料請求・お問い合わせへの対応\n・住宅建築・土地販売に関するご提案・ご案内\n・イベント・見学会のご案内\n・アフターサービスの提供\n・当社サービス改善のための分析\n\n上記以外の目的で利用する場合は、あらかじめお客様の同意を得るものとします。`,
  },
  {
    title: "3. 個人情報の第三者提供",
    body: `当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。\n\n・お客様の同意がある場合\n・法令に基づき開示が必要な場合\n・人の生命・身体または財産の保護のために必要がある場合\n・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合`,
  },
  {
    title: "4. 個人情報の安全管理",
    body: `当社は、収集した個人情報の漏えい・滅失・毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。また、個人情報を取り扱う従業者・委託先に対し、必要かつ適切な監督を行います。`,
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    body: `お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除・利用停止を請求することができます。ご請求の場合は、下記お問い合わせ先まで書面またはメールにてご連絡ください。本人確認の上、合理的な期間内に対応いたします。`,
  },
  {
    title: "6. Cookie・アクセス解析",
    body: `当サイトでは、サービス改善を目的としてGoogle Analytics等のアクセス解析ツールを使用することがあります。これらのツールはCookieを使用してアクセス情報を収集しますが、個人を特定する情報は含まれません。Cookieの使用を希望されない場合は、ブラウザの設定にて無効化いただけます。`,
  },
  {
    title: "7. プライバシーポリシーの変更",
    body: `当社は、法令の改正や事業内容の変更に伴い、本プライバシーポリシーを変更することがあります。変更後のポリシーは、本ページへの掲載をもって発効するものとします。`,
  },
  {
    title: "8. お問い合わせ",
    body: `個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\n株式会社やまと不動産 個人情報お問い合わせ窓口\n住所：${SITE.addressZip} ${SITE.address}\nTEL：${SITE.phone}\nMAIL：${SITE.email}\n受付時間：${SITE.businessHours}`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div style={{ background: "#1C2B1E", paddingTop: "64px", paddingBottom: "64px" }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-10 text-center">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px",
            }}>
              Privacy Policy
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em", lineHeight: 1.5,
            }}>
              プライバシーポリシー
            </h1>
          </div>
        </div>

        {/* ─── 本文 ─── */}
        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-16 md:py-24">

          {/* 前文 */}
          <div className="mb-12 p-6 rounded-xl" style={{
            background: "rgba(123,101,68,0.05)",
            border: "1px solid rgba(123,101,68,0.12)",
          }}>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)", lineHeight: 2,
            }}>
              株式会社やまと不動産（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
              個人情報の保護に関する法律（個人情報保護法）および関連法令を遵守し、
              以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
            </p>
          </div>

          {/* 各セクション */}
          <div className="flex flex-col gap-10">
            {SECTIONS.map((sec) => (
              <section key={sec.title}>
                <h2 style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "16px", fontWeight: 500,
                  color: "var(--text)", letterSpacing: "0.04em",
                  lineHeight: 1.6, marginBottom: "12px",
                  borderLeft: "3px solid var(--primary)",
                  paddingLeft: "12px",
                }}>
                  {sec.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "14px", color: "var(--text-light)",
                  lineHeight: 2, whiteSpace: "pre-line",
                }}>
                  {sec.body}
                </p>
              </section>
            ))}
          </div>

          {/* 制定日 */}
          <div className="mt-12 text-right">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "13px", color: "var(--text-light)",
            }}>
              制定：株式会社やまと不動産
            </p>
          </div>

          {/* 戻るリンク */}
          <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 transition-colors duration-200"
              style={{
                fontSize: "14px", color: "var(--text-light)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              }}
            >
              <ArrowLeft size={14} />
              トップページに戻る
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
