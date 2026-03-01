import type { Metadata } from "next";
import Link from "next/link";
import {
  Blocks, ShieldCheck, UtensilsCrossed, Bath, Flame,
  DoorOpen, Thermometer, FileCheck, BadgeCheck,
  ArrowLeft, ArrowRight, Check,
  Home, Layers, Sun, Zap,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "標準設備",
  description:
    "「花鳥風月」やまとの家 標準設備。旭化成ヘーベルパワーボード・MIRAIE・クリナップ・TOTOサザナなど13カテゴリの設備を追加費用ゼロでご提供。",
};

const SPECS = [
  {
    icon: UtensilsCrossed,
    brand: "クリナップ（奈良県内最上位グレード）",
    title: "システムキッチン・カップボード",
    description:
      "機能性も充実したこだわりのキッチンで、手料理を楽しめる毎日をお届け。奈良県内のクリナップ取扱い工務店の中で最上位グレードを採用。カップボードも標準装備です。",
    points: ["ステンレス天板（衛生的・傷つきにくい）", "ビルトイン食洗乾燥機 標準", "カップボード（吊戸棚＋引出し）標準", "IH or ガスコンロ 選択可"],
    note: "毎日使う場所だからこそ、最初からいいものを入れる方針です。キッチンのグレードを落として費用を下げるという提案は行いません。",
  },
  {
    icon: Bath,
    brand: "TOTO サザナ",
    title: "システムバス",
    description:
      "まるで魔法瓶のようにお湯が冷めにくい保温構造の浴槽。お気に入りのカラーを選んで自分だけの入浴スタイルを実現。一般的な1坪より広い1.25坪サイズを標準採用しています。",
    points: ["サイズ 1.25坪（一般的な浴室より広い）", "ほっカラリ床（クッション・防カビ）", "魔法びん浴槽（4時間2.5℃以内の温度低下）", "浴室テレビ 標準装備"],
    note: "標準ユニットバスとの差は広さだけでなく、床材・断熱性能・清掃性に大きな差があります。",
  },
  {
    icon: Home,
    brand: "TOTO / 三面鏡付き洗面化粧台",
    title: "洗面化粧台・トイレ",
    description:
      "三面鏡が標準仕様の洗面化粧台を採用。収納部分の広さが嬉しいモデルで、毎朝の身支度をスムーズにします。トイレも清掃性の高いモデルを標準でご用意しています。",
    points: ["三面鏡付き洗面化粧台 標準", "収納量が多く、生活感を隠しやすい", "トイレ 全棟標準仕様", "お手入れのしやすさを重視した選定"],
    note: "毎日使う水まわりは、清掃のしやすさが長期的な満足度につながります。",
  },
  {
    icon: Blocks,
    brand: "旭化成ヘーベル パワーボード（ALC）",
    title: "外壁材",
    description:
      "断熱・遮音・防災効果に優れ、耐久性もある「旭化成ヘーベルパワーボード」を全棟標準で採用。大手ハウスメーカーが採用する軽量気泡コンクリート（ALC）が、やまとの家では標準仕様です。",
    points: ["耐火構造（防火認定）", "遮音性 約40dB", "耐久年数 60年以上（塗り替えで延長可）", "重量が軽く、地震時の躯体負担を軽減"],
    note: "一般的な窯業系サイディングより初期コストは高くなりますが、メンテナンス周期を延ばせるため長期的なコストは抑えられます。",
  },
  {
    icon: DoorOpen,
    brand: "LIXIL 高断熱スマートキー仕様",
    title: "玄関ドア",
    description:
      "笑顔で迎えて笑顔で見送る玄関ドア。採光を取り入れる親子ドアで家全体をより一層風格あるものに。LIXILの高断熱タイプ、リモコンキー・タッチキー対応のスマートキー仕様です。",
    points: ["LIXIL 高断熱玄関ドア 標準", "スマートキー（リモコン・タッチ）標準", "採光を取り入れる親子ドアデザイン", "優れた断熱性能で玄関の冷え込みを防ぐ"],
    note: "玄関ドアの断熱性は、冬の玄関ホールの温度に直結します。後から変更するには工事が必要なため、最初の選択が重要です。",
  },
  {
    icon: Sun,
    brand: "フレームスリム化・断熱サッシ",
    title: "サッシ（窓）",
    description:
      "フレームをスリム化し、ガラス面積を最大化することで優れた断熱性能を実現。室内に光を取り込みながら、夏の日射熱・冬の冷気の侵入を抑えます。",
    points: ["スリムフレームで採光面積を最大化", "優れた断熱性能", "結露を抑制", "トレンドを押さえたスタイリッシュなデザイン"],
    note: "窓の断熱性能は、室温の快適さと光熱費に直結します。開口部は熱の出入りが最も多い部位のひとつです。",
  },
  {
    icon: Layers,
    brand: "軽量瓦 / 吹付ウレタン断熱材",
    title: "屋根材・断熱材・雨どい",
    description:
      "遮音・遮熱に優れた全6色の軽量瓦から建物を個性的に演出。断熱材は現場で直接吹き付けるウレタン断熱を採用し、隙間ゼロの高断熱を実現します。",
    points: ["軽量瓦 全6色 選択可", "現場吹付ウレタン断熱（隙間ゼロ）", "グラスウール比 断熱性能 約1.4倍（同厚）", "壁内結露を防ぎ、耐久性を維持"],
    note: "断熱材は竣工後に交換することが非常に困難です。建てる時に正しい選択をすることが、30年間の快適さを左右します。",
  },
  {
    icon: DoorOpen,
    brand: "ハイドア 天井高2.4m",
    title: "内装建具",
    description:
      "より個性的な空間を演出する単色＆木目カラー。種類豊富なバリエーションで空間を演出。室内建具は天井高2.4mのハイドアを標準採用し、一般的な2.0mドアと比べて開放感が大きく異なります。",
    points: ["ハイドア 高さ2,400mm（一般的な2,000mmより高い）", "単色・木目など豊富なカラーバリエーション", "開放感と採光の向上", "空間全体の統一感を演出"],
    note: "ハイドアを後から追加する場合、開口部の工事を伴うため現実的ではありません。建てる時に入れておく必要があります。",
  },
  {
    icon: Home,
    brand: "高機能フローリング / 琉球畳",
    title: "床材・畳",
    description:
      "キズに強く美しさが長持ちする高性能・高機能な床材を採用。畳は半帖縁なしの琉球畳スタイルにも対応し、モダンな和室空間を実現できます。",
    points: ["キズに強い高機能フローリング", "美しさが長持ちする耐久性", "半帖縁なし琉球畳 選択可", "無垢材など素材の選択幅が広い"],
    note: "床材は毎日素足で触れる部分です。見た目だけでなく、傷つきにくさ・清掃のしやすさを重視して選定しています。",
  },
  {
    icon: Home,
    brand: "耐凍・汚れ防止タイル",
    title: "ポーチタイル・機能門柱",
    description:
      "耐凍・汚れ防止といった機能を持ったタイルを使用。奈良の冬でも割れにくく、雨の日も滑りにくい安全設計です。機能門柱は郵便受け・インターフォン・照明が一体化したスタイリッシュなデザインです。",
    points: ["耐凍タイル（奈良の冬でも割れにくい）", "汚れ防止機能付き", "機能門柱（郵便受け・インターフォン・照明一体型）", "外構全体のコーディネートに対応"],
    note: "玄関アプローチは帰宅のたびに目にする場所。毎日の心地よさに直結する部分のため、機能性と美観を両立しています。",
  },
  {
    icon: ShieldCheck,
    brand: "木造軸組＋金物工法 ハイブリッド工法",
    title: "構造・しろあり等対策",
    description:
      "「花鳥風月」やまとの家は、木造軸組工法に金物工法を加えたハイブリッド工法を採用。在来工法と比べて約1.5倍の強度を確認しており、長期にわたってお客様の暮らしを安全に守ります。",
    points: ["木造軸組＋金物工法（強度 在来工法比 約1.5倍）", "しろあり保証10年（建築テクノ）", "地盤保証20年（ハウスジーメン）", "建物瑕疵保証（住宅瑕疵担保責任保険）"],
    note: "自社検査だけでなく、独立した第三者機関が検査・保証を行います。自分たちの工事を自分たちで合格にすることのない、客観的な品質証明です。",
  },
  {
    icon: Thermometer,
    brand: "住友ゴム工業 MIRAIE",
    title: "制震ダンパーMIRAIE",
    description:
      "地震国である日本では、地震に遭うリスクは避けられません。住友ゴムの制震ダンパー「MIRAIE」を全棟に導入し、繰り返しの地震でも性能が落ちない安心・安全な住まいを提供します。",
    points: ["揺れを最大70%低減", "繰り返しの余震にも有効", "電源・ランニングコスト不要", "耐震等級3と組み合わせで最高水準の地震対策"],
    note: "大手ハウスメーカーでは等級3取得やMIRAIEはオプション扱いのケースが多く、追加費用が発生することがあります。やまとの家では全棟標準装備です。",
  },
  {
    icon: Zap,
    brand: "大阪ガス「ヌック」/ 省エネ対応",
    title: "オール電化・ガス・室内照明",
    description:
      "やまとの家は環境にやさしく、省エネで経済的です。大阪ガスの温水式床暖房「ヌック」をリビング・ダイニングに標準設置。輻射熱で部屋全体を下から暖め、空気が乾燥しません。",
    points: ["ガス温水床暖房「ヌック」標準（リビング・ダイニング）", "温水式（電気式より燃費が良い）", "室内照明 LED標準", "オール電化 or ガス 選択可"],
    note: "他社では床暖房はオプション（+30〜80万円）が一般的です。リビングの床暖房があるかないかは、冬場の快適さを大きく左右します。",
  },
] as const;

export default function StandardPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--bg)", paddingTop: "80px" }}>

        {/* ─── Hero ─── */}
        <div
          style={{
            background: "#1C1C1C",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="max-w-[860px] mx-auto px-6 md:px-10 text-center">
            <p
              style={{
                fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Standard Specification
            </p>
            <p style={{
              fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
              fontSize: "13px", letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.4)", marginBottom: "16px",
              fontWeight: 400,
            }}>
              「花鳥風月」やまとの家
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "0.06em",
                lineHeight: 1.5,
                marginBottom: "24px",
              }}
            >
              大手と同じ素材が、<br />
              ここでは全部標準です。
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.9,
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
              }}
            >
              暮らしのベースとして毎日を支える13カテゴリの標準設備。<br className="hidden md:block" />
              他社でオプション扱いの設備が、追加費用ゼロで最初から付いてきます。
            </p>
          </div>
        </div>

        {/* ─── 仕様一覧 ─── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="flex flex-col gap-16 md:gap-24">
            {SPECS.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <article
                  key={spec.title}
                  className="flex flex-col md:flex-row gap-8 md:gap-12"
                  style={{
                    borderBottom: i < SPECS.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                    paddingBottom: i < SPECS.length - 1 ? "40px" : "0",
                  }}
                >
                  {/* 左: 番号 + アイコン */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 shrink-0" style={{ width: "72px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                        fontSize: "11px",
                        color: "rgba(0,0,0,0.2)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(123,101,68,0.1)" }}
                    >
                      <Icon size={22} style={{ color: "var(--primary)" }} />
                    </div>
                  </div>

                  {/* 右: コンテンツ */}
                  <div className="flex flex-col gap-4 flex-1">
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter-loaded,'Inter',sans-serif)",
                          fontSize: "11px",
                          color: "var(--accent)",
                          letterSpacing: "0.06em",
                          marginBottom: "6px",
                        }}
                      >
                        {spec.brand}
                      </p>
                      <h2
                        style={{
                          fontFamily: "var(--font-serif-loaded,'Noto Serif JP',serif)",
                          fontSize: "clamp(18px, 2.2vw, 24px)",
                          fontWeight: 400,
                          color: "var(--text)",
                          letterSpacing: "0.04em",
                          lineHeight: 1.5,
                        }}
                      >
                        {spec.title}
                      </h2>
                    </div>

                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text)",
                        lineHeight: 1.9,
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                      }}
                    >
                      {spec.description}
                    </p>

                    {/* ポイントリスト */}
                    <ul className="flex flex-col gap-2">
                      {spec.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <Check
                            size={14}
                            style={{ color: "var(--green)", marginTop: "3px", flexShrink: 0 }}
                          />
                          <span
                            style={{
                              fontSize: "14px",
                              color: "var(--text)",
                              fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                              lineHeight: 1.7,
                            }}
                          >
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* 補足 */}
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-light)",
                        lineHeight: 1.8,
                        fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                        borderLeft: "2px solid rgba(123,101,68,0.2)",
                        paddingLeft: "12px",
                        fontStyle: "italic",
                      }}
                    >
                      {spec.note}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ─── ページ下部CTA ─── */}
          <div
            className="mt-24 text-center flex flex-col items-center gap-6"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.07)",
              paddingTop: "48px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-light)",
                fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                lineHeight: 1.9,
              }}
            >
              実際の仕様を、モデルハウスでご確認いただけます。<br className="hidden md:block" />
              ご来場は完全予約制・費用不要です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=visit"
                className="inline-flex items-center justify-center gap-2 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: "52px",
                  padding: "0 36px",
                  borderRadius: "4px",
                  fontSize: "15px",
                  letterSpacing: "0.04em",
                  background: "linear-gradient(135deg, var(--primary) 0%, #9B8054 100%)",
                  boxShadow: "0 4px 20px rgba(123,101,68,0.3)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                }}
              >
                モデルハウスを予約する
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 transition-colors duration-200"
                style={{
                  height: "52px",
                  padding: "0 28px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  color: "var(--text-light)",
                  border: "1px solid rgba(0,0,0,0.12)",
                  fontFamily: "var(--font-sans-loaded,'Noto Sans JP',sans-serif)",
                }}
              >
                <ArrowLeft size={15} />
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
