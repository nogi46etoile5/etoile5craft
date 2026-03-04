const shopDetails = [
    // H系列 (H)
    { 
        name_jp: "一(はじめ)", name_en: "Bar Hajime", series: "H系列", seriesMark: "H", type: "MIX", area: "東京", xId: "@barhajime", snsUrl: "https://x.com/barhajime", time: "19:00～26:00,20:00〜4:00", holiday: "日曜,火曜", address_jp: "東京都新宿区新宿2丁目-12-14-1A", address_en: "1A, 2-12-14 Shinjuku, Shinjuku-ku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者向け", "年齢層高め", "変わったリキュール有", "穏やか", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/barhajime", note: "https://note.com/412357siki/n/n214e5c8e1d02", medium: "#",
        description_jp: "半地下のように見えてこれが一階！迷ったらギロンセンを目指せ、ほぼレズビアンがいるMIXバー。年齢層幅広く会える所です。",
        description_en: "It looks like a semi-basement but it's actually the 1st floor! If you get lost, look for the 'Giron-sen' sign. A MIX bar where most customers are lesbians, attracting a wide range of age groups."
    },
    { 
        name_jp: "八(はち)", name_en: "Bar Hachi", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@hachi_omusubi_8", snsUrl: "https://x.com/hachi_omusubi_8", time: "20:00〜25:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-15-13第二中江ビルB1", address_en: "B1, Dai-ni Nakae Bldg, 2-15-13 Shinjuku, Tokyo", tags: ["喫煙可", "初心者向け", "初心者多め", "変わったリキュール有", "穏やか", "イベント多い", "フード有", "盛り上がる"], icon: "https://unavatar.io/twitter/hachi_omusubi_8", note: "#", medium: "#",
        description_jp: "地下一階にあるおむすびがコンセプトのレズビアンバー。オーナーの知り合いならたまに男性がいることも。珍しいリキュールや炭酸サーバーがあるお店です。",
        description_en: "A lesbian bar on B1F with an 'Onigiri' (rice ball) concept. You might occasionally see male acquaintances of the owner. They feature rare liqueurs and a soda carbonator."
    },
    { 
        name_jp: "はっちゃけ", name_en: "Hacchake", series: "H系列", seriesMark: "H", type: "MIX", area: "東京", xId: "@hacchake_nicho", snsUrl: "https://x.com/hacchake_nicho", time: "18:00〜24:00", holiday: "日曜,月曜,火曜", address_jp: "東京都新宿区新宿2丁目-14-11フタミビル101-A", address_en: "101-A, Futami Bldg, 2-14-11 Shinjuku, Tokyo", tags: ["初心者向け", "穏やか", "お通し有", "フード有"], icon: "https://unavatar.io/twitter/hacchake_nicho", note: "#", medium: "#",
        description_jp: "H系列でご飯メインのお店。二丁目横丁の一番奥にあり、おつまみからしっかりした食事まで充実。一軒目にピッタリです！",
        description_en: "An H-series spot focused on food, located at the very back of Nichome Yokocho. From snacks to full meals, it's the perfect first stop for the night!"
    },
    { 
        name_jp: "PUZZLE", name_en: "Bar PUZZLE", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@BarPUZZLE1", snsUrl: "https://x.com/BarPUZZLE1", time: "20:00〜26:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-13-14jビルディング1F", address_en: "1F, J-Building, 2-13-14 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "穏やか", "変わったリキュール有", "持ち込み食べ物可", "イベント多い"], icon: "https://unavatar.io/twitter/BarPUZZLE1", note: "#", medium: "#",
        description_jp: "曜日ごとにスタッフが決まっている珍しいシステムのレズビアンバー。変わったリキュールやイベントも多い。居酒屋『よしだ海岸』の先にあります。",
        description_en: "A lesbian bar with a unique system where the staff is fixed by the day of the week. Lots of rare liqueurs and events. Located just past the Izakaya 'Yoshida Kaigan'."
    },
    { 
        name_jp: "パズルアソビ", name_en: "PUZZLE ASOBI", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@puzzleasobi2", snsUrl: "https://x.com/puzzleasobi2", time: "21:00〜9:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目36-3新宿御苑136ビル6F", address_en: "6F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", tags: ["カラオケ","イベント多い",], icon: "https://unavatar.io/twitter/puzzleasobi2", note: "#", medium: "#",
        description_jp: "住所は一丁目だけど雰囲気は二丁目！新築ビルに入ったH系列の店舗で、カラオケもダーツも楽しめるお店です。",
        description_en: "The address is in Ic-chome, but it has a total Ni-chome vibe! A new H-series branch in a modern building, featuring both karaoke and darts."
    },

    // A系列 (A)
    { 
        name_jp: "agit", name_en: "agit", series: "A系列", seriesMark: "A", type: "ビアン", area: "東京", xId: "@agit_staff", snsUrl: "https://x.com/agit_staff", time: "19:00〜25:00,19:00～27:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2-15-11-1F", address_en: "1F, 2-15-11 Shinjuku, Tokyo", tags: ["穏やか","年齢層高め","変わったリキュール有",], icon: "https://unavatar.io/twitter/agit_staff", note: "#", medium: "#",
        description_jp: "2026年に改修され入り口も一新した老舗。スナックのような落ち着いた雰囲気が魅力。ハブ酒やプロテインも楽しめます！",
        description_en: "An established bar with a renovated entrance as of 2026. Enjoy a cozy 'Snack' bar atmosphere. They even serve Habu-shu (snake liquor) and protein shakes!"
    },
    { 
        name_jp: "anchor rainbow port tokyo", name_en: "anchor", series: "A系列", seriesMark: "A", type: "MIX", area: "東京", xId: "@anchor_staff", snsUrl: "https://x.com/anchor_staff", time: "12:00〜25:00,12:00～5:00", holiday: "火曜,水曜", address_jp: "東京都新宿区新宿2丁目-12-15山原ハイツ2F", address_en: "2F, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", tags: ["初心者向け","初心者多め","フード有",], icon: "https://unavatar.io/twitter/anchor_staff", note: "#", medium: "#",
        description_jp: "二丁目では珍しく昼から開いているカフェバー。百合漫画を堪能するならここ一択！完全キャッシュレス決済のお店です。",
        description_en: "A rare Ni-chome cafe-bar open from the daytime. The absolute best spot to enjoy Yuri manga! Please note they are a cashless-only establishment."
    },
    { 
        name_jp: "艶櫻", name_en: "Adezakura", series: "A系列", seriesMark: "A", type: "MIX", area: "東京", xId: "@adezakura_staff", snsUrl: "https://x.com/adezakura_staff", time: "21:00〜5:00,21:00～6:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目 15-11-1F", address_en: "1F, 2-15-11 Shinjuku, Tokyo", tags: ["初心者向け", "初心者多め", "イベント多い", "外国人多い","ノーチャージ","英語対応","変わったリキュール有"], icon: "https://unavatar.io/twitter/adezakura_staff", note: "#", medium: "#",
        description_jp: "DJブースもあるショットバー。ビアンバーでスミノフアイスを置いているのはここだけかも？",
        description_en: "A shot bar featuring a DJ booth. It might be the only lesbian-friendly bar in the area that serves Smirnoff Ice."
    },

    // B系列 - Lグループ (B(L))
    { 
        name_jp: "LITTLE MONKEY", name_en: "LITTLE MONKEY", series: "B系列", seriesMark: "B(L)", type: "ビアン", area: "東京", xId: "@little_monkey80", snsUrl: "https://x.com/little_monkey80", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-14-7赤川ビル1階", address_en: "1F, Akagawa Bldg, 2-14-7 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "盛り上がる", "イベント多い", "持ち込み食べ物可", "穏やか"], icon: "https://unavatar.io/twitter/little_monkey80", note: "#", medium: "#",
        description_jp: "L系列の1号店で、お猿の看板が目印。料金体系をSNSで公開している親切なお店。若い層に人気です！",
        description_en: "The first L-series shop, marked by a monkey sign. A very welcoming bar that posts its prices on social media. Very popular with the younger crowd."
    },
    { 
        name_jp: "LAUGH", name_en: "LAUGH", series: "B系列", seriesMark: "B(L)", type: "ビアン", area: "東京", xId: "@BARLAUGH07", snsUrl: "https://x.com/BARLAUGH07", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-7ふぁーぶる店舗2F", address_en: "2F, 2-18-7 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者多め", "初心者向け", "イベント多い", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BARLAUGH07", note: "#", medium: "#",
        description_jp: "グルークファーストの2階。犬の歯のロゴが目印！若い子が多く、2面の窓が開放的なお店です。階段の登りづらさも体験してみて！",
        description_en: "Located above Gluck First, featuring a dog-tooth logo. Popular with young people, the bar has two large windows. Give the uniquely steep stairs a try!"
    },
    { 
        name_jp: "Lin9", name_en: "Lin9", series: "B系列", seriesMark: "B(L)", type: "MIX", area: "東京", xId: "@Lin993960", snsUrl: "https://x.com/Lin993960", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目新宿御苑136ビル9F", address_en: "9F, Shinjuku Gyoen 136 Bldg, 1-36 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可","ボトルキープ有", "初心者向け", "イベント多い", "持ち込み食べ物可", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/Lin993960", note: "#", medium: "#",
        description_jp: "オオカミのイラストがクール。昼は古着屋、夜はバー。ベランダから新宿のビル群を眺めながら飲めるお店です。",
        description_en: "Features a cool wolf illustration. It's a vintage clothing store by day and a bar by night. You can enjoy a drink on the balcony while overlooking Shinjuku's skyline."
    },

    // B系列 - Gグループ (B(G))
    { 
        name_jp: "グルークファースト", name_en: "Gluck First", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜8:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-7ふぁーぶる店舗1階", address_en: "1F, 2-18-7 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "イベント多い", "持ち込み食べ物可", "ボトルキープ有", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "#", medium: "#",
        description_jp: "大きな駐車場前で朝（昼？）まで営業中。黒を基調とした内装で夜の雰囲気たっぷり。紙タバコは外で吸うスタイルです。",
        description_en: "Located in front of the large parking lot and open until morning (sometimes noon!). Features a sleek black interior. Cigarette smoking is allowed outside."
    },
    { 
        name_jp: "グルークネクスト", name_en: "Gluck Next", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-11林ビル2階", address_en: "2F, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者多め", "初心者向け", "ボトルキープ有", "イベント多い", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "#", medium: "#",
        description_jp: "二丁目のビアンバー界隈では最大級の広さ。ダーツ、カラオケ、ボードゲームと遊びが充実. 天使のインテリアが並んでいます。",
        description_en: "One of the most spacious bars in the Ni-chome lesbian scene. Fully equipped with darts, karaoke, and games. The interior is decorated with many angel figures."
    },
    { 
        name_jp: "グルークゼロ", name_en: "Gluck Zero", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜5:00,19:00~5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-15 山原ハイツB1", address_en: "B1, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "ボトルキープ有", "イベント多い", "穏やか", "盛り上がる", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "#", medium: "#",
        description_jp: "白基調の店内で、B系列初の仲通り沿い店舗。ボードゲームが豊富。地下なのでWi-Fiの強さをぜひ現地で試してみて！",
        description_en: "A white-themed interior and the first B-series bar along Naka-dori. Plenty of board games available. Since it's on B1F, go test the Wi-Fi strength for yourself!"
    },
    { 
        name_jp: "GILLTY", name_en: "GILLTY", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "Instagramのみ", snsUrl: "https://www.instagram.com/gillty__mixbar", time: "20:00〜27:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目-36-3新宿御苑136ビル1階", address_en: "1F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", tags: ["喫煙可", "ボトルキープ有", "穏やか", "持ち込み食べ物可", "イベント多い"], icon: "instagram", note: "#", medium: "#",
        description_jp: "昼はカフェ、夜はバー。コンセント完備のカウンター席があり、プロジェクター映像も楽しめます。完全キャッシュレス決済です。",
        description_en: "A cafe by day and a bar by night. Features counter seats with power outlets and projected visuals. This is a cashless-only establishment."
    },

    // 特別マークグループ
    { 
        name_jp: "GOLD FINGER", name_en: "GOLD FINGER", series: "GF系", seriesMark: "☝️", type: "MIX", area: "東京", xId: "@GOLDFINGERTOKYO", snsUrl: "https://x.com/GOLDFINGERTOKYO", time: "17:00〜24:00,17:00~28:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 12-11林ビル1階", address_en: "1F, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", tags: ["初心者多め","外国人多い","ノーチャージ","英語対応", "初心者向け"], icon: "https://unavatar.io/twitter/GOLDFINGERTOKYO", note: "#", medium: "#",
        description_jp: "世界的に有名なショットバー。外国人の客層が多く、とにかくたくさんの人と出会いたい時にピッタリな場所です。",
        description_en: "A world-famous shot bar. Very popular with international visitors. The perfect spot if you want to meet a large number of people in one night."
    },
    { 
        name_jp: "ラブHOT", name_en: "LOVE HOT", series: "GF系", seriesMark: "☝️", type: "ビアン", area: "東京", xId: "@GOLDFINGERTOKYO", snsUrl: "https://x.com/GOLDFINGERTOKYO", time: "19:00~26:00", holiday: "金曜と土曜以外", address_jp: "東京都新宿区新宿2丁目 12-2-3、4、5階", address_en: "3-5F, 2-12-2 Shinjuku, Tokyo", tags: ["初心者多め","カラオケ","外国人多い","ノーチャージ",], icon: "https://unavatar.io/twitter/GOLDFINGERTOKYO", note: "#", medium: "#",
        description_jp: "GF系列のスナック風バー。週末限定で、複数フロアごとに異なる雰囲気が楽しめます。ノーチャージなのでハシゴにも最適！",
        description_en: "A snack-style bar from the GF series. Open on weekends, you can enjoy different vibes across multiple floors. No cover charge makes it perfect for bar hopping!"
    },
    { 
        name_jp: "どん浴", name_en: "Donyoku", series: "船系", seriesMark: "🚢", type: "MIX", area: "東京", xId: "@donyoku2018", snsUrl: "https://x.com/donyoku2018", time: "14:00〜22:00", holiday: "火曜", address_jp: "東京都新宿区新宿2丁目-7-3ヴェラハイツ新宿御苑203", address_en: "203, Vera Heights, 2-7-3 Shinjuku, Tokyo", tags: ["初心者多め","初心者向け","フード有",], icon: "https://unavatar.io/twitter/donyoku2018", note: "#", medium: "#",
        description_jp: "足湯が楽しめるカフェ。看板ロボットに癒やされながら、お昼からご飯とリラックスタイムを過ごせます。",
        description_en: "A cafe where you can enjoy a footbath. Relax with their mascot robot while enjoying a meal and a soothing soak starting from the afternoon."
    },
    { 
        name_jp: "どろぶね", name_en: "Dorobune", series: "船系", seriesMark: "🚢", type: "ビアン", area: "東京", xId: "@dorobune1222", snsUrl: "https://x.com/dorobune1222", time: "19:00〜23:00", holiday: "不定休", address_jp: "東京都新宿区新宿2-7-3ヴェラハイツ新宿御苑205", address_en: "205, Vera Heights, 2-7-3 Shinjuku, Tokyo", tags: ["初心者多め","初心者向け","フード有",], icon: "https://unavatar.io/twitter/dorobune1222", note: "#", medium: "#",
        description_jp: "「女酒場」としてリニューアル。定期的にコラボイベントやオフ会を開催しており、コミュニティを広げたい方におすすめ。",
        description_en: "Renewed as a 'Female Tavern.' They frequently host collaboration events and meetups, making it a great place to expand your social circle."
    },

    // その他
    { 
        name_jp: "LAGOON", name_en: "LAGOON", type: "ビアン", area: "東京", xId: "@lagoon0410", snsUrl: "https://x.com/lagoon0410", time: "18:00〜24:00,18:00～25:00", holiday: "日曜,月曜,木曜", address_jp: "東京都新宿区新宿2丁目-18-10新千鳥街の中", address_en: "Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", tags: ["初心者向け", "初心者多め", "フード有", "お通し有", "変わったリキュール有", "穏やか", "年齢層高め"], icon: "https://unavatar.io/twitter/lagoon0410", note: "https://note.com/412357siki/n/n44f1fe5eaca6", medium: "#",
        description_jp: "新千鳥街にある、海岸がコンセプトのまったりしたお店. ビールサーバー完備。葉っぱの看板が目印です。",
        description_en: "A chill, beach-themed bar in Shin-Chidorigai. Equipped with a beer server and marked by its distinctive leaf sign."
    },
    { 
        name_jp: "ELLVIE", name_en: "ELLVIE", type: "ビアン", area: "東京", xId: "@Ellevie_", snsUrl: "https://x.com/Ellevie_", time: "18:00〜24:00,18:00～4:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目18-10新千鳥街の中", address_en: "Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", tags: ["初心者多め", "初心者向け", "フード有", "変わったリキュール有", "穏やか", "ボトルキープ有", "年齢層高め"], icon: "https://unavatar.io/twitter/Ellevie_", note: "https://note.com/412357siki/n/n416d22497985?sub_rt=share_pb", medium: "#",
        description_jp: "密集地帯にあるカウンターとテーブル席のお店。窓があり開放的で、食事メニューも充実しています。",
        description_en: "A bar with both counter and table seating in a densely packed area. It's airy with windows and offers an extensive food menu."
    },
    { 
        name_jp: "YES", name_en: "YES", type: "ビアン", area: "東京", xId: "@BAR_YES_201", snsUrl: "https://x.com/BAR_YES_201", time: "18:00〜last", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 18-10-201", address_en: "201, 2-18-10 Shinjuku, Tokyo", tags: ["穏やか", "年齢層高め", "変わったリキュール有", "お通し有", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BAR_YES_201", note: "https://note.com/412357siki/n/n9f915b56c341", medium: "#",
        description_jp: "新千鳥街の階段を登った先にあるカウンターのみのお店。営業しているかは運次第なところも魅力！？",
        description_en: "A counter-only bar up the stairs in Shin-Chidorigai. Part of its charm is that whether it's open depends on your luck!"
    },
    { 
        name_jp: "AVANTY", name_en: "AVANTY", type: "ビアン", area: "東京", xId: "@yumineesan", snsUrl: "https://x.com/yumineesan", time: "20:00〜last", holiday: "月曜,木曜", address_jp: "東京都新宿区新宿2丁目 18-10-1階", address_en: "1F, 2-18-10 Shinjuku, Tokyo", tags: ["穏やか", "お通し有", "フード有", "ボトルキープ有", "年齢層高め", "喫煙可"], icon: "https://unavatar.io/twitter/yumineesan", note: "https://note.com/412357siki/n/n8f9da14b0fef", medium: "#",
        description_jp: "赤いドアの小窓が目印のカウンターバー。日替わりの手作りお通しが絶品。SNSをチェックして行ってみて！",
        description_en: "A counter bar marked by a small window in a red door. Their daily handmade appetizers are excellent. Check their social media before you go!"
    },
    { 
        name_jp: "バーファイブ5", name_en: "Bar Five5", type: "ビアン", area: "東京", xId: "@BAR_Five5", snsUrl: "https://x.com/BAR_Five5", time: "18:00〜24:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目-15-8-2F", address_en: "2F, 2-15-8 Shinjuku, Tokyo", tags: ["年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/BAR_Five5", note: "#", medium: "#",
        description_jp: "通称「百合の小道」にある老舗。青い看板が目印で、2階の窓から通りを見下ろせる落ち着いた空間です。",
        description_en: "An established bar on 'Yuri Alley.' Look for the blue sign. A calm space on the 2nd floor where you can look out over the street."
    },
    { 
        name_jp: "あじゃら", name_en: "Ajara", type: "MIX", area: "東京", xId: "@ajara_chibar", snsUrl: "https://x.com/ajara_chibar", time: "18:00〜25:00", holiday: "日曜", address_jp: "東京都新宿区新宿2丁目 15-8", address_en: "2-15-8 Shinjuku, Tokyo", tags: ["初心者向け", "穏やか", "変わったリキュール有", "フード有", "年齢層高め", "喫煙可"], icon: "https://unavatar.io/twitter/ajara_chibar", note: "#", medium: "#",
        description_jp: "百合の小道の曇りガラスのお店。自家製サングリアや洋風おつまみが豊富。間借り営業なども行っています。",
        description_en: "A bar with frosted glass windows on Yuri Alley. Offers homemade sangria and various Western-style snacks. They also host guest kitchen events."
    },
    { 
        name_jp: "SUPERMODEL", name_en: "SUPERMODEL", type: "MIX", area: "東京", xId: "@supermodel0412", snsUrl: "https://x.com/supermodel0412", time: "20:00〜27:00,20:00~29:00", holiday: "火曜", address_jp: "東京都新宿区新宿2丁目-15-8中村建物ビル1階", address_en: "1F, Nakamura Bldg, 2-15-8 Shinjuku, Tokyo", tags: ["カラオケ", "初心者多め", "喫煙可", "変わったリキュール有", "盛り上がる"], icon: "https://unavatar.io/twitter/supermodel0412", note: "#", medium: "#",
        description_jp: "百合の小道にあり、外国人も多い賑やかなお店。ゲイバーのようなノリでカラオケを楽しめます！",
        description_en: "A lively spot on Yuri Alley that attracts many international guests. Enjoy karaoke with an upbeat atmosphere similar to a gay bar!"
    },
    { 
        name_jp: "うーたん", name_en: "U-tan", type: "ビアン", area: "東京", xId: "@3oKOFLjgPthoJF6", snsUrl: "https://x.com/3oKOFLjgPthoJF6", time: "20:00〜26:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-16-3第三宏和ビル2階", address_en: "2F, Dai-san Kowa Bldg, 2-16-3 Shinjuku, Tokyo", tags: ["カラオケ", "穏やか", "盛り上がる", "喫煙可", "お通し有"], icon: "https://unavatar.io/twitter/3oKOFLjgPthoJF6", note: "#", medium: "#",
        description_jp: "コインロッカーがあるビルの2階。常連さんが多めですが、アットホームで盛り上がれるレズビアンバーです。",
        description_en: "On the 2nd floor of a building with coin lockers. While it has many regulars, it's a very welcoming and fun lesbian bar."
    },
    { 
        name_jp: "バー絆", name_en: "Bar Kizuna", type: "ビアン", area: "東京", xId: "@kizunamio", snsUrl: "https://x.com/kizunamio", time: "19:00〜23:00", holiday: "月曜,火曜,木曜", address_jp: "東京都新宿区新宿2丁目-16-3第三宏和ビル3階", address_en: "3F, Dai-san Kowa Bldg, 2-16-3 Shinjuku, Tokyo", tags: ["年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/kizunamio", note: "#", medium: "#",
        description_jp: "大きな駐車場近くのビル3階。年齢層は高めで、ゆっくりお酒を楽しみたい時に最適な老舗です。",
        description_en: "Located on the 3rd floor near the large parking lot. An established bar with an older clientele, ideal for when you want to drink peacefully."
    },
    { 
        name_jp: "バーSTELLA", name_en: "Bar STELLA", type: "MIX", area: "東京", xId: "@bar_lunastella", snsUrl: "https://x.com/bar_lunastella", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-10-3ユニビル3階", address_en: "3F, Uni-Bldg, 2-10-3 Shinjuku, Tokyo", tags: ["イベント多い","カラオケ",], icon: "https://unavatar.io/twitter/bar_lunastella", note: "#", medium: "#",
        description_jp: "お寺の近く、ビルの3階にある比較的新しいお店。カラオケや多彩なイベントで賑わっています。",
        description_en: "A relatively new shop on the 3rd floor near the temple. Always lively with karaoke and various events."
    },
    { 
        name_jp: "TAMAGO", name_en: "TAMAGO", type: "MIX", area: "東京", xId: "@TAMAGO_BAR", snsUrl: "https://x.com/TAMAGO_BAR", time: "21:00〜26:00", holiday: "月曜", address_jp: "東京都新宿区新宿2丁目", address_en: "2-chome, Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "穏やか", "年齢層高め", "盛り上がる"], icon: "https://unavatar.io/twitter/TAMAGO_BAR", note: "#", medium: "#",
        description_jp: "女性向けカプセルホテル近くの、レズビアンバーからMIXバーになったお店。カラオケもあり落ち着いて楽しめます。",
        description_en: "Formerly a lesbian bar, now a MIX bar located near the women's capsule hotel. Karaoke available in a relaxed setting."
    },
    { 
        name_jp: "DIAMOND HOLIC", name_en: "DIAMOND HOLIC", type: "ビアン", area: "東京", xId: "@DIAMOND_HOLIC", snsUrl: "https://x.com/DIAMOND_HOLIC", time: "19:00〜23:30,19:00~5:00", holiday: "月曜", address_jp: "東京都新宿区新宿2丁目-18-8栗原ビル2階", address_en: "2F, Kurihara Bldg, 2-18-8 Shinjuku, Tokyo", tags: ["イベント多い","ノーチャージ","盛り上がる",], icon: "https://unavatar.io/twitter/DIAMOND_HOLIC", note: "#", medium: "#",
        description_jp: "ノーチャージで楽しめるショットバースタイルのビアンバー。有名イベント「ダイヤモンドカッター」と一緒に楽しむのも最高！",
        description_en: "A shot-bar style lesbian bar with no cover charge. Perfect to visit alongside the famous 'Diamond Cutter' party events."
    },
    { 
        name_jp: "SUNNY", name_en: "SUNNY", type: "ビアン", area: "東京", xId: "@natsuyo32", snsUrl: "https://x.com/natsuyo32", time: "21:00〜", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-15-8中村建物ビル2階", address_en: "2F, Nakamura Bldg, 2-15-8 Shinjuku, Tokyo", tags: ["年齢層高め","カラオケ",], icon: "https://unavatar.io/twitter/natsuyo32", note: "#", medium: "#",
        description_jp: "百合の小道にある老舗。落ち着いた年齢層が多く、階段を登った先で大人の社会勉強ができる場所です。",
        description_en: "An established bar in Yuri Alley with an older crowd. Located up the stairs, it's a great place for some mature 'social education'."
    },
    { 
        name_jp: "MIMOSA", name_en: "MIMOSA", type: "ビアン", area: "東京", xId: "@YuikaMimosa", snsUrl: "https://x.com/YuikaMimosa", time: "20:00〜23:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目-18-10 1階", address_en: "1F, 2-18-10 Shinjuku, Tokyo", tags: ["年齢層高め","穏やか","変わったリキュール有",], icon: "https://unavatar.io/twitter/YuikaMimosa", note: "#", medium: "#",
        description_jp: "密集地帯の路地裏にひっそりと佇むお店。静かにまったり飲みたい時、変わったリキュールを楽しみたい時に最適。",
        description_en: "A hidden gem tucked away in a quiet alley. Perfect for a calm night or exploring their selection of unique liqueurs."
    },
    { 
        name_jp: "HUNEY BUNNY", name_en: "HUNEY BUNNY", type: "ビアン", area: "東京", xId: "@HUNEY_BUNNY8282", snsUrl: "https://x.com/HUNEY_BUNNY8282", time: "21:00〜4:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-12-11林ビルB1", address_en: "B1, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "穏やか", "年齢層高め", "フード有", "お通し有", "盛り上がる"], icon: "https://unavatar.io/twitter/HONEY_BUNNY8282", note: "#", medium: "#",
        description_jp: "GFビルの地下にある老舗。広いカウンターやボックス席があり、カラオケやWi-Fi、本格的なおつまみも充実しています。",
        description_en: "An established bar on B1F of the GF building. Features a large counter and booths, plus karaoke, Wi-Fi, and a solid food menu."
    },
    { 
        name_jp: "villain", name_en: "villain", type: "MIX", area: "東京", xId: "@bar_villains", snsUrl: "https://x.com/bar_villains", time: "21:00〜9:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-16セントフォービル901", address_en: "901, St. Four Bldg, 2-12-16 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "穏やか", "初心者向け", "フード有", "盛り上がる", "持ち込み食べ物可", "ボトルキープ有","イベント多い"], icon: "https://unavatar.io/twitter/bar_villains", note: "#", medium: "#",
        description_jp: "二丁目の中心にあるビルの9階。ダーツやカラオケが楽しめ、ソファ席でゆったり朝まで過ごせるMIXバーです。",
        description_en: "Located on the 9th floor in the heart of Ni-chome. A MIX bar with darts and karaoke where you can relax on sofas until morning."
    },
    { 
        name_jp: "パンドラ", name_en: "Pandora", type: "MIX", area: "東京", xId: "@_pandora_2017", snsUrl: "https://x.com/_pandora_2017", time: "22:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-16セントフォービル201", address_en: "201, St. Four Bldg, 2-12-16 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "穏やか", "盛り上がる", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/_pandora_2017", note: "#", medium: "#",
        description_jp: "ビルの2階（階段推奨）。お通しテキーラが出てくるなど、ビアンバーとはまた違った刺激的な世界を味わえるお店です。",
        description_en: "On the 2nd floor (stairs recommended). Known for 'Otoshi Tequila,' it offers a thrilling experience different from typical lesbian bars."
    },
    { 
        name_jp: "YOTTA", name_en: "YOTTA", type: "MIX", area: "東京", xId: "@YOTTA0701", snsUrl: "https://x.com/YOTTA0701", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-11-11近藤ビル201", address_en: "201, Kondo Bldg, 2-11-11 Shinjuku, Tokyo", tags: ["カラオケ","ボトルキープ有","盛り上がる","喫煙可",], icon: "https://unavatar.io/twitter/YOTTA0701", note: "#", medium: "#",
        description_jp: "少し隠れた場所にある、カラオケと喫煙OKなお店。1階奥の階段からどうぞ。SNSでのハッシュタグ使いも独特です。",
        description_en: "A slightly hidden spot with karaoke and smoking allowed. Use the stairs at the end of the 1st-floor hallway. They have a unique social media style."
    },
    { 
        name_jp: "BAR Nico", name_en: "BAR Nico", type: "MIX", area: "東京", xId: "@BarNico0627", snsUrl: "https://x.com/BarNico0627", time: "20:00〜5:00,20:00~8:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目-36-3新宿御苑136ビル2階", address_en: "2F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", tags: ["カラオケ","ボトルキープ有","喫煙可","盛り上がる",], icon: "https://unavatar.io/twitter/BarNico0627", note: "#", medium: "#",
        description_jp: "新宿一丁目のビルにあるMIXバー。カラオケやダーツが楽しめ、朝まで賑やかに過ごせます。",
        description_en: "A MIX bar in an Ic-chome building. You can enjoy karaoke and darts in a lively atmosphere until early morning."
    },
    { 
        name_jp: "Lily and", name_en: "Lily and", type: "MIX", area: "東京", xId: "@lilyand2mixbar", snsUrl: "https://x.com/lilyand2mixbar", time: "18:00〜23:00,20:00~26:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 12-15山原ハイツ401", address_en: "401, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", tags: ["カラオケ","喫煙可","変わったリキュール有","フード有",], icon: "https://unavatar.io/twitter/lilyand2mixbar", note: "#", medium: "#",
        description_jp: "レズビアンのお客さんも多いMIXバー。果実酒が豊富で、仲通りから少し入ったエレベーターから上がれます。",
        description_en: "A MIX bar popular with lesbian customers. Offers a wide variety of fruit liqueurs. The elevator entrance is just off Naka-dori."
    },
    { 
        name_jp: "bar belle by あじゃり", name_en: "Bar Belle", type: "ビアン", area: "東京", xId: "@barbelless", snsUrl: "https://x.com/barbelless", time: "21:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-15-14パンチョスタワー4F", address_en: "4F, Panchos Tower, 2-15-14 Shinjuku, Tokyo", tags: ["カラオケ", "喫煙可", "フード有", "イベント多い", "穏やか"], icon: "https://unavatar.io/twitter/barbelless", note: "#", medium: "#",
        description_jp: "特徴的な外装のビル4階。白基調の綺麗な店内で、コの字カウンターが特徴。勇気を出して奥のエレベーターへ！",
        description_en: "On the 4th floor of a unique-looking building. Features a beautiful white-themed interior with a U-shaped counter. Be brave and head to the back elevator!"
    },
    { 
        name_jp: "BELLUS", name_en: "BELLUS", type: "MIX", area: "東京", xId: "@BELLUS2023", snsUrl: "https://x.com/BELLUS2023", time: "21:00〜27:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-10", address_en: "2-18-10 Shinjuku, Tokyo", tags: ["カラオケ", "変わったリキュール有", "穏やか", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BELLUS2023", note: "#", medium: "#",
        description_jp: "駐車場前の超コンパクトなお店。カウンター数席のみの密な空間で、まったりカラオケも楽しめます。",
        description_en: "A super-compact bar in front of the parking lot. A cozy space with just a few counter seats where you can enjoy karaoke."
    },
    { 
        name_jp: "香まり", name_en: "Kamari", type: "MIX", area: "東京", xId: "@sexual_mix", snsUrl: "https://x.com/sexual_mix", time: "19:30〜", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-10新千鳥街1F", address_en: "1F, Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", tags: ["喫煙可","年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/sexual_mix", note: "#", medium: "#",
        description_jp: "新千鳥街1階にある、カウンターのみのMIXバー。年齢層は高めで、落ち着いて社会勉強ができる雰囲気です。",
        description_en: "A counter-only MIX bar on the 1st floor of Shin-Chidorigai. Attracts an older crowd; a great place for some quiet 'social education'."
    },
    { 
        name_jp: "QUEEN TOKYO", name_en: "QUEEN TOKYO", type: "MIX", area: "東京", xId: "Instagramのみ", snsUrl: "https://www.instagram.com/queentokyobar", time: "18:00〜26:30", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-11-7-108", address_en: "108, 2-11-7 Shinjuku, Tokyo", tags: ["喫煙可", "カラオケ", "盛り上がる","外国人多い","ノーチャージ","英語対応", "持ち込み食べ物可", "初心者多い"], icon: "instagram", note: "#", medium: "#",
        description_jp: "KING系列の外国人向けバー。ノーチャージでカラオケもあり、グローバルな雰囲気が漂う週末を過ごせます。",
        description_en: "A KING-series bar designed for international guests. No cover charge and karaoke available—perfect for a global weekend vibe."
    }, 

   {     name_jp: "bar空 urue", name_en: "bar urue", type: "ビアン", area: "東京", xId: "@urueaya", snsUrl: "https://x.com/urueaya", time: "19:00〜23:00", holiday: "水曜、木曜", address_jp: "東京都豊島区池袋2-61-15 1階", address_en: "1F, 2-61-15 Ikebukuro, Toshima-ku, Tokyo", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/urueaya", note: "#", medium: "#",
       　description_jp: "未訪問、現在調査中訪問次第載せます。料理をツイートしてる店。",
     　  description_en: "Coming soon! (I haven't visited yet, but planning to!)."
   },
   { 
          name_jp: "呑み処 ゆり", name_en: "nomidokoro yuri", type: "ビアン", area: "東京", xId: "@womanonly_yuri", snsUrl: "https://x.com/womanonly_yuri", time: "19:00〜25:00、19:00~29:00", holiday: "月曜", address_jp: "東京都豊島区池袋2-12-14 第８前島ビル201", address_en: "#201 Dai-8 Maejima Bldg, 2-12-14 Ikebukuro, Toshima-ku, Tokyo", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/womanonly_yuri", note: "#", medium: "#",
       description_jp: "未訪問、現在調査中訪問次第載せます。",
       description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    },
   { 
        name_jp: "barあんたの居場所。", name_en: "bar antanoibasho", type: "ビアン", area: "東京", xId: "@antanoibasho", snsUrl: "https://x.com/antanoibasho", time: "20:00〜27:00", holiday: "日曜", address_jp: "東京都港区赤坂3-21-17 ASK赤坂ビル6階", address_en: "6F ASK Akasaka Bldg, 3-21-17 Akasaka, Minato-ku, Tokyo", tags: ["初心者向け", "穏やか", "カラオケ"], icon: "https://unavatar.io/twitter/antanoibasho", note: "#", medium: "#",
        description_jp: "未訪問、現在調査中訪問次第載せます。ドラマのロケ地にも使用された店",
        description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    },
    { 
        name_jp: "渋谷501", name_en: "shibuya501", type: "ビアン", area: "東京", xId: "@shibuya501", snsUrl: "https://x.com/shibuya501", time: "18:00〜24:00,19:00~24:00", holiday: "不定休", address_jp: "東京都渋谷区宇田川町41-31 ユニデン渋谷ビル 5階", address_en: "5F Uniden Shibuya Bldg, 41-31 Udagawacho, Shibuya-ku, Tokyo", tags: ["初心者向け", "穏やか", "イベント多い"], icon: "https://unavatar.io/twitter/shibuya501", note: "#", medium: "#",
        description_jp: "未訪問、現在調査中訪問次第載せます。オフ会が多い店",
        description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    },
    { 
        name_jp: "酒と肴やぶれ", name_en: "Yabure", type: "ビアン", area: "西日本", xId: "@yabure1911", snsUrl: "https://x.com/yabure1911", time: "17:00〜23:00,17:00~24:00", holiday: "不定休", address_jp: "福岡県福岡市中央区今泉1-23-4 REMIX天神2F", address_en: "2F REMIX Tenjin, 1-23-4 Imaizumi, Chuo-ku, Fukuoka-shi, Fukuoka", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/yabure1911", note: "#", medium: "#",
        description_jp: "未訪問、現在調査中訪問次第載せます。",
        description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    },
    { 
        name_jp: "cafebar YOLO", name_en: "cafebar YOLO", type: "ビアン", area: "西日本", xId: "@cafebarYOLO", snsUrl: "https://x.com/cafebarYOLO", time: "20:00〜27:00", holiday: "火曜、水曜、木曜", address_jp: "福岡県福岡市中央区今泉1-21-5 アデッソ今泉4F", address_en: "4F Adesso Imaizumi, 1-21-5 Imaizumi, Chuo-ku, Fukuoka-shi, Fukuoka", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/cafebarYOLO", note: "#", medium: "#",
        description_jp: "未訪問、現在調査中訪問次第載せます。",
        description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    }, 
    { 
        name_jp: "LOL101", name_en: "LOL101", type: "ビアン", area: "西日本", xId: "@barlol101", snsUrl: "https://x.com/barlol101", time: "19:00〜26:00", holiday: "不定休", address_jp: "福岡県福岡市中央区天神2-4-20 天神プラッサ地下1F", address_en: "B1F Tenjin Plassa, 2-4-20 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/barlol101", note: "#", medium: "#",
        description_jp: "未訪問、現在調査中訪問次第載せます。",
        description_en: "Coming soon! (I haven't visited yet, but planning to!)."
    }
    
];