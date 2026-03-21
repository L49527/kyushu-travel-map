const state = { day: 1, mode: 'drive' };

// ⚠️ TODO: 出發前 7-10 天（約 6/1-6/4）請至 Windy (https://www.windy.com/33.590/130.410) 查看實際預報並更新以下資料
// ⚠️ UPDATE: Check Windy forecast 7-10 days before departure (around 6/1-6/4) and update below
// 目前為六月中旬梅雨季歷年氣候統計預估值 / Current values are historical climate estimates for mid-June rainy season
const weather = [
    { date: '06/11', dow: '四', icon: '🌦️', high: 27, low: 21, rain: 50, gear: '攜帶折傘，梅雨季午後易陣雨', clothing: '短袖+薄長褲，備薄外套(室內冷氣強)' },
    { date: '06/12', dow: '五', icon: '🌧️', high: 26, low: 22, rain: 65, gear: '務必帶大傘/輕便雨衣', clothing: '透氣排汗衣+快乾短褲，鞋子選防水款' },
    { date: '06/13', dow: '六', icon: '☁️', high: 27, low: 21, rain: 40, gear: '備用折傘，太宰府多戶外步行', clothing: '短袖+舒適好走鞋，備帽子遮陽' },
    { date: '06/14', dow: '日', icon: '🌧️', high: 25, low: 19, rain: 60, gear: '大傘+輕便雨衣(由布院山區易起霧)', clothing: '薄長袖+薄外套(由布院比市區涼3-4°C)' },
    { date: '06/15', dow: '一', icon: '🌫️', high: 22, low: 15, rain: 55, gear: '雨衣必備，阿蘇山區霧氣重', clothing: '長袖+防風薄外套(阿蘇山上體感僅15°C)' },
    { date: '06/16', dow: '二', icon: '⛅', high: 27, low: 22, rain: 35, gear: '折傘備用，別府溫泉區濕氣重', clothing: '短袖涼感衣+短褲，帶替換衣物(溫泉用)' },
    { date: '06/17', dow: '三', icon: '🌦️', high: 28, low: 22, rain: 40, gear: '輕便折傘，最終日遮陽防曬', clothing: '輕便夏裝，方便搭機' }
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
                { name: "機上餐點", hours: "航程中", desc: "前往福岡的飛機上享用早餐，為旅程揭開序幕✈️", tag: "旅途", lat: 0, lng: 0, mapUrl: "" }
            ],
            lunch: [
                { name: "博多一雙 拉麵", hours: "11:00-00:00", desc: "福岡最強「卡布奇諾」豚骨拉麵！湯頭佈滿細緻油泡，口感如絲綢般濃郁回甘。必點：特製拉麵＋半熟蛋🍜。", tag: "拉麵", igRecommend: true, lat: 33.5905, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一雙" },
                { name: "吉塚鰻魚屋", hours: "10:30-21:00", desc: "傳承百年的鰻魚藝術。獨家「烤製後蒸煮」工法，讓鰻魚外皮微焦酥脆、肉質極致鬆軟，搭配特製秘方醬汁，是博多頂級美味代表🍱。", tag: "鰻魚", igRecommend: true, lat: 33.5915, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=吉塚うなぎ屋" },
                { name: "稚加榮 (料亭午餐)", hours: "11:30-14:00", desc: "壯觀的室內魚池環繞。超高CP值的限定午餐定食，一次品嚐刺身、天婦羅與新鮮海產，是在高級料亭氛圍下享受的最強午間饗宴🍣。", tag: "料亭", igRecommend: true, lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=稚加榮" },
                { name: "天麩羅 Hirao", hours: "10:30-21:00", desc: "福岡國民美食之首！現炸天婦羅薄脆爽口，搭配必吃的「免費醃漬魷魚」，鮮甜海味讓人白飯一口接一口，是高CP值的必訪地標🍤。", tag: "天婦羅", lat: 33.5839, lng: 130.4566, mapUrl: "https://www.google.com/maps/search/?api=1&query=天麩羅ひらお" },
                { name: "博多鐵鍋餃子", hours: "17:00-23:00", desc: "祇園名物！上桌時還滋滋作響的高熱鐵鍋。一口大小的餃子皮薄底脆，內餡鮮美多汁。必點：鐵鍋餃子配上一杯大杯生啤酒🍻。", tag: "餃子", lat: 33.5888, lng: 130.4155, mapUrl: "https://www.google.com/maps/search/?api=1&query=鉄なべ+祇園店" },
                { name: "Sushi Sakaba Sashisu (KITTE)", hours: "11:00-23:00", desc: "打破傳統的時髦壽司酒吧。招牌「鮪魚鐵火捲」肉量爆炸、油脂豐富。新鮮、平價且氣氛極佳，是博多站內極受年輕人歡迎的排隊店🍣。", tag: "壽司", igRecommend: true, lat: 33.5892, lng: 130.4215, mapUrl: "https://www.google.com/maps/search/?api=1&query=すし酒場+さしす+KITTE博多" },
                { name: "Hakata seafood Uoden", hours: "11:00-22:00", desc: "福岡必拍！衝擊視覺的「明太子玉子燒蓋飯」。金黃歐姆蛋包覆著整支肥美明太子，搭配特製醬汁與魚池海味，口感豐富且話題度滿分🍳。", tag: "海鮮", igRecommend: true, lat: 33.5897, lng: 130.4108, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多魚介+うおでん" },
                { name: "I'm donut ? 福岡天神店", hours: "10:00-19:00", desc: "引起全日排隊狂潮的生甜甜圈。麵體濕潤軟綿且入口即化。推薦：開心果、巧克力口味，每一顆都充滿了手作的靈魂味道🍩。", tag: "甜點", igRecommend: true, threadRecommend: true, lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=I'm+donut+天神" },
                { name: "元祖博多めんたい重", hours: "07:00-22:30", desc: "日本第一家明太子飯專賣店。將一整條昆布醃漬明太子橫躺在海苔飯上，淋上客製辛辣度的「元祖醬汁」，是博多極致奢華的味覺體驗🍚。", tag: "海鮮", igRecommend: true, lat: 33.5905, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=元祖博多めんたい重" },
                { name: "極味や 博多店", hours: "11:00-22:00", desc: "互動式燒烤趣味！將半熟漢堡排切克放在高溫石塊上，自行調整喜愛的熟度。肉汁在石塊上跳動爆發的香氣，每一口都是最完美的火侯🔥。", tag: "燒肉", igRecommend: true, lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=極味や+博多店" }
            ],
            dinner: [
                { name: "大山牛腸鍋 (Oyama)", hours: "11:00-23:00", desc: "博多必吃的靈魂美食！推薦「濃厚味噌」口味，嚴選 Q 彈牛腸搭配大份量韭菜。湯頭越煮越甘甜，最後加入強棒麵（Champon）吸飽湯汁是王道組合🍲。", tag: "鍋物", lat: 33.5905, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋おおやま" },
                { name: "博多華味鳥 (水炊鍋)", hours: "11:30-22:00", desc: "福岡傳統雞肉鍋代名詞。選用自家農場雞肉，乳白色的雞湯清甜不油膩。先喝杯純湯，再品嚐嫩口雞胸塊，健康與美味兼具的質感選擇鍋物🍵。", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多華味鳥" },
                { name: "屋台小金ちゃん", hours: "18:00-00:00", desc: "傳奇屋台！這裡是「炒拉麵」的始祖。在長型烤盤上大火快炒的拉麵，飽含鹹甜醬汁，是博多夜晚最熱血的味覺記憶。必點：炒拉麵、自家製雞肉丸串🍡。", tag: "屋台", lat: 33.5917, lng: 130.4042, mapUrl: "https://www.google.com/maps/search/?api=1&query=小金ちゃん" },
                { name: "燒肉 多牛", hours: "17:30-22:30", desc: "當地老饕才懂的隱藏版名店。提供超高品質、油花分佈如雪花的黑毛和牛。雖然店鋪低調且煙霧繚繞，但那種入口即化的肉感絕對值得您的排隊等待🥩。", tag: "燒肉", lat: 33.5892, lng: 130.4195, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉多牛" },
                { name: "河太郎 (活烏賊)", hours: "11:30-21:00", desc: "極致鮮度的代名詞。在您面前現撈、現切的透明烏賊刺身，口感彈牙帶甜，觸鬚還會動。最後剩餘部分做成酥脆天婦羅「一魚兩吃」，是中洲最奢華的體驗🦑。", tag: "海鮮", lat: 33.5912, lng: 130.4048, mapUrl: "https://www.google.com/maps/search/?api=1&query=河太郎+中洲本店" },
                { name: "Kawaya Gion かわ屋 (祇園店)", hours: "17:00-24:00", desc: "必點招牌「雞皮串」！經過六天重複烤製除油，外皮酥脆如餅乾、內裡充滿醬韻。一個人隨便都能吃掉十串，是福岡串燒界的奇蹟之味🍢。", tag: "串燒", igRecommend: true, lat: 33.5945, lng: 130.4145, mapUrl: "https://www.google.com/maps/search/?api=1&query=かわ屋+祇園店" }
            ]
        },
        shopping: [
            { name: "博多運河城", hours: "10:00-21:00", desc: "大型購物中心，MUJI、Uniqlo", tag: "商場", lat: 33.5897, lng: 130.4108, floorGuide: "https://canalcity.co.jp/zh-tw" },
            { name: "博多站 AMU Plaza", hours: "10:00-21:00", desc: "車站百貨，伴手禮一站購齊", tag: "百貨", lat: 33.5897, lng: 130.4207, floorGuide: "https://www.jrhakatacity.com/floor/" },
            { name: "Don Quijote 中洲店", hours: "24H", desc: "【優惠券】驚安殿堂，深夜購物首選", tag: "免稅", lat: 33.5932, lng: 130.4078, mapUrl: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Nakasu" },
            { name: "Welcia 博多駅前店", hours: "09:00-00:00", desc: "【優惠券】車站步行5分，買藥妝方便", tag: "藥妝", lat: 33.5905, lng: 130.4168, mapUrl: "https://www.google.com/maps/search/?api=1&query=Welcia+Hakata+Ekimae" },
            { name: "Cocokara Fine 博多巴士站店", hours: "10:00-21:00", desc: "【優惠券】巴士總站內，搭車前補貨", tag: "藥妝", lat: 33.5915, lng: 130.4205, floorGuide: "https://www.h-bt.jp/floor/shop51.html", mapUrl: "https://www.google.com/maps/search/?api=1&query=Cocokara+Fine+Hakata+Bus+Terminal" },
            { name: "Sugi 藥局 博多駅東店", hours: "24H", desc: "【優惠券】車站筑紫口，優惠券最高18%", tag: "藥妝", lat: 33.5912, lng: 130.4255, mapUrl: "https://www.google.com/maps/search/?api=1&query=Sugi+Drug+Hakata+Ekihigashi" },
            { name: "博多一番街", hours: "09:00-21:00", desc: "車站地下街，美食與土產天堂", tag: "地下街", lat: 33.5895, lng: 130.4205, floorGuide: "https://hakata-1bangai.com/floorguide/" },
            { name: "博多阪急", hours: "10:00-20:00", desc: "高級百貨，地下熟食區必逛", tag: "百貨", lat: 33.5898, lng: 130.4210, floorGuide: "https://global.hankyu-hanshin-dept.co.jp/zh-CHT/store/hankyuhonten/" },
            { name: "KITTE 博多", hours: "10:00-21:00", desc: "郵局大樓改建，特色商店", tag: "商場", lat: 33.5892, lng: 130.4215, floorGuide: "https://hakata.jp-kitte.jp/shop/floor-top.jsp" },
            { name: "博多Deitos", hours: "08:00-21:00", desc: "車站內伴手禮區，努努雞在此", tag: "車站", lat: 33.5897, lng: 130.4207, floorGuide: "https://www.jrhakatacity.com/floor/" }
        ],
        specialties: [
            { name: "博多通饅頭 (明月堂)", hours: "09:00-21:00", desc: "博多最具代表性甜點，連續金賞", tag: "甜點", igRecommend: true, lat: 33.5895, lng: 130.4205, image: "images/torimon.png", mapUrl: "https://www.google.com/maps/search/?api=1&query=明月堂+JR博多シティ店" },
            { name: "明太子禮盒 (やまや)", hours: "09:00-21:00", desc: "福岡名產熟成明太子，經過168小時熟成，口感圓潤且層次豐富。不管是拌飯或作為下酒菜都非常合適，是博多最具代表性的海鮮伴手禮。", tag: "海鮮", lat: 33.5898, lng: 130.4206, image: "images/明太子禮盒 (やまや).jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=やまや+博多デイトス店" },
            {
                name: "茅乃舍高湯包",
                hours: "10:00-20:00",
                desc: "主理人推薦湯包😍，使用國產食材且不添加化學調味。除了極品高湯（あごだし），還有博多限定口味！煮麵、火鍋或拆開粉末直接拌飯都超鮮甜濃郁🍲。來博多必帶幾包！",
                tag: "調料",
                igRecommend: true,
                lat: 33.5902,
                lng: 130.4207,
                image: "images/kayanoya_real.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=茅乃舎+博多デイトス店"
            },
            { name: "博多織精品", hours: "10:00-20:00", desc: "福岡流傳 770 多年的傳統工藝。其獨特的織紋與強韌質感，被譽為工藝品界的精品。推薦選購零錢包或名片夾，質感卓越且深具文化價值。", tag: "工藝", lat: 33.5897, lng: 130.4207, image: "images/博多織精品.webp", mapUrl: "https://www.google.com/maps/search/?api=1&query=サ努イ織物+博多駅" },
            {
                name: "SUGAR BUTTER TREE 砂糖樹",
                hours: "10:00-20:00",
                desc: "日本超人氣排隊名產！推薦限定草莓口味與季節限定焦糖。餅乾體由七種穀物酥烤而成，夾入濃郁白巧克力內餡，口感層次極佳且不甜膩🤩，是送禮首選！",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5898,
                lng: 130.4210,
                image: "images/sugar butter tree 博多限定.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=シュガーバターの木+博多阪急店"
            },
            {
                name: "島本 明太子/明太子醬",
                hours: "09:00-21:00",
                desc: "以博多傳統味道聞名！特別推薦噴霧型或軟管式明太子醬，沾吐司或調味都超讚✨。鮮味十足且沒有腥味，是在地人也激推的口袋名單，非常有推薦買兩條🙌",
                tag: "海鮮",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/島本明太子.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=島本+博多駅"
            },

            {
                name: "Menbei 明貝 (福太郎)",
                hours: "09:00-20:00",
                desc: "融合明太子與海鮮精華的仙貝。口感極度香脆，微辣的後勁讓人欲罷不能！是福岡伴手禮排行榜的常客，夾帶濃濃的海鮮鹹香，極力推薦！",
                tag: "伴手禮",
                igRecommend: true,
                lat: 33.5897,
                lng: 130.4207,
                image: "images/menbei.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=福太郎+博多デイトス店"
            },
            {
                name: "博多Nakanaka (乾燥明太子)",
                hours: "09:00-20:00",
                desc: "將明太子經過乾燥處理，口感像肉乾一樣富有韌性。濃縮了明太子的全部鮮甜與辛辣，是搭配清酒或啤酒的絕佳下酒菜，適合喜歡濃郁口味的您。",
                tag: "下酒菜",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/nakanaka_real.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=中島商店+博多駅"
            },
            {
                name: "名菓 小雞饅頭 (吉野堂)",
                hours: "09:00-21:00",
                desc: "擁有百年歷史的福岡經典。可愛的小雞造型讓人不捨得吃，外皮薄嫩，內裡包裹著純淨綿密的白豆沙，甜度適中，是下午茶茶點的不二之選。",
                tag: "甜點",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/hiyoko.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=ひよ子本舗吉野堂+博多デイトス店"
            },
            {
                name: "もち吉 博多本店",
                hours: "10:00-19:00",
                desc: "福岡知名的仙貝老舖！推薦必買「餅のおまつり」仙貝。博多本店限定的「焙茶冰棒」濃郁回甘，夏天必嚐。這裡的仙貝採用優質米與純淨水源製作，口感酥脆不油膩，是伴手禮首選。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.594611,
                lng: 130.414378,
                image: "images/もち吉 冰品.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=もち吉+博多本店"
            }
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
                { name: "Blue Bottle 藍瓶咖啡", hours: "08:00-20:00", desc: "隱身於警固神社內的絕美空間。洗鍊的木質色系與現代建築融合。推薦：經典拿鐵與現做格子鬆餅。在早晨的微光中，享受這份神聖且靈動的咖啡時光☕。", tag: "咖啡", lat: 33.5878, lng: 130.3995, mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Bottle+Coffee+Fukuoka+Tenjin" },
                { name: "Rec Coffee (博多店)", hours: "08:00-22:00", desc: "位於丸井百貨高樓層。窗邊座位可俯瞰博多車站川流的人潮。推薦：手工特選濾泡咖啡，搭配季節性甜點。是開啟忙碌行程前，最完美的靈魂補給站☕。", tag: "咖啡", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=REC+COFFEE+博多" },
                { name: "博多一番街 朝食專賣", hours: "07:00-11:00", desc: "提供道地日式飯、魚、味噌湯定食。新鮮烤製的午魚與香 Q 的大分米飯，是在地博多人的早餐首選。簡單卻充滿活力的日式朝食，喚醒您的味蕾🍚。", tag: "定食", lat: 33.5895, lng: 130.4205, mapUrl: "https://www.google.com/maps/search/?api=1&query=博多一番街" },
                { name: "il FORNO del Mignon", hours: "07:00-23:00", desc: "博多車站絕對不能錯過的「可頌傳奇」。黃油香氣瀰漫整個大廳！推薦必買：原味、巧克力與紅薯口味。剛出爐時酥脆且帶甜的滋味，不分男女老幼都愛🥐。", tag: "麵包", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=ミニクロワッサン+博多駅" },
                { name: "天神早餐 (喫茶店)", hours: "08:00-18:00", desc: "西鐵福岡站底下的懷舊天堂。厚實抹醬吐司配上微苦的深焙咖啡，充滿昭和時代的優雅氛圍。推薦给喜愛慢節奏、想感受福岡街頭氣息的旅人喫茶☕。", tag: "喫茶", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=西鉄天神駅" },
                { name: "超商季節飯糰", hours: "24H", desc: "即便在超商也能發現驚喜！尋找九州限定的「高菜」或「明太子」口味飯糰。快速、美味且充滿在地特色，是忙碌自駕或追車時的最佳良伴便利🍙。", tag: "便利", lat: 33.5897, lng: 130.4207, mapUrl: "https://www.google.com/maps/search/?api=1&query=Lawson+博多駅" }
            ],
            lunch: [
                { name: "LaLaport 美食街", hours: "11:00-21:00", desc: "福岡最大規模的美食廣場！集合了「日本金賞炸雞」、「博多名代烏龍麵」等多家九州名店。空間寬敞且選擇多元，是全家人都能找到心目中第一名美味的最佳場所廣場🍲。", tag: "美食街", lat: 33.5665, lng: 130.4283, mapUrl: "https://www.google.com/maps/search/?api=1&query=LaLaport+Fukuoka" },
                { name: "Frisco 炭烤牛肉漢堡", hours: "11:30-20:00", desc: "100%純牛肉只用鹽和胡椒調味！炭火直烤牛肉排＋麵包，香氣超誇張，一口咬下肉汁直接爆開的極致漢堡🍔。", tag: "漢堡", igRecommend: true, threadRecommend: true, lat: 33.5878, lng: 130.3958, mapUrl: "https://www.google.com/maps/search/?api=1&query=Frisco+福岡" },
                { name: "糸島海鮮堂", hours: "11:00-18:30", desc: "若有自駕可順遊糸島！推薦糸島海鮮丼與炸雞丼，海鮮滿溢的超強視覺與味覺雙享受🍣。", tag: "海鮮", igRecommend: true, lat: 33.6265, lng: 130.1985, mapUrl: "https://www.google.com/maps/search/?api=1&query=糸島海鮮堂" },
                { name: "伊都Kingu (草莓)", hours: "10:00-20:00", desc: "草莓控的究極聖地！主打福岡限定「王樣（Amaou）」草莓製作。強烈推薦：草莓銅鑼燒與季節限定草莓凍飲。酸甜平衡的奢華口感，每一口都是粉紅色的幸福滋味🍓。", tag: "甜點", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=伊都きんぐ+天神店" },
                { name: "天神博多華味鳥", hours: "11:30-14:30", desc: "中午也能輕鬆享用傳統水炊鍋！午間限定套餐提供高 CP 值的雞肉定食與精製雞湯塊。口感清爽、膠原蛋白滿滿，深受女性喜愛的精緻午餐選擇鍋物🍵。", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=華味鳥+天神店" },
                { name: "Shin-Shin 拉麵", hours: "11:00-03:00", desc: "天神地區的排隊傳奇。湯頭走的是博多少見的「清爽豚骨」風格，搭配極細麵條，口感輕盈卻香氣十足。必點：煮蛋拉麵，是在地天神上班族的靈魂午餐🍜。", tag: "拉麵", igRecommend: true, lat: 33.5908, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=Shin-Shin+天神本店" },
                { name: "麺屋兼虎", hours: "10:30-23:00", desc: "超越味覺極限的濃厚！招牌「極厚魚介沾麵」湯頭佈滿魚粉香氣，麵條 Q 彈帶勁。那種近乎固態的濃醇滋味，是沾麵愛好者來到福岡必訪的神選之店🍜。", tag: "拉麵", igRecommend: true, threadRecommend: true, lat: 33.5890, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=麺屋兼虎+天神本店" },
                { name: "一蘭天神店 (方型碗)", hours: "10:00-23:00", desc: "全球唯一使用「重箱（方型陶瓷碗）」的一蘭！這款精緻的瓷碗不僅視覺震撼，更能保溫讓湯頭更香醇。太宰府天滿官風格的設計，只有在這裡才能體驗到的儀式感拉麵🍜。", tag: "拉麵", lat: 33.5905, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+天神店" },
                { name: "明太子 やまや總本店 (白金小徑)", hours: "11:00-15:00", desc: "優雅極致的明太子料理。限定供應的「明太子陶鍋飯」現場悶煮，伴隨著米飯焦香與明太子的鮮甜。在充滿和式美學的空間中，體驗明太子的最高規格禮遇🍱。", tag: "博多料理", igRecommend: true, lat: 33.5825, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=やまや總本店+白金小徑" }
            ],
            dinner: [
                { name: "博多水炊鍋 華味鳥", hours: "17:00-23:00", desc: "福岡夜晚最溫暖的雞湯饗宴。依序品嚐清湯、雞肉塊、手工雞肉丸與精華雜炊。全程職人桌邊服務，感受極致的職人精神與雞鮮味之美鍋物🍵。", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=水たき料亭+博多華味鳥+天神店" },
                { name: "藥院燒肉", hours: "16:00-24:00", desc: "推薦品項為特選 7 種部位套餐。肉質鮮美，是夜晚在藥院區大啖和牛的最佳據點🥩。", tag: "燒肉", igRecommend: true, lat: 33.5815, lng: 130.3980, mapUrl: "https://www.google.com/maps/search/?api=1&query=藥院燒肉" },
                { name: "笑樂 牛腸鍋", hours: "11:00-23:00", desc: "在繁華天神享用老舖風味。牛腸處理得乾淨無腥味，入口即化，推薦點選「經典醬油」口味帶出牛油的清甜。這也是福岡上班族下班後聚會的元氣來源鍋物🍲。", tag: "鍋物", lat: 33.5905, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=もつ鍋+笑楽+天神店" },
                { name: "燒肉 孫三郎", hours: "17:00-23:00", desc: "天神鬧區中的精品燒肉！嚴選高品質黑毛和牛，肉質鮮紅油花細密。推薦：和牛六種盛合。在洗鍊的裝潢中享用炭火直燒的高級肉質感🥩。", tag: "燒肉", lat: 33.5895, lng: 130.3965, mapUrl: "https://www.google.com/maps/search/?api=1&query=焼肉+孫三郎+天神店" },
                { name: "稚加榮 (晚餐時段)", hours: "17:00-21:00", desc: "傍晚時分，料亭氛圍更顯靜謐高雅。圍繞巨大魚池享用「現撈活造刺身」與傳統懷石料理。每一道菜都如藝術品般精緻，是博多夜晚最高規格的海鮮款待料亭🍤。", tag: "料亭", lat: 33.5885, lng: 130.3925, mapUrl: "https://www.google.com/maps/search/?api=1&query=稚加榮" },
                { name: "博多 魚米壽司", hours: "11:00-23:00", desc: "充滿現代感的迴轉壽司！使用平板點餐後，由酷炫的「新幹線」迷你列車極速送餐。食材新鮮度超越平價預期，讓晚餐時光充滿驚喜與歡樂的親子首選壽司🍣。", tag: "壽司", lat: 33.5895, lng: 130.4200, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚べい+ヨドバシ博多店" },
                { name: "魚ト肴 いとおか", hours: "17:00-23:00", desc: "博多站周邊最強海鮮居酒屋！必點「3000日圓海之御膳」，內含豪華刺身盛合與鹽烤鮮魚。食材皆由長濱魚市場直送，是熱愛鮮魚的海鮮狂粉絕對要訂位的珍寶海鮮🐟。", tag: "海鮮", igRecommend: true, lat: 33.5890, lng: 130.4030, mapUrl: "https://www.google.com/maps/search/?api=1&query=魚ト肴+いとおか" },
                { name: "こみかん蜜柑 Akasaka Komikan", hours: "17:00-23:00", desc: "赤坂區的超人氣居酒屋！將古民家注入現代設計。推薦：半熟手捏天婦羅、季節炊飯。店內活潑的氛圍與充滿創意的和食，是 IG 上熱搜度極高的時髦聚會點居酒屋🍹。", tag: "居酒屋", igRecommend: true, lat: 33.5890, lng: 130.3930, mapUrl: "https://www.google.com/maps/search/?api=1&query=こみかん+福岡" },
                { name: "炭火焼肉バル AGITO HIRAO", hours: "18:00-00:00", desc: "燒肉界的創意先鋒。必點招牌「厚切牛舌」與極致奢華的「和牛海膽捲」。店內氣氛如酒吧般時髦，不僅是吃燒肉，更是享受一場視覺與味覺結合的肉食派對燒肉🥩。", tag: "燒肉", igRecommend: true, lat: 33.5755, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=炭火焼肉バル+AGITO+HIRAO" },
                { name: "炉端ノいとおかし", hours: "17:00-23:00", desc: "體驗最具溫度的博多爐端燒！職人在您面前大火翻烤肥美海產。推薦：鹽烤鮭魚肚、烤殼付扇貝。看著噴香的油煙升起，搭配日式清酒，這就是福岡最道地的深夜味道爐端燒🔥。", tag: "爐端燒", igRecommend: true, lat: 33.5780, lng: 130.3780, mapUrl: "https://www.google.com/maps/search/?api=1&query=炉端ノいとおかし" }
            ]
        },
        shopping: [
            { name: "Bic Camera 天神2號館", hours: "10:00-21:00", desc: "【優惠券】天神中心區，電器藥妝齊全", tag: "電器", lat: 33.5888, lng: 130.3995, mapUrl: "https://www.google.com/maps/search/?api=1&query=Bic+Camera+Tenjin" },
            { name: "Don Quijote 福岡天神本店", hours: "24H", desc: "【優惠券】整棟多層樓，貨色最齊全", tag: "免稅", lat: 33.5875, lng: 130.3988, mapUrl: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Fukuoka+Tenjin" },
            { name: "Cosmos 藥妝 天神大丸前", hours: "10:00-23:00", desc: "【優惠券】九州必逛，價格極具競爭力", tag: "藥妝", lat: 33.5892, lng: 130.4025, mapUrl: "https://www.google.com/maps/search/?api=1&query=Cosmos+Tenjin+Daimaru" },
            { name: "松本清 天神地下街店", hours: "09:00-22:00", desc: "【優惠券】位於地下街，交通方便", tag: "藥妝", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=Matsumoto+Kiyoshi+Tenjin+Underground" },
            { name: "大丸福岡天神", hours: "10:00-20:00", desc: "【優惠券】高級百貨，地下美食街", tag: "百貨", lat: 33.5898, lng: 130.3982, floorGuide: "https://www.daimaru-fukuoka.jp.t.md.hp.transer.com/floorguide/" },
            { name: "LaLaport 福岡", hours: "10:00-21:00", desc: "【優惠券】內有 Yamada/Alpen/Lopia", tag: "商場", lat: 33.5665, lng: 130.4283, floorGuide: "https://mitsui-shopping-park.com/lalaport/fukuoka/floor/" },
            { name: "Yamada Denki Lalaport", hours: "10:00-21:00", desc: "【優惠券】Lalaport 3F，大型電器店", tag: "電器", lat: 33.5665, lng: 130.4283, floorGuide: "https://mitsui-shopping-park.com/lalaport/fukuoka/floor/" },
            { name: "ALPEN OUTDOORS", hours: "10:00-21:00", desc: "【優惠券】Lalaport 內戶外運動用品大店", tag: "運動", lat: 33.5665, lng: 130.4280, floorGuide: "https://mitsui-shopping-park.com/lalaport/fukuoka/floor/" },
            { name: "Sun Drug 天神西通店", hours: "10:00-23:15", desc: "【優惠券】很多觀光客愛去，營業到很晚", tag: "藥妝", lat: 33.5882, lng: 130.3965, mapUrl: "https://www.google.com/maps/search/?api=1&query=Sun+Drug+Tenjin+Nishidori" },
            { name: "天神地下街", hours: "10:00-20:00", desc: "600米歐風地下街，150家店舖", tag: "地下街", lat: 33.5902, lng: 130.3985, floorGuide: "https://www.tenchika.com/map/" },
            { name: "岩田屋百貨", hours: "10:00-20:00", desc: "老牌百貨，茅乃舍高湯包專櫃", tag: "百貨", lat: 33.5905, lng: 130.3988, floorGuide: "https://www.iwataya-mitsukoshi.mistore.jp.t.kq.hp.transer.com/iwataya/shops.html" },
            { name: "天神PARCO", hours: "10:00-20:30", desc: "【優惠券】B1有Cocokara Fine藥妝", tag: "百貨", lat: 33.5895, lng: 130.3978, floorGuide: "https://fukuoka.parco.jp/floor/" },
            { name: "天神CORE", hours: "10:00-20:00", desc: "女性服飾雜貨為主", tag: "商場", lat: 33.5900, lng: 130.3980 },
            { name: "Solaria Plaza", hours: "10:00-21:00", desc: "與天神站直結，便利購物", tag: "商場", lat: 33.5908, lng: 130.3995, floorGuide: "https://www.solariaplaza.com/floor/" }
        ],
        specialties: [
            {
                name: "鋼彈基地限定模型",
                hours: "10:00-21:00",
                desc: "LaLaport Side-F 獨家販售！包含 1:1 ν鋼彈立像的同款比例模型。特殊的店舖限定配色與精密零件，是鋼彈迷來到博多絕對不能錯過的夢幻收藏。",
                tag: "模型",
                igRecommend: true,
                lat: 33.5665,
                lng: 130.4283,
                image: "images/鋼彈基地限定模型.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Gundam+Side-F+Fukuoka"
            },
            {
                name: "筑紫麻糬 (如水庵)",
                hours: "09:00-21:00",
                desc: "福岡最具代表性的和菓子之一。Q彈的麻糬撒上高級黃豆粉，淋上特製黑糖蜜，口感滑順且豆香四溢。曾多次獲得金賞肯定，是深具禪意的下午茶之選。",
                tag: "甜點",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/筑紫麻糬.webp",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=如水庵+博多駅"
            },
            {
                name: "伊都 King (草莓)",
                hours: "10:00-20:00",
                desc: "草莓迷瘋狂的品牌！專門使用福岡頂級名稱「王樣（あまおう）」草莓。首推其草莓銅鑼燒，飽滿的鮮奶油與一整顆鮮嫩多汁的草莓完美融合，酸甜不膩極度療癒！",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5902,
                lng: 130.3985,
                image: "images/itoking_real.png",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=伊都きんぐ"
            },
            {
                name: "またいちの塩 (自駕推薦)",
                hours: "10:00-17:00",
                desc: "糸島自駕必訪的絕美海景與「原味花鹽布丁」。在海岸邊品嚐純粹的鹽香與焦糖甜相互輝映的當地名物，打卡必備🍮。",
                tag: "甜點",
                igRecommend: true,
                lat: 33.5385,
                lng: 130.1170,
                image: "images/またいちの塩.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=またいちの塩"
            },
            {
                name: "二◯加煎餅 (東雲堂)",
                hours: "09:00-20:00",
                desc: "博多趣味與傳統的結合。煎餅造型源自博多仁和加的幽默面具，口感爽脆並帶有純粹的麵粉與糖香。包裝內常附贈紙面具，深受小孩與長輩喜愛。",
                tag: "伴手禮",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/二◯加煎餅.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=東雲堂+博多駅"
            },
            {
                name: "Tirolian 捲心酥",
                hours: "09:00-20:00",
                desc: "跨世紀的懷舊滋味！酥脆的細長捲心餅乾包裹著輕盈奶油。除了經典香草，博多限定的草莓與八女茶口味更有特色。精美復古的小包裝非常適合與辦公室同事分享。",
                tag: "甜點",
                lat: 33.5897,
                lng: 130.4207,
                image: "images/tirolian_real.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=千鳥屋+博多駅"
            },
            {
                name: "福岡八女茶",
                hours: "09:00-20:00",
                desc: "全日本品質最高的茶葉產地之一。八女茶以其清香幽雅、湯色碧綠與濃郁回甘著稱。無論是玄米茶、煎茶還是抹茶粉，都是來到九州帶回的一抹沁涼綠意。",
                tag: "茶葉",
                lat: 33.5898,
                lng: 130.4210,
                image: "images/福岡八女茶.avif",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=八女茶+福岡"
            }
        ],
        supermarkets: [
            { name: "Reganet Cute 博多巴士總站", hours: "07:00-23:00", desc: "位於B1，距離飯店步行約 3 分鐘", tag: "便利", lat: 33.5915, lng: 130.4205 },
            { name: "Lopia 博多 Yodobashi", hours: "10:00-20:00", desc: "高CP值生鮮超市，距離飯店步行約 2 分鐘", tag: "便宜", lat: 33.5885, lng: 130.4225 },
            { name: "Sunny 博多住吉店", hours: "24H", desc: "24小時營業，品項齊全，步行約 12 分鐘", tag: "24H", lat: 33.5855, lng: 130.4185 }
        ]
    },
];

