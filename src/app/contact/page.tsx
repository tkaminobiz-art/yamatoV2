"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Calendar, FileText, Phone, MapPin, Clock, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

/* ── お問い合わせ種別 ── */
const CONTACT_TYPES = [
  {
    id: "visit",
    icon: Calendar,
    label: "来場予約",
    desc: "モデルハウスへの見学予約。完全予約制・費用不要です。",
    color: "var(--primary)",
    bg: "rgba(123,101,68,0.06)",
  },
  {
    id: "document",
    icon: FileText,
    label: "資料請求",
    desc: "標準仕様・間取り集・価格表などの資料を無料でお送りします。",
    color: "var(--green)",
    bg: "rgba(107,143,113,0.06)",
  },
  {
    id: "consult",
    icon: MessageCircle,
    label: "ご相談・お問い合わせ",
    desc: "土地・資金計画・間取りなど、どんなことでもお気軽にどうぞ。",
    color: "var(--accent)",
    bg: "rgba(196,133,31,0.06)",
  },
] as const;

type ContactTypeId = (typeof CONTACT_TYPES)[number]["id"];

/* ── 送信後の完了画面 ── */
function CompletionScreen({ type }: { type: ContactTypeId }) {
  const found = CONTACT_TYPES.find((t) => t.id === type);
  return (
    <div className="flex flex-col items-center text-center gap-6 py-16">
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
        background: "rgba(107,143,113,0.12)",
      }}>
        <Check size={28} style={{ color: "var(--green)" }} />
      </div>
      <div>
        <h2 style={{
          fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
          fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 400,
          color: "var(--text)", letterSpacing: "0.06em", marginBottom: "12px",
        }}>
          {found?.label}を受け付けました。
        </h2>
        <p style={{
          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
          fontSize: "15px", color: "var(--text-light)", lineHeight: 1.9,
        }}>
          担当者より1営業日以内にご連絡いたします。<br />
          お急ぎの場合はお電話にてご連絡ください。
        </p>
      </div>
      <a href={`tel:${SITE.phone}`} style={{
        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
        fontSize: "18px", color: "var(--primary)", letterSpacing: "0.08em",
      }}>
        {SITE.phone}
      </a>
      <Link href="/" style={{
        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
        fontSize: "13px", color: "var(--text-light)",
        textDecoration: "underline", textUnderlineOffset: "3px",
      }}>
        トップページに戻る
      </Link>
    </div>
  );
}

/* ── メインコンポーネント ── */
export default function ContactPage() {
  const [selectedType, setSelectedType] = useState<ContactTypeId>("visit");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    nameKana: "",
    phone: "",
    email: "",
    preferredDate1: "",
    preferredDate2: "",
    area: "",
    budget: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    /* 実際の送信処理はここに実装（API Route or Formspree等） */
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    height: "48px",
    padding: "0 16px",
    borderRadius: "6px",
    border: "1px solid rgba(0,0,0,0.14)",
    background: "white",
    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
    fontSize: "15px",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
    fontSize: "13px",
    color: "var(--text)",
    letterSpacing: "0.03em",
    marginBottom: "6px",
    display: "block",
  } as React.CSSProperties;

  const requiredBadge = (
    <span style={{
      fontSize: "10px", color: "white",
      background: "var(--accent)", padding: "1px 6px",
      borderRadius: "2px", marginLeft: "6px", letterSpacing: "0.04em",
    }}>必須</span>
  );

  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div style={{ background: "#1C2B1E", paddingTop: "80px", paddingBottom: "64px" }}>
          <div className="max-w-[760px] mx-auto px-6 md:px-10 text-center">
            <p style={{
              fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
              fontSize: "11px", letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px",
            }}>
              Contact
            </p>
            <h1 style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "clamp(24px,3vw,40px)", fontWeight: 400,
              color: "rgba(255,255,255,0.92)", letterSpacing: "0.06em",
              lineHeight: 1.5, marginBottom: "20px",
            }}>
              来場予約・資料請求・<br className="md:hidden" />お問い合わせ
            </h1>
            <p style={{
              fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9,
              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
            }}>
              ご相談は無料です。設計士が直接お返事いたします。<br className="hidden md:block" />
              しつこい営業・勧誘は一切行いません。
            </p>
          </div>
        </div>

        <div className="max-w-[760px] mx-auto px-6 md:px-10 py-16 md:py-20">

          {submitted ? (
            <CompletionScreen type={selectedType} />
          ) : (
            <>
              {/* ── LINE誘導バナー ── */}
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl mb-10 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#06C755",
                  boxShadow: "0 4px 20px rgba(6,199,85,0.25)",
                  textDecoration: "none",
                }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <MessageCircle size={22} style={{ color: "white" }} />
                </div>
                <div className="flex-1">
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "15px", fontWeight: 500, color: "white",
                    letterSpacing: "0.03em", marginBottom: "2px",
                  }}>
                    LINEで気軽に相談する（推奨）
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6,
                  }}>
                    設計士が直接対応。「土地ありますか？」の一言からでもOKです。
                  </p>
                </div>
              </a>

              {/* ── お問い合わせ種別選択 ── */}
              <div className="mb-8">
                <p style={{ ...labelStyle, marginBottom: "12px", fontSize: "14px" }}>
                  お問い合わせの種類を選んでください
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CONTACT_TYPES.map((ct) => {
                    const Icon = ct.icon;
                    const isSelected = selectedType === ct.id;
                    return (
                      <button
                        key={ct.id}
                        type="button"
                        onClick={() => setSelectedType(ct.id)}
                        className="flex flex-col gap-2 p-4 rounded-xl text-left transition-all duration-200"
                        style={{
                          border: isSelected
                            ? `2px solid ${ct.color}`
                            : "2px solid rgba(0,0,0,0.08)",
                          background: isSelected ? ct.bg : "white",
                        }}
                      >
                        <Icon size={18} style={{ color: ct.color }} />
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "13px", fontWeight: 500, color: "var(--text)",
                          letterSpacing: "0.03em",
                        }}>
                          {ct.label}
                        </p>
                        <p style={{
                          fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                          fontSize: "11px", color: "var(--text-light)", lineHeight: 1.6,
                        }}>
                          {ct.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── フォーム ── */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* お名前 */}
                <div>
                  <label style={labelStyle}>
                    お名前{requiredBadge}
                  </label>
                  <input
                    type="text" name="name" required
                    placeholder="山田 太郎"
                    value={form.name} onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* フリガナ */}
                <div>
                  <label style={labelStyle}>フリガナ</label>
                  <input
                    type="text" name="nameKana"
                    placeholder="ヤマダ タロウ"
                    value={form.nameKana} onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label style={labelStyle}>
                    電話番号{requiredBadge}
                  </label>
                  <input
                    type="tel" name="phone" required
                    placeholder="090-0000-0000"
                    value={form.phone} onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label style={labelStyle}>
                    メールアドレス{requiredBadge}
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="example@email.com"
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* 来場予約時のみ：希望日時 */}
                {selectedType === "visit" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>
                        第1希望日時{requiredBadge}
                      </label>
                      <input
                        type="datetime-local" name="preferredDate1" required
                        value={form.preferredDate1} onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>第2希望日時</label>
                      <input
                        type="datetime-local" name="preferredDate2"
                        value={form.preferredDate2} onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* ご検討エリア */}
                <div>
                  <label style={labelStyle}>ご検討エリア</label>
                  <select
                    name="area"
                    value={form.area} onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">選択してください</option>
                    <option value="nara">奈良市</option>
                    <option value="ikoma">生駒市</option>
                    <option value="ikaruga">生駒郡斑鳩町</option>
                    <option value="kyotanabe">京田辺市</option>
                    <option value="yamato-koriyama">大和郡山市</option>
                    <option value="kashihara">橿原市</option>
                    <option value="tenri">天理市</option>
                    <option value="tawaramoto">磯城郡田原本町</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* ご予算 */}
                <div>
                  <label style={labelStyle}>おおよそのご予算</label>
                  <select
                    name="budget"
                    value={form.budget} onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">選択してください</option>
                    <option value="~2500">2,500万円以下</option>
                    <option value="2500~3000">2,500〜3,000万円</option>
                    <option value="3000~3500">3,000〜3,500万円</option>
                    <option value="3500~">3,500万円以上</option>
                    <option value="unknown">まだ決まっていない</option>
                  </select>
                </div>

                {/* ご質問・ご要望 */}
                <div>
                  <label style={labelStyle}>ご質問・ご要望</label>
                  <textarea
                    name="message" rows={5}
                    placeholder="気になることや、ご要望をお気軽にご記入ください。"
                    value={form.message} onChange={handleChange}
                    style={{
                      ...inputStyle, height: "auto", padding: "14px 16px", resize: "vertical",
                    }}
                  />
                </div>

                {/* プライバシーポリシー同意 */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox" name="privacy" id="privacy" required
                    checked={form.privacy}
                    onChange={handleChange}
                    style={{ marginTop: "3px", width: "16px", height: "16px", cursor: "pointer", flexShrink: 0 }}
                  />
                  <label htmlFor="privacy" style={{
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                    fontSize: "13px", color: "var(--text-light)", lineHeight: 1.8, cursor: "pointer",
                  }}>
                    <Link href="/privacy" target="_blank" style={{ color: "var(--primary)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                      プライバシーポリシー
                    </Link>
                    に同意の上、送信します。{requiredBadge}
                  </label>
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    height: "56px", borderRadius: "6px",
                    background: loading ? "rgba(123,101,68,0.5)" : "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                    boxShadow: loading ? "none" : "0 4px 24px rgba(123,101,68,0.3)",
                    color: "white", fontSize: "16px", letterSpacing: "0.06em", border: "none", cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  }}
                >
                  {loading ? "送信中..." : "送信する"}
                </button>

                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px", color: "var(--text-light)",
                  textAlign: "center", lineHeight: 1.8,
                }}>
                  担当者より1営業日以内にご連絡いたします。<br />
                  しつこい営業・勧誘は一切行いません。
                </p>
              </form>

              {/* ── 直接連絡先 ── */}
              <div className="mt-14 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                <p style={{
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                  fontSize: "12px", color: "var(--text-light)",
                  letterSpacing: "0.08em", marginBottom: "16px",
                }}>
                  お急ぎの方はこちら
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 p-4 rounded-xl transition-colors" style={{
                    background: "white", border: "1px solid rgba(0,0,0,0.07)",
                    textDecoration: "none",
                  }}>
                    <Phone size={16} style={{ color: "var(--primary)", flexShrink: 0 }} />
                    <div>
                      <p style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "16px", color: "var(--text)", letterSpacing: "0.06em",
                      }}>
                        {SITE.phone}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "11px", color: "var(--text-light)",
                      }}>
                        {SITE.businessHours}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{
                    background: "white", border: "1px solid rgba(0,0,0,0.07)",
                  }}>
                    <MapPin size={16} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "13px", color: "var(--text)", lineHeight: 1.7,
                      }}>
                        {SITE.addressZip}<br />{SITE.address}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        fontSize: "11px", color: "var(--text-light)", marginTop: "2px",
                      }}>
                        近鉄奈良線 新大宮駅より徒歩5分
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

      </main>
      <Footer />
    </>
  );
}
