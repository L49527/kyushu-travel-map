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
                { name: "博多站 朝食喜水丸", hours: "07:30-22:00", desc: "讓明太子控瘋狂的福岡限定！點選任一朝食定食，即可享受「明太子、辛子高菜、生薑泥」無限量吃到飽。搭配現烤鮮魚與 Q 彈白飯，是福岡最豪邁且最具 CP 值的早餐定食🍚。", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=喜水丸+博多一番街店" },
                { name: "天神 麵包工房", hours: "08:00-20:00", desc: "福岡排隊名店「FullFull」的姊妹店。必點招牌「名物明太子法國麵包」，剛出爐外殼香酥、內部充滿鹹口香潤的明太子醬。那種一口咬下海味爆發的滋味，是博多早晨的香甜節奏麵包🥐。", tag: "麵包", lat: 33.5922, lng: 130.3980, mapUrl: "https://maps.app.goo.gl/wCbnQWMeSwT1oeBm9" },
                { name: "珈琲館 (博多)", hours: "07:30-22:00", desc: "經典且優雅的日式喫茶氛圍。在這個充滿木質香氣的空間，享用厚片黃油吐司與現磨的一杯深焙珈琲。是旅程中想要安靜規劃接下來太宰府行程的最佳中繼站咖啡☕。", tag: "咖啡", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一番街" },
                { name: "西鐵車站 輕食", hours: "07:00-21:00", desc: "趕快轉搭觀光列車旅人號前的便利首選。精選九州產米的現捏「辛子明太子飯糰」或「天婦羅炸蝦御飯糰」。在車內一邊欣賞窗外風景一邊享用這份道地的日式美味輕食🍙。", tag: "輕食", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=西鉄天神駅" },
                { name: "太宰府 暖暮拉麵 (早場)", hours: "10:00-22:00", desc: "曾經榮獲全九州第一名拉麵頭銜的神級店家！細麵條完美鎖住醇郁卻不油膩的豚骨湯頭，搭配店家特製的辛辣紅醬提鮮。在表參道人潮湧現前，先來碗熱騰騰的暖心滋味拉麵🍜。", tag: "拉麵", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/?api=1&query=暖暮+太宰府駅前店" }
            ],
            lunch: [
                { name: "梅枝餅 (多間名店)", hours: "09:00-18:00", desc: "太宰府最具歷史溫度的靈魂甜食！糯米外皮壓印梅花圖案後現烤至微脆，內裹綿密的紅豆內餡。推薦趁熱吃，感受外焦內軟、甜而不膩的經典古都滋味甜點🍡。", tag: "甜點", lat: 33.5205, lng: 130.5345, mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府+梅ヶ枝餅" },
                { name: "一蘭太宰府店 (五角碗)", hours: "09:00-20:00", desc: "全日本唯一的「合格一蘭」！麵條長度是一般的兩倍（象徵長久），碗底是五角形設計（日文諧音「合格」）。在這裡吃拉麵不只是享受美味，更是在為學業與夢想祈福的儀式拉麵🍜。", tag: "拉麵", lat: 33.5208, lng: 130.5348, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+太宰府参道店" },
                { name: "寺子屋本舖 仙貝", hours: "09:30-17:30", desc: "散步表參道的人氣點心。除了酥脆的傳統硬仙貝，更推薦口感軟帶 Q 的「串烤濕仙貝」，搭配七味粉或海苔，在那種似餅又似糕的口感中體驗傳統職人手感小吃🍘。", tag: "小吃", lat: 33.5202, lng: 130.5346, mapUrl: "https://www.google.com/maps/search/?api=1&query=寺子屋本舖+太宰府店" },
                { name: "阿蘇之森 (和風定食)", hours: "11:00-16:00", desc: "在天滿宮旁的寧靜角落，由古宅改建的小餐館。提供精緻的時令野菜定食與手作和菓子。在一片綠意的窗景前，細品太宰府歷史帶來的寧靜與美味定食🍱。", tag: "定食", lat: 33.5215, lng: 130.5358, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇の森+太宰府" },
                { name: "梅園 (和菓子)", hours: "10:00-17:00", desc: "傳承千年的和菓子極致工藝。必點限定款「鬼瓦最中」與「鷽餅」。造型雅緻且口感細膩，搭配一杯抹茶，在舌尖上完成一場穿越時空的古都對話甜點🍵。", tag: "甜點", lat: 33.5200, lng: 130.5350, mapUrl: "https://www.google.com/maps/search/?api=1&query=太宰府+梅園" }
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
            { name: "博物館紀念品店", hours: "09:30-17:00", desc: "九州國博限定文創商品", tag: "紀念品", lat: 33.5165, lng: 130.5405, mapUrl: "https://www.google.com/maps/search/九州国立博物館+ミュージアムショップ" },
            { name: "光明禪寺 朱印所", hours: "09:00-16:00", desc: "收集御朱印", tag: "寺廟", lat: 33.5190, lng: 130.5365, mapUrl: "https://www.google.com/maps/search/光明禅寺" },
            { name: "天神 藥院商店街", hours: "10:00-20:00", desc: "回程順路逛逛", tag: "商店街", lat: 33.5875, lng: 130.3955, mapUrl: "https://www.google.com/maps/search/薬院駅" }
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
        day: 4, date: "6/14(日)", title: "前進別府，動物奇遇", area: "由布院・動物園",
        hotel: "御宿 野乃別府", hotelLat: 33.2795, hotelLng: 131.4985, center: [33.30, 131.40],
        hotelImage: "images/御宿 野乃別府.webp",
        hotelDesc: "【別府站前】全館榻榻米日式溫泉旅館<br>♨️ 頂樓露天風呂「別府八湯」眺望別府灣<br>🍜 免費夜鳴拉麵・泡湯後免費冰棒/乳酸菌飲料<br>👘 館內提供多款花色浴衣體驗<br>🧺 投幣洗衣機・漫畫休息區",
        transport: { drive: "【推薦自駕】福岡→由布院→動物園→別府<br>• 過路費：福岡→由布院約¥2,500-¥3,000<br>• 路線：由布院走縣道11號(Yamanami Hwy)往北約20分<br>• 動物園：可開自家車進野生動物區(免換巴士)", public: "【特急 由布院之森】博多→由布院(2小時¥5190)<br>• 09:17 / 10:11 / 14:38 發車(全車指定席)<br>※ 動物園大眾交通不便，強烈建議租車自駕" },
        timeline: [
            { time: "08:30", act: "出發前往由布院", desc: "建議早點出門，由布院可逛2-3小時" },
            { time: "10:30", act: "由布院散策", desc: "湯之坪街道、Floral Village、金鱗湖" },
            { time: "13:00", act: "由布院午餐", desc: "由布まぶし心（三吃豐後牛）或湯之坪街道小吃" },
            { time: "14:30", act: "九州自然動物公園", desc: "門票¥2600，自駕可直接開車進野生區（免¥1500叢林巴士費）" },
            { time: "17:00", act: "前往別府", desc: "車程約40分鐘，入住御宿 野乃別府溫泉旅館" }
        ],
        spots: [
            { name: "由布院", lat: 33.2667, lng: 131.3667, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院" },
            { name: "金鱗湖", lat: 33.2615, lng: 131.3725, mapUrl: "https://www.google.com/maps/search/?api=1&query=金鱗湖" },
            { name: "九州自然動物公園", lat: 33.3439, lng: 131.4733, mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園アフリカンサファリ" },
            { name: "御宿 野乃別府", lat: 33.2795, lng: 131.4985, mapUrl: "https://www.google.com/maps/search/?api=1&query=御宿野乃別府" }
        ],
        meals: {
            breakfast: [
                { name: "都ホテル博多 朝食", hours: "06:30-10:00", desc: "出發前在飯店享用自助早餐，補充體力再上路。", tag: "飯店", lat: 33.5903, lng: 130.4225, mapUrl: "https://www.google.com/maps/search/?api=1&query=都ホテル博多" },
                { name: "il FORNO del Mignon", hours: "07:00-23:00", desc: "博多車站必買可頌，帶上車當車旅早餐。", tag: "麵包", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=ミニクロワッサン+博多駅" },
                { name: "珈琲館 博多", hours: "07:30-22:00", desc: "出發前來杯深焙咖啡與厚片吐司，沈澱心情。", tag: "咖啡", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=珈琲館+博多駅" },
                { name: "由布院 駅前麵包", hours: "09:00-18:00", desc: "抵達由布院後，在站前麵包店買個鹽可頌或明太子法國麵包。", tag: "麵包", lat: 33.2642, lng: 131.3565, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+パン屋" },
                { name: "超商補給 (車旅)", hours: "24H", desc: "買九州限定飯糰與飲料，在車上欣賞沿途田園風光。", tag: "便利", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+博多駅" }
            ],
            lunch: [
                { name: "由布まぶし 心", hours: "10:30-18:30", desc: "由布院「三吃」傳奇！炭火燒烤豐後牛或地雞鋪在陶罐米飯上。一吃原味、二吃辛香料、三吃高湯泡飯，鍋巴焦香令人難忘。", tag: "定食", igRecommend: true, lat: 33.2628, lng: 131.3552, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布まぶし心+駅前支店" },
                { name: "湯之坪街道 小吃", hours: "10:00-17:00", desc: "邊逛邊吃！豐後牛可樂餅、金賞可樂餅、醬油糰子、Milch布丁。", tag: "小吃", lat: 33.2630, lng: 131.3690, mapUrl: "https://www.google.com/maps/search/?api=1&query=湯の坪街道+由布院" },
                { name: "動物園內餐廳", hours: "11:00-16:00", desc: "雖然一般，但若逛動物園時肚子餓了最方便。", tag: "便利", lat: 33.3439, lng: 131.4733, mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園" },
                { name: "地獄蒸工房 鐵輪", hours: "10:00-19:00", desc: "動物園後前往別府的路上順路體驗。利用地熱蒸熟食材，健康美味。", tag: "體驗", igRecommend: true, lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "東洋軒 炸雞天婦羅", hours: "11:00-21:00", desc: "大分炸雞天創始名店，在別府站附近，check-in前順便吃。", tag: "雞天", lat: 33.2825, lng: 131.4915, mapUrl: "https://www.google.com/maps/search/?api=1&query=とり天発祥の店+東洋軒" }
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
            { name: "動物園限定周邊", hours: "09:30-17:00", desc: "可愛的獅子與長頸鹿娃娃", tag: "紀念品", lat: 33.3439, lng: 131.4733, image: "images/動物園周邊.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園" },
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
            { name: "由布院之森 紀念品", hours: "JR車內", desc: "列車限定商品，錯過就買不到", tag: "限定", lat: 33.2624, lng: 131.3549, image: "images/由布院之森 紀念品.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院駅" }
        ],
        supermarkets: [
            { name: "Tokiwa Industry 鶴見園", hours: "09:00-21:00", desc: "飯店下山步行約10分鐘，建議自駕或搭接駁車", tag: "最近", lat: 33.2950, lng: 131.4780 },
            { name: "Lawson 別府石垣東店", hours: "24H", desc: "最近便利商店，距離飯店步行約 12 分鐘", tag: "便利", lat: 33.2965, lng: 131.4805 }
        ]
    },
    {
        day: 5, plan: "B", date: "6/15(一)", title: "☔ 宙館雨天完整攻略：飯店一日遊", area: "別府・杉乃井",
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
        transport: {
            drive: "今日主打飯店設施，建議直接前往杉乃井飯店。飯店提供免費戶外停車場，佔地廣大。<br>⏰ 接駁車：別府站西口每15分鐘一班，車程10分鐘。",
            public: "【免費接駁車】JR別府站西口→杉乃井飯店（每15分鐘/班，車程10分鐘）<br>🚌 別府龜之井巴士前往飯店：從別府站前搭乘10號巴士（¥200）"
        },
        timeline: [
            { time: "10:00", act: "Check-in 寄放行李", desc: "提前到飯店寄放行李，領取館內設施地圖。先到賣店或大廳休息區規劃今日動線" },
            { time: "10:30", act: "屋上庭園 ソラニワ", desc: "即使雨天也有遮雨步道。大分縣蝶拍照打卡、彈跳床放電、360度眺望別府灣" },
            { time: "11:30", act: "棚湯 露天風呂", desc: "直奔 4,000㎡ 九州最大級五層梯田露天風呂「棚湯」。雨中泡湯別有風情🌧️♨️ 營業至23:00" },
            { time: "13:00", act: "午餐：TERRAZZA 或 シーダパレス", desc: "推薦住客專屬的 TERRAZZA 自助餐，現切牛排與螃蟹吃到飽" },
            { time: "14:30", act: "SUGINOI BOWL & PARK", desc: "保齡球/乒乓球/卡拉OK，8種室內娛樂全制霸🎳🎤🏓" },
            { time: "16:30", act: "宙湯 + Aqua Garden", desc: "回房稍作休息後，上頂樓「宙湯」看雨景泡湯。再到 Aqua Garden 溫水泳池飄浮" },
            { time: "18:30", act: "自助晚餐 + 噴泉秀", desc: "TERRAZZA 或 HOSHI 享用豪華自助餐。飯後到 Aqua Garden 觀賞 20:00 雷射噴泉秀" },
            { time: "21:00", act: "夜間最後入浴", desc: "棚湯/宙湯最後入浴時間 21:30。睡前再泡一回，完美ending♨️" }
        ],
        spots: [
            { name: "杉乃井飯店 宙館", lat: 33.2985, lng: 131.4725, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+宙館" },
            { name: "展望露天風呂 宙湯", lat: 33.2988, lng: 131.4725, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+宙湯" },
            { name: "大展望露天風呂 棚湯", lat: 33.2975, lng: 131.4735, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+棚湯" },
            { name: "Aqua Garden", lat: 33.2978, lng: 131.4728, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+アクアガーデン" },
            { name: "SUGINOI BOWL & PARK", lat: 33.2972, lng: 131.4732, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ボウル" },
            { name: "TERRAZZA 餐廳", lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
            { name: "屋上庭園 ソラニワ", lat: 33.2985, lng: 131.4718, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ソラニワ" }
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
                { name: "TERRAZZA 自助午餐 (宙館)", hours: "11:30-15:00", desc: "【🏆 宙館住客最推】現切牛排、壽司、螃蟹、生魚片吃到飽，含酒精飲料喝到爽。窗邊座位可看別府灣雨景", tag: "飯店", lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "ワールドダイニング シーダパレス", hours: "11:30-15:00", desc: "【本館】世界各國自助料理，中央巨大水族箱超壯觀。適合想吃多樣化的家庭", tag: "飯店", lat: 33.2978, lng: 131.4735, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+シーダパレス" },
                { name: "亜李蘭離宮 (中華)", hours: "11:30-14:30", desc: "飯店內的中華料理專門店，大分縣產食材結合粵菜工藝", tag: "中華", lat: 33.2980, lng: 131.4730 },
                { name: "地獄蒸工坊 鐵輪", hours: "10:00-19:00", desc: "【體驗必選】利用98度溫泉蒸氣自煮蔬菜海鮮，健康美味（需開車前往）", tag: "體驗", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "龜正迴轉壽司", hours: "11:00-21:00", desc: "【排隊名店】別府最强壽司，魚料超大塊新鮮", tag: "壽司", lat: 33.2815, lng: 131.4935, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" }
            ],
            dinner: [
                { name: "TERRAZZA & DINING SORA 自助晚餐", hours: "17:00-21:30", desc: "【🏆 宙館住客限定旗艦餐廳】現切牛排、螃蟹、握壽司、北京烤鴨等 live cooking station。Mont Blanc 甜點吧＋紅白酒/沙瓦喝到飽，別府最強晚餐體驗", tag: "飯店", igRecommend: true, lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "和ダイニング星 HOSHI", hours: "17:00-21:30", desc: "【星館頂樓】和食自助餐，壽司/生魚片/藁燒鰹魚。星空天花板設計，浪漫氛圍滿點", tag: "飯店", lat: 33.2985, lng: 131.4735, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+HOSHI" },
                { name: "プロント (Pronto)", hours: "07:00-23:00", desc: "館內的咖啡酒吧，晚餐後小酌一杯的好去處。雞尾酒與輕食", tag: "酒吧", lat: 33.2980, lng: 131.4720 },
                { name: "海鮮居酒屋 魚心", hours: "17:00-23:00", desc: "若想外出用餐，在地人推薦的新鮮生魚片與當季海鮮料理（開車5分）", tag: "居酒屋", lat: 33.2755, lng: 131.5055, mapUrl: "https://www.google.com/maps/search/?api=1&query=海鮮いけす料理+魚心" },
                { name: "燒肉 Somuri", hours: "17:00-22:00", desc: "【豐後牛】嚴選A5等級黑毛和牛，別府燒肉首選（開車5分）", tag: "燒肉", lat: 33.2815, lng: 131.4925, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉レストラン+ソムリ" }
            ]
        },
        shopping: [
            { name: "杉乃井 売店「別風ゆのや」", hours: "07:00-22:00", desc: "館內大型土產店，大分縣特產、湯之花、地獄蒸布丁、Kabosu 商品一應俱全", tag: "飯店", lat: 33.2985, lng: 131.4725 },
            { name: "Youme Town", hours: "09:30-21:30", desc: "大型購物中心，開車5分鐘。超市、藥妝、UNIQLO、服飾", tag: "商場", lat: 33.2755, lng: 131.5055 },
            { name: "Tokiwa 百貨", hours: "10:00-19:00", desc: "別府市區老牌百貨公司", tag: "百貨", lat: 33.2790, lng: 131.5010 },
            { name: "別府交通中心", hours: "09:00-18:00", desc: "別府港旁的大型物產館，種類豐富", tag: "物產", lat: 33.3035, lng: 131.4825 }
        ],
        specialties: [
            { name: "別府溫泉粉", hours: "09:00-22:00", desc: "【Myoban湯之花】國家指定無形文化財，在家享受天然溫泉", tag: "用品", lat: 33.3345, lng: 131.4335, image: "images/湯之花.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=みょうばん湯の里" },
            { name: "極樂饅頭", hours: "08:30-18:00", desc: "地獄蒸氣現蒸小饅頭，一口一個停不下來", tag: "甜點", lat: 33.3225, lng: 131.4512, image: "images/極樂饅頭.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=血の池地獄" },
            { name: "地獄蒸布丁 (岡本屋)", hours: "08:30-18:30", desc: "苦甜焦糖與濃郁蛋香，別府最人氣甜點", tag: "甜點", lat: 33.3355, lng: 131.4345, image: "images/地獄蒸布丁 (岡本屋).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
            { name: "Zabon漬 (ざぼん漬)", hours: "09:00-18:00", desc: "別府特產糖漬文旦皮，酸甜古早味", tag: "零食", lat: 33.2798, lng: 131.5005, image: "images/Zabon漬 (ざぼん漬).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+ざぼん漬" },
            { name: "別府竹細工", hours: "09:00-17:00", desc: "傳統工藝編織籃、餐具，質感極佳", tag: "工藝", lat: 33.3055, lng: 131.4855, image: "images/別府竹細工.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府市竹細工傳統產業會館" },
            { name: "大分酸橙 (Kabosu)", hours: "超市皆有", desc: "各式酸橙調味料、果汁、餅乾", tag: "伴手禮", lat: 33.2798, lng: 131.5005, image: "images/大分酸橙 (Kabosu).webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+カボス" },
            { name: "雞肉天婦羅仙貝", hours: "超市皆有", desc: "大分名物炸雞肉天婦羅仙貝，酥脆好吃", tag: "餅乾", lat: 33.2798, lng: 131.5005, image: "images/雞肉天婦羅仙貝.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=別府+とり天せんべい" }
        ],
        supermarkets: [
            { name: "Youme Town 別府", hours: "09:30-21:30", desc: "開車5分鐘的大型購物中心內有超市，補貨方便", tag: "商場", lat: 33.2755, lng: 131.5055 },
            { name: "Tokiwa 鶴見園", hours: "09:00-21:00", desc: "飯店步行10分鐘，在地超市", tag: "補給", lat: 33.2950, lng: 131.4780 }
        ],
        facilities: [
            { icon: "♨️", name: "展望露天風呂「宙湯」", hours: "住客專用（最後入場 ~22:00）", desc: "宙館頂樓無邊際露天風呂，海拔250m 俯瞰別府灣與鶴見岳。室內大浴場亦有整面落地窗景，雨天泡湯別有風情。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+宙湯" },
            { icon: "♨️", name: "大展望露天風呂「棚湯」", hours: "09:00-23:00（最後入場 21:30）", desc: "4,000㎡ 九州最大級五層梯田式露天風呂，可眺望別府灣至四國佐田岬。日歸入場 ¥1,500。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+棚湯" },
            { icon: "🏊", name: "Aqua Garden 溫泉泳池", hours: "11:00-23:00（最後入場 22:00）", desc: "游泳圈OK的溫水泳池，夜間雷射噴泉秀（19:00/20:00/21:00/22:00 各10分鐘）。泳衣可租借 ¥440-¥1,100。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+アクアガーデン" },
            { icon: "🌊", name: "アクアビート (Aqua Beat)", hours: "4/25-9/30 季節限定", desc: "室內水上樂園！人造浪、滑水道、漂漂河，完全不受天氣影響。適合親子同樂。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+アクアビート" },
            { icon: "🎳", name: "SUGINOI BOWL & PARK", hours: "13:00-22:00", desc: "8種室內娛樂：保齡球18球道（¥600-700/局）、卡拉OK 6間包廂（¥3,000-5,000/hr）、飛鏢、撞球、桌球、數位射擊、兒童遊戲區。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ボウル" },
            { icon: "🍽️", name: "TERRAZZA & DINING SORA", hours: "早餐 06:30-10:00 / 午餐 11:30-15:00 / 晚餐 17:00-21:30", desc: "【宙館住客限定旗艦餐廳】西式自助餐。現切牛排、螃蟹、握壽司、北京烤鴨等 live cooking station，Mont Blanc 甜點吧，含紅白酒/沙瓦喝到飽。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
            { icon: "🍽️", name: "和ダイニング星 HOSHI", hours: "晚餐 17:00-21:30", desc: "【星館頂樓】和食自助餐。壽司、生魚片、藁燒鰹魚料理。星空天花板設計，浪漫氛圍滿點。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+HOSHI" },
            { icon: "🌸", name: "屋上庭園「ソラニワ」", hours: "自由散步", desc: "屋上庭園，有遮雨步道。大分縣蝶紀念碑拍照點、兒童彈跳床、360度眺望別府灣。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+ソラニワ" },
            { icon: "🛍️", name: "売店「別風ゆのや」", hours: "07:00-22:00", desc: "館內大型土產店，大分縣特產、湯之花、地獄蒸布丁、Kabosu 商品一應俱全。", mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+売店" },
            { icon: "🏋️", name: "Gold's Gym 健身房", hours: "設施營業時間內", desc: "專業健身器材齊全的健身房，泡湯前後可來運動一下。" }
        ]
    },
    {
        day: 5, plan: "A", date: "6/15(一)", title: "阿蘇火山壯麗絕景 (室外方案)", area: "阿蘇・草千里",
        hotel: "杉乃井飯店 宙館", hotelLat: 33.2985, hotelLng: 131.4725, center: [32.90, 131.10],
        hotelImage: "images/杉乃井飯店 宙館.jpg",
        hotelDesc: "【別府最大溫泉度假村】最新館別「宙館」<br>♨️ 頂樓無邊際展望露天風呂「宙湯」<br>🏊 Aqua Garden 溫泉泳池・夜間雷射水舞秀<br>🍽️ TERRAZZA 豪華自助餐廳 (鰻魚/牛排吃到飽)<br>🚌 別府車站免費接駁巴士・保齡球館",
        transport: { drive: "由布院/別府→阿蘇 (Yamanami Highway)：**免費**。<br>• 飯店提供免費戶外停車場，佔地廣大，建議先在門口下行李。", public: "【觀光巴士】別府出發的一日觀光巴士團<br>• 參加 Klook/KKday 行程最便利<br>• 包含阿蘇火山、草千里、九重夢大吊橋<br>【前往飯店】別府車站西口搭乘免費接駁車 (約15分鐘/班)" },
        timeline: [
            { time: "09:00", act: "前往阿蘇", desc: "經やまなみハイウェイ，沿途絕景" },
            { time: "10:30", act: "大觀峰", desc: "眺望阿蘇五岳絕景，拍照留念" },
            { time: "11:30", act: "阿蘇中岳火山口", desc: "近距離觀看綠色火口湖（火山警戒時改阿蘇火山博物館）" },
            { time: "13:00", act: "草千里之濱 + 午餐", desc: "廣闊草原，背景冒煙火山，附近餐廳午餐" },
            { time: "15:00", act: "九重夢大吊橋", desc: "日本最高行人專用吊橋（門票¥500），眺望九重連山與震動瀑布" },
            { time: "17:00", act: "杉乃井飯店 Check-in", desc: "入住宙館，稍作休息" },
            { time: "18:30", act: "棚湯 + TERRAZZA 晚餐", desc: "泡九州最大級梯田露天風呂後，享用豪華自助晚餐" }
        ],
        spots: [
            { name: "大觀峰", lat: 32.9565, lng: 131.0625, mapUrl: "https://www.google.com/maps/search/?api=1&query=大観峰+阿蘇" },
            { name: "阿蘇中岳火山口", lat: 32.8844, lng: 131.0844, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇中岳火口" },
            { name: "草千里", lat: 32.8833, lng: 131.0667, mapUrl: "https://www.google.com/maps/search/?api=1&query=草千里ヶ浜" },
            { name: "九重夢大吊橋", lat: 33.1555, lng: 131.2055, mapUrl: "https://www.google.com/maps/search/?api=1&query=九重夢大吊橋" },
            { name: "杉乃井飯店", lat: 33.2985, lng: 131.4725, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+宙館" }
        ],
        meals: {
            breakfast: [
                { name: "御宿野乃別府 朝食", hours: "07:00-09:00", desc: "在全館榻榻米的溫泉旅館中醒來，享用精緻和定食早餐，為阿蘇之旅補足體力。", tag: "飯店", lat: 33.2795, lng: 131.4985, mapUrl: "https://www.google.com/maps/search/?api=1&query=御宿野乃別府" },
                { name: "岡本屋 地獄蒸布丁", hours: "08:30-18:30", desc: "明礬溫泉名物，順路經過可買個地獄蒸布丁當餐後甜點。", tag: "甜點", igRecommend: true, lat: 33.3355, lng: 131.4345, mapUrl: "https://www.google.com/maps/search/?api=1&query=岡本屋売店" },
                { name: "道之驛阿蘇 早餐", hours: "09:00-18:00", desc: "抵達阿蘇地區後的補給站。阿蘇新鮮牛奶、小籠包、當地野菜沙拉。", tag: "輕食", lat: 32.9505, lng: 131.0575, mapUrl: "https://www.google.com/maps/search/?api=1&query=道の駅+阿蘇" },
                { name: "Aso Milk Factory", hours: "09:30-18:00", desc: "阿蘇牛乳製作的濃郁奶製品，來一杯新鮮冰淇淋或咖啡拿鐵。", tag: "甜點", igRecommend: true, lat: 32.9515, lng: 131.0585, mapUrl: "https://www.google.com/maps/search/?api=1&query=Aso+Milk+Farm" },
                { name: "超商補給", hours: "24H", desc: "出發前在別府超商買飯糰飲料，路上野餐也很棒。", tag: "便利", lat: 33.2798, lng: 131.5005, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+別府" }
            ],
            lunch: [
                { name: "草千里物產館 レストラン", hours: "10:00-17:00", desc: "位於草千里旁的餐廳，窗邊座位直接面對阿蘇火山與草原景觀。推薦阿蘇赤牛丼與高原野菜沙拉。", tag: "景觀", lat: 32.8833, lng: 131.0667, mapUrl: "https://www.google.com/maps/search/?api=1&query=草千里+レストラン" },
                { name: "いまきん 赤牛丼", hours: "11:00-16:00", desc: "阿蘇名物「赤牛丼」專賣店！炭火燒烤的熊本赤牛，肉質軟嫩多汁，搭配特製醬汁與阿蘇產米飯。排隊名店，建議早點到🥩。", tag: "赤牛", igRecommend: true, lat: 32.9485, lng: 131.0545, mapUrl: "https://www.google.com/maps/search/?api=1&query=いまきん+阿蘇" },
                { name: "阿蘇 田樂之里", hours: "11:00-17:00", desc: "傳統阿蘇鄉土料理，使用在地野菜與炭火燒烤。推薦「高菜飯定食」與「阿蘇豆腐田樂」。在古民家空間中感受阿蘇的樸實滋味。", tag: "鄉土", lat: 32.9505, lng: 131.0575, mapUrl: "https://www.google.com/maps/search/?api=1&query=田楽の里+阿蘇" },
                { name: "阿蘇火山博物館 Cafe", hours: "09:00-17:00", desc: "在博物館內的景觀咖啡廳，可邊欣賞阿蘇火山模型與解說，邊享用輕食。推薦阿蘇牛奶冰淇淋與咖哩飯。", tag: "輕食", lat: 32.8840, lng: 131.0850, mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇火山博物館" },
                { name: "道之驛阿蘇 物產館", hours: "09:00-18:00", desc: "阿蘇地區最大休息站，各式小吃的集散地。熊本拉麵、馬肉可樂餅、阿蘇優格，自由搭配。", tag: "休息站", lat: 32.9505, lng: 131.0575, mapUrl: "https://www.google.com/maps/search/?api=1&query=道の駅+阿蘇" }
            ],
            dinner: [
                { name: "TERRAZZA & DINING SORA 自助晚餐", hours: "17:00-21:30", desc: "【🏆 宙館住客限定旗艦餐廳】現切牛排、螃蟹、握壽司、北京烤鴨等 live cooking station。Mont Blanc 甜點吧＋紅白酒/沙瓦喝到飽，別府最強晚餐體驗", tag: "飯店", igRecommend: true, lat: 33.2982, lng: 131.4722, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+TERRAZZA" },
                { name: "和ダイニング星 HOSHI", hours: "17:00-21:30", desc: "【星館頂樓】和食自助餐，壽司/生魚片/藁燒鰹魚。星空天花板設計，浪漫氛圍滿點", tag: "飯店", lat: 33.2985, lng: 131.4735, mapUrl: "https://www.google.com/maps/search/?api=1&query=杉乃井ホテル+HOSHI" },
                { name: "東洋軒 炸雞天", hours: "11:00-22:00", desc: "別府名物「炸雞天」發源地！雞肉裹天婦羅粉漿炸至酥脆，搭配酸桔醬汁清爽不油膩，開車5分鐘即可抵達", tag: "炸雞", igRecommend: true, lat: 33.2825, lng: 131.5025, mapUrl: "https://www.google.com/maps/search/?api=1&query=レストラン東洋軒" },
                { name: "燒肉 Somuri", hours: "17:00-22:00", desc: "【豐後牛】嚴選A5等級黑毛和牛，別府燒肉首選（開車5分）", tag: "燒肉", lat: 33.2815, lng: 131.4925, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉レストラン+ソムリ" },
                { name: "プロント (Pronto)", hours: "07:00-23:00", desc: "館內的咖啡酒吧，晚餐後小酌一杯。雞尾酒與輕食", tag: "酒吧", lat: 33.2980, lng: 131.4720 }
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
            {
                name: "阿蘇牛奶 / 冰淇淋",
                hours: "09:30-18:00",
                desc: "阿蘇大草原孕育出的極致鮮美。由牧場直送的純淨鮮乳，擁有不可思議的濃厚乳脂與自然甜度。在草千里或大觀峰來一支新鮮現做的冰淇淋，是阿蘇之旅必經的朝聖儀式！",
                tag: "飲品",
                igRecommend: true,
                lat: 32.9515,
                lng: 131.0585,
                image: "images/aso_milk.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇牛奶牧場"
            },
            {
                name: "阿蘇高菜漬",
                hours: "店鋪營業時間",
                desc: "阿蘇著名的土產漬物。選用高海拔寒冷氣候下成長的高菜，經過醃漬發酵後帶有獨特的芥末辛香與酸甜味感。無論是切碎拌入熱騰騰的白飯或是做成飯糰，都極度開胃，是熊本鄉間最道地的靈魂味道。",
                tag: "漬物",
                lat: 32.9505,
                lng: 131.0565,
                image: "images/阿蘇高菜漬.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+高菜漬"
            },
            {
                name: "赤牛味噌",
                hours: "09:00-17:00",
                desc: "將阿蘇引以為傲的「熊本赤牛」精肉切碎，融入濃厚的大麥味噌中熬煮而成。牛油脂的鮮香與味噌的醇厚交織，是拌麵、配飯或是加入湯頭提味的極品調味料，將阿蘇的豪邁風味帶回家。",
                tag: "調料",
                igRecommend: true,
                lat: 32.9495,
                lng: 131.0555,
                image: "images/赤牛味噌.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+赤牛味噌"
            },
            {
                name: "內牧溫泉粉",
                hours: "09:00-18:00",
                desc: "來自阿蘇著名溫泉區「內牧溫泉」的入浴結晶。含有豐富的礦物質成分，包裝上更有可愛的熊本熊官方圖案。讓您在回到台灣後，依然能在家中白濁的暖湯中，重溫阿蘇的懷抱。",
                tag: "用品",
                lat: 32.9655,
                lng: 131.0255,
                image: "images/熊本熊周邊.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=内牧温泉"
            }
        ],
        supermarkets: [
            { name: "Tokiwa Industry 鶴見園", hours: "09:00-21:00", desc: "飯店下山步行約10分鐘，建議自駕或搭接駁車", tag: "最近", lat: 33.2950, lng: 131.4780 },
            { name: "Lawson 別府石垣東店", hours: "24H", desc: "最近便利商店，距離飯店步行約 12 分鐘", tag: "便利", lat: 33.2965, lng: 131.4805 }
        ]
    },
    {
        day: 6, date: "6/16(二)", title: "地獄巡禮與返回福岡", area: "別府地獄・中洲",
        hotel: "ホテル イル・パラッツォ (Il Palazzo)", hotelLat: 33.5905, hotelLng: 130.4025, center: [33.30, 131.45],
        hotelImage: "images/Il Palazzo.jpg",
        hotelDesc: "【建築大師 Aldo Rossi 設計】日本首間設計旅館<br>🏆 榮獲普立茲克建築獎大師代表作<br>🍸 傳奇地下酒吧 EL DORADO (房客專屬)<br>🚶 步行5分鐘至中洲屋台・春吉橋旁<br>🧺 自助洗衣房・頂級視聽設備",
        transport: { drive: "下午走高速公路返回福岡(約2小時)。<br>• 過路費：約¥3,700 (ETC)<br>• 飯店停車場(每晚¥2,500)或周邊收費停車場。", public: "【特急 音速號 Sonic】別府→博多(2小時¥5500)<br>• 09:53 / 10:53 等每小時2班<br>【前往飯店】地鐵「中洲川端」站步行約7分鐘<br>• 沿著那珂川散步回飯店，欣賞河景" },
        timeline: [
            { time: "09:30", act: "別府地獄巡禮", desc: "套票：成人¥2200/兒童¥1000（海地獄/血池地獄/龍卷地獄等）" },
            { time: "11:00", act: "地獄蒸體驗", desc: "高溫溫泉蒸氣蒸煮蔬菜海鮮，健康美味" },
            { time: "14:00", act: "啟程返回福岡", desc: "走九州自動車道，過路費約¥3700 / 特急音速號¥5500" },
            { time: "15:30", act: "山田SA 休息補給", desc: "福岡門戶休息站，採買九州土產、嚐當地小吃" },
            { time: "17:00", act: "Check-in Il Palazzo", desc: "建築大師 Aldo Rossi 設計旅館，春吉/中洲區" },
            { time: "18:30", act: "中洲河畔散步", desc: "傍晚氣氛極佳，可搭屋形船遊那珂川" }
        ],
        spots: [
            { name: "海地獄", lat: 33.3200, lng: 131.4430, mapUrl: "https://www.google.com/maps/search/?api=1&query=海地獄" },
            { name: "血池地獄", lat: 33.3225, lng: 131.4512, mapUrl: "https://www.google.com/maps/search/?api=1&query=血池地獄" },
            { name: "地獄蒸工房", lat: 33.3195, lng: 131.4425, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
            { name: "山田SA", lat: 33.4515, lng: 130.6825, mapUrl: "https://www.google.com/maps/search/?api=1&query=山田SA" },
            { name: "中洲", lat: 33.5917, lng: 130.4042, mapUrl: "https://www.google.com/maps/search/?api=1&query=中洲" }
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
                desc: "明太子大廠 Fukuya 的革命性發明。將高級明太子去皮後灌入像牙膏般的軟管包裝，只需輕輕一擠就能裝飾在白飯、吐司或沙拉上。完全省下處理明太子外膜的麻煩，保冷攜帶方便，是現代伴手禮的極致便利之作。",
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
            { name: "THE MATCHA TOKYO 福岡空港", hours: "07:00-21:00", desc: "濃醇好喝的抹茶，機場必訪", tag: "抹茶", igRecommend: true, lat: 33.5930, lng: 130.4450, mapUrl: "https://www.google.com/maps/search/?api=1&query=THE+MATCHA+TOKYO+福岡空港" }
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
