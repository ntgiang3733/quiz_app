let dic = [
    ['あ', 'a'],
    ['い', 'i'],
    ['う', 'u'],
    ['え', 'e'],
    ['お', 'o'],
    ['か', 'ka'],
    ['き', 'ki'],
    ['く', 'ku'],
    ['け', 'ke'],
    ['こ', 'ko'],
    ['が', 'ga'],
    ['ぎ', 'gi'],
    ['ぐ', 'gu'],
    ['げ', 'ge'],
    ['ご', 'go'],
    ['さ', 'sa'],
    ['し', 'shi'],
    ['す', 'su'],
    ['せ', 'se'],
    ['そ', 'so'],
    ['ざ', 'za'],
    ['じ', 'ji'],
    ['ず', 'zu'],
    ['ぜ', 'ze'],
    ['ぞ', 'zo'],
    ['た', 'ta'],
    ['ち', 'chi'],
    ['つ', 'tsu'],
    ['て', 'te'],
    ['と', 'to'],
    ['だ', 'da'],
    ['ぢ', 'ji'],
    ['づ', 'zu'],
    ['で', 'de'],
    ['ど', 'do'],
    ['な', 'na'],
    ['に', 'ni'],
    ['ぬ', 'nu'],
    ['ね', 'ne'],
    ['の', 'no'],
    ['は', 'ha'],
    ['ひ', 'hi'],
    ['ふ', 'fu'],
    ['へ', 'he'],
    ['ほ', 'ho'],
    ['ば', 'ba'],
    ['び', 'bi'],
    ['ぶ', 'bu'],
    ['べ', 'be'],
    ['ぼ', 'bo'],
    ['ぱ', 'pa'],
    ['ぴ', 'pi'],
    ['ぷ', 'pu'],
    ['ぺ', 'pe'],
    ['ぽ', 'po'],
    ['ま', 'ma'],
    ['み', 'mi'],
    ['む', 'mu'],
    ['め', 'me'],
    ['も', 'mo'],
    ['や', 'ya'],
    ['ゆ', 'yu'],
    ['よ', 'yo'],
    ['ら', 'ra'],
    ['り', 'ri'],
    ['る', 'ru'],
    ['れ', 're'],
    ['ろ', 'ro'],
    ['わ', 'wa'],
    ['を', 'wo'],
    ['ん', 'n'],
    ['ア', 'a'],
    ['カ', 'ka'],
    ['サ', 'sa'],
    ['タ', 'ta'],
    ['ナ', 'na'],
    ['ハ', 'ha'],
    ['マ', 'ma'],
    ['ヤ', 'ya'],
    ['ラ', 'ra'],
    ['ワ', 'wa'],
    ['イ', 'i'],
    ['キ', 'ki'],
    ['シ', 'shi'],
    ['チ', 'chi'],
    ['ニ', 'ni'],
    ['ヒ', 'hi'],
    ['ミ', 'mi'],
    ['リ', 'ri'],
    ['ウ', 'u'],
    ['ク', 'ku'],
    ['ス', 'su'],
    ['ツ', 'tsu'],
    ['ヌ', 'nu'],
    ['フ', 'fu'],
    ['ム', 'mu'],
    ['ユ', 'yu'],
    ['ル', 'ru'],
    ['エ', 'e'],
    ['ケ', 'ke'],
    ['セ', 'se'],
    ['テ', 'te'],
    ['ネ', 'ne'],
    ['ヘ', 'he'],
    ['メ', 'me'],
    ['レ', 're'],
    ['オ', 'o'],
    ['コ', 'ko'],
    ['ソ', 'so'],
    ['ト', 'to'],
    ['ノ', 'no'],
    ['ホ', 'ho'],
    ['モ', 'mo'],
    ['ヨ', 'yo'],
    ['ロ', 'ro'],
    ['ヲ', 'o'],
    ['ン', 'n'],
    ['ガ', 'ga'],
    ['ザ', 'za'],
    ['ダ', 'da'],
    ['バ', 'ba'],
    ['パ', 'pa'],
    ['ギ', 'gi'],
    ['ジ', 'ji'],
    ['ヂ', 'ij'],
    ['ビ', 'bi'],
    ['ピ', 'pi'],
    ['グ', 'gu'],
    ['ズ', 'zu'],
    ['ヅ', 'zu'],
    ['ブ', 'bu'],
    ['プ', 'pu'],
    ['ゲ', 'ge'],
    ['ゼ', 'ze'],
    ['デ', 'de'],
    ['ベ', 'be'],
    ['ペ', 'pe'],
    ['ゴ', 'go'],
    ['ゾ', 'zo'],
    ['ド', 'do'],
    ['ボ', 'bo'],
    ['ポ', 'po']
];

function convert(n) {
    let roma = '';
    n.split("").forEach((item) => {
        res = dic.find((c) => {
            return c[0] == item
        });
        if (res != undefined) {
            roma = roma + res[1] + ' ';
        } else {
            roma = roma + item + ' ';
        }
    });
    return roma;
}

let vocabList = [
    'わかります',
    'あります',
    'すき[な]',
    'きらい[な]',
    'じょうず[な]',
    'へた[な]',
    'りょうり',
    'のみもの',
    'スポーツ',
    'やきゅう',
    'ダンス',
    'おんがく',
    'うた',
    'クラシック',
    'ジャズ',
    'コンサート',
    'カラオケ',
    'かぶき',
    'え',
    'じ',
    'かんじ',
    'ひらがな',
    'かたかな',
    'ローマじ',
    'こまかいおかね',
    'チケット',
    'じかん',
    'ようじ',
    'やくそく',
    'ごしゅじん',
    'おっと/しゅじん',
    'おくさん',
    'つま/かない',
    'こども',
    'よく',
    'だいたい',
    'たくさん',
    'すこし',
    'ぜんぜん',
    'はやく',
    '～から',
    'どうして',
    'ざんねんです[ね]',
    'すみません',
    'もしもし',
    'ああ',
    'いっしょにいかがですか',
    '[～は]ちょっと….',
    'だめですか。',
    'またこんどおねがいします'
]

let romList = [];

vocabList.forEach((item) => {
    romList.push(convert(item))
})
console.log(romList)