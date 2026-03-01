import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-loaded",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // 300追加（極細見出し）/ 600禁止（和文ルール）
  display: "swap",
  variable: "--font-serif-loaded",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans-loaded",
});

export const metadata: Metadata = {
  title: {
    default: "やまと不動産 | 大和郡山の注文住宅",
    template: "%s | やまと不動産",
  },
  description:
    "奈良県大和郡山市のハウスメーカー。大手同等品質の住宅を中間マージンなしで提供。モデルハウス来場予約受付中。",
  keywords: ["やまと不動産", "大和郡山", "注文住宅", "ハウスメーカー", "奈良"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "やまと不動産",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
