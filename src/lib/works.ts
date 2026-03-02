export type RoomPhoto = {
  room: string;
  caption: string;
  gradient: string;
};

export type Work = {
  id: string;
  area: string;
  name: string;
  spec: string;
  style: string;
  title: string;
  gradient: string;
  image?: string;
  large?: boolean;
  // 詳細ページ用
  year: string;
  family: string;
  concept: string;
  story: string;
  points: string[];
  rooms: RoomPhoto[];
};

export const WORKS: Work[] = [
  {
    id: "t-nara",
    area: "奈良市",
    name: "T様邸",
    spec: "4LDK / 33坪",
    style: "モダン",
    title: "白が、5年後も白い家。",
    gradient: "linear-gradient(135deg, #7B5A2A 0%, #B8935A 50%, #DEB887 100%)",
    image: "/images/works/works-01.jpg",
    large: true,
    year: "2021年竣工",
    family: "ご夫婦＋お子様2名",
    concept: "白いパワーボード外壁と木目のバランスが美しい、明るいモダンスタイル",
    story: "「外壁の色が長持ちするかどうかが心配でした。大手メーカーでは10年ごとの塗り替えが必要と言われていたのに、やまとさんのパワーボードは20年以上持つと聞いて決めました。実際に5年経ちましたが、色が全く変わっていません。」\n\nご夫婦ともにフルタイムで働かれており、家事動線を最短にすることが第一の条件でした。玄関からキッチン・パントリーへの直線動線と、2階の洗面室からファミリークローゼット・各部屋へのショートカット動線を設計。「朝の準備がこんなに楽になるとは思っていませんでした」と奥様。",
    points: [
      "旭化成パワーボード外壁で高耐久・低メンテ",
      "玄関→キッチン→パントリーの直線動線",
      "2F洗面室＋ファミリークローゼット隣接",
      "リビング一体のウッドデッキ（奥行き2.4m）",
    ],
    rooms: [
      { room: "外観",     caption: "白いパワーボードとブラックサッシのコントラスト",  gradient: "linear-gradient(135deg, #8C7A6A 0%, #A89080 100%)" },
      { room: "リビング", caption: "吹き抜け天井で33坪とは思えない開放感",         gradient: "linear-gradient(135deg, #B8935A 0%, #D4AF7A 100%)" },
      { room: "キッチン", caption: "クリナップ「ステディア」対面式。食洗機標準",    gradient: "linear-gradient(135deg, #9B8060 0%, #C4A080 100%)" },
      { room: "浴室",     caption: "TOTOサザナ1.25坪。ほっカラリ床",             gradient: "linear-gradient(135deg, #6A8090 0%, #90A0B0 100%)" },
      { room: "洗面所",   caption: "三面鏡付き洗面台。収納充実",                  gradient: "linear-gradient(135deg, #708090 0%, #9AB0C0 100%)" },
      { room: "和室",     caption: "リビング続きの半帖縁なし畳コーナー",           gradient: "linear-gradient(135deg, #7A9070 0%, #A0B890 100%)" },
    ],
  },
  {
    id: "k-ikoma",
    area: "生駒市",
    name: "K様邸",
    spec: "4LDK / 35坪",
    style: "ナチュラル",
    title: "家族が、リビングに戻ってくる家。",
    gradient: "linear-gradient(135deg, #6B4A3A 0%, #9B7A6A 50%, #C4A090 100%)",
    image: "/images/works/works-02.jpg",
    year: "2022年竣工",
    family: "ご夫婦＋お子様2名",
    concept: "家族が自然と集まるLDKを中心に設計した、ナチュラルウッドスタイル",
    story: "「前の家では家族がそれぞれ自分の部屋にこもりがちでした。LDKを広くして、ここで勉強も食事もできる場所にしたかった。」\n\nご主人の要望は「帰宅したくなる家」。その言葉から設計士が提案したのが、リビングを中心に全室がつながるサーキュレーション動線。テレビが見える位置にダイニングテーブルを配置し、キッチンからも子供の様子が把握できる設計に。大阪ガスの床暖房「ヌック」により、冬でも家族全員がリビングで過ごす時間が増えたとのこと。",
    points: [
      "20畳LDK（リビング12畳＋ダイニング8畳）",
      "大阪ガス床暖房「ヌック」でリビング全面暖か",
      "キッチンから子供の様子が見える対面設計",
      "1F天井高2,500mm で実寸以上の開放感",
    ],
    rooms: [
      { room: "外観",     caption: "ホワイト×ウッドのナチュラルモダン外観",        gradient: "linear-gradient(135deg, #6B4A3A 0%, #9B7A6A 100%)" },
      { room: "LDK",      caption: "20畳のリビングダイニング。天井高2,500mm",     gradient: "linear-gradient(135deg, #8B6A5A 0%, #B89A8A 100%)" },
      { room: "キッチン", caption: "対面式。食洗機・カップボード標準装備",         gradient: "linear-gradient(135deg, #7A5848 0%, #A08878 100%)" },
      { room: "子供部屋", caption: "2室を将来仕切れる可変設計",                  gradient: "linear-gradient(135deg, #9A7A6A 0%, #C0A090 100%)" },
      { room: "浴室",     caption: "TOTOサザナ1.25坪。浴室テレビ標準",           gradient: "linear-gradient(135deg, #5A7080 0%, #8AAABB 100%)" },
      { room: "玄関",     caption: "LIXILスマートキー。広めのシューズクローク",   gradient: "linear-gradient(135deg, #6A5A4A 0%, #9A8A7A 100%)" },
    ],
  },
  {
    id: "s-kyotanabe",
    area: "京田辺市",
    name: "S様邸",
    spec: "2LDK+S / 30坪",
    style: "シンプルモダン",
    title: "キッチンから、子どもの顔が見える。",
    gradient: "linear-gradient(135deg, #5A6B4A 0%, #8FAF75 50%, #B8D4A0 100%)",
    image: "/images/works/works-03.jpg",
    year: "2022年竣工",
    family: "ご夫婦＋お子様1名",
    concept: "子育てしやすさを最優先。親の目が届くオープン動線",
    story: "「子どもが宿題をしているとき、私がキッチンに立っていても顔が見える家にしたかった。」\n\n奥様の一言がこの家の設計を決定しました。ダイニングテーブルをキッチンと一体化させ、子供の学習スペースとしても機能させる設計。2LDK+Sの「S」は将来子供部屋になる予定のフレキシブルルーム。当面はリビングのワークスペースとして活用されています。\n\n京田辺という立地から、太陽光発電との相性も考慮。南向き大開口窓で自然光を最大活用し、電力自給率の高い家づくりを実現しました。",
    points: [
      "キッチン一体型ダイニングで子の様子を常に把握",
      "将来子供部屋になるフレキシブルルーム「S」",
      "南向き大開口で太陽光活用・光熱費削減",
      "吹付ウレタン断熱で冷暖房効率UP",
    ],
    rooms: [
      { room: "外観",     caption: "シンプルな総2階。外壁はパワーボード",         gradient: "linear-gradient(135deg, #5A7A5A 0%, #8AAA8A 100%)" },
      { room: "LDK",      caption: "南向き大窓。キッチンからダイニングが一望",    gradient: "linear-gradient(135deg, #7A9A7A 0%, #A0C0A0 100%)" },
      { room: "キッチン", caption: "クリナップ対面キッチン。子供の様子が見える",  gradient: "linear-gradient(135deg, #6A8A6A 0%, #90B090 100%)" },
      { room: "書斎S",    caption: "現在はワークスペース。将来は子供部屋に",      gradient: "linear-gradient(135deg, #5A6A7A 0%, #8A9AAA 100%)" },
      { room: "寝室",     caption: "落ち着いたダーク系クロスでリラックス空間",    gradient: "linear-gradient(135deg, #4A5A6A 0%, #6A7A8A 100%)" },
      { room: "収納",     caption: "シューズクローク＋パントリー＋収納で生活感ゼロ", gradient: "linear-gradient(135deg, #5A6A5A 0%, #7A8A7A 100%)" },
    ],
  },
  {
    id: "m-yamatokoriyama",
    area: "大和郡山市",
    name: "M様邸",
    spec: "3LDK / 28坪",
    style: "インダストリアル",
    title: "28坪。なのに、狭いと思わない家。",
    gradient: "linear-gradient(135deg, #4A5568 0%, #718096 50%, #A0AEC0 100%)",
    image: "/images/works/works-04.jpg",
    year: "2023年竣工",
    family: "ご夫婦",
    concept: "28坪という限られた坪数で、こだわりの素材と最大限の空間効率を両立",
    story: "「坪数を抑えて土地に予算をかけたかった。でも素材は妥協したくなかった。」\n\nガルバリウム鋼板の外壁は、旧来の鉄板系とは別物。錆に強く、塗り替えが不要なメンテナンスフリー素材。レッドシダーのウッドデッキは天然の防腐効果を持ち、経年で色が深まる楽しさがある。\n\n28坪という制約の中で、1F全体をLDK+ワークスペースのワンルーム的な使い方にし、2Fを完全プライベートゾーンとして切り離す縦分割設計を採用。狭さを感じさせない空間構成で、来訪した友人が「えっ、28坪なの？」と驚くという。",
    points: [
      "ガルバリウム外壁でメンテナンスコストを大幅削減",
      "天然レッドシダーのウッドデッキ（3.5m×2m）",
      "1F全体ワンルーム設計で実面積以上の広がり",
      "耐震等級3＋MIRAIE標準装備",
    ],
    rooms: [
      { room: "外観",     caption: "ガルバリウム×レッドシダー。経年変化も楽しめる", gradient: "linear-gradient(135deg, #4A5568 0%, #718096 100%)" },
      { room: "LDK",      caption: "1F全体がつながるワンルーム設計",             gradient: "linear-gradient(135deg, #5A6578 0%, #8090A8 100%)" },
      { room: "キッチン", caption: "アイランド型。デッキとシームレスに繋がる",     gradient: "linear-gradient(135deg, #6A7588 0%, #90A0B8 100%)" },
      { room: "デッキ",   caption: "レッドシダーデッキ。LDKと一体化",            gradient: "linear-gradient(135deg, #8A6A50 0%, #B09070 100%)" },
      { room: "寝室",     caption: "2F主寝室。落ち着いたインダストリアル調",      gradient: "linear-gradient(135deg, #3A4858 0%, #5A6878 100%)" },
      { room: "浴室",     caption: "TOTOサザナ。ホテルライクな配色",              gradient: "linear-gradient(135deg, #4A5A6A 0%, #7A8A9A 100%)" },
    ],
  },
  {
    id: "a-kashihara",
    area: "橿原市",
    name: "A様邸",
    spec: "4LDK / 32坪",
    style: "和モダン",
    title: "3世代が、同じ家でそれぞれ自由な家。",
    gradient: "linear-gradient(135deg, #6B5A3A 0%, #9B8A6A 50%, #C4B490 100%)",
    image: "/images/works/works-05.jpg",
    year: "2023年竣工",
    family: "ご夫婦＋お子様2名＋祖父母",
    concept: "現代の生活に溶け込む和の要素。3世代が快適に暮らせる設計",
    story: "「義父母と同居を考えていたので、プライバシーを確保しながらも繋がれる設計にしたかった。」\n\nリビングに隣接した4.5帖の畳コーナーは、仕切りを設ければ祖父母の部屋にも、全開放すればリビングの延長にもなる多機能空間。縁なし畳を採用することで、現代的なインテリアとも馴染む。\n\n子どもたちの昼寝スペース、習い事の練習場所、客間と、使い方が日々変わるこの空間こそが「この家を建てて一番よかったもの」だとご夫婦は言う。",
    points: [
      "リビング一体型の可変畳コーナー（縁なし4.5帖）",
      "1Fに祖父母用シャワールーム＋個室を確保",
      "ハイドア採用で和室もスタイリッシュに",
      "大阪ガス床暖房で冬も畳コーナーが快適",
    ],
    rooms: [
      { room: "外観",     caption: "切妻屋根の和モダン外観。パワーボード仕上げ",  gradient: "linear-gradient(135deg, #7B6A4A 0%, #A89070 100%)" },
      { room: "LDK＋和室", caption: "開放時は約25畳の大空間に",                gradient: "linear-gradient(135deg, #9B8A6A 0%, #C4B490 100%)" },
      { room: "畳コーナー", caption: "縁なし畳。子どもの昼寝・遊びに大活躍",    gradient: "linear-gradient(135deg, #8A9A7A 0%, #B0C0A0 100%)" },
      { room: "キッチン", caption: "クリナップ対面キッチン。パントリー付き",      gradient: "linear-gradient(135deg, #8A7A5A 0%, #B0A080 100%)" },
      { room: "祖父母室", caption: "1Fにコンパクトな個室＋専用シャワー",         gradient: "linear-gradient(135deg, #7A8A9A 0%, #A0B0C0 100%)" },
      { room: "外構",     caption: "シンボルツリー＋アプローチタイルで上品な外構", gradient: "linear-gradient(135deg, #6A8A6A 0%, #90B090 100%)" },
    ],
  },
  {
    id: "h-kizugawa",
    area: "木津川市",
    name: "H様邸",
    spec: "3LDK / 30坪",
    style: "北欧",
    title: "朝、喧嘩しなくなった家。",
    gradient: "linear-gradient(135deg, #3A4A5A 0%, #6A7A8A 50%, #9AAABB 100%)",
    image: "/images/works/works-06.jpg",
    year: "2024年竣工",
    family: "ご夫婦＋お子様1名",
    concept: "共働き夫婦の朝の動線を徹底最適化した、機能美あふれる北欧スタイル",
    story: "「共働きで朝の支度が一番のストレスでした。洗面台の取り合いで毎朝けんかになる。」\n\nその言葉から設計士が提案したのが「W洗面台」と「三面鏡付き大型洗面スペース」の組み合わせ。2人が並んで使えるカウンターと鏡で、朝の渋滞が一切なくなったとのこと。\n\n木津川という立地の豊かな自然環境を活かし、大開口の窓から庭の緑が見える設計に。北欧調の白×ナチュラルウッドのインテリアで、自然光が差し込む明るい空間に仕上げました。",
    points: [
      "2人並べる幅1,800mmのW洗面カウンター",
      "三面鏡で朝の準備を効率化",
      "TOTOサザナ1.25坪＋浴室テレビ標準",
      "庭の緑が見える大開口リビング窓",
    ],
    rooms: [
      { room: "外観",     caption: "白×木目の北欧スタイル。シンプルな切妻屋根",  gradient: "linear-gradient(135deg, #5A7A8A 0%, #8AAABB 100%)" },
      { room: "LDK",      caption: "大開口から庭の緑が見えるリビング",           gradient: "linear-gradient(135deg, #7A9AAA 0%, #A0C0D0 100%)" },
      { room: "洗面所",   caption: "幅1,800mm W洗面台。三面鏡で渋滞ゼロ",      gradient: "linear-gradient(135deg, #6A8A9A 0%, #90B0C0 100%)" },
      { room: "キッチン", caption: "ホワイト統一のクリナップキッチン",            gradient: "linear-gradient(135deg, #7A9090 0%, #A0B8B8 100%)" },
      { room: "浴室",     caption: "TOTOサザナ1.25坪。ほっカラリ床で安心",      gradient: "linear-gradient(135deg, #5A7080 0%, #8A9AB0 100%)" },
      { room: "階段",     caption: "スチール手すりのオープン階段。光が通り抜ける", gradient: "linear-gradient(135deg, #6A7888 0%, #9AAABB 100%)" },
    ],
  },
];

export function getWork(id: string): Work | undefined {
  return WORKS.find((w) => w.id === id);
}

export function generateWorksStaticParams() {
  return WORKS.map((w) => ({ id: w.id }));
}
