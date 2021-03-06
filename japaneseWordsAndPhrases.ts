export interface JapaneseWordOrPhrase {
    // kanji?: string;
    hiragana?: string;
    katakana?: string;
    translation: string;
    // translation_en?: string;
    // transcription?: string;
    // transcription_en?: string;
    // pronounce_url?: string;  // ссылка на файл с произношением
}

// TODO
export function getWordsBySign(kana: string, sign: string): JapaneseWordOrPhrase[] {
    let words: JapaneseWordOrPhrase[] = [
        // глаголы
        {translation: 'существовать, быть, находиться (неодушевленных предметах)', hiragana: 'ある'},
        {translation: 'cуществовать, быть (об одушевленных предметах)', hiragana: 'いる'},
        {translation: 'встречаться, видеться', hiragana: 'あう'},
        {translation: 'играть, развлекаться', hiragana: 'あそぶ'},
        {translation: 'класть во что-либо, помещать, наливать, вмещать, впускать', hiragana: 'いれる'},
        {translation: 'вставать, просыпаться, происходить, случаться', hiragana: 'おきる'},
        {translation: 'преподавать, учить, объяснять', hiragana: 'おしえる'},
        {translation: 'покупать, приобретать', hiragana: 'かう'},
        {translation: 'уходить (домой), возвращаться (домой)', hiragana: 'かえる'},
        {translation: 'слышать, слушать, узнавать, спрашивать', hiragana: 'きく'},
        {translation: 'надевать, носить (одежду)', hiragana: 'きる'},
        {translation: 'приходить', hiragana: 'くる'},
        {translation: 'закрывать, запирать, завязывать', hiragana: 'しめる'},
        {translation: 'есть, питаться', hiragana: 'たべる'},
        {translation: 'отличаться, "нет"', hiragana: 'ちがう'},
        {translation: 'снимать, фотографировать', hiragana: 'とる'},
        {translation: 'пить, глотать', hiragana: 'のむ'},
        {translation: 'ждать, ожидать', hiragana: 'まつ'},
        {translation: 'читать', hiragana: 'よむ'},
        {translation: 'думать', hiragana: 'おもう'},
        {translation: 'говорить', hiragana: 'いう'},
        {translation: 'писать', hiragana: 'かく'},


        // существительные
        // {translation: '', hiragana: '', kanji: ''},
        {translation: 'семья', hiragana: 'かぞく'},
        {translation: 'мама', hiragana: 'おかあさん'},
        {translation: 'папа', hiragana: 'おとうさん'},
        {translation: 'мама (моя)', hiragana: 'はは'},
        {translation: 'папа (мой)', hiragana: 'ちち'},
        {translation: 'дочь', hiragana: 'むすめ'},
        {translation: 'сын', hiragana: 'むすこ'},

        {translation: 'кошка', hiragana: 'ねこ'},
        {translation: 'собака', hiragana: 'いぬ'},
        {translation: 'яблоко', hiragana: 'りんご'},
        {translation: 'вода', hiragana: 'みず'},
        {translation: 'окно', hiragana: 'まど'},
        {translation: 'кровать', hiragana: 'べっど'},
        {translation: 'татами', hiragana: 'たたみ'},

        // местоимения
        {translation: 'я', hiragana: 'わたし'},
        {translation: 'кто', hiragana: 'だれ'},
        {translation: 'когда', hiragana: 'いつ'},
        {translation: 'где', hiragana: 'どこ'},
        {translation: 'ты', hiragana: 'あなた'},

        // прилагательные
        {translation: 'удивительный', hiragana: 'すごい'},
        {translation: 'хороший', hiragana: 'いい'},
        {translation: 'новый', hiragana: 'あたらしい'},
        {translation: 'старый', hiragana: 'ふるい'},
        {translation: 'большой', hiragana: 'おおきい'},
        {translation: 'маленький', hiragana: 'ちいさい'},
        {translation: 'длинный', hiragana: 'ながい'},
        {translation: 'короткий', hiragana: 'みじかい'},
        {translation: 'красный', hiragana: 'あかい'},
        {translation: 'синий', hiragana: 'あおい'},
        {translation: 'белый', hiragana: 'しろい'},
        {translation: 'черный', hiragana: 'くろい'},

        // катакана
        {translation: 'туалет', katakana: 'トイレ'},
        {translation: 'отель', katakana: 'ホテル '},
        {translation: 'такси', katakana: 'タクシ'},
        {translation: 'ресторан', katakana: 'レストラン'},
        {translation: 'магазин', katakana: 'コンビニ'},
        {translation: 'супермаркет', katakana: 'スーパー'},
        {translation: 'кофе', katakana: 'コーヒ'},
        {translation: 'стекло', katakana: 'ガラス'},
        {translation: 'икра', katakana: 'イクラ'},
        {translation: 'банан', katakana: 'バナナ', transcription: 'банана'},
        {translation: 'гамбургер', katakana: 'ハンバーガー', transcription: 'ханба:га:'},
        {translation: 'паста (макароны)', katakana: 'パスタ', transcription: 'пасута'},
        {translation: 'сыр', katakana: 'チーズ', transcription: 'ти:дзу'},
        {translation: 'колбаса', katakana: 'ソーセージ', transcription: 'со:сэ:дзи'},
        {translation: 'книга', katakana: 'ブック'},
        {translation: 'волосы', katakana: 'ヘア'},
        {translation: 'ручка', katakana: 'ペン'},

        {translation: 'Россия', katakana: 'ロシア'},
        {translation: 'Америка', katakana: 'アメリカ'},
        {translation: 'Великобритания', katakana: 'イギリス'},
    ];
    return words.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}

export function getPhrasesBySign(kana: string, sign: string): JapaneseWordOrPhrase[] {
    // TODO
    let phrases: JapaneseWordOrPhrase[] = [
        {translation: 'Доброе утро', hiragana: 'おはようございます', transcription: 'о-хаё: годзаимас'},
        {translation: 'Добрый день', hiragana: 'こんにちは', transcription: 'коннити ва'},
        {translation: 'Добрый вечер', hiragana: 'こんばんは', transcription: 'комбан ва'},
        {translation: 'Спокойной ночи', hiragana: 'お休みなさい', transcription: 'о-ясуми насай'},
        {translation: 'Прощай', hiragana: 'さようなら', transcription: 'саё:нара'},
        {translation: 'Пока', hiragana: 'じゃね', transcription: 'дзя нэ'},
        {translation: 'Пока', hiragana: 'またね', transcription_en: 'matane'},

        {translation: 'Добро пожаловать', hiragana: 'ようこそ', transcription_en: 'youkoso'},
        {translation: 'Добро пожаловать домой', hiragana: 'おかえり', transcription_en: 'okaeri'},
        {translation: 'С Рождеством!', hiragana: 'めりいくりすます', katakana: 'メリークリスマス', transcription_en: 'Merii Kurisumasu'},

        {translation: 'Приятно познакомиться', hiragana: 'おあいできてうれしいです'},
        {translation: 'Как поживаете?', hiragana: 'おげんきですか'},
        {translation: 'Как дела?', hiragana: 'ちょうしはどう？'},

        {translation: 'Спасибо (краткая форма)', hiragana: 'どうも', transcription: 'до:мо'},
        {translation: 'Большое спасибо', hiragana: 'どうもありがとう', transcription: 'до:мо аригато:'},
        {translation: 'Спасибо (вежливая форма)', hiragana: 'ありがとう', transcription: 'аригато:'},
        {translation: 'Спасибо (перед едой)', hiragana: 'いただきます'},

        {translation: 'Помогите!', hiragana: '助けて'},
        {translation: 'Простите', hiragana: 'ごめんなさい', translation_en: 'I am sorry'},
        {translation: 'Извините', hiragana: 'すみません', translation_en: 'excuse me'},

        {translation: 'Я люблю тебя', hiragana: 'あいしてる', transcription_en: 'ai shiteru'},

        {translation: 'Алло', hiragana: 'もしもし'},

        {translation: 'Я чувствую себя плохо', hiragana: 'きぶんがわるい'},
        {translation: 'Напишите это здесь, пожалуйста', hiragana: 'ここにかいてください'},
        {translation: 'У меня болит живот', hiragana: 'いがいたい'},
        {translation: 'Остановись!', hiragana: 'やめて！'},
        {translation: 'Я не знаю', hiragana: 'しりません'},
        {translation: 'Позвони мне', hiragana: 'でんわしてね'},
        {translation: 'Я не могу в это поверить!', hiragana: 'しんじられない！'},
        {translation: 'Я хотел бы этот', hiragana: 'これがほしいのですが'},

        {translation: 'Что вы сказали?', hiragana: 'なんていいましたか？'},
        {translation: 'Что случилось?', hiragana: 'どうした？'},
        {translation: 'Почему?', hiragana: 'どうして？'},
        {translation: 'Что?', hiragana: 'なに？',},
        {translation: 'Как тебя зовут?', hiragana: 'おなまえは？'},
        {translation: 'Сколько тебе лет?', hiragana: 'なんさいですか？'},
        {translation: 'Сколько это будет стоит?', hiragana: 'いくらかかりますか？'},
        {translation: 'Могу ли я присесть здесь?', hiragana: 'ここにすわってもいいですか？'},
        {translation: 'В самом деле?', hiragana: 'ほんと？'},
        {translation: 'Вам помочь?', hiragana: 'ごようでしょうか？'},
    ];
    return phrases.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}