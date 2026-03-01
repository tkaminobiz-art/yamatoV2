import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MapPin, Calendar, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WORKS, getWork, generateWorksStaticParams } from "@/lib/works";

export function generateStaticParams() {
  return generateWorksStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = getWork(id);
  if (!work) return { title: "施工事例が見つかりません" };
  return {
    title: `${work.area} ${work.name} — ${work.title}`,
    description: work.concept,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = getWork(id);
  if (!work) notFound();

  const currentIndex = WORKS.findIndex((w) => w.id === id);
  const prevWork = currentIndex > 0 ? WORKS[currentIndex - 1] : null;
  const nextWork = currentIndex < WORKS.length - 1 ? WORKS[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* Hero */}
        <div
          className="relative flex items-end"
          style={{
            background: work.gradient,
            minHeight: "480px",
            paddingBottom: "60px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)" }}
          />
          <div className="relative max-w-[860px] mx-auto px-6 md:px-10 w-full">
            <Link
              href="/works"
              className="inline-flex items-center gap-1.5 mb-6 transition-colors duration-200"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}
            >
              <ArrowLeft size={13} />
              施工事例一覧に戻る
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span style={{
                padding: "4px 12px", borderRadius: "4px",
                fontSize: "12px", letterSpacing: "0.06em",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              }}>
                {work.style}
              </span>
              <span style={{
                fontSize: "13px", color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              }}>
                {work.spec}
              </span>
            </div>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(22px, 3.2vw, 40px)", fontWeight: 400,
              color: "rgba(255,255,255,0.95)", letterSpacing: "0.05em",
              lineHeight: 1.5, marginBottom: "16px",
            }}>
              {work.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: MapPin, text: `${work.area} ${work.name}` },
                { icon: Calendar, text: work.year },
                { icon: Users, text: work.family },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5">
                  <Icon size={13} style={{ color: "rgba(255,255,255,0.5)" }} />
                  <span style={{
                    fontSize: "13px", color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-16 md:py-24">

          {/* コンセプト */}
          <section className="mb-14">
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "18px", fontWeight: 500,
              color: "var(--text)", lineHeight: 1.8,
              borderLeft: "3px solid var(--primary)",
              paddingLeft: "16px",
            }}>
              {work.concept}
            </p>
          </section>

          {/* ストーリー */}
          <section className="mb-16">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Story
            </p>
            <div className="rounded-2xl p-8 md:p-10" style={{
              background: "rgba(123,101,68,0.04)",
              border: "1px solid rgba(123,101,68,0.1)",
            }}>
              <p style={{
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                fontSize: "15px", color: "var(--text)",
                lineHeight: 2.1, whiteSpace: "pre-line",
              }}>
                {work.story}
              </p>
            </div>
          </section>

          {/* こだわりポイント */}
          <section className="mb-16">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Points
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px, 2.4vw, 26px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.04em",
              lineHeight: 1.6, marginBottom: "20px",
            }}>
              この家のこだわりポイント
            </h2>
            <ul className="flex flex-col gap-3">
              {work.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check size={16} style={{ color: "var(--green)", marginTop: "3px", flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "15px", color: "var(--text)", lineHeight: 1.8,
                  }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* 部屋別フォトギャラリー */}
          <section className="mb-16">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Gallery
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(18px, 2.4vw, 26px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.04em",
              lineHeight: 1.6, marginBottom: "20px",
            }}>
              部屋別フォトギャラリー
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {work.rooms.map((room) => (
                <div
                  key={room.room}
                  className="group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: "4/3" }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ background: room.gradient }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "11px", color: "rgba(255,255,255,0.7)",
                      letterSpacing: "0.06em", marginBottom: "3px",
                    }}>
                      {room.room}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      fontSize: "12px", color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.5,
                    }}>
                      {room.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center" style={{
              fontSize: "12px", color: "rgba(0,0,0,0.3)",
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              ※ 写真は実際の施工事例をもとに作成したイメージです。実物は素材・色味が異なる場合があります。
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-2xl p-8 md:p-10 text-center" style={{
            background: "rgba(28,43,30,0.05)",
            border: "1px solid rgba(28,43,30,0.1)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400,
              color: "var(--text)", letterSpacing: "0.05em",
              lineHeight: 1.7, marginBottom: "8px",
            }}>
              この事例のような家を、ご希望ですか？
            </p>
            <p style={{
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              fontSize: "14px", color: "var(--text-light)",
              lineHeight: 1.9, marginBottom: "24px",
            }}>
              モデルハウスで実物をご確認いただけます。完全予約制・費用不要です。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact?type=visit"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "48px", padding: "0 28px", borderRadius: "4px",
                  fontSize: "14px",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 16px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                モデルハウスを予約する
              </Link>
              <Link
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "48px", padding: "0 28px", borderRadius: "4px",
                  fontSize: "14px", background: "#06C755",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  letterSpacing: "0.04em",
                }}
              >
                LINEで相談する
              </Link>
            </div>
          </div>

          {/* 前後ナビゲーション */}
          <div className="mt-12 flex justify-between gap-4">
            {prevWork ? (
              <Link
                href={`/works/${prevWork.id}`}
                className="flex items-center gap-2 group"
                style={{ fontSize: "13px", color: "var(--text-light)" }}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span style={{ fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)" }}>
                  {prevWork.area} {prevWork.name}
                </span>
              </Link>
            ) : <div />}
            {nextWork ? (
              <Link
                href={`/works/${nextWork.id}`}
                className="flex items-center gap-2 group"
                style={{ fontSize: "13px", color: "var(--text-light)" }}
              >
                <span style={{ fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)" }}>
                  {nextWork.area} {nextWork.name}
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
