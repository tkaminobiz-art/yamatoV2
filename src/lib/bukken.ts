/**
 * 自社分譲物件データ
 *
 * CSVフォーマット（後日渡される想定）:
 * id, name, area, address, station, stationWalk, landPrice, landM2, landTsubo,
 * totalLots, remainingLots, status, coverageRatio, floorAreaRatio, concept, tags
 *
 * 現在は旧サイトの公開データをもとに手動で入力。
 * CSV更新時はこのファイルの BUKKEN_LIST 配列を差し替えるだけでOK。
 */

export type BukkenStatus = "販売中" | "残りわずか" | "完売";

export type Bukken = {
  id: string;
  name: string;               // 分譲地名（例: 大和郡山市 矢田町 全17区画）
  area: string;               // エリア（例: 大和郡山市）
  address: string;            // 所在地（住所）
  station: string;            // 最寄り駅（例: 関西本線「大和小泉」駅）
  stationWalk: number;        // 徒歩分数
  landPrice: number;          // 土地価格（万円）
  landM2: number;             // 土地面積（㎡）
  landTsubo: number;          // 土地面積（坪）
  totalLots: number;          // 総区画数
  remainingLots: number;      // 残り区画数
  status: BukkenStatus;
  coverageRatio: number;      // 建ぺい率（%）
  floorAreaRatio: number;     // 容積率（%）
  concept: string;            // この街のコンセプト文（50〜80字）
  tags: string[];             // タグ（例: ["子育て環境◎", "駅近", "区画整理済み"]）
  gradient: string;           // プレースホルダー用グラデーション（写真差し替え前）
};

/** 建物プライス（全物件共通） */
export const BUILD_PRICES = {
  kyo:  2180,  // 京シリーズ
  hana: 2380,  // 花・風シリーズ
} as const;

/** 物件一覧 — 旧サイト公開データより */
export const BUKKEN_LIST: Bukken[] = [
  {
    id: "kyotanabe-tabayuta",
    name: "京田辺市 田辺勇田",
    area: "京田辺市",
    address: "京都府京田辺市田辺勇田51-2",
    station: "近鉄京都線「新田辺」駅",
    stationWalk: 6,
    landPrice: 1880,
    landM2: 110.00,
    landTsubo: 33.27,
    totalLots: 47,
    remainingLots: 12,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "奈良・大阪・京都の三方向へアクセス可能。通勤しながらも、緑豊かな京田辺で子育てしたいファミリーに。",
    tags: ["3方向アクセス", "駅徒歩6分", "47区画の大型分譲地"],
    gradient: "linear-gradient(135deg, #2C3E4A 0%, #1C2B38 100%)",
  },
  {
    id: "ikoma-nakanabatake",
    name: "生駒市 中菜畑２丁目",
    area: "生駒市",
    address: "奈良県生駒市中菜畑２丁目",
    station: "近鉄生駒線「菜畑」駅",
    stationWalk: 9,
    landPrice: 1780,
    landM2: 135.21,
    landTsubo: 40.9,
    totalLots: 23,
    remainingLots: 8,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "大阪難波まで約25分。40坪超の広い敷地で、子どもがのびのびと育つ家を。生駒の豊かな自然環境の中で。",
    tags: ["大阪通勤圏", "40坪超の広い土地", "子育て環境◎"],
    gradient: "linear-gradient(135deg, #3A4A2A 0%, #28381A 100%)",
  },
  {
    id: "nara-hokkejicho",
    name: "奈良市 法華寺町",
    area: "奈良市",
    address: "奈良県奈良市法華寺町321-5",
    station: "近鉄難波・奈良線「新大宮」駅",
    stationWalk: 9,
    landPrice: 2380,
    landM2: 177.01,
    landTsubo: 53.54,
    totalLots: 8,
    remainingLots: 3,
    status: "残りわずか",
    coverageRatio: 40,
    floorAreaRatio: 60,
    concept: "奈良の歴史的景観が広がる閑静な住宅地。53坪超の広大な敷地で、庭付きの豊かな暮らしを。",
    tags: ["53坪超の広い土地", "閑静な住宅地", "残り3区画"],
    gradient: "linear-gradient(135deg, #4A3C28 0%, #2E2418 100%)",
  },
  {
    id: "ikoma-nishishirodai",
    name: "生駒市 西白庭台２丁目",
    area: "生駒市",
    address: "奈良県生駒市西白庭台２丁目20-5",
    station: "近鉄けいはんな線「白庭台」駅",
    stationWalk: 20,
    landPrice: 2380,
    landM2: 173.34,
    landTsubo: 52.43,
    totalLots: 7,
    remainingLots: 5,
    status: "販売中",
    coverageRatio: 50,
    floorAreaRatio: 80,
    concept: "高台に広がる静かな住宅地。眺望と広い敷地を活かした、ゆとりある暮らしを叶える場所。",
    tags: ["高台・眺望良好", "52坪超の広い土地", "閑静な環境"],
    gradient: "linear-gradient(135deg, #2C3E2D 0%, #1C2B1E 100%)",
  },
  {
    id: "yamatokoriyama-yata",
    name: "大和郡山市 矢田町",
    area: "大和郡山市",
    address: "奈良県大和郡山市矢田町6393-2",
    station: "関西本線「大和小泉」駅",
    stationWalk: 26,
    landPrice: 780,
    landM2: 130.00,
    landTsubo: 39.32,
    totalLots: 17,
    remainingLots: 9,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "やまと不動産の地元エリア。土地780万円から、建物込みでも2,960万円台（京シリーズ）。奈良でいちばんお得に家が建てられる場所のひとつ。",
    tags: ["土地780万円〜", "地元エリア", "コスパ最高"],
    gradient: "linear-gradient(135deg, #3D3520 0%, #2A2510 100%)",
  },
  {
    id: "tenri-maesai",
    name: "天理市 前栽町",
    area: "天理市",
    address: "奈良県天理市前栽町160",
    station: "近鉄天理線「前栽」駅",
    stationWalk: 7,
    landPrice: 1380,
    landM2: 132.30,
    landTsubo: 40.02,
    totalLots: 17,
    remainingLots: 7,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "近鉄前栽駅から徒歩7分。静かで落ち着いた住環境の中で、40坪の広さを活かした自由設計の家を。",
    tags: ["駅徒歩7分", "40坪超", "閑静な住環境"],
    gradient: "linear-gradient(135deg, #2A3A4A 0%, #1A2838 100%)",
  },
  {
    id: "ikaruga-koryu",
    name: "斑鳩町 興留２丁目",
    area: "生駒郡斑鳩町",
    address: "奈良県生駒郡斑鳩町興留２丁目2-23",
    station: "関西本線「法隆寺」駅",
    stationWalk: 10,
    landPrice: 1580,
    landM2: 145.21,
    landTsubo: 43.92,
    totalLots: 8,
    remainingLots: 1,
    status: "残りわずか",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "法隆寺駅徒歩10分。第2期最終1区画。この機会を逃すと次はありません。43坪の広さで自由設計の家を。",
    tags: ["残り1区画", "法隆寺駅徒歩10分", "第2期最終"],
    gradient: "linear-gradient(135deg, #3A2A20 0%, #281810 100%)",
  },
  {
    id: "kashihara-minamiyagi",
    name: "橿原市 南八木町３丁目",
    area: "橿原市",
    address: "奈良県橿原市南八木町３丁目234-2",
    station: "桜井線「畝傍」駅",
    stationWalk: 7,
    landPrice: 1980,
    landM2: 165.30,
    landTsubo: 50.0,
    totalLots: 3,
    remainingLots: 2,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "橿原神宮前から程近い、奈良盆地の中心部。50坪の敷地で、庭や駐車場にゆとりを持たせた暮らしが実現できます。",
    tags: ["50坪の広い土地", "橿原エリア", "駅徒歩7分"],
    gradient: "linear-gradient(135deg, #4A3020 0%, #2E1E10 100%)",
  },
  {
    id: "tawaramoto-yakuoji",
    name: "磯城郡田原本町 薬王寺",
    area: "磯城郡田原本町",
    address: "奈良県磯城郡田原本町大字薬王寺",
    station: "近鉄橿原線「田原本」駅",
    stationWalk: 10,
    landPrice: 1180,
    landM2: 145.44,
    landTsubo: 43.99,
    totalLots: 4,
    remainingLots: 2,
    status: "販売中",
    coverageRatio: 60,
    floorAreaRatio: 200,
    concept: "第4期最終販売。奈良でもっとも土地が手に入りやすいエリアのひとつ。建物込み3,360万円台（京シリーズ）から新生活をスタートできます。",
    tags: ["第4期最終", "建物込み3,360万〜", "田原本エリア"],
    gradient: "linear-gradient(135deg, #3A2A20 0%, #281810 100%)",
  },
];

/** ステータス別にフィルタリング */
export function filterBukken(list: Bukken[], status?: BukkenStatus) {
  if (!status) return list;
  return list.filter((b) => b.status === status);
}

/** エリア一覧を取得 */
export function getAreas(list: Bukken[]) {
  return Array.from(new Set(list.map((b) => b.area)));
}
