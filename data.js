const state = { day: 1, mode: 'drive' };

const weather = [
    { date: '06/11', dow: '四', icon: '🌤️', high: 27, low: 21, rain: 20 },
    { date: '06/12', dow: '五', icon: '⛅', high: 28, low: 22, rain: 30 },
    { date: '06/13', dow: '六', icon: '🌧️', high: 26, low: 21, rain: 60 },
    { date: '06/14', dow: '日', icon: '🌦️', high: 25, low: 20, rain: 50 },
    { date: '06/15', dow: '一', icon: '⛅', high: 26, low: 20, rain: 35 },
    { date: '06/16', dow: '二', icon: '🌤️', high: 28, low: 22, rain: 25 },
    { date: '06/17', dow: '三', icon: '☀️', high: 29, low: 23, rain: 15 }
];

const data = [
    {
        day: 1, date: "6/11(四)", title: "抵達福岡，美食巡禮", area: "博多・中洲",
        hotel: "都ホテル博多", hotelLat: 33.5903, hotelLng: 130.4225, center: [33.59, 130.41],
        hotelImage: "images/都ホテル博多.jpg",
        hotelDesc: "【JR博多站直結】地下通道直達筑紫口，免淋雨<br>🛁 頂樓天然溫泉「都之湯」眺望博多夜景<br>🏊 室內恆溫泳池・健身房<br>🍽️ 3間餐廳酒吧・高樓層景觀房型<br>🧺 投幣洗衣機",
        transport: { drive: "抵達福岡機場後取車，約10分鐘至飯店。飯店付費停車場(每日¥2,000)，市區停車費高，今日建議步行或搭地鐵移動。", public: "【地鐵空港線】福岡機場→博多站(5分¥260)<br>• 運行時間 05:30-00:24<br>• 平日尖峰 3-4分鐘/班，離峰 7-8分鐘/班<br>• 博多站筑紫口出站，地下通道直結飯店" },
        timeline: [
            { time: "14:00", act: "抵達福岡機場", desc: "辦理入境手續，領取行李" },
            { time: "15:30", act: "飯店 Check-in", desc: "都ホテル博多 寄放行李" },
            { time: "16:30", act: "博多運河城", desc: "整點水舞秀，逛街購物" },
            { time: "19:00", act: "中洲屋台街", desc: "體驗福岡獨特路邊攤文化" }
        ],
        spots: [
            { name: "博多運河城", lat: 33.5897, lng: 130.4108 },
            { name: "中洲屋台", lat: 33.5917, lng: 130.4042 },
            { name: "博多站", lat: 33.5897, lng: 130.4207 }
        ],
        meals: {
            breakfast: [
                { name: "機上餐點", hours: "航程中", desc: "前往福岡的飛機上享用早餐", tag: "旅途", lat: 0, lng: 0, mapUrl: "" }
            ],
            lunch: [
                { name: "博多一雙 拉麵", hours: "11:00-00:00", desc: "「拉麵界的卡布奇諾」，濃醇豚骨湯", tag: "拉麵", lat: 33.5905, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一雙" },
                { name: "吉塚鰻魚屋", hours: "10:30-21:00", desc: "百年鰻魚老店，口感酥脆不油膩", tag: "鰻魚", lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=吉塚うなぎ屋" },
                { name: "稚加榮 (料亭午餐)", hours: "11:30-14:00", desc: "壯觀魚池環繞，超值料亭午餐", tag: "料亭", lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=稚加榮" },
                { name: "天麩羅 Hirao", hours: "10:30-21:00", desc: "福岡在地首選，醃漬魷魚吃到飽", tag: "天婦羅", lat: 33.5839, lng: 130.4566, mapUrl: "https://www.google.com/maps/search/?api=1&query=天麩羅ひらお" }, ,
                { name: "博多鐵鍋餃子", hours: "17:00-23:00", desc: "祇園名物，焦脆底部的爆漿餃子", tag: "餃子", lat: 33.5888, lng: 130.4155, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+祇園店" }
            ],
            dinner: [
                { name: "大山牛腸鍋 (Oyama)", hours: "11:00-23:00", desc: "博多必吃牛腸鍋，味噌口味最推", tag: "鍋物", lat: 33.5905, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋おおやま" },
                { name: "博多華味鳥 (水炊鍋)", hours: "11:30-22:00", desc: "清爽雞湯鍋，體驗極致雞鮮味", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多華味鳥" },
                { name: "屋台小金ちゃん", hours: "18:00-00:00", desc: "炒拉麵創始屋台，福岡夜晚的靈魂", tag: "屋台", lat: 33.5917, lng: 130.4042, mapUrl: "https://www.google.com/maps/search/?api=1&query=小金ちゃん" },
                { name: "燒肉 多牛", hours: "17:30-22:30", desc: "低調的高品質和牛燒肉，炭火直燒", tag: "燒肉", lat: 33.5892, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉多牛" },
                { name: "河太郎 (活烏賊)", hours: "11:30-21:00", desc: "新鮮現切透明烏賊，一魚兩吃", tag: "海鮮", lat: 33.5912, lng: 130.4048, mapUrl: "https://www.google.com/maps/search/?api=1&query=河太郎+中洲本店" }
            ]
        },
        shopping: [
            { name: "博多運河城", hours: "10:00-21:00", desc: "大型購物中心，MUJI、Uniqlo", tag: "商場", lat: 33.5897, lng: 130.4108 },
            { name: "博多站 AMU Plaza", hours: "10:00-21:00", desc: "車站百貨，伴手禮一站購齊", tag: "百貨", lat: 33.5897, lng: 130.4207 },
            { name: "博多一番街", hours: "09:00-21:00", desc: "車站地下街，美食與土產天堂", tag: "地下街", lat: 33.5895, lng: 130.4205 },
            { name: "博多阪急", hours: "10:00-20:00", desc: "高級百貨，地下熟食區必逛", tag: "百貨", lat: 33.5898, lng: 130.4210 },
            { name: "KITTE 博多", hours: "10:00-21:00", desc: "郵局大樓改建，特色商店", tag: "商場", lat: 33.5892, lng: 130.4215 },
            { name: "博多Deitos", hours: "08:00-21:00", desc: "車站內伴手禮區，努努雞在此", tag: "車站", lat: 33.5897, lng: 130.4207 }
        ],
        specialties: [
            { name: "博多通饅頭 (明月堂)", hours: "09:00-21:00", desc: "博多最具代表性甜點，連續金賞", tag: "甜點", lat: 33.5895, lng: 130.4205, image: "images/torimon.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=明月堂+JR博多シティ店" },
            { name: "明太子禮盒 (やまや)", hours: "09:00-21:00", desc: "福岡必買特產，送禮首選", tag: "海鮮", lat: 33.5902, lng: 130.4194, image: "images/fukuya.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=やまや+博多店" },
            { name: "茅乃舍高湯包", hours: "10:00-20:00", desc: "主婦最愛，讓料理升級的神奇高湯", tag: "調料", lat: 33.5902, lng: 130.4207, image: "images/kayanoya.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=茅乃舎+博多デイトス店" },
            { name: "博多織精品", hours: "10:00-20:00", desc: "傳統工藝織品，質感極佳", tag: "工藝", lat: 33.5897, lng: 130.4207, image: "images/博多織精品.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=サヌイ織物+博多駅" },

            { name: "Menbei 明貝 (福太郎)", hours: "09:00-20:00", desc: "博多必買明太子仙貝", tag: "伴手禮", lat: 33.5897, lng: 130.4207, image: "images/menbei.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=福太郎+博多デイトス店" },
            { name: "博多Nakanaka (乾燥明太子)", hours: "09:00-20:00", desc: "像肉乾一樣的濃縮明太子下酒菜", tag: "下酒菜", lat: 33.5897, lng: 130.4207, image: "images/nakanaka_real.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=中島商店+博多駅" },
            { name: "名菓 小雞饅頭 (吉野堂)", hours: "09:00-21:00", desc: "百年歴史的可愛小雞造型甜點", tag: "甜點", lat: 33.5897, lng: 130.4207, image: "images/hiyoko.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=ひよ子本舗吉野堂+博多デイトス店" }
        ],
        supermarkets: [
            { name: "Reganet Cute 博多巴士總站", hours: "07:00-23:00", desc: "位於B1，距離飯店步行約 3 分鐘", tag: "便利", lat: 33.5915, lng: 130.4205 },
            { name: "Lopia 博多 Yodobashi", hours: "10:00-20:00", desc: "高CP值生鮮超市，距離飯店步行約 2 分鐘", tag: "便宜", lat: 33.5885, lng: 130.4225 },
            { name: "Sunny 博多住吉店", hours: "24H", desc: "24小時營業，品項齊全，步行約 12 分鐘", tag: "24H", lat: 33.5855, lng: 130.4185 }
        ]
    },
    {
        day: 2, date: "6/12(五)", title: "鋼彈朝聖與購物", area: "Lalaport・天神",
        hotel: "都ホテル博多", hotelLat: 33.5903, hotelLng: 130.4225, center: [33.60, 130.41],
        hotelImage: "images/都ホテル博多.jpg",
        hotelDesc: "【JR博多站直結】地下通道直達筑紫口，免淋雨<br>🛁 頂樓天然溫泉「都之湯」眺望博多夜景<br>🏊 室內恆溫泳池・健身房<br>🍽️ 3間餐廳酒吧・高樓層景觀房型<br>🧺 投幣洗衣機",
        transport: { drive: "今日市區行程不建議開車。Lalaport有3,000台停車場(首2小時免費)，天神百貨停車優惠。", public: "【前往Lalaport】JR鹿兒島本線 博多→竹下(3分¥190)<br>• 運行時間 05:18-00:32<br>• 約10-15分鐘/班，尖峰更密集<br>【前往天神】地鐵空港線 博多→天神(5分¥210)<br>• 3-8分鐘/班，直結天神地下街" },
        timeline: [
            { time: "10:00", act: "Lalaport 福岡", desc: "1:1 ν鋼彈立像，整點聲光演出" },
            { time: "13:00", act: "Lalaport 美食街", desc: "聚集許多九州名店" },
            { time: "15:00", act: "天神地下街", desc: "全長600米歐風地下街" },
            { time: "19:00", act: "天神/大名晚餐", desc: "福岡熱鬧的夜生活" }
        ],
        spots: [
            { name: "LaLaport福岡", lat: 33.5665, lng: 130.4283 },
            { name: "天神地下街", lat: 33.5902, lng: 130.3985 },
            { name: "大名", lat: 33.5885, lng: 130.3925 }
        ],
        meals: {
            breakfast: [
                { name: "Blue Bottle 藍瓶咖啡", hours: "08:00-20:00", desc: "福岡天神店 (警固神社內)，清幽的早晨咖啡", tag: "咖啡", lat: 33.5878, lng: 130.3995, mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Bottle+Coffee+Fukuoka+Tenjin" },
                { name: "Rec Coffee (博多店)", hours: "08:00-22:00", desc: "精品手沖，遠眺博多站街景", tag: "咖啡", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=REC+COFFEE+博多" },
                { name: "博多一番街 朝食專賣", hours: "07:00-11:00", desc: "提供道地日式飯、魚、味噌湯定食", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一番街" },
                { name: "il FORNO del Mignon", hours: "07:00-23:00", desc: "排隊可頌，剛出爐的香甜味", tag: "麵包", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=ミニクロワッサン+博多駅" },
                { name: "天神早餐 (喫茶店)", hours: "08:00-18:00", desc: "復古喫茶店的厚片吐司與咖啡", tag: "喫茶", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=西鉄天神駅" },
                { name: "超商季節飯糰", hours: "24H", desc: "九州限定口味，快速又便利", tag: "便利", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+博多駅" }
            ],
            lunch: [
                { name: "LaLaport 美食街", hours: "11:00-21:00", desc: "集合福岡多家名店的超大美食廣場", tag: "美食街", lat: 33.5665, lng: 130.4283, mapUrl: "https://www.google.com/maps/search/?api=1&query=LaLaport+Fukuoka" }, ,
                { name: "伊都Kingu (草莓)", hours: "10:00-20:00", desc: "福岡產草莓製作的特色點心", tag: "甜點", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=伊都きんぐ+天神店" },
                { name: "天神博多華味鳥", hours: "11:30-14:30", desc: "中午也有划算的水炊雞肉套餐", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=華味鳥+天神店" },
                { name: "Shin-Shin 拉麵", hours: "11:00-03:00", desc: "屋台起家，天神排隊名店拉麵", tag: "拉麵", lat: 33.5908, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=Shin-Shin+天神本店" },
                { name: "一蘭天神店 (方型碗)", hours: "10:00-23:00", desc: "只有特定分店才有的方型陶瓷碗", tag: "拉麵", lat: 33.5905, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+天神店" }
            ],
            dinner: [
                { name: "博多水炊鍋 華味鳥", hours: "17:00-23:00", desc: "精緻雞湯火鍋，建議提前預約", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=水たき料亭+博多華味鳥+天神店" },
                { name: "笑樂 牛腸鍋", hours: "11:00-23:00", desc: "天神站附近，口味道地的老牌牛腸鍋", tag: "鍋物", lat: 33.5905, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋+笑楽+天神店" },
                { name: "燒肉 孫三郎", hours: "17:00-23:00", desc: "高品質黑毛和牛，就在天神中心", tag: "燒肉", lat: 33.5895, lng: 130.3965, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉+孫三郎+天神店" },
                { name: "稚加榮 (晚餐時段)", hours: "17:00-21:00", desc: "晚餐氛圍更顯高尚，海鮮極鮮", tag: "料亭", lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=稚加榮" },
                { name: "博多 魚米壽司", hours: "11:00-23:00", desc: "超受歡迎的迴轉壽司，新幹線送餐", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" }
            ]
        },
        shopping: [
            { name: "LaLaport 福岡", hours: "10:00-21:00", desc: "1:1鋼彈、親子購物、GUNDAM SIDE-F", tag: "商場", lat: 33.5665, lng: 130.4283 },
            { name: "ALPEN OUTDOORS", hours: "10:00-21:00", desc: "Lalaport內戶外運動用品大店", tag: "運動", lat: 33.5665, lng: 130.4280 },
            { name: "天神地下街", hours: "10:00-20:00", desc: "600米歐風地下街，150家店舖", tag: "地下街", lat: 33.5902, lng: 130.3985 },
            { name: "岩田屋百貨", hours: "10:00-20:00", desc: "老牌百貨，茅乃舍高湯包專櫃", tag: "百貨", lat: 33.5905, lng: 130.3988 },
            { name: "天神PARCO", hours: "10:00-20:30", desc: "年輕人潮流品牌聚集", tag: "百貨", lat: 33.5895, lng: 130.3978 },
            { name: "大丸福岡天神", hours: "10:00-20:00", desc: "高級百貨，地下美食街", tag: "百貨", lat: 33.5898, lng: 130.3982 },
            { name: "天神CORE", hours: "10:00-20:00", desc: "女性服飾雜貨為主", tag: "商場", lat: 33.5900, lng: 130.3980 },
            { name: "Solaria Plaza", hours: "10:00-21:00", desc: "與天神站直結，便利購物", tag: "商場", lat: 33.5908, lng: 130.3995 }
        ],
        specialties: [
            { name: "鋼彈基地限定模型", hours: "10:00-21:00", desc: "LaLaport 獨家販售商品", tag: "模型", lat: 33.5665, lng: 130.4283, image: "images/鋼彈基地限定模型.jpeg", mapUrl: "https://www.google.com/maps/search/?api=1&query=Gundam+Side-F+Fukuoka" },
            { name: "筑紫麻糬", hours: "09:00-21:00", desc: "福岡超人氣銅鑼燒風甜點", tag: "甜點", lat: 33.5897, lng: 130.4207, image: "images/筑紫麻糬.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=如水庵+博多駅" },
            { name: "伊都 King", hours: "10:00-20:00", desc: "福岡產草莓銅鑼燒，新鮮草莓內餡", tag: "甜點", lat: 33.5902, lng: 130.3985, image: "images/itoking_real.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=伊都きんぐ" },
            { name: "二◯加煎餅", hours: "09:00-20:00", desc: "博多傳統面具造型煎餅", tag: "伴手禮", lat: 33.5897, lng: 130.4207, image: "images/二◯加煎餅.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=東雲堂+博多駅" },
            { name: "Tirolian 捲心酥", hours: "09:00-20:00", desc: "酥脆捲心餅，輕盈美味", tag: "甜點", lat: 33.5897, lng: 130.4207, image: "images/tirolian_real.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=千鳥屋+博多駅" },
            { name: "福岡八女茶", hours: "09:00-20:00", desc: "福岡代表性茗茶", tag: "茶葉", lat: 33.5898, lng: 130.4210, image: "images/福岡八女茶.avif", mapUrl: "https://www.google.com/maps/search/?api=1&query=八女茶+福岡" }
        ],
        supermarkets: [
            { name: "Reganet Cute 博多巴士總站", hours: "07:00-23:00", desc: "位於B1，距離飯店步行約 3 分鐘", tag: "便利", lat: 33.5915, lng: 130.4205 },
            { name: "Lopia 博多 Yodobashi", hours: "10:00-20:00", desc: "高CP值生鮮超市，距離飯店步行約 2 分鐘", tag: "便宜", lat: 33.5885, lng: 130.4225 },
            { name: "Sunny 博多住吉店", hours: "24H", desc: "24小時營業，品項齊全，步行約 12 分鐘", tag: "24H", lat: 33.5855, lng: 130.4185 }
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
