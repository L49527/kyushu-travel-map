// Day 3-7 Data
const dataDay3to7 = [
{
        day: 3, date: "6/13(六)", title: "太宰府上午散策・中午回博多", area: "太宰府・博多",
        hotel: "都ホテル博多", hotelLat: 33.5903, hotelLng: 130.4225, center: [33.52, 130.53],
        hotelImage: "images/都ホテル博多.jpg",
        hotelDesc: "【JR博多站直結】地下通道直達筑紫口，免淋雨<br>🛁 頂樓天然溫泉「都之湯」眺望博多夜景<br>🏊 室內恆溫泳池・健身房<br>🍽️ 3間餐廳酒吧・高樓層景觀房型<br>🧺 投幣洗衣機",
        transport: { public: "【🚌 直達巴士】博多バスターミナル1階 11番のりば→太宰府(40分¥800)<br>• 「太宰府ライナーバス旅人」— 不經天神，直達太宰府駅前<br>• 博多駅中央改札出→左前方「AMU PLAZA」入口→右側巴士大樓入口<br>  👀 標的物：中央改札出來左邊第一間「Hakata Gift & Gourmet」→左前方玻璃門<br>• 完全キャッシュレス：交通系IC(Suica/ICOCA)或信用卡感應，不收現金<br>• 土曜時刻(6/13 博多発→太宰府 ～12:00)：<br>  08:00直・08:15・08:30・08:45・09:00～11:48每12分・12:00・12:15・12:30・12:50<br>• 回程(太宰府→博多)：11:00・11:30・12:00・12:30・12:45<br>  👉 11:30発→12:08着、11:00発→11:38着<br>• 不用預約<br><br>💡 建議08:30前後出發，約09:20抵太宰府；11:30離開，12:08回博多<br><br>【🎮 Nintendo FUKUOKA】AMU Plaza 博多 8F<br>博多駅中央改札出站→往左前方進AMU Plaza→靠右走到底找東急ハンズ前面電梯→8F出電梯右手邊（步行約5分）" },
        timeline: [
            { time: "08:30", act: "博多→太宰府", desc: "🚌博多駅中央改札→巴士大樓1F 11番のりば→太宰府(40分¥800)。步行到巴士站約5分" },
            { time: "09:20", act: "巴士站→天滿宮", desc: "表參道步行約10分到天滿宮" },
            { time: "09:45", act: "天滿宮參拜", desc: "境內步行移動約15分（本殿・御神牛・御守）" },
            { time: "10:30", act: "天滿宮→菖蒲池→表參道", desc: "菖蒲池在天滿宮東側步行5分，回表參道商店步行10分" },
            { time: "11:30", act: "太宰府→博多", desc: "🚌巴士站步行2分→太宰府駅前搭車→博多(38分¥800)" },
            { time: "12:10", act: "午餐", desc: "博多站步行1～5分可到各餐廳" },
            { time: "13:15", act: "Nintendo FUKUOKA", desc: "中央改札→AMU Plaza 8F、步行約5分" },
            { time: "14:30", act: "購物", desc: "AMU Plaza→博多阪急地下→Ming、館內步行3～8分" },
            { time: "17:30", act: "晚餐", desc: "博多站→天神步行15分／地下鐵2分¥210。中洲步行20分" },
            { time: "19:30", act: "回飯店", desc: "天神→博多駅地下鐵2分¥210／步行15分。飯店直結筑紫口" }
        ],
        spots: [
            { name: "太宰府天滿宮", lat: 33.5197, lng: 130.5358 },
            { name: "隈研吾星巴克", lat: 33.5205, lng: 130.5345 },
            { name: "博多站", lat: 33.5897, lng: 130.4207 }
        ],
        meals: {
            breakfast: [
                { name: "博多站 朝食喜水丸", hours: "07:30-22:00", desc: "讓明太子控瘋狂的福岡限定！點選任一朝食定食，即可享受「明太子、辛子高菜、生薑泥」無限量吃到飽。搭配現烤鮮魚與 Q 彈白飯，是福岡最豪邁且最具 CP 值的早餐定食🍚。", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=喜水丸+博多一番街店" },
                { name: "天神 麵包工房", hours: "08:00-20:00", desc: "福岡排隊名店「FullFull」的姊妹店。必點招牌「名物明太子法國麵包」，剛出爐外殼香酥、內部充滿鹹口香潤的明太子醬。那種一口咬下海味爆發的滋味，是博多早晨的香甜節奏麵包🥐。", tag: "麵包", lat: 33.5922, lng: 130.3980, mapUrl: "https://maps.app.goo.gl/wCbnQWMeSwT1oeBm9" },
                { name: "珈琲館 (博多)", hours: "07:30-22:00", desc: "經典且優雅的日式喫茶氛圍。在這個充滿木質香氣的空間，享用厚片黃油吐司與現磨的一杯深焙珈琲。是旅程中想要安靜規劃接下來太宰府行程的最佳中繼站咖啡☕。", tag: "咖啡", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一番街" },
                { name: "西鐵車站 輕食", hours: "07:00-21:00", desc: "趕快轉搭觀光列車旅人號前的便利首選。精選九州產米的現捏「辛子明太子飯糰」或「天婦羅炸蝦御飯糰」。在車內一邊欣賞窗外風景一邊享用這份道地的日式美味輕食🍙。", tag: "輕食", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=西鉄天神駅" },
                { name: "太宰府 暖暮拉麵 (早場)", hours: "10:00-22:00", desc: "曾經榮獲全九州第一名拉麵頭銜的神級店家！細麵條完美鎖住醇郁卻不油膩的豚骨湯頭，搭配店家特製的辛辣紅醬提鮮。在表參道人潮湧現前，先來碗熱騰騰的暖心滋味拉麵🍜。", tag: "拉麵", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/?api=1&query=暖暮+太宰府駅前店" }
            ],
            lunch: [
                { name: "博多 たんや HAKATA", hours: "07:00-22:00", desc: "牛舌早午餐名店，薄切炭烤牛舌定食附山藥泥與麥飯。因為售完為止，中午回博多後要把握時間！博多駅博多口広場前 1F日式🍚。", tag: "定食", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/たんやHAKATA" },
                { name: "大地のうどん", hours: "07:00-23:00", desc: "博多駅地下「ちかてん」區域。招牌「巨大牛蒡天婦羅烏龍麵」視覺震撼，炸牛蒡比臉還長，湯頭是鰹魚醬油清甜系，與烏龍麵滑溜口感絕配麵食🍜。", tag: "麵食", lat: 33.5893, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/大地のうどん+博多駅ちかてん" },
                { name: "資さんうどん 博多", hours: "00:00-24:00", desc: "北九州最具代表性的當地連鎖，博多站一出改札正對面就有一家。不只うどん，還有博多名物「ぼた餅」可當飯後甜點，價格親民CP值超高麵食🍜。", tag: "麵食", lat: 33.5905, lng: 130.4203, mapUrl: "https://www.google.com/maps/search/資さんうどん+博多駅" },
                { name: "二葉亭 博多ラーメン", hours: "10:00-23:00", desc: "位在博多駅地下街的經典豚骨拉麵老舖，湯頭濃郁但不油膩，細麵條可調硬度，加點一份燉三層肉（とろ肉）絕對是完美搭配拉麵🍜。", tag: "拉麵", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/二葉亭+博多駅" },
                { name: "博多めんたい重 うお八", hours: "10:00-22:00", desc: "明太子控的天堂！明太子燒烤後鋪在飯上做成「めんたい重」，香氣四溢、微辣回甘。配上吸滿明太子高湯的茶漬け二吃，是博多限定幸福定食🍱。", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/博多めんたい重+うお八" },
                { name: "魚べい ヨドバシ博多", hours: "11:00-22:00", desc: "高CP值迴轉壽司，新幹線送餐。適合大食量卻又不想花大錢的午餐選擇壽司🍣。", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/魚べい+ヨドバシ博多店" }
            ],
            dinner: [
                { name: "博多 魚米壽司", hours: "11:00-23:00", desc: "高品質卻平價的迴轉壽司天堂！食材均由漁港直送，推薦本鮪魚中腹與炙燒鮭魚。新幹線列車送餐的高科技感與鮮美海味的完美融合，是結束太宰府行程後最省心又滿足的選擇壽司🍣。", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" },
                { name: "天神 燒鳥 信長", hours: "17:00-00:00", desc: "博多夜晚最熱鬧的居酒屋氛圍！傳統博多燒鳥特色：隨桌附贈的「生包菜」與多汁的「豬五花串」。职人在炭火前揮灑汗水烤出的每一棒，都是下酒的最佳神隊友居酒屋🍻。", tag: "居酒屋", threadRecommend: true, lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
                { name: "一風堂 本店 (大名)", hours: "11:00-22:00", desc: "重回拉麵傳奇的起點！大名本店限定「元祖赤丸/白丸」，湯頭比連鎖店更顯溫潤細膩。身為全球拉麵龍頭的母店，這裡乘載著一風堂走向世界的初心與極致職人魂拉麵🍜。", tag: "拉麵", lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=一風堂+大名本店" },
                { name: "中洲 鐵鍋餃子", hours: "17:00-23:00", desc: "宵夜場的第一選擇！一口一個、外皮烤到乾爽香脆的手工餃子，內餡充滿韭菜與豬肉的鮮香。搭配中洲那珂川的夜色與一杯冰涼的燒酎，這就是博多式的浪漫週末餃子🥟。", tag: "餃子", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+中洲店" },
                { name: "笑樂 牛腸鍋 (博多)", hours: "11:00-23:00", desc: "最後一晚，再給博多牛腸鍋一次機會！新鮮的牛大腸與大量韭菜在高湯中翻滾，香氣逼人。雖然已是第三天，但那種充滿膠原蛋白與在地熱情的滋味，依舊讓人回味無窮鍋物🍲。", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋+笑楽+博多駅" }
            ]
        },
        shopping: [
            { name: "太宰府表參道", hours: "09:00-18:00", desc: "梅枝餅、御守、傳統工藝品", tag: "老街", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/太宰府天満宮表参道" },
            { name: "隈研吾星巴克", hours: "08:00-20:00", desc: "限定馬克杯與週邊商品", tag: "限定", lat: 33.5207, lng: 130.5347, mapUrl: "https://www.google.com/maps/search/スターバックス+コーヒー+太宰府天満宮表参道店" },
            { name: "天滿宮御守販賣所", hours: "06:00-19:00", desc: "學業御守、鷽鳥御守", tag: "御守", lat: 33.5197, lng: 130.5358, mapUrl: "https://www.google.com/maps/search/太宰府天満宮+授与所" },
            { name: "梅園菓子舗", hours: "09:00-17:00", desc: "鬼瓦最中、傳統和菓子", tag: "和菓子", lat: 33.5200, lng: 130.5350, mapUrl: "https://www.google.com/maps/search/梅園菓子処" },
            { name: "博多Deitos", hours: "08:00-21:00", desc: "中午回博多後主力伴手禮區", tag: "博多站", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/博多デイトス" },
            { name: "マイング (Ming)", hours: "09:00-21:00", desc: "博多站地下土產街，適合補福岡盒裝點心", tag: "博多站", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/博多駅+マイング" },
            { name: "博多阪急 地下", hours: "10:00-20:00", desc: "高級甜點、熟食與精緻伴手禮", tag: "百貨", lat: 33.5898, lng: 130.4210, mapUrl: "https://www.google.com/maps/search/博多阪急+地下" },
            { name: "AMU Plaza 博多", hours: "10:00-20:00", desc: "下午購物主場，服飾、雜貨、餐廳一次解決", tag: "百貨", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/AMU+Plaza+Hakata" },
            { name: "Nintendo FUKUOKA", hours: "10:00-20:00", desc: "AMU Plaza 8F。JR博多站中央改札口出站→左前方AMU Plaza入口→東急ハンズ側電梯→8F出電梯右手邊", tag: "遊戲", lat: 33.5905, lng: 130.4210, mapUrl: "https://www.google.com/maps/search/?api=1&query=Nintendo+FUKUOKA+アミュプラザ博多" },
            { name: "Curensology カレンソロジー", hours: "10:00-20:00", desc: "AMU 3F。九州初出店！「旅する知的でエレガントな女性」為概念的職場/日常女裝品牌，簡約洗鍊", tag: "女裝", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/Curensology+アミュプラザ博多" },
            { name: "Conte コンテ", hours: "10:00-20:00", desc: "AMU 2F。九州初出店！韓國人氣當代女裝，簡約帶設計感，日常穿搭實用性高", tag: "女裝", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/コンテ+アミュプラザ博多" },
            { name: "URBAN RESEARCH", hours: "10:00-20:00", desc: "AMU 4F。メンズ・レディス。2025年3月リニューアル，經典日系選品店，女裝線 LAATO 也很推", tag: "女裝", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/URBAN+RESEARCH+アミュプラザ博多" },
            { name: "LUSH アミュエスト博多店", hours: "10:00-20:00", desc: "アミュエスト博多 1F（AMU Plaza 相連棟）。英國天然手工 cosmetics，必買 bath bomb 系列", tag: "美妝", lat: 33.5895, lng: 130.4212, mapUrl: "https://www.google.com/maps/search/LUSH+アミュエスト博多" },
            { name: "Aesop イソップ", hours: "10:00-20:00", desc: "AMU 6F。澳洲高端天然護膚品牌。AMU店空間由SIMPLICITY操刀設計，有專屬香水鑑賞區", tag: "美妝", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/Aesop+アミュプラザ博多" },
            { name: "clear クリア", hours: "10:00-21:00", desc: "博多マルイ 4F。エレガンス女裝，簡約優雅路線，ON/OFF 皆可穿", tag: "女裝", lat: 33.5895, lng: 130.4215, mapUrl: "https://www.google.com/maps/search/clear+博多マルイ" },
            { name: "POLO Ralph Lauren Women's（TWICE SANA）", hours: "10:00-20:00", desc: "大丸福岡天神店 本館7F（官方福岡 Women's 店點）。TWICE SANA 相關 Polo Play／女裝包款可先查庫存，避免現場缺貨。", tag: "女裝", lat: 33.5898, lng: 130.3982, mapUrl: "https://www.google.com/maps/search/大丸福岡天神店+ポロ+ラルフ+ローレン+ウィメンズ" }
        ],
        specialties: [
            { name: "梅枝餅 (かさの家)", hours: "09:00-18:00", desc: "太宰府必吃現烤紅豆甜點", tag: "甜點", lat: 33.5205, lng: 130.5345, image: "images/梅枝餅.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=かさの家" },
            { name: "太宰府合格御守", hours: "06:00-19:00", desc: "學問之神加持，考生必備", tag: "紀念品", lat: 33.5197, lng: 130.5358, image: "images/學業御守.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府天満宮" },
            { name: "隈研吾星巴克周邊", hours: "08:00-20:00", desc: "限定商品，設計愛好者必收", tag: "限定", lat: 33.5207, lng: 130.5347, image: "images/隈研吾星巴克周邊.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=スターバックス+太宰府天満宮表参道店" },
            { name: "明太子脆餅 (FullFull)", hours: "08:00-18:00", desc: "麵包名店推出的熱門零食", tag: "零食", lat: 33.5922, lng: 130.3980, image: "images/Full Full.jpg", mapUrl: "https://maps.app.goo.gl/wCbnQWMeSwT1oeBm9" },
            { name: "鬼瓦最中 (天山)", hours: "08:30-17:30", desc: "太宰府名物，巨大鬼瓦造型最中", tag: "甜點", lat: 33.5204, lng: 130.5348, image: "images/鬼瓦最中.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府参道+天山" },
            { name: "鷽餅 (梅園)", hours: "10:00-17:00", desc: "包著小木雕鷽鳥的幸運和菓子", tag: "和菓子", lat: 33.5200, lng: 130.5350, image: "images/鷽餅.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府+梅園" },
            { name: "太宰府限定一蘭", hours: "09:00-19:00", desc: "五角形合格碗拉麵，祈求考試合格", tag: "拉麵", lat: 33.5208, lng: 130.5348, image: "images/太宰府限定一蘭.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+太宰府参道店" }
        ],
        supermarkets: [
            { name: "Reganet Cute 博多巴士總站", hours: "07:00-23:00", desc: "位於B1，距離飯店步行約 3 分鐘", tag: "便利", lat: 33.5915, lng: 130.4205 },
            { name: "Lopia 博多 Yodobashi", hours: "10:00-20:00", desc: "高CP值生鮮超市，距離飯店步行約 2 分鐘", tag: "便宜", lat: 33.5885, lng: 130.4225 },
            { name: "Sunny 博多住吉店", hours: "24H", desc: "24小時營業，品項齊全，步行約 12 分鐘", tag: "24H", lat: 33.5855, lng: 130.4185 }
        ]
    },
    {
        day: 4, date: "6/14(日)", title: "由布院半日輕裝行", area: "由布院・別府",
        hotel: "御宿 野乃別府", hotelLat: 33.2795, hotelLng: 131.4985, center: [33.30, 131.40],
        hotelImage: "images/御宿 野乃別府.webp",
        hotelDesc: "【別府站前】全館榻榻米日式溫泉旅館<br>♨️ 頂樓露天風呂「別府八湯」眺望別府灣<br>🍜 免費夜鳴拉麵・泡湯後免費冰棒/乳酸菌飲料<br>👘 館內提供多款花色浴衣體驗<br>🧺 投幣洗衣機・漫畫休息區",
        transport: { public: "【JR Pass 走法：博多→別府】<br>1. JR博多站 1樓大廳找「在来線 / JR Lines / Conventional Lines」閘口，別走「新幹線 / Shinkansen」<br>2. 進閘後看電子看板，找「特急 ソニック 大分行き / Sonic for Oita」<br>3. 看看板顯示的「のりば / Platform」，搭手扶梯或電梯上 2樓月台；月台可能變動，以現場看板為準<br>4. 搭「特急 Sonic / 音速號」直達別府：博多 08:20 → 別府 10:25，約 2 小時，建議先用 JR Pass 劃指定席<br>5. 到別府站後從西口出站（出改札後跟「西口 / West Exit」指示）；御宿 野乃別府就在站前，先寄放行李最順<br>6. 若要接著去由布院：別府站西口外即為巴士乘車處，找「亀の井バス / Kamenoi Bus」，搭乘車頭標示「由布院駅前バスセンター 行き」或「由布院方面」的班次（41/43 系統），約 60 分到由布院<br>7. 【寄放行李後搭車建議】10:25 抵達 → 10:30-10:50 寄放行李 → 約 11:00 返回別府站西口，搭 11:00 或之後開往由布院的巴士（10:40 太趕，不建議）。確切班次請當天查詢最新時刻表或交通 App<br>• JR Kyushu Pass 可搭特急 Sonic；若沒劃位也可搭自由席，但旺季建議劃位<br>• 【6/14(日) 回程：由布院→別府】JR Pass 可用班次<br>　16:01 普通 大分行 → 大分 17:03，同站轉日豊本線→別府 17:18 着<br>　17:06 普通 大分行 → 大分 18:04，轉乘→別府 18:18 着<br>　（16:01若從金鱗湖趕不上，可搭17:06，在駅前 Lawson 或候車室等）<br>• 特急ゆふ・ゆふいんの森直達別府：14:45後無班次（當天末班）<br>• 確切班次請當天查詢最新時刻表或交通 App<br>" },
        timeline: [
            { time: "07:30", act: "退房・博多站出發", desc: "買個駅弁或麵包帶上車" },
            { time: "08:20", act: "Sonic 特急出發", desc: "JR博多站搭特急 Sonic 往大分・別府方向，JR Pass 可用，建議事先劃指定席" },
            { time: "10:25", act: "抵達別府站", desc: "從別府站西口出站，御宿 野乃別府在站前；先寄放行李再去由布院最順" },
            { time: "11:00", act: "巴士前往由布院", desc: "別府站西口搭龜之井巴士往由布院，車程約 60 分（建議11點後班次，詳細時刻請現場確認）" },
            { time: "12:00", act: "由布院午間散策", desc: "湯之坪街道吃午餐、逛雜貨甜點～16:00" },
            { time: "16:00", act: "步行往由布院駅", desc: "金鱗湖/湯之坪→駅徒歩15分" },
            { time: "16:01", act: "普通 大分行", desc: "JR Pass 使用，約17:03到 大分，同站轉日豊本線→別府17:18着" },
            { time: "18:30", act: "入住御宿 野乃別府", desc: "チェックイン後泡湯放鬆，晚餐在別府" }
        ],
        spots: [
            { name: "由布院駅", lat: 33.2624, lng: 131.3549 },
            { name: "湯之坪街道", lat: 33.2635, lng: 131.3690 },
            { name: "金鱗湖", lat: 33.2615, lng: 131.3725 },
            { name: "御宿 野乃別府", lat: 33.2795, lng: 131.4985 }
        ],
        meals: {
            breakfast: [
                { name: "博多站 駅弁屋 祭", hours: "06:00-22:00", desc: "九州各地駅弁大集合，選一個帶上車！", tag: "駅弁", lat: 33.5902, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=駅弁屋+祭+博多駅" },
                { name: "博多站 ヴィ・ド・フランス", hours: "07:00-21:00", desc: "車站內麵包店，買個三明治帶走", tag: "麵包", lat: 33.5900, lng: 130.4210, mapUrl: "https://www.google.com/maps/search/?api=1&query=ヴィ・ド・フランス+博多駅" },
                { name: "Sonic 車內販賣", hours: "車內服務", desc: "特急車內有咖啡輕食推車", tag: "車內", lat: 33.5902, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=JR+Sonic+特急" },
                { name: "Lawson 博多站前店", hours: "24H", desc: "便利飯糰、飲料、零食隨便買", tag: "便利", lat: 33.5915, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+博多駅前" },
                { name: "Tully's Coffee 博多站", hours: "07:00-22:00", desc: "咖啡+輕食，車站內方便快速", tag: "咖啡", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=Tully's+Coffee+博多駅" }
            ],
            lunch: [
                { name: "由布まぶし 心（金鱗湖本店）", hours: "10:30-18:00", desc: "由布院最強釜飯！豐後牛、地雞、鰻魚三種吃法，排隊名店", tag: "釜飯", lat: 33.2605, lng: 131.3705, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布まぶし+心+金鱗湖本店" },
                { name: "由布院 Milch", hours: "10:00-17:30", desc: "湯之坪街道大排長龍的半熟起司蛋糕名店！現烤ケーゼクーヘン外微焦內濃郁，搭配濃厚霜淇淋，散步由布院必吃甜點", tag: "甜點", lat: 33.2640, lng: 131.3680, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+ミルヒ" },
                { name: "金賞コロッケ（金賞可樂餅）", hours: "10:00-17:30", desc: "Milch 櫃檯現炸的得獎可樂餅！外皮金黃酥脆、內餡綿密香甜，湯之坪街道最受歡迎的邊走邊吃散步小吃", tag: "小吃", lat: 33.2640, lng: 131.3680, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+ミルヒ" },
                { name: "花麹菊家 ぷりんどら", hours: "09:00-18:00", desc: "布丁銅鑼燒，經典散步甜點", tag: "甜點", lat: 33.2642, lng: 131.3682, mapUrl: "https://www.google.com/maps/search/?api=1&query=花麹菊家+由布院" },
                { name: "YURARI 湯布院プリン", hours: "10:00-17:00", desc: "布丁專門店，濃厚綿密口感極品", tag: "甜點", lat: 33.2638, lng: 131.3685, mapUrl: "https://www.google.com/maps/search/?api=1&query=YURARI+湯布院プリン" },
                { name: "こちょぱん", hours: "09:30-16:00", desc: "湯之坪人氣麵包店，現烤麵包香氣撲鼻", tag: "麵包", lat: 33.2635, lng: 131.3692, mapUrl: "https://www.google.com/maps/search/?api=1&query=こちょぱん+由布院" },
                { name: "鞠智 スイートポテト", hours: "10:00-17:00", desc: "由布院極品地瓜甜點，口感如絲絹般細膩", tag: "甜點", lat: 33.2648, lng: 131.3688, mapUrl: "https://www.google.com/maps/search/?api=1&query=鞠智+由布院" }
            ],
            dinner: [
                { name: "大和田鮨", hours: "11:30-14:00 / 17:00-21:00（月休）", desc: "🍽️ 食べログ3.67・百名店受賞\n地魚にぎり（關鯖・關鯵厚切握壽司）・おまかせコース（主廚精選）", tag: "壽司", lat: 33.2800, lng: 131.4960, mapUrl: "https://www.google.com/maps/search/?api=1&query=大和田鮨+別府" },
                { name: "亀正くるくる寿司", hours: "11:00-21:00", desc: "🍽️ 食べログ3.71 別府最火紅迴轉壽司，魚貨超大塊鮮度抜群", tag: "壽司", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "肴鶏魚 Miiima", hours: "17:30-23:00", desc: "🍽️ 食べログ3.61 駅徒歩3分\nおばんざい盛合せ（家常小菜拼盤）・本日の刺身いいとこ盛り（今日精選生魚片）・大分地酒", tag: "居酒屋", lat: 33.2790, lng: 131.4990, mapUrl: "https://www.google.com/maps/search/?api=1&query=肴鶏魚+Miiima+別府" },
                { name: "焼肉 一力", hours: "17:00-24:00（木休）", desc: "🍽️ 食べログ3.57 駅徒歩3分！A5豊後牛\nヒレ角切（角切菲力）・ミノ刺し（蜂胃生魚片）・極上ロース（極上里肌肉）", tag: "燒肉", lat: 33.2815, lng: 131.4950, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉+一力+別府" },
                { name: "東洋軒 とり天", hours: "17:00-22:00", desc: "大正15年創業！大分名物\nとり天（雞肉天婦羅）發源名店", tag: "雞天", lat: 33.2825, lng: 131.5025, mapUrl: "https://www.google.com/maps/search/?api=1&query=レストラン東洋軒+別府" },
                { name: "とよ常 天丼", hours: "11:00-20:00", desc: "別府老舖\n特製天丼（特製炸蝦天婦羅蓋飯）", tag: "天丼", lat: 33.2805, lng: 131.4945, mapUrl: "https://www.google.com/maps/search/?api=1&query=とよ常+別府" },
                { name: "ふくばこ蕎麦店", hours: "11:00-21:00", desc: "🍽️ 食べログ3.59 駅前本格\n手打ち蕎麦（手打蕎麥麵）・天ぷら蕎麦（天婦羅蕎麥麵）", tag: "蕎麦", lat: 33.2800, lng: 131.4995, mapUrl: "https://www.google.com/maps/search/?api=1&query=ふくばこ蕎麦店+別府" }
            ]
        },
        shopping: [
            { name: "湯之坪街道", hours: "09:00-18:00", desc: "雜貨、甜點、手工藝品、果醬", tag: "老街", lat: 33.2630, lng: 131.3690, mapUrl: "https://www.google.com/maps/search/湯の坪街道" },
            { name: "由布院 Floral Village", hours: "09:30-17:30", desc: "歐風小鎮、宮崎駿商店、貓頭鷹", tag: "主題村", lat: 33.2640, lng: 131.3700, mapUrl: "https://www.google.com/maps/search/YUFUIN+FLORAL+VILLAGE" },
            { name: "B-Speak", hours: "10:00-17:00", desc: "蛋糕捲禮盒 (易完售)", tag: "甜點", lat: 33.2645, lng: 131.3678, mapUrl: "https://www.google.com/maps/search/B-Speak+由布院" },
            { name: "SNOOPY茶屋", hours: "10:00-17:00", desc: "史努比周邊商品", tag: "主題", lat: 33.2635, lng: 131.3695, mapUrl: "https://www.google.com/maps/search/SNOOPY茶屋+由布院" },
            { name: "THEOMURATA", hours: "10:00-17:30", desc: "高級巧克力專賣，精緻伴手禮", tag: "甜點", lat: 33.2650, lng: 131.3670, mapUrl: "https://www.google.com/maps/search/THEOMURATA+由布院" },
            { name: "鞠智 スイートポテト", hours: "10:00-17:00", desc: "地瓜甜點專賣，包裝精美適合送禮", tag: "甜點", lat: 33.2648, lng: 131.3688, mapUrl: "https://www.google.com/maps/search/鞠智+由布院" },
            { name: "金鱗湖畔小店", hours: "09:00-17:00", desc: "手工皂、在地特產", tag: "雜貨", lat: 33.2615, lng: 131.3725, mapUrl: "https://www.google.com/maps/search/金鱗湖" },
            { name: "みっふぃー森のきっちん＆べーかりー", hours: "09:30-17:30", desc: "Miffy 專賣店！ベーカリー＋雑貨，限定あんぱん與キッチン雑貨", tag: "キャラ", lat: 33.2635, lng: 131.3680, mapUrl: "https://www.google.com/maps/search/?api=1&query=みっふぃー森のきっちん+湯布院" },
            { name: "どんぐりの森 湯布院店", hours: "10:00-17:00（土日祝09:30-17:00）", desc: "スタジオジブリ公式ショップ！トトロ・魔女宅・千尋グッズ", tag: "キャラ", lat: 33.2635, lng: 131.3690, mapUrl: "https://www.google.com/maps/search/?api=1&query=どんぐりの森+湯布院" },
            { name: "ゆふいんのさんりお屋", hours: "09:30-17:30", desc: "サンリオキャラ雑貨・お土産", tag: "キャラ", lat: 33.2638, lng: 131.3688, mapUrl: "https://www.google.com/maps/search/?api=1&query=ゆふいんのさんりお屋" },
            { name: "ゆふいんの猫屋敷", hours: "10:00-17:00", desc: "貓雜貨専門店，貓奴必逛", tag: "キャラ", lat: 33.2640, lng: 131.3692, mapUrl: "https://www.google.com/maps/search/?api=1&query=ゆふいんの猫屋敷" },
            { name: "ゆふいんの犬家敷", hours: "10:00-17:00", desc: "犬雜貨専門店，狗奴必逛", tag: "キャラ", lat: 33.2640, lng: 131.3695, mapUrl: "https://www.google.com/maps/search/?api=1&query=ゆふいんの犬家敷" }
        ],
        specialties: [
            {
                name: "地獄蒸布丁 (岡本屋)",
                hours: "08:30-18:30",
                desc: "別府明礬溫泉的最強名物！利用滾燙的溫泉蒸氣手工製作，布丁本體滑順紮實，配上微苦的焦糖醬，每一口都散發著淡淡的溫泉香，是別府之旅絕對不能漏掉的甜點！",
                tag: "甜點",
                igRecommend: true,
                lat: 33.3355,
                lng: 131.4345,
                image: "images/地獄蒸布丁 (岡本屋).jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋+売店"
            },
            {
                name: "大分地酒（ちえびじん・西の関・八鹿）",
                hours: "晚餐時段",
                desc: "別府晚餐可以問店員「大分の地酒ありますか？」清爽派選ちえびじん，旨味派選西の関，想喝麥燒酎可找八鹿或銀座のすずめ。配刺身、雞天、烤魚都很合。",
                tag: "地酒",
                igRecommend: true,
                lat: 33.2795,
                lng: 131.4985,
                image: "images/九州限定酒精飲品.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=別府駅+大分+地酒+居酒屋"
            },
            {
                name: "湯之花 (別府溫泉粉)",
                hours: "09:00-18:00",
                desc: "將別府的名湯帶回家！在特殊的「明礬溫泉小屋」內歷時多日結晶而成的湯之花，是 100% 天然的溫泉成份。融入杯水中，即可在家中浴缸還原別府溫泉的治癒氣息。",
                tag: "用品",
                lat: 33.2798,
                lng: 131.5005,
                image: "images/別府溫泉粉.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+溫泉粉"
            },
            {
                name: "竹細工器皿",
                hours: "09:00-17:00",
                desc: "別府著名的傳統工藝。選用優質竹材，透過大師細緻的編織，製作出美感與機能兼具的籃子、花台或杯墊。質地堅韌輕巧，隨著使用時間越久越能展現出溫潤的光澤。",
                tag: "工藝",
                lat: 33.3055,
                lng: 131.4855,
                image: "images/竹細工器皿.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=別府市竹細工伝統産業会館"
            },
            {
                name: "品客 九州限定 (明太子口味)",
                hours: "09:00-18:00",
                desc: "這款只在九州地區販售的品客洋芋片，將明太子的微辣與鮮味完美揉合進薄脆的餅片。可愛的九州限定包裝與令人驚喜的鮮味後勁，是您分享旅途歡樂的最佳伴手禮。",
                tag: "零食",
                lat: 33.2624,
                lng: 131.3549,
                image: "images/品客 九州限定.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院駅+お土産"
            },
            {
                name: "B-Speak 蛋糕捲",
                hours: "10:00-17:00",
                desc: "由布院超人氣的甜點傳奇！鬆軟如雲朵般的海綿蛋糕，大口咬下滿滿的香醇蛋香與輕盈不甜膩的鮮奶油。每天一開門即湧現人潮，建議中午前購買，體驗這純粹的美味。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.2645,
                lng: 131.3678,
                image: "images/bspeak.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=B-Speak+由布院"
            },
            {
                name: "Jazz Yokan (爵士羊羹)",
                hours: "10:00-17:00",
                desc: "這是一件可以食用的藝術品！羊羹表面透過精湛鑲嵌技術呈現出完整的「黑鍵與白鍵」鋼琴鍵盤，內裡則是帶有清爽紅酒漬乾果的創新層次。視覺與味覺的雙向震撼，最有質感的伴手禮。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.2668,
                lng: 131.3610,
                image: "images/Jazz Yokan.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=ジャズとようかん+湯布院本店"
            },
            {
                name: "柚子胡椒 (琴琴屋)",
                hours: "10:00-18:00",
                desc: "九州廚房的靈魂！融合了清新的柚子果皮與辛辣的青辣椒鹽漬而成。無論是搭配地雞燒、燒肉還是火鍋湯頭，僅需少許就能帶出食材原始的鮮度，是喜愛料理的人必備之寶。",
                tag: "調料",
                lat: 33.2655,
                lng: 131.3650,
                image: "images/柚子胡椒.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=ジャム工房ことこと屋"
            },
            {
                name: "由布院 Milch ケーゼクーヘン",
                hours: "10:00-17:30",
                desc: "湯之坪街道上超人氣的半熟起司蛋糕！外層烤至微焦，內餡濃郁綿密如絲。剛出爐時熱騰騰切開，起司流心更是無法抗拒，是逛由布院必買的散步甜點。",
                tag: "甜點",
                lat: 33.2640,
                lng: 131.3680,
                image: "images/由布院Milch.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+ミルヒ"
            },
            {
                name: "五衛門 かぼすナッツサブレ",
                hours: "09:00-18:00",
                desc: "使用大分縣產かぼす（酸橘）製作的酥脆堅果餅乾，清爽果香與濃郁堅果的絕妙平衡。優雅的包裝設計讓每一片都充滿大分的風土滋味，送禮自用兩相宜。",
                tag: "甜點",
                lat: 33.2645,
                lng: 131.3685,
                image: "images/五衛門かぼすナッツサブレ.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=五衛門+由布院"
            },
            {
                name: "湯布院醤油屋 匠醤油",
                hours: "09:30-17:30",
                desc: "由布院在地醬油老舖，堅持傳統木桶釀造。招牌的柚子ぽん酢和甘露醤油兼具深度與清爽感，搭配九州地雞或沙拉只需幾滴，即能在家重現由布院式的餐桌風景。",
                tag: "調料",
                lat: 33.2643,
                lng: 131.3683,
                image: "images/湯布院醤油屋.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=湯布院醤油屋"
            },
            {
                name: "ざびえる（ざびえる本舗）",
                hours: "09:00-19:00",
                desc: "大分縣最具代表性的銘菓！將細緻的卡斯提拉蛋糕包覆著綿密的白餡，表面灑上細糖粉，象徵大分洋風文化的融合。口感高雅輕柔，是別府車站最受歡迎的伴手禮。",
                tag: "甜點",
                lat: 33.2798,
                lng: 131.5005,
                image: "images/ざびえる.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=ざびえる本舗+別府駅"
            },
            {
                name: "謎のとり天せんべい",
                hours: "09:00-19:00",
                desc: "別府限定的話題零食！將大分靈魂美食「とり天」化身為酥脆的煎餅，帶著淡淡雞肉鮮味與胡椒香氣。是非典型的趣味伴手禮，包裝設計也很適合當作旅途中的搞笑禮物。",
                tag: "零食",
                lat: 33.2798,
                lng: 131.5005,
                image: "images/謎のとり天せんべい.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=謎のとり天せんべい+別府"
            },
            {
                name: "かぼすラングドシャ",
                hours: "09:00-19:00",
                desc: "將大分縣特產かぼす融入濃郁白巧克力夾心的法式貓舌餅乾。一口咬下，清新的柑橘香氣在口中化開，口感酥脆輕盈。精緻的鐵盒包裝是高質感的伴手禮首選。",
                tag: "甜點",
                lat: 33.2798,
                lng: 131.5005,
                image: "images/かぼすラングドシャ.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=かぼすラングドシャ+別府"
            },
        ],
        supermarkets: [
            { name: "ローソン 別府駅前店", hours: "24H", desc: "飯店出來右手邊徒步約1分，買飲料零食最方便", tag: "便利", lat: 33.2798, lng: 131.4995 },
            { name: "ファミリーマート 別府駅店", hours: "05:00-23:00", desc: "別府駅改札旁，徒步1分", tag: "便利", lat: 33.2795, lng: 131.4985 },
            { name: "トキハ別府店 B1F", hours: "10:00-19:00", desc: "別府駅前百貨地下1F食品賣場，弁當・熟食・生鮮超市，徒步約3分", tag: "超市", lat: 33.2805, lng: 131.4970 }
        ]
    },
    {
        day: 5, date: "6/15(一)", title: "上午地獄めぐり → 下午宙館度假", area: "別府・杉乃井",
        hotel: "杉乃井飯店 宙館", hotelLat: 33.2985, hotelLng: 131.4725, center: [33.2985, 131.4725],
        hotelImage: "images/杉乃井飯店 宙館.jpg",
        hotelDesc: '🏆 2023年開幕最新旗艦館「宙館」全館336間客房<br>♨️ 宙湯（無邊際展望風呂）・棚湯（九州最大級梯田露天風呂）<br>🏊 Aqua Garden 溫泉泳池・🎳 保齡球/卡拉OK/桌球<br>🍽️ TERRAZZA 住客專屬自助餐（牛排/螃蟹/酒類喝到飽）',
        hotelDescFull: `<span style="font-size:1.1rem;font-weight:600;">♨️ 溫泉風呂</span>
<br>🏆 <strong>展望露天風呂「宙湯」</strong> — 宙館頂樓無邊際露天風呂，海拔250m俯瞰別府灣與鶴見岳。室內大浴場亦有整面落地窗景
<br>🏆 <strong>大展望露天風呂「棚湯」</strong> — 4,000㎡ 五層梯田式露天風呂，九州最大級（日歸¥1,500，營業至23:00）
<br>🏊 <strong>Aqua Garden 溫泉泳池</strong> — 游泳圈OK的溫水泳池，夜間噴泉秀（19:00/20:00/21:00/22:00）
<br>🌊 <strong>アクアビート (Aqua Beat)</strong> — 室內水上樂園，人造浪、滑水道、漂漂河（4/25-9/30限定）
<br><br>
<span style="font-size:1.1rem;font-weight:600;">🍽️ 館內餐廳</span>
<br>🥇 <strong>TERRAZZA & DINING SORA</strong>（宙館） — 住客專屬西式自助餐，現切牛排/壽司/螃蟹吃到飽，含酒精飲料喝到飽
<br>🥇 <strong>和ダイニング星 HOSHI</strong>（星館頂樓） — 和食自助餐，壽司/生魚片/藁燒料理，星空用餐體驗
<br>🥇 <strong>ワールドダイニング シーダパレス</strong>（本館） — 世界自助餐，巨大水族箱環繞
<br>🍜 亜李蘭離宮（中華）・プロント（咖啡酒吧）
<br><br>
<span style="font-size:1.1rem;font-weight:600;">🎯 室內娛樂 (SUGINOI BOWL & PARK)</span>
<br>🎳 保齡球18球道（¥600-700/局）・🎤 卡拉OK 6間包廂・🎯 飛鏢・🎱 撞球・🏓 桌球・🎯 數位射擊・🧸 兒童遊戲區（13:00-22:00）
<br>🎮 遊戲機台區・🏋️ Gold's Gym 健身房
<br><br>
<span style="font-size:1.1rem;font-weight:600;">🌿 其他設施</span>
<br>🌸 屋上庭園「ソラニワ」 — 星空散步道・大分縣蝶拍照點・彈跳床
<br>🛍️ 売店「別風ゆのや」 — 大分特產一應俱全（07:00-22:00）
<br>🚌 免費接駁車 — JR別府站西口（約15分鐘/班）・免費戶外停車場`,
        transport: { public: "【上午地獄めぐり → 下午宙館】<br>• 11:00 御宿野乃別府退房 → 步行2分至別府駅前<br>• 11:05 亀の井巴士 別府駅前(5番乗り場) → 海地獄前（2・5・24・41番 ¥390・20分）<br>• 11:25 海地獄 → 步行5分 → かまど地獄 → 13:00午餐<br>• 13:00 亀の井巴士 鉄輪 → 別府駅前（¥390・20分）<br>• 13:30 別府駅西口 → 杉乃井 無料送迎巴士（15分/班・10分）<br>• 13:40-15:00 寄放行李 → 棚湯/売店/屋上庭園<br>• 15:00 宙館チェックイン" },
        timeline: [
            { time: "11:00", act: "御宿野乃別府 退房", desc: "步行至別府駅前2分鐘" },
            { time: "11:05", act: "亀の井巴士 別府駅前→海地獄前", desc: "2・5・24・41番 ¥390・20分" },
            { time: "11:25", act: "① 海地獄", desc: "钴蓝色温泉池，拍照25分" },
            { time: "11:55", act: "② かまど地獄", desc: "步行5分，6种汤池20分" },
            { time: "12:20", act: "午餐", desc: "地獄蒸工坊 或 鐵輪食堂" },
            { time: "13:00", act: "亀の井巴士 鉄輪→別府駅前", desc: "¥390・20分" },
            { time: "13:25", act: "步行至別府駅西口", desc: "5分" },
            { time: "13:30", act: "杉乃井 無料送迎巴士", desc: "10分" },
            { time: "13:40", act: "抵達杉乃井 → 寄放行李", desc: "棚湯/売店/屋上庭園自由利用" },
            { time: "15:00", act: "宙館 チェックイン", desc: "可開始使用宙湯・BOWL等設施" },
            { time: "18:30", act: "館内自助晚餐", desc: "TERRAZZA 或 HOSHI，飯後看Aqua Garden噴泉秀" }
        ],
        spots: [
            { name: "海地獄", lat: 33.3200, lng: 131.4430, mapUrl: "https://www.google.com/maps/search/?api=1&query=海地獄" },
            { name: "かまど地獄", lat: 33.3185, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=かまど地獄" },
            { name: "杉乃井飯店 宙館", lat: 33.2985, lng: 131.4725 },
            { name: "展望露天風呂 宙湯", lat: 33.2988, lng: 131.4725 },
            { name: "大展望露天風呂 棚湯", lat: 33.2975, lng: 131.4735 },
            { name: "Aqua Garden", lat: 33.2978, lng: 131.4728 },
            { name: "SUGINOI BOWL & PARK", lat: 33.2972, lng: 131.4732 }
        ],
        meals: {
            breakfast: [
                { name: "杉乃井飯店 宙館 TERRAZZA", hours: "06:30-10:00", desc: "【住客限定】別府最豪華的早晨饗宴！現做歐姆蛋、在地烤魚、九州蔬食。落地窗外別府市景，尊榮感滿分", tag: "飯店", lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "友永麵包屋", hours: "08:30-17:30", desc: "【別府百年老店】紅豆麵包與奶油捲必吃，在地人排隊名店", tag: "麵包", lat: 33.2735, lng: 131.5030, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "青山咖啡舍", hours: "08:00-18:00", desc: "復古喫茶店，提供經典厚片吐司早餐", tag: "咖啡", lat: 33.2770, lng: 131.4960, mapUrl: "https://www.google.com/maps/search/?api=1&query=青山コーヒー舎" },
                { name: "岡本屋売店 (早茶)", hours: "08:30-18:30", desc: "明礬溫泉名物，地獄蒸布丁與雞蛋三明治", tag: "輕食", lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
                { name: "Lotteria 別府站", hours: "07:30-21:00", desc: "車站內快速早餐選擇", tag: "連鎖", lat: 33.2798, lng: 131.5005 }
            ],
            lunch: [
                { name: "地獄蒸工坊 鐵輪", hours: "10:00-19:00", desc: "【體驗必選】利用98度溫泉蒸氣自煮蔬菜海鮮，健康美味", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "鐵輪食堂", hours: "11:00-15:00", desc: "在地人的平價午餐，大分鄉土料理", tag: "鄉土", lat: 33.3190, lng: 131.4430 }
            ],
            dinner: [
                { name: "TERRAZZA & DINING SORA 自助晚餐", hours: "17:00-21:30", desc: "【🏆 宙館住客限定旗艦餐廳】現切牛排、螃蟹、握壽司、北京烤鴨等 live cooking station。Mont Blanc 甜點吧＋紅白酒/沙瓦喝到飽，別府最強晚餐體驗", tag: "飯店", igRecommend: true, lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "和ダイニング星 HOSHI", hours: "17:00-21:30", desc: "【星館頂樓】和食自助餐，壽司/生魚片/藁燒鰹魚。星空天花板設計，浪漫氛圍滿點", tag: "飯店", lat: 33.2985, lng: 131.4735, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+HOSHI" },
                { name: "プロント (Pronto)", hours: "07:00-23:00", desc: "館內的咖啡酒吧，晚餐後小酌一杯的好去處。雞尾酒與輕食", tag: "酒吧", lat: 33.2980, lng: 131.4720 },
                { name: "海鮮居酒屋 魚心", hours: "17:00-23:00", desc: "若想外出用餐，在地人推薦的新鮮生魚片與當季海鮮料理（開車5分）", tag: "居酒屋", lat: 33.2755, lng: 131.5055, mapUrl: "https://www.google.com/maps/search/?api=1&query=海鮮いけす料理+魚心" },
                { name: "焼肉 元相 別府", hours: "17:30-22:00（LO21:30）", desc: "別府想吃燒肉的備案，適合從杉乃井搭車外出；請當天確認營業時間與是否需要訂位（週末假日17:00開）", tag: "燒肉", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉+元相+別府" }
            ]
        },
        shopping: [
            { name: "杉乃井 売店「別風ゆのや」", hours: "07:00-22:00", desc: "館內大型土產店，大分縣特產、湯之花、地獄蒸布丁、Kabosu 商品一應俱全", tag: "飯店", lat: 33.2985, lng: 131.4725 },
            { name: "Youme Town", hours: "09:30-21:30", desc: "大型購物中心，開車5分鐘。超市、藥妝、UNIQLO、服飾", tag: "商場", lat: 33.2755, lng: 131.5055 },
            { name: "海地獄 土產店", hours: "09:00-17:00", desc: "地獄主題商品、溫泉蛋", tag: "景點", lat: 33.3200, lng: 131.4430 },
            { name: "Tokiwa 百貨", hours: "10:00-19:00", desc: "別府市區老牌百貨公司", tag: "百貨", lat: 33.2790, lng: 131.5010 }
        ],
        specialties: [
            { name: "別府溫泉粉", hours: "09:00-22:00", desc: "【Myoban湯之花】國家指定無形文化財，在家享受天然溫泉", tag: "用品", lat: 33.3345, lng: 131.4335, image: "images/湯之花.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=みょうばん湯の里" },
            { name: "極樂饅頭", hours: "08:30-18:00", desc: "地獄蒸氣現蒸小饅頭，一口一個停不下來", tag: "甜點", lat: 33.3225, lng: 131.4512, image: "images/極樂饅頭.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=血の池地獄" },
            { name: "地獄蒸布丁 (岡本屋)", hours: "08:30-18:30", desc: "苦甜焦糖與濃郁蛋香，別府最人氣甜點", tag: "甜點", lat: 33.3355, lng: 131.4345, image: "images/地獄蒸布丁 (岡本屋).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
            { name: "Zabon漬 (ざぼん漬)", hours: "09:00-18:00", desc: "別府特產糖漬文旦皮，酸甜古早味", tag: "零食", lat: 33.2798, lng: 131.5005, image: "images/Zabon漬 (ざぼん漬).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+ざぼん漬" },
            { name: "大分酸橙 (Kabosu)", hours: "超市皆有", desc: "各式酸橙調味料、果汁、餅乾", tag: "伴手禮", lat: 33.2798, lng: 131.5005, image: "images/大分酸橙 (Kabosu).webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+カボス" }
        ],
        supermarkets: [
            { name: "Youme Town 別府", hours: "09:30-21:30", desc: "開車5分鐘的大型購物中心內有超市，補貨方便", tag: "商場", lat: 33.2755, lng: 131.5055 },
            { name: "Tokiwa 鶴見園", hours: "09:00-21:00", desc: "飯店步行10分鐘，在地超市", tag: "補給", lat: 33.2950, lng: 131.4780 }
        ],
        facilities: [
            { icon: "♨️", name: "展望露天風呂「宙湯」", hours: "住客專用（最後入場 ~22:00）", desc: "宙館頂樓無邊際露天風呂，海拔250m 俯瞰別府灣與鶴見岳。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+宙湯" },
            { icon: "♨️", name: "大展望露天風呂「棚湯」", hours: "09:00-23:00（最後入場 21:30）", desc: "4,000㎡ 九州最大級五層梯田式露天風呂。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+棚湯" },
            { icon: "🏊", name: "Aqua Garden 溫泉泳池", hours: "11:00-23:00（最後入場 22:00）", desc: "游泳圈OK的溫水泳池，夜間雷射噴泉秀。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+アクアガーデン" },
            { icon: "🌊", name: "アクアビート (Aqua Beat)", hours: "4/25-9/30 季節限定", desc: "室內水上樂園！人造浪、滑水道、漂漂河。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+アクアビート" },
            { icon: "🎳", name: "SUGINOI BOWL & PARK", hours: "13:00-22:00", desc: "保齡球、卡拉OK、飛鏢、撞球、桌球等8種娛樂。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ボウル" },
            { icon: "🌸", name: "屋上庭園「ソラニワ」", hours: "自由散步", desc: "屋上庭園，有遮雨步道。360度眺望別府灣。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ソラニワ" },
            { icon: "🛍️", name: "売店「別風ゆのや」", hours: "07:00-22:00", desc: "館內大型土產店。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+売店" },
            { icon: "🏋️", name: "Gold's Gym 健身房", hours: "設施營業時間內", desc: "專業健身器材齊全。" }
        ]
    },
    {
        day: 6, date: "6/16(二)", title: "地獄巡禮與返回福岡", area: "別府地獄・中洲",
        hotel: "ホテル イル・パラッツォ (Il Palazzo)", hotelLat: 33.5905, hotelLng: 130.4025, center: [33.30, 131.45],
        hotelImage: "images/Il Palazzo.jpg",
        hotelDesc: "【建築大師 Aldo Rossi 設計】日本首間設計旅館<br>🏆 榮獲普立茲克建築獎大師代表作<br>🍸 傳奇地下酒吧 EL DORADO (房客專屬)<br>🚶 步行5分鐘至中洲屋台・春吉橋旁<br>🧺 自助洗衣房・頂級視聽設備",
        transport: { public: "【特急 音速號 Sonic】別府→博多(2小時¥5500)<br>• 09:53 / 10:53 等每小時2班<br>【前往飯店】地鐵「中洲川端」站步行約7分鐘<br>• 沿著那珂川散步回飯店，欣賞河景" },
        timeline: [
            { time: "09:30", act: "別府地獄巡禮", desc: "套票：成人¥2200/兒童¥1000 (海地獄/血池地獄...)" },
            { time: "11:00", act: "地獄蒸體驗", desc: "高溫溫泉蒸氣蒸煮食物" },
            { time: "14:00", act: "啟程返回福岡", desc: "過路費約¥3700 / 音速號¥5500" },
            { time: "17:00", act: "Check-in Il Palazzo", desc: "設計師飯店，春吉/中洲區" },
            { time: "18:30", act: "中洲河畔散步", desc: "傍晚氣氛極佳，遊覽船夜景" }
        ],
        spots: [
            { name: "海地獄", lat: 33.3200, lng: 131.4430 },
            { name: "血池地獄", lat: 33.3225, lng: 131.4512 },
            { name: "地獄蒸工房", lat: 33.3195, lng: 131.4425 },
            { name: "中洲", lat: 33.5917, lng: 130.4042 }
        ],
        meals: {
            breakfast: [
                { name: "杉乃井飯店 宙館自助餐", hours: "06:30-10:00", desc: "別府最豪華的早晨饗宴！「TERRAZZA」餐廳提供現做歐姆蛋、在地烤魚與豐富的九州蔬食。落地窗外的別府市景與絕美空中花園，讓您的早餐時光充滿尊榮感與悠閒氛圍飯店🍽️。", tag: "飯店", lat: 33.2985, lng: 131.4725, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "岡本屋賣店 (地獄蒸)", hours: "08:30-18:30", desc: "明礬溫泉的傳奇！利用溫泉蒸汽熟成的「地獄蒸布丁」與「溫泉蛋」。苦度適中的焦糖引出布丁的滑順蛋香，是別府之旅必點的靈魂甜點與開胃早餐組合必吃🍮。", tag: "必吃", igRecommend: true, lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=明礬温泉+岡本屋売店" },
                { name: "友永麵包 (晨間補給)", hours: "08:30-17:30", desc: "別府百年名店！想避開人潮就要一早去。剛出爐的紅豆麵包與香氣逼人的黃油捲，那種純粹的麥香是啟動回程長途駕車行程的最佳能量補給麵包🥖。", tag: "麵包", igRecommend: true, lat: 33.2795, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "Starbucks 別府公園店", hours: "07:30-22:00", desc: "被綠意環繞的森林系星巴克。環境極度清幽，適合在啟程返回福岡前，在這裡靜靜享受一杯手沖咖啡，沈澱幾天來累積的火山與溫泉回憶咖啡☕。", tag: "咖啡", lat: 33.2785, lng: 131.4955, mapUrl: "https://www.google.com/maps/search/?api=1&query=スターバックス+コーヒー+別府公園店" },
                { name: "Green Spot 喫茶", hours: "08:00-18:00", desc: "別府老時光的縮影。在這個充滿古典氛圍的喫茶空間，享用鋪滿黃油的厚片吐司與手工鮮奶油咖啡。感受別府最道地、最緩慢的昭和式早餐時光喫茶☕。", tag: "喫茶", lat: 33.2775, lng: 131.4965, mapUrl: "https://www.google.com/maps/search/?api=1&query=グリーンスポット" },
                { name: "海地獄 足湯Cafe", hours: "09:00-17:00", desc: "在如夢幻剔透的海藍色溫泉旁，雙腳浸在暖呼呼的足湯中享用溫泉蛋。這不僅是早餐，更是一種與別府自然共榮的奇妙儀式體驗🥚。", tag: "體驗", lat: 33.3200, lng: 131.4430, mapUrl: "https://www.google.com/maps/search/?api=1&query=海地獄" },
                { name: "Lawson/7-11 區域限定", hours: "24H", desc: "趕路返回福岡前的便利首選。尋找大分產「吉野雞飯」風味便當或九州限定的果汁咖啡，讓兩小時的車程也能充滿地域風味的驚喜輕食🍙。", tag: "輕食", lat: 33.2805, lng: 131.4975, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+別府" }
            ],
            lunch: [
                { name: "地獄蒸工房 鐵輪", hours: "09:00-19:00", desc: "別府地獄巡禮的最後高潮！親手操作噴發的溫泉蒸汽，將當季野菜與新鮮海產蒸至鮮甜。這份由大地賦予的健康滋味，是別府送給每位旅人最好的禮物體驗🦀。", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "龜正迴轉壽司 (最後衝刺)", hours: "11:00-21:00", desc: "如果第一天沒排到，別府之旅結束前的最後機會！食材厚度驚人且種類豐富，是大分縣內公認的海味天花板。用一頓豪爽的壽司盛宴為別府畫下圓滿句點壽司🍣。", tag: "壽司", igRecommend: true, lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "甘味茶屋 (鄉土風味)", hours: "10:00-17:00", desc: "隱身於傳統木造建築中，大分傳統味道的守護者。必點：糰子汁（瘦馬麵）與黃豆粉麻糬。在大分才有的傳統味道中，細品古意與純真鄉土🍵。", tag: "鄉土", lat: 33.3205, lng: 131.4435, mapUrl: "https://www.google.com/maps/search/?api=1&query=甘味茶屋" },
                { name: "天丼 Toman (とよ常)", hours: "11:00-20:00", desc: "別府老舖天丼的名門。招牌「特製天丼」舖滿了三隻巨型鮮蝦，淋上傳承三代的濃郁鹹甜秘醬。酥脆與濕潤的絕妙平衡，是別府港灣旁的經典味道天丼🍤。", tag: "天丼", lat: 33.2805, lng: 131.4945, mapUrl: "https://www.google.com/maps/search/?api=1&query=天丼+とよ常+本店" },
                { name: "別府灣SA 景觀餐廳", hours: "11:00-20:00", desc: "最美高速公路休息站！在飽覽 270 度海灣景致的餐廳中，享用由 B-speak 監督的料理與大分冠魚料理。視覺與味覺的雙重饗宴，讓交通移動也成為一場美景饗宴景觀🍛。", tag: "景觀", lat: 33.3354, lng: 131.4612, mapUrl: "https://www.google.com/maps/search/?api=1&query=別府湾服務エリア" },
                { name: "鐵輪溫泉 蒸し湯 輕食", hours: "10:00-16:00", desc: "體驗完擁有 700 年歷史的藥草蒸湯後，來一顆由溫泉蒸氣煮熟的熱騰騰地瓜或玉米。感受別府溫泉帶來的內外洗滌與原始甘甜溫泉🍠。", tag: "溫泉", lat: 33.3190, lng: 131.4420, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄輪むし湯" },
                { name: "山田SA (福岡門戶)", hours: "07:00-22:00", desc: "回福岡前的最後休息站補給。這裡有豐富的筑紫平原產物與熱食小吃。推薦：山田炒麵與地方限定紀念品，平復長途駕駛的辛勞休息站🍜。", tag: "休息站", lat: 33.4515, lng: 130.6825, mapUrl: "https://www.google.com/maps/search/?api=1&query=山田SA" }
            ],
            dinner: [
                { name: "吉塚鰻魚屋 (再訪精品)", hours: "11:00-21:00", desc: "回到博多的豪邁慶功晚宴！中洲河畔最耀眼的鰻魚名門。在精雕細琢的百年古宅中，品嚐如絲緞般滑韌的「蒲燒鰻魚」。配上一杯地滴美酒，慰勞七天來的辛勞高級🍱。", tag: "高級", igRecommend: true, lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=吉塚うなぎ屋" },
                { name: "信秀本店 (博多燒鳥)", hours: "16:30-24:00", desc: "博多燒鳥界的活字典！在這裡一定要體驗道地博多「捲入生包菜」吃法。職人在炭火前揮灑汗水烤出的每一支肉串，都承載著跨越時空的博多熱情居酒屋🏮。", tag: "居酒屋", threadRecommend: true, lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
                { name: "博多藪 (深夜食堂)", hours: "19:00-03:00", desc: "在地老博多人的深夜靈魂地。雖然是蕎麥麵店，但其貌不揚的「特製豬排丼」卻擁有令人驚豔的濕潤口感與深沉底韻。是在中洲微醺後最暖心的味覺依靠麵食丼🍛。", tag: "麵食", lat: 33.5905, lng: 130.4035, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多薮" },
                { name: "麵劇場 玄瑛", hours: "11:30-22:00", desc: "將拉麵昇华为一場劇場饗宴！階梯式的座位設計，讓您在觀賞職人如表演般煮麵的同時，品嚐口感細緻、湯頭層次分明的藝術拉麵拉麵🍜。", tag: "拉麵", igRecommend: true, lat: 33.5795, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=麺劇場+玄瑛" },
                { name: "博多華味鳥 (總店)", hours: "17:00-23:00", desc: "最後一晚，重溫福岡水炊鍋的極致。總店限定的頂等「華味鳥」品種，肉質更顯彈牙鮮美。在一鍋如白乳般香濃的湯底中，為旅程畫下完美的總結鍋物🍵。", tag: "鍋物", lat: 33.5917, lng: 130.4042, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多華味鳥" },
                { name: "中洲屋台 (最後漫步)", hours: "18:00-02:00", desc: "在那珂川的粼粼波光中，與熱情的在地人並肩坐在狹小的屋台中。一碗炒拉麵、幾杯燒酎，在歡笑聲中收看福岡夜晚最真實的面貌屋台🍻。", tag: "屋台", lat: 33.5920, lng: 130.4040, mapUrl: "https://www.google.com/maps/search/?api=1&query=中洲屋台" },
                { name: "河太郎 (活烏賊再臨)", hours: "17:00-22:00", desc: "如果還對那一口「透明感」念念不忘，中洲店隨時為您準備。現撈現切的奢華度不減，讓鮮甜的海之精華在舌尖完成旅台的最後衝刺海鮮🦑。", tag: "海鮮", lat: 33.5912, lng: 130.4048, mapUrl: "https://www.google.com/maps/search/?api=1&query=河太郎+中洲本店" },
                { name: "博多 魚米壽司 (站前店)", hours: "11:00-23:00", desc: "回到博多站前，再次享受那份由新幹線送來的驚喜。新鮮度、平假與數位化的高效組合，最適合在行程結束前大慶一番壽司🍣。", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" },
                { name: "一蘭 拉麵 (總本店旗艦)", hours: "24H", desc: "朝聖福岡地標！高達 12 層樓的一蘭 HQ。在這裡不僅是吃拉麵，更是在感受拉麵文化的極致輸出。獨有的昭和復古氣氛，是身為一蘭粉必踩的聖地拉麵🍜。", tag: "拉麵", lat: 33.5930, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+本社総本店" },
                { name: "大山 牛腸鍋 (極品味噌)", hours: "11:00-23:00", desc: "最後的「味噌」回味。讓吸飽精華高湯的強棒麵為您的博多胃畫下句點。那份在口中融化的甘甜油香，是博多永遠不會褪色的記憶鍋物🍲。", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋おおやま+博多駅" },
                { name: "博多 鐵鍋餃子 (中洲店)", hours: "17:00-23:00", desc: "焦脆、爆汁、絕不妥協！在一片滋滋作響聲中，舉起大杯生啤酒與同行的夥伴乾杯。為了這趟精彩的九州之旅，也為了味覺的滿足居酒屋🍻。", tag: "居酒屋", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+中洲店" }
            ]
        },
        shopping: [
            { name: "明礬溫泉 岡本屋", hours: "08:30-18:30", desc: "地獄蒸布丁、湯之花入浴劑", tag: "名產", lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/明礬温泉+岡本屋売店" },
            { name: "友永麵包", hours: "08:30-17:30", desc: "百年麵包老店禮盒", tag: "麵包", lat: 33.2795, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/友永パン屋" },
            { name: "鐵輪溫泉商店街", hours: "09:00-17:00", desc: "溫泉周邊商品、手工藝品", tag: "商店街", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/鉄輪温泉街" },
            { name: "別府駅前商店街", hours: "10:00-19:00", desc: "臭橙胡椒、雞天仙貝", tag: "商店街", lat: 33.2795, lng: 131.4985, mapUrl: "https://www.google.com/maps/search/別府駅+お土産" },
            { name: "海地獄 土產店", hours: "09:00-17:00", desc: "地獄主題商品、溫泉蛋", tag: "景點", lat: 33.3200, lng: 131.4430, mapUrl: "https://www.google.com/maps/search/海地獄+売店" },
            { name: "別府灣SA 土產區", hours: "24H", desc: "最後機會買大分土產", tag: "休息站", lat: 33.3354, lng: 131.4612, mapUrl: "https://www.google.com/maps/search/別府湾サービスエリア" },
            { name: "高速公路SA 土產", hours: "24H", desc: "回程沿路土產採買", tag: "休息站", lat: 33.4515, lng: 130.6825, mapUrl: "https://www.google.com/maps/search/山田SA" }
        ],
        specialties: [
            {
                name: "地獄蒸布丁 (海地獄限定)",
                hours: "08:30-18:30",
                desc: "唯有在別府地獄園區內才能嚐到的限定美味！利用天然溫泉地熱熟成的布丁，口感比起一般市售品更加鮮潤綿密。苦甜適中的焦糖在口中綻放，是地獄巡禮中最高級的味覺點綴。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.3200,
                lng: 131.4430,
                image: "images/地獄蒸布丁 (海地獄限定).jpg",
                mapUrl: "https://www.google.com/maps/search/海地獄+売店"
            },
            {
                name: "湯之花 (明礬製造)",
                hours: "09:00-17:00",
                desc: "別府傳統技藝的結晶。明礬溫泉特有的結晶工法，將溫泉精華濃縮成具備藥用價值的入浴藥劑。對於舒緩疲勞與肌膚保養極具功效，是別府最有歷史溫度的伴手禮。",
                tag: "用品",
                lat: 33.3345,
                lng: 131.4335,
                image: "images/湯之花.jpg",
                mapUrl: "https://www.google.com/maps/search/みょうばん+湯の里"
            },
            {
                name: "雞肉天婦羅仙貝",
                hours: "店鋪營業時間",
                desc: "受到大分名物「とり天 (雞肉天婦羅)」啟發而誕生的明星伴手禮。將炸雞的酥脆感轉化為片狀仙貝，每一口都能品嚐到濃口的蒜香與薑味。輕脆不油膩，是觀光客回到福岡前最後補貨的首選零食。",
                tag: "餅乾",
                lat: 33.2798,
                lng: 131.5005,
                image: "images/雞肉天婦羅仙貝.jpg",
                mapUrl: "https://www.google.com/maps/search/別府銘品蔵+別府駅"
            },

            {
                name: "血池地獄軟膏",
                hours: "08:00-17:00",
                desc: "別府地獄限定的神奇伴手禮！取自血池地獄底部的天然酸性礦泥製成。獨特的赤紅色軟膏擁有百年口碑，據說對皮膚龜裂或足部護理有獨到效用，包裝極具衝擊感且具話題性。",
                tag: "藥妝",
                igRecommend: true,
                lat: 33.3225,
                lng: 131.4512,
                image: "images/血池地獄軟膏.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=血の池地獄"
            },
            {
                name: "九州限定酒精飲品 (博多站)",
                hours: "09:00-21:00",
                desc: "網羅了九州各地的精釀啤酒、本格燒酎與甘潤的水果酒。特別推薦熊本大分產的小麥啤酒，清爽的麥香中帶著淡淡果香，非常適合作為旅程結尾，在飯店中舉杯慶祝。",
                tag: "伴手禮",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/九州限定酒精飲品.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=博多駅+住吉酒販"
            }
        ],
        supermarkets: [
            { name: "Reganet Cute 中洲川端店", hours: "07:00-23:00", desc: "地鐵站共構，距離飯店步行約 7 分鐘", tag: "最近", lat: 33.5935, lng: 130.4045 },
            { name: "MaxValu Express 博多祇園店", hours: "24H", desc: "24小時營業，步行約 10 分鐘，補貨方便", tag: "24H", lat: 33.5905, lng: 130.4125 },
            { name: "唐吉訶德 中洲店", hours: "24H", desc: "雖非純超市但食品豐富，步行約 5 分鐘", tag: "雜貨", lat: 33.5928, lng: 130.4038 }
        ]
    },
    {
        day: 7, date: "6/17(三)", title: "最後採買與返程", area: "博多站・機場",
        hotel: "溫暖的家", hotelLat: 0, hotelLng: 0, center: [33.59, 130.42],
        hotelImage: "",
        hotelDesc: "帶著滿滿回憶與戰利品回家",
        transport: { public: "【地鐵空港線】博多站→福岡機場(5分¥260)<br>• 運行時間 05:30-00:24<br>• 約5-8分鐘/班<br>• 國際線需在國內線站下車後搭免費接駁巴士(約15分鐘)" },
        timeline: [
            { time: "10:00", act: "博多車站 / AMU Plaza", desc: "最後伴手禮採買" },
            { time: "11:30", act: "燕子廣場", desc: "博多車站頂樓花園，市景眺望" },
            { time: "12:00", act: "最後午餐", desc: "再吃一次九州美食" },
            { time: "14:00", act: "前往福岡機場", desc: "國內線航廈商店街" },
            { time: "16:00", act: "搭機返國", desc: "帶著滿滿回憶與戰利品回家" }
        ],
        spots: [
            { name: "博多站", lat: 33.5897, lng: 130.4207 },
            { name: "福岡機場", lat: 33.5850, lng: 130.4514 }
        ],
        meals: {
            breakfast: [
                { name: "Tanya HAKATA (牛舌)", hours: "07:00-10:00", desc: "旅途最後一次的博多靈魂！必點 CP 值最高的「牛舌朝食」，薄切爽脆的牛舌在高溫炭火下溢出香氣，搭配山藥泥與麥飯，是讓您充滿力量前往飛機場的最佳起點日式🍚。", tag: "日式", igRecommend: true, lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=たんやHAKATA" },
                { name: "Uchino Tamago (生雞蛋)", hours: "08:00-21:00", desc: "感受日式職人的簡單極致。選用最高規格的「內野雞蛋」，淋上專用醬汁與香 Q 的九州米拌勻。這碗暖胃的生雞蛋拌飯（TKG），是回程前最純粹的福岡道地滋味日式🥚。", tag: "日式", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=うちのたまご+直売所" },
                { name: "Mister Donut (季節限定)", hours: "07:00-23:00", desc: "品嚐台灣買不到的日本期間限定口味！無論是宇治抹茶聯名或是季節性果實甜甜圈，那種穩定且具話題性的甜美，是趕飛機途中的小確幸首選連鎖🍩。", tag: "連鎖", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=Mister+Donut" },
                { name: "Starbucks 博多站店", hours: "07:00-23:00", desc: "採買最後一刻的「日本限定隨行杯」。在這裡您可以一邊享用冷萃咖啡，一邊補齊遺落的博多限定商品，為旅程的咖啡地圖畫下完美句點咖啡☕。", tag: "咖啡", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Hakata" },
                { name: "Soup Stock Tokyo (暖心湯)", hours: "08:00-21:30", desc: "溫暖您的回程胃。堅持不添加人工調味的美味湯品，推薦：龍蝦濃湯或季節性鮮蔬湯。即使是忙碌的早晨，也能享受到如居家般溫潤的質感早餐湯品🍵。", tag: "湯品", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Soup+Stock+Tokyo" },
                { name: "Pronto Cafe (輕食)", hours: "07:00-22:00", desc: "博多車站內的便利首選。義式濾泡咖啡搭配現烤的熱壓三明治。洗鍊的快節奏環境，最適合在前往機場的地鐵出發前，來一場高效且美味的儀式補給咖啡☕。", tag: "咖啡", lat: 33.5895, lng: 130.4203, mapUrl: "https://www.google.com/maps/search/?api=1&query=Pronto+Cafe" },
                { name: "Il Palazzo 絕美早餐", hours: "07:00-10:00", desc: "在普立茲克建築大師的作品中醒來。飯店提供融合中西美學的高級自助餐，嚴選福岡在地直送的有機食材。在充滿現代設計感的空間享用早餐，是行程最高規的落幕飯店🍽️。", tag: "飯店", lat: 33.5905, lng: 130.4025, mapUrl: "https://www.google.com/maps/search/?api=1&query=Il+Palazzo" },
                { name: "爐端燒銀鮭", hours: "07:00-11:00", desc: "⚠️務必提前預約！福岡超人氣日式早餐🍳，現點現烤的神級銀鮭，明太子＋烤魚直接罪惡爆擊，喚醒最美好的早晨🐟。", tag: "朝食", igRecommend: true, threadRecommend: true, lat: 33.5900, lng: 130.4000, mapUrl: "https://www.google.com/maps/search/?api=1&query=爐端燒銀鮭+福岡" },
                { name: "FUK COFFEE", hours: "08:00-20:00", desc: "必點招牌「硬派卡士達布丁＋霜淇淋」！日式布丁滑嫩綿密、焦糖微苦，搭配濃郁奶香霜淇淋，幸福感直接拉滿☕。", tag: "咖啡", igRecommend: true, threadRecommend: true, lat: 33.5908, lng: 130.4132, mapUrl: "https://www.google.com/maps/search/?api=1&query=FUK+COFFEE" },
                { name: "Dacomecca", hours: "08:00-20:00", desc: "麵包控一定會失控的排隊名店！炭火烤腸麵包香到不行，一不小心就會整盤拿滿，博多車站旁的必訪麵包🥖。", tag: "麵包", igRecommend: true, threadRecommend: true, lat: 33.5890, lng: 130.4220, mapUrl: "https://www.google.com/maps/search/?api=1&query=Dacomecca" }
            ],
            lunch: [
                { name: "博多一雙 (回味泡泡)", hours: "11:00-24:00", desc: "真的要說再見了！那口「豚骨卡布奇諾」的油脂香氣，絕對值得在登機前再來一碗。那份在嘴唇上留下的濃郁膠原蛋白，將是您對福岡最深刻的告別式拉麵🍜。", tag: "拉麵", igRecommend: true, lat: 33.5905, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/博多一双+博多駅東本店" },
                { name: "牛腸鍋 Oyama (博多1番街)", hours: "11:00-23:00", desc: "博多站內最後一鍋，不留遺憾。推薦點選「經典味噌口味」。即便是最後一餐，那 Q 彈的牛腸與吸飽湯汁的韭菜，依舊能讓您感受到博多人的滿點熱情鍋物🍲。", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/博多もつ鍋おおやま+博多1番街" },
                { name: "大地烏龍麵 (透明之巔)", hours: "11:00-21:00", desc: "博多站底下的透明傳奇。必點「巨大牛蒡天婦羅烏龍麵」，視覺震撼力十足。在滑溜麵條與酥脆炸物的交織中，體驗博多式的平秩午餐巔峰麵食碗🍜。", tag: "麵食", lat: 33.5893, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/大地のうどん+博多駅ちかてん" },
                { name: "利久牛舌 (仙台名店)", hours: "11:00-23:00", desc: "雖然發源自仙台，但在博多站的口味依舊保持高水準。厚切碳烤牛舌的口感與牛尾湯的鮮度，是肉食控在博多站伴手禮衝刺中的最強戰鬥補給定食🍱。", tag: "定食", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/牛たん炭焼利久+博多駅店" },
                { name: "機場 拉麵滑走路", hours: "10:00-21:00", desc: "福岡機場國內線 3 樓的「拉麵跑道」。網羅了九州各地的一線拉麵名店，是出發回國前，解決最後一絲空虛胃袋的綜合型美食競技場機場🍜。", tag: "機場", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/ラーメン滑走路" },
                { name: "一蘭拉麵 (機場最終碗)", hours: "24H", desc: "世界唯一的一蘭原鄉。來到機場當然要用這碗最熟悉、最不敗的經典口味為七天旅程劃下圓滿結尾。每一滴湯頭都是對九州的思念拉麵🍜。", tag: "拉麵", lat: 33.5905, lng: 130.4185, mapUrl: "https://www.google.com/maps/search/一蘭+博多店+サンプラザ地下街店" },
                { name: "博多一幸舍 (泡系)", hours: "11:00-23:00", desc: "博多「泡系」豚骨的領頭羊。湯頭佈滿柔細油泡，肉汁濃縮度極高。推薦給喜愛濃厚、霸氣豚骨風味，想在回程前補足油脂能量的硬派拉麵愛好者拉麵🍜。", tag: "拉麵", lat: 33.5902, lng: 130.4192, mapUrl: "https://www.google.com/maps/search/博多一幸舎+博多駅筑紫口店" }
            ],
            dinner: [
                { name: "機上餐點 (回程)", hours: "N/A", desc: "在雲端享用空中廚房準備的簡餐。一邊回味過去七天的美好時光，一邊隨著飛機返抵最熟悉的家園旅途✈️。", tag: "旅途", lat: 0, lng: 0 },
                { name: "溫暖的家 (回味)", hours: "N/A", desc: "卸下行李，整理裝滿整個行李箱的戰利品。在這場九州大冒險後，享受家最平靜、最溫暖的擁抱家🏠。", tag: "家", lat: 0, lng: 0 },
                { name: "伊都 King (機場甜點)", hours: "06:30-21:00", desc: "最後購買「草莓切片」與「草莓銅鑼燒」的機會。在機艙內享用這份來自福岡土地的酸甜回憶，是登機前的最高級小確幸甜點🍓。", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/伊都きんぐ+福岡空港店" },
                { name: "福砂屋 長崎蛋糕", hours: "06:30-21:00", desc: "機場免稅店最具重量級的伴手禮。經典的底部砂糖脆粒感與蛋香滿盈的海綿體。這份跨越百年的優雅，是分享旅途喜悅的最佳禮盒甜點🍰。", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+福砂屋" },
                { name: "Royce 巧克力 (免稅)", hours: "06:30-21:00", desc: "雖然是北海道名產，但福岡機廠免稅店依舊是囤貨聖地。推薦限定口味或抹茶風味。在那份入口即化的絲滑中，沈澱旅次的所有疲累甜點🍫。", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+免税店" },
                { name: "機場便利商店 (補給)", hours: "06:00-21:00", desc: "收括剩餘零錢的最後機會。買幾瓶 Kyushu 限定的果汁或小零嘴，讓回程的飛行時光不再單調輕食🍙。", tag: "輕食", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+福岡空港" },
                { name: "候機室 咖啡廳", hours: "登機前", desc: "在落地窗前看著飛機起降。最後享用一杯帶有日本氣息的熱 LATTE，為這趟驚喜連連的九州自駕之旅完成最後的靜謐收尾咖啡☕。", tag: "咖啡", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+福岡空港" }
            ]
        },
        shopping: [
            { name: "博多站 AMU Plaza", hours: "10:00-21:00", desc: "努努雞、明太子一站購齊", tag: "百貨", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/アミュプラザ博多" },
            { name: "博多Deitos", hours: "08:00-21:00", desc: "車站內伴手禮專區", tag: "車站", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/博多デイトス" },
            { name: "マイング (Ming)", hours: "09:00-21:00", desc: "博多站地下美食街土產", tag: "地下街", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/博多駅+マイング" },
            { name: "博多阪急 地下", hours: "10:00-20:00", desc: "高級伴手禮", tag: "百貨", lat: 33.5898, lng: 130.4210, mapUrl: "https://www.google.com/maps/search/博多阪急+地下" },
            { name: "福岡機場國內線", hours: "06:30-21:00", desc: "拉麵滑走路樓下土產區", tag: "機場", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+国内線+お土産" },
            { name: "福岡機場國際線", hours: "07:00-21:00", desc: "Royce、白色戀人免稅店", tag: "免稅", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+国際線+免税店" },
            { name: "空港見送口 土產店", hours: "06:30-21:00", desc: "最後一刻補貨", tag: "機場", lat: 33.5850, lng: 130.4510 }
        ],
        specialties: [
            {
                name: "努努雞 (冷炸雞)",
                hours: "09:00-21:00",
                desc: "打破常識的博多名產「冷炸雞」！不需加熱，從冷凍或冷藏取出直接食用最美味。特製醬汁在低溫下更顯香甜微辣，肉質紮實且外皮依然保有某種程度的咬勁，是搭配啤酒最豪華的宵夜首選，也是旅途中必經的獵奇美味體驗。",
                tag: "熟食",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/nunu.png",
                mapUrl: "https://www.google.com/maps/search/博多駅+努努鶏"
            },
            {
                name: "管狀明太子",
                hours: "08:00-21:00",
                desc: "明太子大廠 Fukuya 的革命性發明。將高級明太子去皮後灌入像牙膏般的軟管包裝，只需輕輕一擠就能裝飾在白飯、吐司或沙拉上。完全省下處理明太子外膜的麻煩，保冷攜帶方便，是現代伴手禮的極致便利之作。【補充推薦 Yamaya (やまや) 明太子軟管 / 明太子美乃滋】除了 Fukuya 之外，Yamaya 的明太子軟管也極具人氣，特別推薦其明太子美乃滋，微辣的明太子結合香濃美乃滋，沾炸物、塗吐司都非常百搭！",
                tag: "海鮮",
                lat: 33.5902,
                lng: 130.4194,
                image: "images/tube.png",
                mapUrl: "https://www.google.com/maps/search/味の明太子+ふくや+博多駅"
            },
            {
                name: "Press Butter Sand",
                hours: "08:00-21:00",
                desc: "這款紅遍全日本的焦糖酥餅，在博多車站特別推出「草莓口味」限定！特殊的雙層酥脆餅皮內，夾入來自福岡王樣草莓製成的酸甜鮮奶油與絲滑焦糖。咬開的瞬間內餡爆發出的草莓香氣與酥脆口感，層次感極致高級🍓。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/butter_sand.png",
                mapUrl: "https://www.google.com/maps/search/PRESS+BUTTER+SAND+博多駅店"
            },
            {
                name: "LeClerc (可麗露)",
                hours: "09:00-21:00",
                desc: "博多車站內必吃甜點！外皮脆、內餡軟的高評價可麗露。強烈推薦原味、起士和焦糖口味，是回國前必買的精緻伴手禮🧁。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/LeClerc.jpeg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=LeClerc+博多"
            },
            {
                name: "KIKUTARO",
                hours: "09:30-21:00",
                desc: "位於都飯店1樓的文青和菓子店。招牌「迷你奶油銅鑼燒」，紅豆餡搭配薄奶油，口感鹹甜交織，非常美味，伴手禮新寵兒🥞。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5903,
                lng: 130.4225,
                image: "images/KIKUTARO.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=KIKUTARO+博多"
            },
            {
                name: "如水庵 季節水果大福",
                hours: "08:00-21:00",
                desc: "博多車站 Ming 內的必買名產！水果新鮮多汁，最推橘子和草莓口味。外皮不黏膩，搭配綠豆餡更是絕妙的傳統美味🍓。",
                tag: "和菓子",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/如水庵 季節水果大福.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=如水庵+博多駅"
            },
            {
                name: "鶴乃子 (石村萬盛堂)",
                hours: "08:00-21:00",
                desc: "博多流傳已久的柔軟滋味。外皮是觸感如同雲朵般的細緻棉花糖，內裡則包裹著由蛋黃與砂糖熬煮成的傳統黃味餡。甜度高雅且口感獨特，曾在博多山笠祭典中扮演重要角色，承載著福岡的歷史溫度。",
                tag: "甜點",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/tsurunoko.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=石村萬盛堂+博多駅店"
            },
            { name: "THE MATCHA TOKYO 福岡空港", hours: "07:00-21:00", desc: "濃醇好喝的抹茶，機場必訪", tag: "抹茶", igRecommend: true, lat: 33.5930, lng: 130.4450, mapUrl: "https://www.google.com/maps/search/?api=1&query=THE+MATCHA+TOKYO+福岡空港" },
            {
                name: "Butter Butler (奶油費南雪)",
                hours: "07:00-21:00",
                desc: "這款紅遍日本的奶油甜點！海鹽奶油費南雪外酥內軟，選用瑞士產海鹽與法國產產區奶油，奶油香氣極度濃郁。每一口都散發楓糖的香甜，是機場免稅店必搶的明星甜點🧈。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/butter_butler.avif",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "honey chocolate sand (蜂蜜巧克力夾心餅)",
                hours: "07:00-21:00",
                desc: "蜂蜜巧克力夾心餅乾！香脆的餅乾體夾入濃郁 of 蜂蜜與細緻巧克力內餡，甜而不膩，口感層次分明。精緻的包裝也非常適合作為送給親友的質感小禮物🎁。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/honey_chocolate.jpeg",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "花福堂 (草莓千層酥)",
                hours: "07:00-21:00",
                desc: "選用福岡在地高品質「博多あまおう」草莓製作。香脆的千層酥皮夾著草莓風味巧克力，酸甜平衡，口感多層次酥脆，是草莓控在福岡機場必帶的限定名產🍓。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/hafukudo_millefeuille.png",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "Amanberry (草莓奶油貓舌餅)",
                hours: "07:00-21:00",
                desc: "福岡機場極具人氣的排隊甜點！薄脆的貓舌餅乾包裹著滑順的草莓奶油與一整顆乾燥草莓。酸甜草莓與濃郁奶香完美融合，外觀精緻夢幻，是少女心爆棚的伴手禮首選🍓。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/amanberry.webp",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "Mount Baum (草莓年輪蛋糕)",
                hours: "07:00-21:00",
                desc: "著名的年輪蛋糕品牌，在福岡機場推出限定草莓風味。蛋糕質地紮實濕潤，外層裹上酸甜的草莓糖霜。濃郁的蛋香與清爽的草莓果香交織，層次豐富🍰。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/mount_baum.webp",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "Pista & Tokyo (開心果夾心餅)",
                hours: "07:00-21:00",
                desc: "開心果控絕對不能錯過！香濃的開心果奶油夾心餅乾，每一口都是滿滿的開心果堅果香氣。精緻的夾心結構與微甜的餅皮，是福岡機場免稅店新晉的熱門伴手禮綠意餅乾💚。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/pista_tokyo.webp",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "KYOTO MILK MEISTER (牛奶夾心餅)",
                hours: "07:00-21:00",
                desc: "牛奶三明治餅乾！選用京都產的優質牛乳製作，濃郁滑順的牛奶夾心內餡，搭配酥脆的餅乾體，充滿乳香與焦糖甜味，是一款老少咸宜的經典機場零嘴🥛。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/kyoto_milk_meister.avif",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "NY perfect cheese (起司貓舌餅)",
                hours: "07:00-21:00",
                desc: "日本超瘋狂的排隊神級伴手禮！金黃酥脆的貓舌餅乾捲成船型，包裹著濃郁的戈貢佐拉起司條、滑順白巧克力與細緻鮮奶油。鹹甜交織的高級口感，是回國前必搶的重量級起司甜點🧀。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/ny_perfect_cheese.webp",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            },
            {
                name: "Tokyo Tulip Rose (鬱金香玫瑰餅乾)",
                hours: "07:00-21:00",
                desc: "視覺與味覺的雙重饗宴！細緻酥脆的貓舌餅乾塑造成栩栩如生的鬱金香花瓣，內裡包裹著入口即化的玫瑰造型巧克力鮮奶油。精緻夢幻的造型被譽為最美甜點伴手禮🌹。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5850,
                lng: 130.4514,
                image: "images/tulip_rose.jpg",
                mapUrl: "https://www.google.com/maps/search/福岡空港+免税店"
            }
        ],
        supermarkets: [
            { name: "Reganet Cute 中洲川端店", hours: "07:00-23:00", desc: "最後採買好去處，步行約 7 分鐘", tag: "便利", lat: 33.5935, lng: 130.4045 },
            { name: "AEON Shoppers 福岡店", hours: "09:00-22:00", desc: "天神地區大型超市，品項最齊全", tag: "大型", lat: 33.5930, lng: 130.3985 }
        ]
    }

];

        const coupons = [
            {
                id: "bic_camera",
                name: "Bic Camera",
                nameEn: "Bic Camera",
                discount: "10% + 7%",
                desc: "免稅 10% + 電器 7% / 藥妝 5% / 日本酒 3%",
                color: "#ED1A3D",
                textColor: "#FFFFFF",
                icon: "📷",
                link: "https://app.likejapan.com/zh-hk/coupon/BIC-CAMERA-%E5%84%AA%E6%83%A0%E5%88%B8",
                tips: "結帳時出示優惠券條碼截圖即可使用"
            },
            {
                id: "don_quijote",
                name: "唐吉訶德",
                nameEn: "Don Quijote",
                discount: "10% + 5%~7%",
                desc: "免稅 10% + 滿萬折 5% / 滿三萬折 7%",
                color: "#1E2A5E",
                textColor: "#FFFFFF",
                icon: "🐧",
                link: "https://japanportal.donki-global.com/coupon/?id=EA1A",
                tips: "必須使用手機點擊連結顯示動態條碼，截圖無效"
            },
            {
                id: "edion",
                name: "愛電王",
                nameEn: "EDION",
                discount: "10% + 7%",
                desc: "免稅 10% + 電器/手錶/玩具 7%",
                color: "#005BAC",
                textColor: "#FFFFFF",
                icon: "⚡",
                link: "https://app.likejapan.com/zh-hk/coupon/EDION-7percent-discount-coupon",
                tips: "適用於大部分家電產品，部分商品除外"
            },
            {
                id: "matsumoto",
                name: "松本清",
                nameEn: "Matsumoto Kiyoshi",
                discount: "10% + 3%~7%",
                desc: "免稅 10% + 滿額享 3% / 5% / 7% 折扣",
                color: "#FFF100",
                textColor: "#000000",
                icon: "💊",
                link: "https://app.likejapan.com/zh-hk/coupon/%E8%97%A5%E5%A6%9D%E5%BA%97%E6%9D%BE%E6%9C%AC%E6%B8%85%E5%84%AA%E6%83%A0%E5%88%B8",
                tips: "藥妝類商品最划算，部分化妝品不適用"
            },
            {
                id: "sundrug",
                name: "Sun Drug",
                nameEn: "Sun Drug",
                discount: "10% + 3%~7%",
                desc: "免稅 10% + 滿額享 3% / 5% / 7% 折扣",
                color: "#D91F26",
                textColor: "#FFFFFF",
                icon: "💊",
                link: "https://app.likejapan.com/zh-hk/coupon/sundrug-coupon-7percent-off",
                tips: "尚都樂客藥妝，店舖數量多，價格競爭力強"
            },
            {
                id: "tsuruha",
                name: "鶴羽藥妝",
                nameEn: "Tsuruha Drug",
                discount: "10% + 3%~7%",
                desc: "免稅 10% + 滿額享 3% / 5% / 7% 折扣",
                color: "#E60012",
                textColor: "#FFFFFF",
                icon: "🏗️",
                link: "https://app.likejapan.com/zh-hk/coupon/tsuruha-drug",
                tips: "北海道起家的大型藥妝連鎖，九州也有分店"
            },
            {
                id: "sugi",
                name: "杉藥局",
                nameEn: "Sugi Pharmacy",
                discount: "10% + 4%~8%",
                desc: "免稅 10% + 滿額享 4% / 6% / 8% 折扣",
                color: "#183883",
                textColor: "#FFFFFF",
                icon: "🌲",
                keywords: ["sugi"],
                link: "https://app.likejapan.com/zh-hk/coupon/sugi-pharmacy",
                tips: "折數較高，最高可達 18% (含稅及折扣)"
            },
            {
                id: "cocokara",
                name: "Cocokara Fine",
                nameEn: "Cocokara Fine",
                discount: "10% + 3%~7%",
                desc: "免稅 10% + 滿額享 3% / 5% / 7% 折扣",
                color: "#EA5480",
                textColor: "#FFFFFF",
                icon: "✨",
                keywords: ["parco"],
                link: "https://app.likejapan.com/zh-hk/coupon/cocokarafine-coupon",
                tips: "店舖明亮時尚，化妝品種類豐富"
            },
            {
                id: "cosmos",
                name: "Cosmos 藥妝",
                nameEn: "Cosmos",
                discount: "高達 19%",
                desc: "免稅 10% + 5%~7% + 額外優惠",
                color: "#2E8B57", // Usually pink/green, using green for distinction
                textColor: "#FFFFFF",
                icon: "🌸",
                link: "https://app.likejapan.com/zh-hk/coupon/COSMOS-%E8%97%A5%E5%A6%9D-%E5%84%AA%E6%83%A0%E5%88%B8-7percent-off",
                tips: "福岡起家，九州店舖極多，必逛！"
            },
            {
                id: "welcia",
                name: "Welcia 藥局",
                nameEn: "Welcia",
                discount: "10% + 3%~8%",
                desc: "免稅 10% + 滿額享優惠",
                color: "#285FAC",
                textColor: "#FFFFFF",
                icon: "⚕️",
                link: "https://app.likejapan.com/zh-hk/coupon/welcia-drugstore-discount",
                tips: "24小時營業店舖多，深夜急用方便"
            },
            {
                id: "mitsui",
                name: "MITSUI OUTLET",
                nameEn: "Mitsui Outlet Park",
                keywords: ["lalaport", "outlet"],
                discount: "9折 + 免稅",
                desc: "享 9 折 + 免稅 + 精美禮品",
                color: "#000000",
                textColor: "#FFFFFF",
                icon: "🛍️",
                link: "https://app.likejapan.com/zh-hk/coupon/mitsui-coupon",
                tips: "適用於全日本 Mitsui Outlet Park (九州無分店，但可於其他地區使用)"
            },
            {
                id: "daikoku",
                name: "大國藥妝 (線上)",
                nameEn: "Daikoku Online",
                discount: "¥1,200 OFF",
                desc: "線上商店滿萬折 ¥1,200",
                color: "#FF6600",
                textColor: "#FFFFFF",
                icon: "💊",
                link: "https://app.likejapan.com/zh-hk/coupon/daikoku-ec-coupon",
                tips: "網路旗艦店專用，與實體店不同"
            },
            {
                id: "sinseido",
                name: "新生堂藥局",
                nameEn: "Sinseido",
                discount: "10% + 5%",
                desc: "免稅 10% + 5% OFF",
                color: "#8BC34A",
                textColor: "#FFFFFF",
                icon: "🏥",
                link: "https://app.likejapan.com/zh-hk/coupon/sinseido",
                tips: "九州在地藥局，服務親切"
            },
            {
                id: "ohga",
                name: "大賀藥局",
                nameEn: "Ohga Pharmacy",
                discount: "折抵 ¥500",
                desc: "每滿 10,000 日圓折 500",
                color: "#EF7D00",
                textColor: "#FFFFFF",
                icon: "💊",
                link: "https://app.likejapan.com/zh-hk/coupon/ohga-drugstore-fukuoka-coupon",
                tips: "福岡在地老牌藥局"
            },
            {
                id: "yamada",
                name: "山田電機 LABI",
                nameEn: "Yamada Denki",
                discount: "10% + 7%",
                desc: "免稅 10% + 7% OFF",
                color: "#FFD700",
                textColor: "#000000",
                icon: "⚡",
                link: "https://app.likejapan.com/zh-hk/coupon/labi-yamada-7percent-coupon",
                tips: "日本最大電器連鎖"
            },
            {
                id: "kitamura",
                name: "北村相機",
                nameEn: "Kitamura Camera",
                discount: "10% + 5%",
                desc: "免稅 10% + 5% OFF",
                color: "#000000",
                textColor: "#FFFFFF",
                icon: "📷",
                link: "https://app.likejapan.com/zh-hk/coupon/kitamura-camera-discount",
                tips: "二手相機與新品皆有"
            },
            {
                id: "alpen",
                name: "Alpen Group",
                nameEn: "Alpen Group",
                discount: "10% + 5%",
                desc: "免稅 10% + 5% OFF",
                color: "#003399",
                textColor: "#FFFFFF",
                icon: "⚽",
                keywords: ["alpen"],
                link: "https://app.likejapan.com/zh-hk/coupon/alpen-coupon",
                tips: "運動用品專賣，包含 Sports Depot"
            },
            {
                id: "victoria",
                name: "Victoria / L-Breath",
                nameEn: "Victoria Sports",
                discount: "10% + 5%",
                desc: "免稅 10% + 5% OFF",
                color: "#0099CC",
                textColor: "#FFFFFF",
                icon: "⛺",
                link: "https://app.likejapan.com/zh-hk/coupon/Victoria-L-Breath-SuperSportsXebio-sportwear-5percent-coupon",
                tips: "戶外與運動用品專門店 (含 Super Sports Xebio)"
            },
            {
                id: "daimaru",
                name: "大丸・松坂屋",
                nameEn: "Daimaru Matsuzakaya",
                discount: "95折",
                desc: "免稅 10% + 5% OFF",
                color: "#006633",
                textColor: "#FFFFFF",
                icon: "🏬",
                keywords: ["daimaru", "大丸"],
                link: "https://app.likejapan.com/zh-hk/coupon/daimaru-departmentstore-5percent-off",
                tips: "適用於大丸與松坂屋百貨 (福岡天神有店)"
            },
            {
                id: "aoki",
                name: "AOKI 西服",
                nameEn: "AOKI",
                discount: "10% + 10%",
                desc: "免稅 10% + 10% OFF",
                color: "#000000",
                textColor: "#FFFFFF",
                icon: "👔",
                link: "https://app.likejapan.com/zh-hk/coupon/AOKI-10percent-off",
                tips: "商務西裝、休閒服飾"
            },
            {
                id: "orihica",
                name: "ORIHICA",
                nameEn: "ORIHICA",
                discount: "10% + 10%",
                desc: "免稅 10% + 10% OFF",
                color: "#003366",
                textColor: "#FFFFFF",
                icon: "👔",
                link: "https://app.likejapan.com/zh-hk/coupon/orihica",
                tips: "休閒商務風格"
            },
            {
                id: "sf_express",
                name: "順豐國際 x eBackHome",
                nameEn: "SF Express",
                discount: "95折",
                desc: "行李寄送 / 集運 95 折",
                color: "#DC1E32",
                textColor: "#FFFFFF",
                icon: "📦",
                link: "https://app.likejapan.com/zh-hk/coupon/%E9%A0%86%E8%B1%90%E5%9C%8B%E9%9A%9B%E6%97%A5%E6%9C%ACxeBackHome%E5%84%AA%E6%83%A0",
                tips: "機場行李寄送服務"
            },
            {
                id: "ninja",
                name: "NINJA WiFi",
                nameEn: "NINJA WiFi",
                discount: "MAX 20%",
                desc: "WiFi / SIM / eSIM 優惠",
                color: "#000000",
                textColor: "#FFFFFF",
                icon: "📶",
                link: "https://app.likejapan.com/zh-hk/coupon/NINJA-Wifi-discount",
                tips: "日本上網服務"
            },
            {
                id: "kappu",
                name: "Kappu Coffee",
                nameEn: "Kappu Coffee",
                discount: "95折",
                desc: "5% OFF 折扣優惠",
                color: "#6F4E37",
                textColor: "#FFFFFF",
                icon: "☕",
                link: "https://app.likejapan.com/zh-hk/coupon/Kappu-Coffee%E5%84%AA%E6%83%A0%E5%88%B8",
                tips: "咖啡豆與器具"
            },
            {
                id: "wamazing",
                name: "完美行 WAmazing",
                nameEn: "WAmazing",
                discount: "購物優惠",
                desc: "免排隊購買人氣伴手禮",
                color: "#FF3366",
                textColor: "#FFFFFF",
                icon: "🎁",
                link: "https://app.likejapan.com/zh-hk/coupon/wamazing-offer",
                tips: "線上預訂，機場領取"
            }
        ];
