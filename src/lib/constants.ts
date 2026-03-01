export const SITE = {
  name: "やまと不動産",
  nameEn: "YAMATO FUDOSAN",
  tagline: "奈良・京都で、30代共働き夫婦の家づくりを支える。",
  description:
    "奈良県のハウスメーカー。大手と同等の品質を、中間マージンを省いた適正価格で。",
  address: "奈良県奈良市大宮町1丁目6番21",
  addressZip: "〒630-8115",
  phone: "0742-36-1123",
  fax: "0742-36-1888",
  email: "tanaka@yamatogroup.net",
  lineUrl: "https://line.me/",
  instagramUrl: "https://www.instagram.com/yamatonoie/",
  businessHours: "9:00〜19:00（火・水定休）",
  mapUrl: "https://maps.google.com/?q=奈良県奈良市大宮町1丁目6番21",
} as const;

export const NAV_ITEMS = [
  { label: "コンセプト", href: "/concept" },
  { label: "モデルハウス", href: "/modelhouse" },
  { label: "施工事例", href: "/works" },
  { label: "間取り集", href: "/madori" },
  { label: "自社分譲地", href: "/bukken" },
  { label: "家づくりの流れ", href: "/flow" },
  { label: "スタッフ", href: "/staff" },
  { label: "イベント", href: "/event" },
] as const;

export const MODEL_HOUSES = [
  {
    id: "kyo",
    name: "京",
    nameEn: "KYO",
    concept: "28坪でも、4人家族が窮屈に感じない間取り",
    size: "3LDK / 28坪",
    price: "2,180万円〜",
    features: ["イクタ社フローリング", "ハイドア", "コンパクト都市型"],
  },
  {
    id: "hana",
    name: "花",
    nameEn: "HANA",
    concept: "1F天井高2,500mm。クリナップ「ステディア」標準",
    size: "4LDK / 31坪",
    price: "2,380万円〜",
    features: ["天井高2,500mm", "クリナップステディア", "充実仕様"],
  },
  {
    id: "kaze",
    name: "風",
    nameEn: "KAZE",
    concept: "長期優良住宅対応・MIRAIE標準。資産として残る家",
    size: "4LDK / 30坪",
    price: "2,380万円〜",
    features: ["長期優良住宅", "MIRAIE標準", "スマート子育て"],
  },
] as const;

export const FLOW_STEPS = [
  {
    step: 1,
    title: "来場・ヒアリング",
    duration: "1〜2時間",
    description:
      "モデルハウスで実際の空間を体感。予算・家族構成・希望を丁寧にヒアリングします。",
  },
  {
    step: 2,
    title: "プラン提案",
    duration: "1〜2週間",
    description:
      "ヒアリング内容をもとに間取りプランと概算見積もりを作成。修正は何度でも無料です。",
  },
  {
    step: 3,
    title: "契約・確認申請",
    duration: "1〜2ヶ月",
    description:
      "プランが決まったら工事請負契約を締結。建築確認申請など行政手続きも全て代行します。",
  },
  {
    step: 4,
    title: "着工・工事",
    duration: "3〜4ヶ月",
    description:
      "現場監督が毎日進捗を確認。工事中はいつでも現場見学OKです。",
  },
  {
    step: 5,
    title: "引き渡し・アフター",
    duration: "引き渡し後も安心",
    description:
      "完成検査・お引き渡し後も、10年保証＋定期点検で長くサポートします。",
  },
] as const;

export const TRUST_NUMBERS = [
  { value: "156", unit: "棟", label: "大和郡山市内の施工実績" },
  { value: "98", unit: "%", label: "OB施主紹介率" },
  { value: "10", unit: "年", label: "無償アフター保証" },
  { value: "2,180", unit: "万円〜", label: "コミコミ価格（税込）" },
] as const;
