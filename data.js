var quizData = [
];

// let hiragana = [
//     'ばんせん', 'いきます', 'きます', 'かえります', 'がっこう', 'スーパー', 'えき', 'ひこうき', 'ふね', 'でんしゃ', 'ちかてつ', 'しんかんせん', 'バス', 'タクシー', 'じてんしゃ', 'あるいて', 'ひと', 'ともだち', 'かれ', 'かのじょ', 'かぞく', 'せんしゅう', 'こんしゅう', 'らいしゅう', 'せんげつ', 'こんげつ', 'らいげつ', 'きょねん', 'ことし', 'らいねん', '―がつ', 'なんがつ', 'ついたち', 'ふつか', 'みっか', 'よっか', 'いつか', 'むいか', 'なのか', 'ようか', 'ここのか', 'とおか', 'じゅうよっか', 'はつか', 'にじゅうよっか', '―にち', 'なんにち', 'いつ', 'たんじょうび', 'ふつう', 'きゅうこう', 'とっきゅう', 'つぎの', 'どういたしまして'
// ];
// let viet1 = [
//     'sân ga số –', 'đi', 'đến', 'về', 'trường học', 'siêu thị', 'ga, nhà ga', 'máy bay', 'thuyền, tàu thủy', 'tàu điện', 'tàu điện ngầm', 'tàu Shinkansen (tàu điện siêu tốc của Nhật)', 'xe Buýt', 'tắc-xi', 'xe đạp', 'đi bộ', 'người', 'bạn, bạn bè', 'anh ấy, bạn trai', 'chị ấy, bạn gái', 'gia đình', 'tuần trước', 'tuần này', 'tuần sau', 'tháng trước', 'tháng này', 'tháng sau', 'năm ngoái', 'năm nay', 'năm sau', 'tháng –', 'tháng mấy', 'ngày mồng 1', 'ngày mồng 2, 2 ngày', 'ngày mồng 3, 3 ngày', 'ngày mồng 4, 4 ngày', 'ngày mồng 5, 5 ngày', 'ngày mồng 6, 6 ngày', 'ngày mồng 7, 7 ngày', 'ngày mồng 8, 8 ngày', 'ngày mồng 9, 9 ngày', 'ngày mồng 10, 10 ngày', 'ngày 14, 14 ngày', 'ngày 20, 20 ngày', 'ngày 24, 24 ngày', 'ngày -, – ngày', 'ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày', 'bao giờ, khi nào', 'sinh nhật', 'tàu thường (dừng cả ở các ga lẻ)', 'tàu tốc hành', 'tàu tốc hành đặc biệt', 'tiếp theo', 'Không có chi'
// ];
// let viet2 = [
//     'ban sen', 'i ki ma su', 'ki ma su', 'ka e ri ma su', 'gak ko', 'su pa', 'e ki', 'hi ko ki', 'fu ne', 'den shiya', 'chi ka te tsu', 'shin kan sen', 'ba su', 'ta ku shi', 'zi ten shiya', 'a rui te', 'hi to', 'to mo da chi', 'ka re', 'ka no ziyo', 'ka zo ku', 'sen shiyu', 'kon shiyu', 'rai shiyu', 'sen ge tsu', 'kon ge tsu', 'rai ge tsu', 'kiyo nen', 'ko to shi', 'rai nen', 'ga tsu', 'nan ga tsu', 'tsu i ta chi', 'fu tsu ka', 'mik ka', 'yok ka', 'I tsu ka', 'mui ka', 'na no ka', 'yo ka', 'ko ko no ka', 'to o ka', 'shiyu yok ka', 'ha tsu ka', 'ni shiyu yok ka', 'ni chi', 'nan ni chi', 'i tsu   ', 'tan ziyo bi', 'fu tsu  ', 'kiyu ko', 'tok kiyu', 'tsu gi no', 'doi  ta shi ma shi ta'
// ];

//---------------------------Bai 1-----------------------------
// var hiragana = [
//     'わたし', 'わたしたち', 'あなた', 'あのひと', 'あのかた', 'みなさん', '～さん', '～ちゃん', '～くん', '～じん', 'せんせい', 'きょうし', 'がくせい', 'かいしゃいん', '～しゃいん', 'ぎんこういん', 'いしゃ', 'けんきゅうしゃ', 'エンジニア', 'だいがく', 'びょういん', 'でんき', 'だれ（どなた）', '―さい', 'なんさい', 'はい', 'いいえ', 'しつれいですが', 'おなまえは？', 'はじめまして。', 'どうぞよろしく[おねがいします]。', 'こちらは～さんです。', '～からきました。', 'アメリカ', 'イギリス', 'インド', 'インドネシア', 'かんこく', 'タイ', 'ちゅうごく', 'ドイツ', 'にほん', 'フランス', 'ブラジル', 'さくらだいがく'
// ];
// var viet1 = [
//     'Tôi', 'Chúng tôi', 'Anh/chị, ông/bà, bạn (ngôi thứ 2 số ít)', 'Người kia', 'Vị này Lịch sự tương đương với あのひと', 'Các bạn, các anh, các chị, mọi người', 'Anh ～, Chị ～, Ông ～, Bà ～ (cách gọi người khác 1 cách lịch sự)', 'Bé ( dùng cho nữ) hoặc gọi thân mật cho trẻ con ( cả nam lẫn nữ)', 'Bé (dùng cho nam) hoặc gọi thân mật', 'Người nước ～', 'Giáo viên', 'Giáo viên ( dùng để nói đến nghề nghiệp)', 'học sinh, sinh viên', 'nhân viên công ty', 'nhân viên công ty ～', 'nhân viên ngân hàng', 'bác sĩ', ' nhà nghiên cứu', 'kỹ sư', 'trường đại học', 'bệnh viện', 'Điện, đèn điện', 'ai (ngài nào, vị nào)', 'tuổi', 'mấy tuổi', 'vâng', 'không', 'Xin lỗi ( khi muốn nhờ ai việc gì đó)', 'Bạn tên gì?', 'chào lần đầu gặp nhau', 'rất hân hạnh được làm quen', 'đây là ngài', 'đến từ ～', 'Mỹ', 'Anh', 'Ấn Độ', 'Indonesia', 'Hàn quốc', 'Thái Lan', 'Trung Quốc', 'Đức', 'Nhật', 'Pháp', 'Brazil', 'Trường ĐH Sakura (Hoa Anh Đào)'
// ];
// var viet2 = [
//     'wa ta shi', 'wa ta shi ta chi', 'a na ta', 'a no hi to', 'a no ka ta', 'mi na chin', 'chin', 'chiyan', 'kun', 'zin', 'sen se', 'kiyo shi', 'ga ku se', 'kai shiya in', 'shiya in', 'ghin ko in', 'i shiya', 'ken kiyu shiya', 'en zi ni a', 'dai ga ku', 'biyo in', 'den ki', 'da re', 'sai', 'nan sai', 'hai', 'i e', 'shi tsu re de su ka', 'o na ma e wa', 'ha zi me ma shi te', 'do zo yo ro shi ku', 'ko sa ra wa ~ san de su', 'ka ra ki ma si ta', 'a me ri ka', 'i ghi ri su', 'in do', 'in do ne shi a', 'kan go ku', 'tai', 'chiyu go ku', 'do i tsu', 'ni hon', 'hu ran su', 'bu ra zi ru', 'sa ku ra dai ga ku'
// ];

//---------------------------Bai 2-----------------------------
// var hiragana = [
//     'これ', 'それ', 'あれ', 'この~', 'その~', 'あの~', 'ほん', 'じしょ', 'ざっし', 'しんぶん', 'ノート', 'てちょう', 'めいし', 'カード', 'テレホンカード', 'えんぴつ', 'ボールペン', 'シャープペンシル', 'かぎ', 'とけい', 'かさ', 'かばん', '[カセット] テーブ', 'テープレコーダー', 'テレビ', 'ラジオ', 'カメラ', 'コンピュータ', 'じどうしゃ', 'つくえ', 'いす', 'チョコレート', 'コーヒー', 'えいご', 'にほんご', '∼ご', 'なん', 'そう', 'ちがいます。', 'そうですか。', 'あのう', 'ほんのきもちです', 'どうぞ', 'どうも', '[どうも] ありがとう[ございます]', 'これから おせわになります', 'こちらこそ よろしく'
// ];
// var viet1 = [
//     'Cái này, đây (vật ở gần người nói)', 'Cái đó, đó (vật ở gần người nghe)', 'Cái kia, kia (vật ở xa cả người nói và người nghe)', '~ này', '~ đó', '~ kia', 'Sách', 'Từ điển', 'Tạp chí', 'Báo', 'Vở', 'Sổ tay', 'Danh thiếp', 'Thẻ, cạc', 'Thẻ điện thoại', 'Bút chì', 'Bút bi', 'Bút chì kim, bút chì bấm', 'Chìa khóa', 'Đồng hồ', 'ô, dù', 'Cặp sách, túi sách', 'Băng [cát-xét]', 'Máy ghi âm', 'Tivi', 'Radio', 'Máy ảnh', 'Máy vi tính', 'Ô tô, xe hơi', 'Cái bàn', 'Ghế', 'Chocolate', 'Cà phê', 'Tiếng Anh', 'Tiếng Nhật', 'Tiếng~', 'Cái gì', 'Đúng vậy', 'Nhầm rồi', 'Thế à?', ' À…(được sử dụng để thể hiện sự do dự)', 'Đây là chút quà nhỏ của tôi', 'Xin mời', 'Cảm ơn', 'Cảm ơn nhiều', 'Từ này mong được anh/chị giúp đỡ', 'Chính tôi mới mong được anh/chị giúp đỡ'
// ];
// var viet2 = [
//     'ko re ', 'so re', 'a re', 'ko no', 'so no', 'a no', 'hon', 'zi shiyo', 'zas shi', 'shin bun', 'no to', 'te sayo', 'me shi', 'ka do', 'te re hon ka do', 'en bi tsu', 'bo ru pen', 'shiya pu pen shi ru', 'ka ghi', 'to ke', 'ka sa', 'ka ban', 'ka set to, te bu', 'te bu re ko da', 'te re bi', 'ra zi o', 'ka me ra', 'kon piyu ta', 'zi do shiya', 'tsu ku e', 'i su', 'chiyo ko re to', 'ko hi', 'e go', 'ni hon go', 'go', 'nan', 'so', 'chi hai ma su', 'so de su ka', 'a no', 'hon no ki mo sa de su', 'do zo', 'do mo', 'a ri ga to', 'ko re ka ra o se wa ni na ri ma su', 'ko chi ra ko so yo ro shi ku'
// ];

//---------------------------Bai 3-----------------------------
var hiragana = [
    'ここ', 'そこ', 'あそこ', 'どこ', 'こちら', 'そちら', 'あちら', 'どちら', 'きょうしつ', 'しょくどう', 'じむしょ', 'かいぎしつ', 'うけつけ', 'ロビー', 'へや', 'トイレ（おてあらい）', 'かいだん', 'エレベーター', 'エスカレーター', '[お]くに', 'かいしゃ', 'うち', 'でんわ', 'くつ', 'ネクタイ', 'ワイン', 'たばこ', 'うりば', 'ちか', '―かい（－がい）', 'なんがい', '―えん', 'いくら', 'ひゃく', 'せん', 'まん', 'すみません', '～でございます', 'みせてください', 'じゃ', '[～を]ください', 'しんおおさか', 'イタリア', 'スイス'
];
var viet1 = [
    'chỗ này, đây', 'chỗ đó, đó', 'chỗ kia, kia', 'chỗ nào, đâu', 'phía này, đằng này, chỗ này, đây (là cách nói lịch sự của ここ)', 'phía đó, đằng đó, chỗ đó, đó (là cách nói lịch sự của そこ)', 'phía kia, đằng kia, chỗ kia, kia (cách nói lịch sự của あそこ)', 'phía nào, đằng nào, chỗ nào, đâu (cách nói lịch sự của どこ )', 'lớp học, phòng học', 'nhà ăn', 'văn phòng', 'phòng họp', 'bộ phận tiếp tân, phòng thường trực, lễ tân', 'hành lang, đại sảnh', 'căn phòng', 'nhà vệ sinh, phòng vệ sinh, toa-lét', 'cầu thang', 'thang máy', 'thang cuốn', 'đất nước', 'công ty', 'nhà', 'máy điện thoại, điện thoại', 'giày', 'cà vạt', 'rượu vang', 'thuốc lá', 'quầy bán (trong một cửa hàng bách hóa)', 'tầng hầm, dưới mặt đất', 'tầng thứ –', 'tầng mấy', 'yên', 'bao nhiêu tiền', 'trăm', 'nghìn', 'mười nghìn, vạn', 'Xin lỗi', '(cách nói lịch sự của 「です」)', 'cho tôi xem [~]', 'Thế thì, vậy thì', 'cho tôi [~]', 'tên một nhà ga ở Osaka', 'Ý', 'Thụy Sĩ'
];
var viet2 = [
    'ko ko', 'so ko', 'a so ko', 'do ko', 'ko chi ra', 'so chi ra', 'a chi ra', 'do chi ra', 'kiyo shi tsu', 'shiyo ku do', 'zi mu shiyo', 'kai ghi shi tsu', 'e ke tsu ke', 'ro bi', 'he ya', 'toi re (o te a rai)', 'kai dan', 'e re be ta', 'e su ka re ta', 'o ku ni', 'kai shiya', 'u chi', 'den wa', 'ku tsu', 'ne ku tai', 'wa in', 'ta ba ko', 'u ri ba', 'sa ka', 'kai (gai)', 'nan gai', 'en', 'I ku ra', 'hiya ku', 'sen', 'man', 'su mi ma sen', 'de go zai ma si', 'mi se te ku da sai', 'ziya', '[wo] ku da sai', 'shin o o sa ka', 'I ta ri a', 'sui su'
];

hiragana.forEach((item, idx) => {
    // if (idx >= 10) return;
    // if (idx < 0 || idx >= 30) return;
    quizData.push([
        viet1[idx], 
        // item , 
        item + ' (' + viet2[idx].trim() + ')'
    ]);
})
