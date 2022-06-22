let quizData = [
];

let hiragana = ['おきます', 'ねます', 'はたらきます', 'やすみます', 'べんきょうします', 'おわります', 'デパート', 'ぎんこう', 'ゆうびんきょく', 'としょかん', 'びじゅつかん', 'でんわばんごう', 'なんばん', 'いま', '～じ', '～ふん / ～ぷん', 'はん', 'なんじ', 'なんぷん', 'ごぜん', 'ごご', 'あさ', 'ひる', 'ばん', 'よる', 'おととい', 'きのう', 'きょう', 'あした', 'あさって', 'けさ', 'こんばん', 'ゆうべ', 'やすみ', 'ひるやすみ', 'まいあさ', 'まいばん', 'まいにち', 'ペキン', 'バンコク', 'ロンドン', 'ロサンゼルス', 'たいへんですね', 'ばんごうあんない', 'おといあわせ'];
let viet1 = ['thức dậy', 'ngủ', 'làm việc', 'nghỉ ngơi', 'học tập', 'kết thúc', 'cửa hàng bách hóa', 'ngân hàng', 'bưu điện', 'thư viện', 'viện bảo tàng', 'số điện thoại', 'số mấy', 'bây giờ', '~giờ', '～phút', 'phân nửa', 'mấy giờ', 'mấy phút', 'sáng (AM: trước 12 giờ)', 'chiều (PM: sau 12 giờ)', 'sáng', 'trưa', 'tối', 'tối', 'ngày hôm kia', 'ngày hôm qua', 'hôm nay', 'ngày mai', 'ngày mốt', 'sáng nay', 'tối nay', 'tối hôm qua', 'nghỉ ngơi (danh từ)', 'nghỉ trưa', 'mỗi sáng', 'mỗi tối', 'mỗi ngày', 'Bắc Kinh', 'Bangkok', 'Luân Đôn', 'Los Angeles', 'vất vả nhỉ', 'dịch vụ 116 (hỏi số điện thoại)', '(số điện thoại) bạn muốn biết / hỏi là'];
let viet2 = ['o ki ma su', 'ne ma su', 'ha ta ra ki ma su', 'ya su mi ma su', 'ben kiyo chi ma su', 'o wa ri ma su', 'de po to', 'ghin ko', 'yu bin kiyo ku', 'to chiyo kan', 'bi ziyu tsu ken', 'den wa ban go', 'nan ban', 'i ma', 'zi', 'fun/pun', 'han', 'nan zi', 'nan pun', 'go zen', 'go go', 'a sa', 'hi ru', 'ban', 'yo ru', 'o to toi', 'ki no', 'kiyo', 'a shi ta', 'a sat te', 'ke sa', 'kon ban', 'yu bi ', 'ya su mi  ', 'hi ru ya su mi', 'mai a sa', 'mai ban', 'mai ni sa', 'pe kin', 'ban ko ku', 'ron don', 'ro san ze ru nu', 'tai hen de su ne', 'ban go an nai', 'o toi a wa se']
hiragana.forEach((item, idx) => {
    // if (idx >= 10) return;
    quizData.push([
        viet1[idx], 
        // item , 
        item + ' (' + viet2[idx].trim() + ')'
    ]);
})
