let quizData = [
];

let hiragana = [
    'ばんせん', 'いきます', 'きます', 'かえります', 'がっこう', 'スーパー', 'えき', 'ひこうき', 'ふね', 'でんしゃ', 'ちかてつ', 'しんかんせん', 'バス', 'タクシー', 'じてんしゃ', 'あるいて', 'ひと', 'ともだち', 'かれ', 'かのじょ', 'かぞく', 'せんしゅう', 'こんしゅう', 'らいしゅう', 'せんげつ', 'こんげつ', 'らいげつ', 'きょねん', 'ことし', 'らいねん', '―がつ', 'なんがつ', 'ついたち', 'ふつか', 'みっか', 'よっか', 'いつか', 'むいか', 'なのか', 'ようか', 'ここのか', 'とおか', 'じゅうよっか', 'はつか', 'にじゅうよっか', '―にち', 'なんにち', 'いつ', 'たんじょうび', 'ふつう', 'きゅうこう', 'とっきゅう', 'つぎの', 'どういたしまして'
];
let viet1 = [
    'sân ga số –', 'đi', 'đến', 'về', 'trường học', 'siêu thị', 'ga, nhà ga', 'máy bay', 'thuyền, tàu thủy', 'tàu điện', 'tàu điện ngầm', 'tàu Shinkansen (tàu điện siêu tốc của Nhật)', 'xe Buýt', 'tắc-xi', 'xe đạp', 'đi bộ', 'người', 'bạn, bạn bè', 'anh ấy, bạn trai', 'chị ấy, bạn gái', 'gia đình', 'tuần trước', 'tuần này', 'tuần sau', 'tháng trước', 'tháng này', 'tháng sau', 'năm ngoái', 'năm nay', 'năm sau', 'tháng –', 'tháng mấy', 'ngày mồng 1', 'ngày mồng 2, 2 ngày', 'ngày mồng 3, 3 ngày', 'ngày mồng 4, 4 ngày', 'ngày mồng 5, 5 ngày', 'ngày mồng 6, 6 ngày', 'ngày mồng 7, 7 ngày', 'ngày mồng 8, 8 ngày', 'ngày mồng 9, 9 ngày', 'ngày mồng 10, 10 ngày', 'ngày 14, 14 ngày', 'ngày 20, 20 ngày', 'ngày 24, 24 ngày', 'ngày -, – ngày', 'ngày mấy, ngày bao nhiêu, mấy ngày, bao nhiêu ngày', 'bao giờ, khi nào', 'sinh nhật', 'tàu thường (dừng cả ở các ga lẻ)', 'tàu tốc hành', 'tàu tốc hành đặc biệt', 'tiếp theo', 'Không có chi'
];
let viet2 = [
    'ban sen', 'i ki ma su', 'ki ma su', 'ka e ri ma su', 'gak ko', 'su pa', 'e ki', 'hi ko ki', 'fu ne', 'den shiya', 'chi ka te tsu', 'shin kan sen', 'ba su', 'ta ku shi', 'zi ten shiya', 'a rui te', 'hi to', 'to mo da chi', 'ka re', 'ka no ziyo', 'ka zo ku', 'sen shiyu', 'kon shiyu', 'rai shiyu', 'sen ge tsu', 'kon ge tsu', 'rai ge tsu', 'kiyo nen', 'ko to shi', 'rai nen', 'ga tsu', 'nan ga tsu', 'tsu i ta chi', 'fu tsu ka', 'mik ka', 'yok ka', 'I tsu ka', 'mui ka', 'na no ka', 'yo ka', 'ko ko no ka', 'to o ka', 'shiyu yok ka', 'ha tsu ka', 'ni shiyu yok ka', 'ni chi', 'nan ni chi', 'i tsu   ', 'tan ziyo bi', 'fu tsu  ', 'kiyu ko', 'tok kiyu', 'tsu gi no', 'doi  ta shi ma shi ta'
];
hiragana.forEach((item, idx) => {
    // if (idx >= 10) return;
    if (idx < 20 || idx >= 30) return;
    quizData.push([
        viet1[idx], 
        // item , 
        item + ' (' + viet2[idx].trim() + ')'
    ]);
})
