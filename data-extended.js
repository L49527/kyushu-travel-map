// Day 3-7 Data
const dataDay3to7 = [
    {
        day: 3, date: "6/13(六)", title: "太宰府古都散策", area: "太宰府",
        hotel: "都ホテル博多", hotelLat: 33.5903, hotelLng: 130.4225, center: [33.52, 130.53],
        hotelImage: "images/都ホテル博多.jpg",
        hotelDesc: "【JR博多站直結】地下通道直達筑紫口，免淋雨<br>🛁 頂樓天然溫泉「都之湯」眺望博多夜景<br>🏊 室內恆溫泳池・健身房<br>🍽️ 3間餐廳酒吧・高樓層景觀房型<br>🧺 投幣洗衣機",
        transport: { drive: "走福岡都市高速約30分鐘抵達太宰府，需停周邊收費停車場。<br>• 過路費：往返約¥960 (都市高+九州道)", public: "【觀光列車旅人號】西鐵福岡(天神)→太宰府(30分¥420)<br>• 09:46 / 10:16 發車(直達)<br>• 需至二日市站轉乘，約10-15分鐘/班" },
        timeline: [
            { time: "10:30", act: "太宰府天滿宮", desc: "參拜學問之神，觸摸御神牛" },
            { time: "12:00", act: "表參道散步", desc: "隈研吾星巴克，現烤梅枝餅" },
            { time: "14:00", act: "九州國立博物館", desc: "壯觀建築 (門票：成人¥700/大學生¥350)" },
            { time: "16:00", act: "返回福岡市區", desc: "下午茶或購物" }
        ],
        spots: [
            { name: "太宰府天滿宮", lat: 33.5197, lng: 130.5358 },
            { name: "隈研吾星巴克", lat: 33.5205, lng: 130.5345 },
            { name: "九州國立博物館", lat: 33.5165, lng: 130.5405 }
        ],
        meals: {
            breakfast: [
                { name: "博多站 朝食喜水丸", hours: "07:30-22:00", desc: "明太子吃到飽！福岡最豪邁早餐", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=喜水丸+博多一番街店" },
                { name: "天神 麵包工房", hours: "08:00-20:00", desc: "博多名物明太子麵包，剛出爐最好吃", tag: "麵包", lat: 33.5922, lng: 130.3980, mapUrl: "https://www.google.com/maps/search/?api=1&query=FullFull+Tenjin" },
                { name: "珈琲館 (博多)", hours: "07:30-22:00", desc: "經典日式厚片吐司套餐", tag: "咖啡", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一番街" },
                { name: "西鐵車站 輕食", hours: "07:00-21:00", desc: "搭車前隨手買的美味飯糰或三明治", tag: "輕食", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=西鉄天神駅" },
                { name: "太宰府 暖暮拉麵 (早場)", hours: "10:00-22:00", desc: "曾經排名九州第一的拉麵店", tag: "拉麵", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/?api=1&query=暖暮+太宰府駅前店" }
            ],
            lunch: [
                { name: "梅枝餅 (多間名店)", hours: "09:00-18:00", desc: "太宰府靈魂，現烤紅豆內餡熱騰騰", tag: "甜點", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府+梅ヶ枝餅" },
                { name: "一蘭太宰府店 (五角碗)", hours: "09:00-20:00", desc: "合格碗造型，只有太宰府店有", tag: "拉麵", lat: 33.5208, lng: 130.5348, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+太宰府参道店" },
                { name: "寺子屋本舖 仙貝", hours: "09:30-17:30", desc: "各式現烤手工仙貝，多種調味", tag: "小吃", lat: 33.5202, lng: 130.5346, mapUrl: "https://www.google.com/maps/search/?api=1&query=寺子屋本舗+太宰府店" },
                { name: "阿蘇之森 (和風定食)", hours: "11:00-16:00", desc: "天滿宮旁環境優雅的庭園餐館", tag: "定食", lat: 33.5215, lng: 130.5358, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇の森+太宰府" },
                { name: "梅園 (和菓子)", hours: "10:00-17:00", desc: "精緻日式茶點，品味古都優雅", tag: "甜點", lat: 33.5200, lng: 130.5350, mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府+梅園" }
            ],
            dinner: [
                { name: "博多 魚米壽司", hours: "11:00-23:00", desc: "平價新鮮，博多站旁高人氣首選", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" },
                { name: "天神 燒鳥 信長", hours: "17:00-00:00", desc: "博多連鎖燒鳥，氛圍熱絡", tag: "居酒屋", lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
                { name: "一風堂 本店 (大名)", hours: "11:00-22:00", desc: "走回起源地，大名本店限定口味", tag: "拉麵", lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=一風堂+大名本店" },
                { name: "中洲 鐵鍋餃子", hours: "17:00-23:00", desc: "酥脆外皮，適合配杯啤酒", tag: "餃子", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+中洲店" },
                { name: "笑樂 牛腸鍋 (博多)", hours: "11:00-23:00", desc: "博多站內店鋪，行程結束前最後回味", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋+笑楽+博多駅" }
            ]
        },
        shopping: [
            { name: "太宰府表參道", hours: "09:00-18:00", desc: "梅枝餅、御守、傳統工藝品", tag: "老街", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/太宰府天満宮表参道" },
            { name: "隈研吾星巴克", hours: "08:00-20:00", desc: "限定馬克杯與週邊商品", tag: "限定", lat: 33.5207, lng: 130.5347, mapUrl: "https://www.google.com/maps/search/スターバックス+コーヒー+太宰府天満宮表参道店" },
            { name: "天滿宮御守販賣所", hours: "06:00-19:00", desc: "學業御守、鷽鳥御守", tag: "御守", lat: 33.5197, lng: 130.5358, mapUrl: "https://www.google.com/maps/search/太宰府天満宮+授与所" },
            { name: "梅園菓子舗", hours: "09:00-17:00", desc: "鬼瓦最中、傳統和菓子", tag: "和菓子", lat: 33.5200, lng: 130.5350, mapUrl: "https://www.google.com/maps/search/梅園菓子処" },
            { name: "博物館紀念品店", hours: "09:30-17:00", desc: "九州國博限定文創商品", tag: "紀念品", lat: 33.5165, lng: 130.5405, mapUrl: "https://www.google.com/maps/search/九州国立博物館+ミュージアムショップ" },
            { name: "光明禪寺 朱印所", hours: "09:00-16:00", desc: "收集御朱印", tag: "寺廟", lat: 33.5190, lng: 130.5365, mapUrl: "https://www.google.com/maps/search/光明禅寺" },
            { name: "天神 藥院商店街", hours: "10:00-20:00", desc: "回程順路逛逛", tag: "商店街", lat: 33.5875, lng: 130.3955, mapUrl: "https://www.google.com/maps/search/薬院駅" }
        ],
        specialties: [
            { name: "梅枝餅 (かさの家)", hours: "09:00-18:00", desc: "太宰府必吃現烤紅豆甜點", tag: "甜點", lat: 33.5205, lng: 130.5345, image: "images/梅枝餅.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=かさの家" },
            { name: "太宰府合格御守", hours: "06:00-19:00", desc: "學問之神加持，考生必備", tag: "紀念品", lat: 33.5197, lng: 130.5358, image: "images/學業御守.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府天満宮" },
            { name: "隈研吾星巴克周邊", hours: "08:00-20:00", desc: "限定商品，設計愛好者必收", tag: "限定", lat: 33.5207, lng: 130.5347, image: "images/隈研吾星巴克周邊.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=スターバックス+太宰府天満宮表参道店" },
            { name: "明太子脆餅 (FullFull)", hours: "08:00-18:00", desc: "麵包名店推出的熱門零食", tag: "零食", lat: 33.5922, lng: 130.3980, image: "images/明太子脆餅 (FullFull).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=FullFull+Tenjin" },
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
        day: 4, date: "6/14(日)", title: "前進別府，動物奇遇", area: "由布院・動物園",
        hotel: "御宿 野乃別府", hotelLat: 33.2795, hotelLng: 131.4985, center: [33.30, 131.40],
        hotelImage: "images/御宿 野乃別府.webp",
        hotelDesc: "【別府站前】全館榻榻米日式溫泉旅館<br>♨️ 頂樓露天風呂「別府八湯」眺望別府灣<br>🍜 免費夜鳴拉麵・泡湯後免費冰棒/乳酸菌飲料<br>👘 館內提供多款花色浴衣體驗<br>🧺 投幣洗衣機・漫畫休息區",
        transport: { drive: "【推薦自駕】福岡→由布院→動物園→別府<br>• 過路費：福岡→由布院約¥2,500-¥3,000<br>• 路線：由布院走縣道11號(Yamanami Hwy)往北約20分<br>• 動物園：可開自家車進野生動物區(免換巴士)", public: "【特急 由布院之森】博多→由布院(2小時¥5190)<br>• 09:17 / 10:11 / 14:38 發車(全車指定席)<br>※ 動物園大眾交通不便，強烈建議租車自駕" },
        timeline: [
            { time: "09:00", act: "出發前往由布院", desc: "沿途山景，經過狹霧台" },
            { time: "11:00", act: "由布院散策", desc: "湯之坪街道，Floral Village，金鱗湖" },
            { time: "13:30", act: "九州自然動物公園", desc: "門票¥2600/叢林巴士¥1500 (自駕免叢林巴士費)" },
            { time: "17:30", act: "前往別府", desc: "入住Galleria Midobaru溫泉飯店" }
        ],
        spots: [
            { name: "由布院", lat: 33.2667, lng: 131.3667 },
            { name: "金鱗湖", lat: 33.2615, lng: 131.3725 },
            { name: "九州自然動物公園", lat: 33.3439, lng: 131.4733 },
            { name: "Galleria Midobaru", lat: 33.3125, lng: 131.4785 }
        ],
        meals: {
            breakfast: [
                { name: "友永麵包屋", hours: "08:30-17:30", desc: "別府百年名店，紅豆麵包絕對要買", tag: "麵包", lat: 33.2795, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "珈琲 Aoyama", hours: "08:00-18:00", desc: "懷舊日式早餐，手工三明治極佳", tag: "喫茶", lat: 33.2775, lng: 131.4965, mapUrl: "https://www.google.com/maps/search/?api=1&query=青山コーヒー舎" },
                { name: "別府站 豐後茶屋", hours: "08:00-20:00", desc: "大分名物糰子湯與飯糰早餐", tag: "鄉土", lat: 33.2798, lng: 131.5005, mapUrl: "https://www.google.com/maps/search/?api=1&query=豊後茶屋+別府店" },
                { name: "岡本屋 溫泉蛋", hours: "08:30-18:30", desc: "位於明礬，硫磺香氣十足的溫泉蛋", tag: "溫泉", lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋+売店" },
                { name: "Lawson 別府車站店", hours: "24H", desc: "買些大分限定點心在路上享用", tag: "便利", lat: 33.2798, lng: 131.5005, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+別府駅" }
            ],
            lunch: [
                { name: "動物園內餐廳", hours: "11:00-16:00", desc: "雖然一般，但餵完動物最方便", tag: "便利", lat: 33.3439, lng: 131.4733, mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園" },
                { name: "地獄蒸工房 鐵輪", hours: "10:00-18:00", desc: "利用地熱蒸熟食材，體驗傳統烹飪", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "別府冷麵 六盛", hours: "11:30-20:00", desc: "別府必嚐！Q彈麵條與酸甜湯頭", tag: "冷麵", lat: 33.2845, lng: 131.4905, mapUrl: "https://www.google.com/maps/search/?api=1&query=手のべ冷麺専門店+六盛" },
                { name: "東洋軒 炸雞天婦羅", hours: "11:00-21:00", desc: "大分炸雞天婦羅創始名店", tag: "雞天", lat: 33.2825, lng: 131.4915, mapUrl: "https://www.google.com/maps/search/?api=1&query=とり天発祥の店+東洋軒" },
                { name: "甘味茶屋", hours: "10:00-20:00", desc: "古宅改建，傳統糰子汁與日式甜點", tag: "鄉土", lat: 33.3205, lng: 131.4435, mapUrl: "https://www.google.com/maps/search/?api=1&query=甘味茶屋" }
            ],
            dinner: [
                { name: "別府 燒肉 Somuri", hours: "11:30-22:00", desc: "在地人推崇的頂級豐後牛燒肉", tag: "燒肉", lat: 33.2815, lng: 131.4925, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉レストラン+ソムリ" },
                { name: "生一本 居酒屋", hours: "17:30-00:00", desc: "別府車站附近，新鮮地魚刺身", tag: "居酒屋", lat: 33.2795, lng: 131.4985, mapUrl: "https://www.google.com/maps/search/?api=1&query=生一本+別府" },
                { name: "龜正 壽司", hours: "11:00-21:00", desc: "別府最火紅迴轉壽司，魚貨超大塊", tag: "壽司", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "水天 壽司", hours: "11:00-22:00", desc: "高品質迴轉壽司，環境更精緻舒適", tag: "壽司", lat: 33.3055, lng: 131.4855, mapUrl: "https://www.google.com/maps/search/?api=1&query=廻転寿司+水天+別府店" },
                { name: "海鮮料理 魚心", hours: "11:30-21:30", desc: "專營別府灣新鮮海產，價格親民", tag: "海鮮", lat: 33.2755, lng: 131.5055, mapUrl: "https://www.google.com/maps/search/?api=1&query=海鮮いけす料理+魚心" }
            ]
        },
        shopping: [
            { name: "湯之坪街道", hours: "09:00-18:00", desc: "雜貨、甜點、手工藝品、果醬", tag: "老街", lat: 33.2630, lng: 131.3690, mapUrl: "https://www.google.com/maps/search/湯の坪街道" },
            { name: "由布院 Floral Village", hours: "09:30-17:30", desc: "歐風小鎮、宮崎駿商店、貓頭鷹", tag: "主題村", lat: 33.2640, lng: 131.3700, mapUrl: "https://www.google.com/maps/search/YUFUIN+FLORAL+VILLAGE" },
            { name: "B-Speak", hours: "10:00-17:00", desc: "蛋糕捲禮盒 (易完售)", tag: "甜點", lat: 33.2645, lng: 131.3678, mapUrl: "https://www.google.com/maps/search/B-Speak+由布院" },
            { name: "SNOOPY茶屋", hours: "10:00-17:00", desc: "史努比周邊商品", tag: "主題", lat: 33.2635, lng: 131.3695, mapUrl: "https://www.google.com/maps/search/SNOOPY茶屋+由布院" },
            { name: "由布院之森 紀念品", hours: "JR車內", desc: "列車限定商品", tag: "限定", lat: 33.2624, lng: 131.3549, mapUrl: "https://www.google.com/maps/search/由布院駅" },
            { name: "動物園紀念品店", hours: "09:30-17:00", desc: "非洲動物周邊商品", tag: "紀念品", lat: 33.3439, lng: 131.4733, mapUrl: "https://www.google.com/maps/search/九州自然動物公園" },
            { name: "金鱗湖畔小店", hours: "09:00-17:00", desc: "手工皂、在地特產", tag: "雜貨", lat: 33.2615, lng: 131.3725, mapUrl: "https://www.google.com/maps/search/金鱗湖" }
        ],
        specialties: [
            { name: "動物園限定周邊", hours: "09:30-17:00", desc: "可愛的獅子與長頸鹿娃娃", tag: "紀念品", lat: 33.3439, lng: 131.4733, image: "images/動物園限定周邊.jpeg", mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園" },
            { name: "地獄蒸布丁", hours: "08:30-18:30", desc: "明礬溫泉名物，苦甜焦糖味", tag: "甜點", lat: 33.3355, lng: 131.4345, image: "images/pudding.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋+売店" },
            { name: "別府溫泉粉", hours: "09:00-18:00", desc: "在家享受別府名湯", tag: "用品", lat: 33.2798, lng: 131.5005, image: "images/別府溫泉粉.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+溫泉粉" },
            { name: "竹細工器皿", hours: "09:00-17:00", desc: "別府傳統工藝，精緻耐用", tag: "工藝", lat: 33.3055, lng: 131.4855, image: "images/竹細工器皿.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府市竹細工伝統産業会館" },
            { name: "品客 九州限定 (明太子口味)", hours: "09:00-18:00", desc: "九州限定伴手禮，各大土產店皆有", tag: "零食", lat: 33.2624, lng: 131.3549, image: "images/品客 九州限定.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院駅+お土産" },
            { name: "B-Speak 蛋糕捲", hours: "10:00-17:00", desc: "由布院超人氣蛋糕捲，鬆軟充滿蛋香", tag: "甜點", lat: 33.2645, lng: 131.3678, image: "images/bspeak.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=B-Speak+由布院" },
            { name: "Jazz Yokan (爵士羊羹)", hours: "10:00-17:00", desc: "鋼琴鍵盤造型羊羹，絕美伴手禮", tag: "甜點", lat: 33.2668, lng: 131.3610, image: "images/Jazz Yokan.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=ジャズとようかん+湯布院本店" },
            { name: "柚子胡椒 (琴琴屋)", hours: "10:00-18:00", desc: "九州必買調味料，火鍋燒肉百搭", tag: "調料", lat: 33.2655, lng: 131.3650, image: "images/柚子胡椒.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=ジャム工房ことこと屋" },
            { name: "由布院之森 紀念品", hours: "JR車內", desc: "列車限定商品，錯過就買不到", tag: "限定", lat: 33.2624, lng: 131.3549, image: "images/由布院之森 紀念品.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院駅" }
        ],
        supermarkets: [
            { name: "Marumiya Store 別府站店", hours: "09:30-21:00", desc: "位於車站內，最近最方便，距離飯店步行約 2 分鐘", tag: "便利", lat: 33.2798, lng: 131.5005 },
            { name: "Youme Town Beppu", hours: "09:30-21:30", desc: "大型購物中心，步行約 10 分鐘，好逛好買", tag: "大型", lat: 33.2755, lng: 131.5055 },
            { name: "Marushoku 流川通店", hours: "09:00-22:00", desc: "當地連鎖超市，步行約 7 分鐘", tag: "在地", lat: 33.2770, lng: 131.5030 }
        ]
    },
    {
        day: 5, plan: "A", date: "6/15(一)", title: "阿蘇火山壯麗絕景", area: "阿蘇・草千里",
        hotel: "杉乃井飯店 宙館", hotelLat: 33.2985, hotelLng: 131.4725, center: [32.90, 131.10],
        hotelImage: "images/杉乃井飯店 宙館.jpg",
        hotelDesc: "【別府最大溫泉度假村】最新館別「宙館」<br>♨️ 頂樓無邊際展望露天風呂「宙湯」<br>🏊 Aqua Garden 溫泉泳池・夜間雷射水舞秀<br>🍽️ TERRAZZA 豪華自助餐廳 (鰻魚/牛排吃到飽)<br>🚌 別府車站免費接駁巴士・保齡球館",
        transport: { drive: "由布院/別府→阿蘇 (Yamanami Highway)：**免費**。<br>• 飯店提供免費戶外停車場，佔地廣大，建議先在門口下行李。", public: "【觀光巴士】別府出發的一日觀光巴士團<br>• 參加 Klook/KKday 行程最便利<br>• 包含阿蘇火山、草千里、九重夢大吊橋<br>【前往飯店】別府車站西口搭乘免費接駁車 (約15分鐘/班)" },
        timeline: [
            { time: "09:00", act: "前往阿蘇", desc: "途經大觀峰，眺望阿蘇五岳" },
            { time: "11:30", act: "阿蘇中岳火山口", desc: "近距離觀看綠色火口湖" },
            { time: "13:00", act: "草千里之濱", desc: "廣闘草原，背景冒煙火山" },
            { time: "18:00", act: "杉乃井飯店", desc: "著名的棚湯露天溫泉" }
        ],
        spots: [
            { name: "大觀峰", lat: 32.9565, lng: 131.0625 },
            { name: "阿蘇中岳火山口", lat: 32.8844, lng: 131.0844 },
            { name: "草千里", lat: 32.8833, lng: 131.0667 },
            { name: "杉乃井飯店", lat: 33.2985, lng: 131.4725 }
        ],
        meals: {
            breakfast: [
                { name: "阿蘇車站 賣店早餐", hours: "08:30-18:00", desc: "新鮮阿蘇牛奶與現做飯糰", tag: "便利", lat: 32.9505, lng: 131.0575, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇駅" },
                { name: "內牧溫泉 旅館朝食", hours: "07:00-09:00", desc: "使用在地野菜與阿蘇米的豐盛定食", tag: "飯店", lat: 32.9655, lng: 131.0255, mapUrl: "https://www.google.com/maps/search/?api=1&query=内牧温泉" },
                { name: "阿蘇 Milk Road 咖啡", hours: "09:00-17:00", desc: "路上隨處可見的牧場直營小舖", tag: "咖啡", lat: 33.0035, lng: 131.0285, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+ミルク牧場" },
                { name: "岡田咖啡 阿蘇店", hours: "09:00-18:00", desc: "熊本名店氛圍，優質手沖", tag: "咖啡", lat: 32.9485, lng: 131.0545, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+岡田珈琲" },
                { name: "便利超商 (阿蘇)", hours: "24H", desc: "買些補給品上山，火山口食物較少", tag: "便利", lat: 32.9495, lng: 131.0565, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+阿蘇" }
            ],
            lunch: [
                { name: "いまきん食堂 (赤牛丼)", hours: "11:00-14:30", desc: "阿蘇排隊神店！超鮮嫩赤牛蓋飯", tag: "必吃", lat: 32.9485, lng: 131.0545, mapUrl: "https://www.google.com/maps/search/?api=1&query=いまきん食堂" },
                { name: "山賊旅路 (高菜飯)", hours: "11:00-17:00", desc: "阿蘇鄉土味，高菜飯與糰子汁必點", tag: "鄉土", lat: 32.9435, lng: 131.0525, mapUrl: "https://www.google.com/maps/search/?api=1&query=山賊旅路" },
                { name: "草千里展望餐廳", hours: "11:00-15:00", desc: "一邊吃飯一邊欣賞絕美大草原", tag: "景觀", lat: 32.8833, lng: 131.0667, mapUrl: "https://www.google.com/maps/search/?api=1&query=草千里展望レストラン" },
                { name: "阿蘇 赤牛燒肉", hours: "11:30-14:30", desc: "享受阿蘇牧草養大的紅牛美味", tag: "燒肉", lat: 32.9495, lng: 131.0555, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+あか牛の館" },
                { name: "阿蘇 拿坡里披薩", hours: "11:00-15:00", desc: "使用在地食材製作的義式手工餐點", tag: "義式", lat: 32.8275, lng: 131.1215, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+薪窯ピッツァ" }
            ],
            dinner: [
                { name: "內牧 燒肉 正", hours: "17:30-22:00", desc: "在地溫泉區的高品質燒肉店", tag: "燒肉", lat: 32.9655, lng: 131.0255, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉正+阿蘇" },
                { name: "熊本勝烈亭 (若住熊本)", hours: "11:30-21:00", desc: "九州第一名豬排，鹿兒島六白豬", tag: "豬排", lat: 32.8005, lng: 130.7055, mapUrl: "https://www.google.com/maps/search/?api=1&query=勝烈亭+新市街本店" },
                { name: "熊本黑亭拉麵", hours: "10:30-20:30", desc: "焦蒜油香氣，熊本拉麵代表作", tag: "拉麵", lat: 32.7895, lng: 130.6985, mapUrl: "https://www.google.com/maps/search/?api=1&query=熊本ラーメン+黒亭+本店" },
                { name: "菅乃屋 (馬肉專賣)", hours: "11:30-21:00", desc: "來到熊本絕對不能錯過的馬刺身", tag: "馬肉", lat: 32.8020, lng: 130.7080, mapUrl: "https://www.google.com/maps/search/?api=1&query=菅乃屋+上通り店" },
                { name: "五郎八 居酒屋", hours: "17:30-23:00", desc: "在地人最愛，馬肉燒肉與天草海鮮", tag: "居酒屋", lat: 32.7995, lng: 130.7065, mapUrl: "https://www.google.com/maps/search/?api=1&query=五郎八+熊本" }
            ]
        },
        shopping: [
            { name: "道之驛 阿蘇", hours: "09:00-18:00", desc: "農產品、熊本熊周邊、特產", tag: "道之驛", lat: 32.9505, lng: 131.0575 },
            { name: "阿蘇神社門前町", hours: "09:00-17:00", desc: "熊本熊周邊、鄉土料理", tag: "老街", lat: 32.9485, lng: 131.0545 },
            { name: "Aso Milk Factory", hours: "09:30-18:00", desc: "乳製品、起司蛋糕禮盒", tag: "甜點", lat: 32.9515, lng: 131.0585 },
            { name: "大觀峰 土產店", hours: "09:00-17:00", desc: "阿蘇特色點心", tag: "土產", lat: 32.9565, lng: 131.0625 },
            { name: "草千里物產館", hours: "09:00-17:00", desc: "草千里限定商品", tag: "紀念品", lat: 32.8833, lng: 131.0667 },
            { name: "杉乃井飯店商店", hours: "07:00-22:00", desc: "溫泉用品、別府土產", tag: "飯店", lat: 33.2985, lng: 131.4725 },
            { name: "高速公路休息站", hours: "24H", desc: "各式九州土產一站購齊", tag: "休息站", lat: 33.1500, lng: 131.3000 }
        ],
        specialties: [
            { name: "阿蘇牛奶 / 冰淇淋", hours: "09:30-18:00", desc: "阿蘇地區必喝濃郁牛奶", tag: "飲品", lat: 32.9515, lng: 131.0585, image: "images/aso_milk.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇牛奶牧場" },
            { name: "阿蘇高菜漬", hours: "店鋪營業時間", desc: "特產芥末菜漬，下飯聖品", tag: "漬物", lat: 32.9505, lng: 131.0565, image: "images/阿蘇高菜漬.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+高菜漬" },
            { name: "熊本名物 いきなり団子", hours: "09:00-17:00", desc: "紅薯與紅豆餡包入Q彈外皮，阿蘇必吃", tag: "甜點", lat: 32.9495, lng: 131.0555, image: "images/ikinari Dango.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=いきなり団子+阿蘇" },
            { name: "阿蘇火山灰酷馬萌 (Ash-Mon)", hours: "09:00-17:00", desc: "利用阿蘇中岳噴發的火山灰壓製而成，每一尊都是手工製作，是阿蘇最具代表性的環保工藝品。", tag: "紀念品", lat: 32.8844, lng: 131.0844, image: "images/阿蘇火山灰酷馬萌.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇火山+長者原" },
            { name: "熊本熊周邊商品", hours: "09:00-18:00", desc: "Kumamon限定官方商品", tag: "紀念品", lat: 32.9655, lng: 131.0255, image: "images/熊本熊周邊.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=内牧温泉" }
        ],
        supermarkets: [
            { name: "Tokiwa Industry 鶴見園", hours: "09:00-21:00", desc: "飯店下山步行約10分鐘，建議自駕或搭接駁車", tag: "最近", lat: 33.2950, lng: 131.4780 },
            { name: "Lawson 別府石垣東店", hours: "24H", desc: "最近便利商店，距離飯店步行約 12 分鐘", tag: "便利", lat: 33.2965, lng: 131.4805 }
        ]
    },
    {
        day: 5, plan: "B", date: "6/15(一)", title: "別府深度慢遊：山海溫泉", area: "別府・鶴見岳",
        hotel: "杉乃井飯店 宙館", hotelLat: 33.2985, hotelLng: 131.4725, center: [33.30, 131.45],
        hotelImage: "images/杉乃井飯店 宙館.jpg",
        hotelDesc: "【別府最大溫泉度假村】最新館別「宙館」<br>♨️ 頂樓無邊際展望露天風呂「宙湯」<br>🏊 Aqua Garden 溫泉泳池・夜間雷射水舞秀<br>🍽️ TERRAZZA 豪華自助餐廳 (鰻魚/牛排吃到飽)",
        transport: {
            drive: "別府自駕深度遊。景點距離都在20分鐘車程內。今日行程放鬆，午餐後可回飯店享受設施。",
            public: "利用別府龜之井巴士一日券 (¥1,100)。搭乘36/37號巴士前往纜車站。"
        },
        timeline: [
            { time: "09:30", act: "別府鶴見岳纜車", desc: "10分鐘直抵海拔1300公尺，眺望由布岳與別府灣全景" },
            { time: "12:00", act: "地獄蒸工坊料理", desc: "體驗利用天然地溫蒸氣烹調當地食材，午餐首選" },
            { time: "13:30", act: "海地獄 (Umi Jigoku)", desc: "參訪鈷藍色的絕美溫泉，別府最經典的地獄地景" },
            { time: "15:30", act: "別府海濱砂湯", desc: "獨特海邊砂浴體驗，聽著海浪聲徹底放鬆身心" },
            { time: "17:30", act: "宙館入居", desc: "提早享用宙湯與豪華自助晚餐" }
        ],
        spots: [
            { name: "別府纜車", lat: 33.2842, lng: 131.4325 },
            { name: "地獄蒸工坊", lat: 33.3195, lng: 131.4425 },
            { name: "海地獄", lat: 33.3200, lng: 131.4430 },
            { name: "海濱砂湯", lat: 33.3094, lng: 131.5034 }
        ],
        meals: {
            breakfast: [
                { name: "飯店悠閒早餐", hours: "07:00-10:00", desc: "在御宿野乃享用豐盛日式朝食，海鮮丼吃到飽", tag: "飯店", lat: 33.2795, lng: 131.4985, image: "images/御宿 野乃別府.webp" },
                { name: "友永麵包屋", hours: "08:30-17:30", desc: "【別府百年老店】紅豆麵包與奶油捲必吃，在地人排隊名店", tag: "麵包", lat: 33.2735, lng: 131.5030, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "青山咖啡舍", hours: "08:00-18:00", desc: "復古喫茶店，提供經典厚片吐司早餐", tag: "咖啡", lat: 33.2770, lng: 131.4960, mapUrl: "https://www.google.com/maps/search/?api=1&query=青山コーヒー舎" },
                { name: "岡本屋売店 (早茶)", hours: "08:30-18:30", desc: "明礬溫泉名物，地獄蒸布丁與雞蛋三明治", tag: "輕食", lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
                { name: "Lotteria 別府站", hours: "07:30-21:00", desc: "車站內快速早餐選擇", tag: "連鎖", lat: 33.2798, lng: 131.5005 }
            ],
            lunch: [
                { name: "地獄蒸工坊 鐵輪", hours: "10:00-19:00", desc: "【體驗必選】利用98度溫泉蒸氣自煮蔬菜海鮮，健康美味", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "龜正迴轉壽司", hours: "11:00-21:00", desc: "【排隊名店】別府最强壽司，魚料超大塊新鮮，近地獄區", tag: "壽司", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "胡月 冷麵", hours: "11:00-16:00", desc: "別府冷麵發源地之一，Q彈粗麵配上清爽牛骨湯", tag: "麵食", lat: 33.3065, lng: 131.4875, mapUrl: "https://www.google.com/maps/search/?api=1&query=胡月+冷麺" },
                { name: "天丼 とよ常 (本店)", hours: "11:00-21:00", desc: "別府必吃特上天丼，大蝦天婦羅酥脆多汁", tag: "丼飯", lat: 33.2805, lng: 131.4945, mapUrl: "https://www.google.com/maps/search/?api=1&query=天丼+とよ常" },
                { name: "甘味茶屋", hours: "10:00-20:00", desc: "古民家風格餐廳，大分名物糰子汁與炸雞天", tag: "鄉土", lat: 33.3205, lng: 131.4435, mapUrl: "https://www.google.com/maps/search/?api=1&query=甘味茶屋" }
            ],
            dinner: [
                { name: "METEOR 自助餐", hours: "17:00-21:30", desc: "【宙館住客限定】豪華海鮮、牛排、壽司吃到飽，景觀極佳", tag: "飯店", lat: 33.2985, lng: 131.4725 },
                { name: "燒肉 Somuri", hours: "17:00-22:00", desc: "【豐後牛】嚴選A5等級黑毛和牛，別府燒肉首選", tag: "燒肉", lat: 33.2815, lng: 131.4925, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉レストラン+ソムリ" },
                { name: "海鮮居酒屋 魚心", hours: "17:00-23:00", desc: "在地人推薦，新鮮生魚片與當季海鮮料理", tag: "居酒屋", lat: 33.2755, lng: 131.5055, mapUrl: "https://www.google.com/maps/search/?api=1&query=海鮮いけす料理+魚心" },
                { name: "爐端燒 人氣", hours: "17:30-23:00", desc: "熱鬧的爐端燒，氣氛極佳，適合小酌", tag: "居酒屋", lat: 33.2785, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/?api=1&query=炉端+人気" },
                { name: "東洋軒", hours: "11:00-21:00", desc: "大分名物「炸雞天婦羅」發源店，口感軟嫩", tag: "中華", lat: 33.2825, lng: 131.4915, mapUrl: "https://www.google.com/maps/search/?api=1&query=とり天発祥の店+東洋軒" }
            ]
        },
        shopping: [
            { name: "杉乃井 賣店", hours: "07:00-22:00", desc: "飯店內大型土產店，大分縣特產一應俱全", tag: "飯店", lat: 33.2985, lng: 131.4725 },
            { name: "別府交通中心", hours: "09:00-18:00", desc: "別府港旁的大型物產館，種類豐富", tag: "物產", lat: 33.3035, lng: 131.4825 },
            { name: "地獄巡禮 商店", hours: "09:00-17:00", desc: "海地獄、血池地獄皆有特色紀念品", tag: "景點", lat: 33.3200, lng: 131.4430 },
            { name: "Tokiwa 百貨", hours: "10:00-19:00", desc: "別府市區老牌百貨公司", tag: "百貨", lat: 33.2790, lng: 131.5010 },
            { name: "Youme Town", hours: "09:30-21:30", desc: "大型購物中心，超市、藥妝、服飾", tag: "商場", lat: 33.2755, lng: 131.5055 }
        ],
        specialties: [
            { name: "別府溫泉粉", hours: "09:00-22:00", desc: "【Myoban湯之花】國家指定無形文化財，在家享受天然溫泉", tag: "用品", lat: 33.3345, lng: 131.4335, image: "images/湯之花.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=みょうばん湯の里" },
            { name: "極樂饅頭", hours: "08:30-18:00", desc: "地獄蒸氣現蒸小饅頭，一口一個停不下來", tag: "甜點", lat: 33.3225, lng: 131.4512, image: "images/極樂饅頭.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=血の池地獄" },
            { name: "地獄蒸布丁 (岡本屋)", hours: "08:30-18:30", desc: "苦甜焦糖與濃郁蛋香，別府最人氣甜點", tag: "甜點", lat: 33.3355, lng: 131.4345, image: "images/pudding.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
            { name: "Zabon漬 (ざぼん漬)", hours: "09:00-18:00", desc: "別府特產糖漬文旦皮，酸甜古早味", tag: "零食", lat: 33.2798, lng: 131.5005, image: "images/Zabon漬 (ざぼん漬).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+ざぼん漬" },
            { name: "別府竹細工", hours: "09:00-17:00", desc: "傳統工藝編織籃、餐具，質感極佳", tag: "工藝", lat: 33.3055, lng: 131.4855, image: "images/別府竹細工.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府市竹細工伝統産業会館" },
            { name: "大分酸橙 (Kabosu)", hours: "超市皆有", desc: "各式酸橙調味料、果汁、餅乾", tag: "伴手禮", lat: 33.2798, lng: 131.5005, image: "images/大分酸橙 (Kabosu).webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+カボス" },
            { name: "雞肉天婦羅仙貝", hours: "超市皆有", desc: "大分名物炸雞肉天婦羅仙貝，酥脆好吃", tag: "餅乾", lat: 33.2798, lng: 131.5005, image: "images/雞肉天婦羅仙貝.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+とり天せんべい" }
        ],
        supermarkets: [
            { name: "Tokiwa 鶴見園", hours: "09:00-21:00", desc: "近飯店的大型超市", tag: "補給", lat: 33.2950, lng: 131.4780 }
        ]
    },
    {
        day: 6, date: "6/16(二)", title: "地獄巡禮與返回福岡", area: "別府地獄・中洲",
        hotel: "ホテル イル・パラッツォ (Il Palazzo)", hotelLat: 33.5905, hotelLng: 130.4025, center: [33.30, 131.45],
        hotelImage: "images/Il Palazzo.jpg",
        hotelDesc: "【建築大師 Aldo Rossi 設計】日本首間設計旅館<br>🏆 榮獲普立茲克建築獎大師代表作<br>🍸 傳奇地下酒吧 EL DORADO (房客專屬)<br>🚶 步行5分鐘至中洲屋台・春吉橋旁<br>🧺 自助洗衣房・頂級視聽設備",
        transport: { drive: "下午走高速公路返回福岡(約2小時)。<br>• 過路費：約¥3,700 (ETC)<br>• 飯店停車場(每晚¥2,500)或周邊收費停車場。", public: "【特急 音速號 Sonic】別府→博多(2小時¥5500)<br>• 09:53 / 10:53 等每小時2班<br>【前往飯店】地鐵「中洲川端」站步行約7分鐘<br>• 沿著那珂川散步回飯店，欣賞河景" },
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
                { name: "杉乃井自助餐", hours: "06:30-10:00", desc: "再次享受豪華早餐", tag: "飯店", lat: 33.2985, lng: 131.4725, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+Seeds" },
                { name: "岡本屋賣店", hours: "08:30-18:30", desc: "明礬溫泉必吃「地獄蒸布丁」", tag: "必吃", lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=明礬温泉+岡本屋売店" },
                { name: "友永麵包", hours: "08:30-17:30", desc: "買伴手禮麵包一早去", tag: "麵包", lat: 33.2795, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "Starbucks 別府公園", hours: "07:30-22:00", desc: "環境清幽晨間咖啡", tag: "咖啡", lat: 33.2785, lng: 131.4955, mapUrl: "https://www.google.com/maps/search/?api=1&query=スターバックス+コーヒー+別府公園店" },
                { name: "咖啡廳 Coffeel", hours: "08:00-18:00", desc: "體驗復古日式早餐", tag: "喫茶", lat: 33.2775, lng: 131.4965, mapUrl: "https://www.google.com/maps/search/?api=1&query=グリーンスポット" },
                { name: "海地獄 足湯Cafe", hours: "09:00-17:00", desc: "邊泡足湯邊吃溫泉蛋", tag: "體驗", lat: 33.3200, lng: 131.4430, mapUrl: "https://www.google.com/maps/search/?api=1&query=海地獄" },
                { name: "便利商店", hours: "24H", desc: "車上備好早餐", tag: "輕食", lat: 33.2805, lng: 131.4975, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+別府" }
            ],
            lunch: [
                { name: "地獄蒸工房 鐵輪", hours: "09:00-19:00", desc: "自己動手蒸蔬菜海鮮肉片", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "龜正迴轉壽司", hours: "11:00-21:00", desc: "若前幾天沒吃到最後機會", tag: "壽司", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "甘味茶屋", hours: "10:00-17:00", desc: "大分傳統建築吃烏龍麵", tag: "鄉土", lat: 33.3205, lng: 131.4435, mapUrl: "https://www.google.com/maps/search/?api=1&query=甘味茶屋" },
                { name: "天丼 Toman", hours: "11:00-20:00", desc: "別府老舖天丼，醬汁獨特", tag: "天丼", lat: 33.2805, lng: 131.4945, mapUrl: "https://www.google.com/maps/search/?api=1&query=天丼+とよ常+本店" },
                { name: "別府灣SA", hours: "11:00-20:00", desc: "回程SA絕佳海景餐廳", tag: "景觀", lat: 33.3354, lng: 131.4612, mapUrl: "https://www.google.com/maps/search/?api=1&query=別府湾サービスエリア" },
                { name: "鐵輪溫泉 蒸し湯", hours: "10:00-16:00", desc: "傳統蒸湯體驗後的蒸食", tag: "溫泉", lat: 33.3190, lng: 131.4420, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄輪むし湯" },
                { name: "山田SA", hours: "07:00-22:00", desc: "回程順路休息站美食", tag: "休息站", lat: 33.4515, lng: 130.6825, mapUrl: "https://www.google.com/maps/search/?api=1&query=山田SA" }
            ],
            dinner: [
                { name: "吉塚鰻魚屋", hours: "11:00-21:00", desc: "福岡第一鰻魚飯，中洲河畔必吃", tag: "高級", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=吉塚うなぎ屋" },
                { name: "信秀本店", hours: "16:30-24:00", desc: "中洲著名燒鳥店", tag: "居酒屋", lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
                { name: "博多藪", hours: "19:00-03:00", desc: "老牌蕎麥麵店，豬排丼隱藏招牌", tag: "麵食", lat: 33.5905, lng: 130.4035, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多薮" },
                { name: "麵劇場 玄瑛", hours: "11:30-22:00", desc: "店內像劇場，拉麵非常精緻", tag: "拉麵", lat: 33.5795, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=麺劇場+玄瑛" },
                { name: "博多華味鳥", hours: "17:00-23:00", desc: "最後機會吃水炊雞肉鍋", tag: "鍋物", lat: 33.5917, lng: 130.4042, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多華味鳥" },
                { name: "中洲屋台 再訪", hours: "18:00-02:00", desc: "最後一晚再體驗屋台", tag: "屋台", lat: 33.5920, lng: 130.4040, mapUrl: "https://www.google.com/maps/search/?api=1&query=中洲屋台" },
                { name: "河太郎 中洲本店", hours: "17:00-22:00", desc: "活烏賊刺身，現點現撈", tag: "海鮮", lat: 33.5912, lng: 130.4048, mapUrl: "https://www.google.com/maps/search/?api=1&query=河太郎+中洲本店" },
                { name: "博多 魚米壽司", hours: "11:00-23:00", desc: "回到福岡，用平價美味的壽司收尾", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" },
                { name: "一蘭 拉麵 (總本店)", hours: "24H", desc: "朝聖福岡地標性的一蘭總本店", tag: "拉麵", lat: 33.5930, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+本社総本店" },
                { name: "大山 牛腸鍋 (博多)", hours: "11:00-23:00", desc: "如果還想吃最後一次牛腸鍋", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋おおやま+博多駅" },
                { name: "博多 鐵鍋餃子", hours: "17:00-23:00", desc: "美味饺子與啤酒，為行程乾一杯", tag: "居酒屋", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+中洲店" },
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
            { name: "地獄蒸布丁", hours: "08:30-18:30", desc: "溫泉蒸氣手工製作", tag: "甜點", lat: 33.3355, lng: 131.4345, image: "images/pudding.png", mapUrl: "https://www.google.com/maps/search/明礬温泉+岡本屋売店" },
            { name: "湯之花", hours: "09:00-17:00", desc: "別府溫泉天然入浴結晶", tag: "用品", lat: 33.3345, lng: 131.4335, image: "images/湯之花.jpg", mapUrl: "https://www.google.com/maps/search/みょうばん+湯の里" },
            { name: "雞肉天婦羅仙貝", hours: "店鋪營業時間", desc: "大分名物雞天風味", tag: "餅乾", lat: 33.2798, lng: 131.5005, image: "images/雞肉天婦羅仙貝.jpg", mapUrl: "https://www.google.com/maps/search/別府銘品蔵+別府駅" },
            { name: "血池地獄軟膏", hours: "08:00-17:00", desc: "別府特產神藥，紅色軟膏", tag: "藥妝", lat: 33.3225, lng: 131.4512, image: "images/血池地獄軟膏.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=血の池地獄" },
            { name: "九州限定酒精飲品", hours: "09:00-21:00", desc: "各式九州水果酒與燒落", tag: "伴手禮", lat: 33.5897, lng: 130.4207, image: "images/九州限定酒精飲品.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=博多駅+住吉酒販" }
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
        transport: { drive: "前往機場還車(若尚未還車)。福岡機場國內線/國際線還車點不同，請先確認。", public: "【地鐵空港線】博多站→福岡機場(5分¥260)<br>• 運行時間 05:30-00:24<br>• 約5-8分鐘/班<br>• 國際線需在國內線站下車後搭免費接駁巴士(約15分鐘)" },
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
                { name: "Tanya HAKATA", hours: "07:00-10:00", desc: "最後一次牛舌早餐", tag: "日式", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=たんやHAKATA" },
                { name: "Uchino Tamago", hours: "08:00-21:00", desc: "著名生雞蛋拌飯(TKG)", tag: "日式", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=うちのたまご+直売所" },
                { name: "Mister Donut", hours: "07:00-23:00", desc: "日本限定口味", tag: "連鎖", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=Mister+Donut" },
                { name: "Starbucks 博多站", hours: "07:00-23:00", desc: "買日本限定杯子", tag: "咖啡", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Starbucks+Hakata" },
                { name: "Soup Stock Tokyo", hours: "08:00-21:30", desc: "溫暖的湯品早餐", tag: "湯品", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Soup+Stock+Tokyo" },
                { name: "Pronto Cafe", hours: "07:00-22:00", desc: "義式咖啡與輕食", tag: "咖啡", lat: 33.5895, lng: 130.4203, mapUrl: "https://www.google.com/maps/search/?api=1&query=Pronto+Cafe" },
                { name: "Il Palazzo 早餐", hours: "07:00-10:00", desc: "設計師飯店精緻早餐", tag: "飯店", lat: 33.5905, lng: 130.4025, mapUrl: "https://www.google.com/maps/search/?api=1&query=Il+Palazzo" }
            ],
            lunch: [
                { name: "博多一雙", hours: "11:00-24:00", desc: "「豚骨卡布奇諾」泡泡豚骨味", tag: "拉麵", lat: 33.5905, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/博多一双+博多駅東本店" },
                { name: "牛腸鍋 Oyama", hours: "11:00-23:00", desc: "博多站內最後一鍋", tag: "鍋物", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/博多もつ鍋おおやま+博多1番街" },
                { name: "大地烏龍麵", hours: "11:00-21:00", desc: "博多站地下街透明烏龍麵", tag: "麵食", lat: 33.5893, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/大地のうどん+博多駅ちかてん" },
                { name: "利久牛舌", hours: "11:00-23:00", desc: "仙台名產博多店也好吃", tag: "定食", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/牛たん炭焼利久+博多駅店" },
                { name: "拉麵滑走路", hours: "10:00-21:00", desc: "福岡機場國內線3樓各地名店", tag: "機場", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/ラーメン滑走路" },
                { name: "一蘭拉麵 博多站", hours: "24H", desc: "經典不敗最後一碗", tag: "拉麵", lat: 33.5905, lng: 130.4185, mapUrl: "https://www.google.com/maps/search/一蘭+博多店+サンプラザ地下街店" },
                { name: "博多一幸舍", hours: "11:00-23:00", desc: "泡系豚骨拉麵名店", tag: "拉麵", lat: 33.5902, lng: 130.4192, mapUrl: "https://www.google.com/maps/search/博多一幸舎+博多駅筑紫口店" }
            ],
            dinner: [
                { name: "機上餐點", hours: "N/A", desc: "回程飛機餐", tag: "旅途", lat: 0, lng: 0 },
                { name: "溫暖的家", hours: "N/A", desc: "整理戰利品", tag: "家", lat: 0, lng: 0 },
                { name: "伊都 King 機場店", hours: "06:30-21:00", desc: "草莓銅鑼燒當點心", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/伊都きんぐ+福岡空港店" },
                { name: "福砂屋長崎蛋糕", hours: "06:30-21:00", desc: "機場伴手禮", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+福砂屋" },
                { name: "Royce 巧克力", hours: "06:30-21:00", desc: "機場免稅店必買", tag: "甜點", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/福岡空港+免税店" },
                { name: "機場便利商店", hours: "06:00-21:00", desc: "最後補貨機會", tag: "輕食", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+福岡空港" },
                { name: "候機室咖啡廳", hours: "登機前", desc: "等待登機的最後悠閒", tag: "咖啡", lat: 33.5850, lng: 130.4514, mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+福岡空港" }
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
            { name: "努努雞", hours: "09:00-21:00", desc: "福岡名產「冷炸雞」", tag: "肉品", lat: 33.5897, lng: 130.4207, image: "images/nunu.png", mapUrl: "https://www.google.com/maps/search/博多駅+努努鶏" },
            { name: "茅乃舍高湯包", hours: "10:00-20:00", desc: "主婦必備，送禮自用兩相宜", tag: "調料", lat: 33.5897, lng: 130.4207, image: "images/kayanoya.png", mapUrl: "https://www.google.com/maps/search/久原本家+茅乃舎+博多駅デイトス店" },
            { name: "管狀明太子", hours: "08:00-21:00", desc: "Fukuya便利包裝，像牙膏擠", tag: "海鮮", lat: 33.5902, lng: 130.4194, image: "images/tube.png", mapUrl: "https://www.google.com/maps/search/味の明太子+ふくや+博多駅" },
            { name: "Press Butter Sand", hours: "08:00-21:00", desc: "博多限定草莓口味", tag: "餅乾", lat: 33.5897, lng: 130.4207, image: "images/butter_sand.png", mapUrl: "https://www.google.com/maps/search/PRESS+BUTTER+SAND+博多駅店" },
            { name: "鶴乃子", hours: "08:00-21:00", desc: "棉花糖外層，黃味餡內餡", tag: "甜點", lat: 33.5897, lng: 130.4207, image: "images/tsurunoko.png", mapUrl: "https://www.google.com/maps/search/石村萬盛堂+博多駅店" },
            { name: "機場限定名產", hours: "06:30-21:00", desc: "各式機場限定伴手禮", tag: "伴手禮", lat: 33.5850, lng: 130.4514, image: "images/icon-192.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=福岡機場+免税店" },
            { name: "博多拉麵滑走路", hours: "10:00-21:00", desc: "機場內集合多家名店的拉麵街", tag: "拉麵", lat: 33.5850, lng: 130.4514, image: "images/博多拉麵滑走路.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=福岡機場+拉麵滑走路" },
            { name: "Royce 九州限定巧克力", hours: "06:30-21:00", desc: "機場限定口味", tag: "甜點", lat: 33.5850, lng: 130.4514, image: "images/icon-192.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=福岡空港" },
            { name: "長崎蛋糕 (福砂屋)", hours: "06:30-21:00", desc: "必買伴手禮", tag: "甜點", lat: 33.5850, lng: 130.4514, image: "images/icon-192.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=福砂屋+福岡空港" },
            { name: "福岡草莓巧克力", hours: "06:30-21:00", desc: "酸甜好滋味", tag: "甜點", lat: 33.5850, lng: 130.4514, image: "images/icon-192.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=福岡空港+ANA+FESTA" }
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
        color: "#2E8B57",
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
