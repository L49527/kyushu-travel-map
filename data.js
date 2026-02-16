const state = { day: 1, mode: 'drive' };

const weather = [
    { date: '06/11', dow: '四', icon: '🌦️', high: 26, low: 21, rain: 40, gear: '建議攜帶折傘', clothing: '短袖+薄休閒褲' },
    { date: '06/12', dow: '五', icon: '🌧️', high: 25, low: 22, rain: 70, gear: '務必帶大傘/雨衣', clothing: '透氣排汗衣物' },
    { date: '06/13', dow: '六', icon: '☁️', high: 27, low: 21, rain: 30, gear: '備用折傘', clothing: '短袖+短褲' },
    { date: '06/14', dow: '日', icon: '🌧️', high: 24, low: 20, rain: 60, gear: '務必帶大傘', clothing: '防潑水外套+薄長褲' },
    { date: '06/15', dow: '一', icon: '🌫️', high: 23, low: 18, rain: 50, gear: '建議帶折傘', clothing: '短袖+薄外套(阿蘇較涼)' },
    { date: '06/16', dow: '二', icon: '⛅', high: 28, low: 22, rain: 20, gear: '遮陽傘/防曬', clothing: '短袖涼感衣' },
    { date: '06/17', dow: '三', icon: '☀️', high: 29, low: 23, rain: 10, gear: '防曬/墨鏡', clothing: '夏日輕便服裝' }
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
                { name: "I'm donut ? 福岡天神店", hours: "10:00-19:00", desc: "引起全日排隊狂潮的生甜甜圈。麵體濕潤軟綿且入口即化。推薦：開心果、巧克力口味，每一顆都充滿了手作的靈魂味道🍩。", tag: "甜點", igRecommend: true, lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=I'm+donut+天神" },
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
                { name: "伊都Kingu (草莓)", hours: "10:00-20:00", desc: "草莓控的究極聖地！主打福岡限定「王樣（Amaou）」草莓製作。強烈推薦：草莓銅鑼燒與季節限定草莓凍飲。酸甜平衡的奢華口感，每一口都是粉紅色的幸福滋味🍓。", tag: "甜點", lat: 33.5902, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=伊都きんぐ+天神店" },
                { name: "天神博多華味鳥", hours: "11:30-14:30", desc: "中午也能輕鬆享用傳統水炊鍋！午間限定套餐提供高 CP 值的雞肉定食與精製雞湯塊。口感清爽、膠原蛋白滿滿，深受女性喜愛的精緻午餐選擇鍋物🍵。", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=華味鳥+天神店" },
                { name: "Shin-Shin 拉麵", hours: "11:00-03:00", desc: "天神地區的排隊傳奇。湯頭走的是博多少見的「清爽豚骨」風格，搭配極細麵條，口感輕盈卻香氣十足。必點：煮蛋拉麵，是在地天神上班族的靈魂午餐🍜。", tag: "拉麵", igRecommend: true, lat: 33.5908, lng: 130.4015, mapUrl: "https://www.google.com/maps/search/?api=1&query=Shin-Shin+天神本店" },
                { name: "麺屋兼虎", hours: "10:30-23:00", desc: "超越味覺極限的濃厚！招牌「極厚魚介沾麵」湯頭佈滿魚粉香氣，麵條 Q 彈帶勁。那種近乎固態的濃醇滋味，是沾麵愛好者來到福岡必訪的神選之店🍜。", tag: "拉麵", igRecommend: true, lat: 33.5890, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=麺屋兼虎+天神本店" },
                { name: "一蘭天神店 (方型碗)", hours: "10:00-23:00", desc: "全球唯一使用「重箱（方型陶瓷碗）」的一蘭！這款精緻的瓷碗不僅視覺震撼，更能保溫讓湯頭更香醇。太宰府天滿官風格的設計，只有在這裡才能體驗到的儀式感拉麵🍜。", tag: "拉麵", lat: 33.5905, lng: 130.3985, mapUrl: "https://www.google.com/maps/search/?api=1&query=一蘭+天神店" },
                { name: "明太子 やまや總本店 (白金小徑)", hours: "11:00-15:00", desc: "優雅極致的明太子料理。限定供應的「明太子陶鍋飯」現場悶煮，伴隨著米飯焦香與明太子的鮮甜。在充滿和式美學的空間中，體驗明太子的最高規格禮遇🍱。", tag: "博多料理", igRecommend: true, lat: 33.5825, lng: 130.4045, mapUrl: "https://www.google.com/maps/search/?api=1&query=やまや總本店+白金小徑" }
            ],
            dinner: [
                { name: "博多水炊鍋 華味鳥", hours: "17:00-23:00", desc: "福岡夜晚最溫暖的雞湯饗宴。依序品嚐清湯、雞肉塊、手工雞肉丸與精華雜炊。全程職人桌邊服務，感受極致的職人精神與雞鮮味之美鍋物🍵。", tag: "鍋物", lat: 33.5902, lng: 130.4125, mapUrl: "https://www.google.com/maps/search/?api=1&query=水たき料亭+博多華味鳥+天神店" },
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
                image: "images/鋼彈基地限定模型.jpeg",
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
                { name: "天神 燒鳥 信長", hours: "17:00-00:00", desc: "博多夜晚最熱鬧的居酒屋氛圍！傳統博多燒鳥特色：隨桌附贈的「生包菜」與多汁的「豬五花串」。职人在炭火前揮灑汗水烤出的每一棒，都是下酒的最佳神隊友居酒屋🍻。", tag: "居酒屋", lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
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
            { name: "動物園限定周邊", hours: "09:30-17:00", desc: "可愛的獅子與長頸鹿娃娃", tag: "紀念品", lat: 33.3439, lng: 131.4733, image: "images/動物園周邊.jpg", mapUrl: "https://www.google.com/maps/search/?api=1&query=九州自然動物公園" },
            {
                name: "地獄蒸布丁 (岡本屋)",
                hours: "08:30-18:30",
                desc: "別府明礬溫泉的最強名物！利用滾燙的溫泉蒸氣手工製作，布丁本體滑順紮實，配上微苦的焦糖醬，每一口都散發著淡淡的溫泉香，是別府之旅絕對不能漏掉的甜點！",
                tag: "甜點",
                igRecommend: true,
                lat: 33.3355,
                lng: 131.4345,
                image: "images/pudding.png",
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
            { name: "Marumiya Store 別府站店", hours: "09:30-21:00", desc: "位於車站內，最近最方便，距離飯店步行約 2 分鐘", tag: "便利", lat: 33.2798, lng: 131.5005 },
            { name: "Youme Town Beppu", hours: "09:30-21:30", desc: "大型購物中心，步行約 10 分鐘，好逛好買", tag: "大型", lat: 33.2755, lng: 131.5055 },
            { name: "Marushoku 流川通店", hours: "09:00-22:00", desc: "當地連鎖超市，步行約 7 分鐘", tag: "在地", lat: 33.2770, lng: 131.5030 }
        ]
    },
    {
        day: 5, date: "6/15(一)", title: "阿蘇火山壯麗絕景", area: "阿蘇・草千里",
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
                { name: "飯店精緻早餐", hours: "07:00-09:00", desc: "在由布院的晨曦中醒來，享用由在地食材製作的精緻和式或西式早餐料理，為自駕之旅補足體力🌞。", tag: "飯店", lat: 33.2624, lng: 131.3549, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+ホテル+朝食" },
                { name: "由布院 麵包店", hours: "09:00-18:00", desc: "推薦造訪「櫟之木（Quercus）」或由布院站前的特色小店。主打由高原山泉水製作的天然酵母麵包。推薦：天然鹽可頌與自家製果醬吐司，簡單卻充滿大自然香氣麵包🥐。", tag: "麵包", lat: 33.2642, lng: 131.3565, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布院+パン屋" },
                { name: "Snoopy 茶屋", hours: "10:00-17:00", desc: "全球首家 Snoopy 主題茶屋！不僅裝潢可愛，融合大分縣名產的厚鬆餅與特製聖代更是視覺與味覺的雙重饗宴。適合在金鱗湖散步前，來一場療癒心靈的午茶時光甜點🍵。", tag: "主題", lat: 33.2678, lng: 131.3645, mapUrl: "https://www.google.com/maps/search/?api=1&query=SNOOPY茶屋+由布院" },
                { name: "Mila's Gelato", hours: "10:00-17:00", desc: "由布院湯之坪街道上的繽紛風景。嚴選九州直送乳源製作，口感細緻滑順。推薦試試隱藏版的「大分卡伯斯（Kabosu）」酸甜口味，是散步途中的沁涼救星甜點🍦。", tag: "甜點", lat: 33.2655, lng: 131.3620, mapUrl: "https://www.google.com/maps/search/?api=1&query=Mila+Gelato+由布院" },
                { name: "B-Speak 蛋糕捲", hours: "10:00-17:00", desc: "由布院最難買到的「神級」伴手禮！每一卷都注入了師傅的手感靈魂。海綿蛋糕如雲朵般輕盈，鮮奶油清甜不膩。強烈建議一早開門就去排隊，感受這份被譽為「蛋糕捲界藝術品」的滋味甜點🍰。", tag: "甜點", igRecommend: true, lat: 33.2645, lng: 131.3575, mapUrl: "https://www.google.com/maps/search/?api=1&query=B-speak" }
            ],
            lunch: [
                { name: "地獄蒸工房 鐵輪", hours: "10:00-19:00", desc: "別府最原始、最有趣的烹飪體驗！利用攝氏 98 度的溫泉高壓蒸汽，瞬間鎖住食材的甘甜。推薦：海鮮蔬菜拼盤、溫泉蛋。在騰雲駕霧的廚房裡，親手感受大地能量煮出的鮮美滋味體驗🦀。", tag: "體驗", igRecommend: true, lat: 33.3155, lng: 131.4785, mapUrl: "https://www.google.com/maps/search/?api=1&query=地獄蒸し工房+鉄輪" },
                { name: "別府灣SA (B-speak)", hours: "09:00-18:00", desc: "位於高速公路休息站的絕佳眺望地！不僅能再次購入 B-Speak 蛋糕捲，還能一邊俯瞰整片湛藍的別府灣，一邊享用大分縣名產料理，是自駕旅程中最美遼闊的中繼站觀景🍰。", tag: "觀景", lat: 33.3425, lng: 131.5225, mapUrl: "https://www.google.com/maps/search/?api=1&query=別府湾サービスエリア+下り線" },
                { name: "地獄噴泉 溫泉蛋", hours: "08:30-17:00", desc: "地獄巡禮必吃小點！利用海地獄湧出的溫泉水直接煮熟的雞蛋，帶有淡雅的礦物質香氣。剝開微焦的蛋殼，熱騰騰的半熟蛋黃流出，是別府之旅最接地氣的美味小食🥚。", tag: "小吃", lat: 33.3145, lng: 131.4745, mapUrl: "https://www.google.com/maps/search/?api=1&query=海地獄+た職卵" },
                { name: "龜正壽司", hours: "11:00-21:00", desc: "別府最狂、CP 值最高的迴轉壽司店！食材新鮮到像剛從海裡跳上來，魚肉厚度更是誠意滿滿。因為太受在地人歡迎，建議開店前半小時就去取號碼牌，迎接海味狂潮壽司🍣。", tag: "壽司", igRecommend: true, lat: 33.3125, lng: 131.4825, mapUrl: "https://www.google.com/maps/search/?api=1&query=亀正くるくる寿司" },
                { name: "湖月 餃子", hours: "14:00-19:00", desc: "這不是一般餃子，這是別府人的鄉愁！隱身巷弄的老店，專賣酥脆薄皮的一口餃子。外皮煎到金黃如脆餅，焦香味十足。這款傳承數十年的簡單美味，是午後最棒的點心餃子🥟。", tag: "餃子", lat: 33.2845, lng: 131.5035, mapUrl: "https://www.google.com/maps/search/?api=1&query=湖月+別府" }
            ],
            dinner: [
                { name: "東洋軒 炸雞天", hours: "11:00-22:00", desc: "別府名物「炸雞天（Tori-ten）」的發源地！不同於一般唐揚雞，這裡是將雞肉包裹輕盈的天婦羅粉漿炸製，口感更顯細緻嫩口。搭配獨家酸桔醬汁，清爽而不油膩，是來到別府絕對不能錯過的必吃首選炸雞🍗。", tag: "炸雞", igRecommend: true, lat: 33.2825, lng: 131.5025, mapUrl: "https://www.google.com/maps/search/?api=1&query=レストラン東洋軒" },
                { name: "阿蘇 特產商店", hours: "自取", desc: "自駕進入阿蘇山區前的補給站。推薦購買熊本產的「馬肉刺身」即食包或阿蘇牧場直送鮮乳。在寧靜的阿蘇山腳下，簡單組合一份屬於大自然的美味晚餐輕食🥛。", tag: "輕食", lat: 32.9425, lng: 131.1225, mapUrl: "https://www.google.com/maps/search/?api=1&query=道の駅+阿蘇" },
                { name: "由布まぶし 心", hours: "10:30-18:30", desc: "由布院的「三吃」傳奇！將炭火燒烤的豐後牛或地雞平鋪在陶罐米飯上。一吃原味、二吃辛香料、三吃高湯泡飯。那口陶鍋燒出的焦脆鍋巴，是豐饒之鄉獻給旅人最誠摯的禮物定食🥘。", tag: "定食", igRecommend: true, lat: 33.2628, lng: 131.3552, mapUrl: "https://www.google.com/maps/search/?api=1&query=由布まぶし+心+駅前支店" },
                { name: "友永麵包店", hours: "08:30-18:00", desc: "別府最具歷史溫度的麵包房。創業於 1916 年，至今仍維持著手作的樸實感。招牌紅豆麵包與黃油捲，外皮充滿韌性、內餡甜香。這種「昭和時代的味道」，是別府夜晚最暖心的點心麵包🥖。", tag: "麵包", igRecommend: true, lat: 33.2785, lng: 131.5015, mapUrl: "https://www.google.com/maps/search/?api=1&query=友永パン屋" },
                { name: "阿蘇 超市晚餐", hours: "19:00後", desc: "深度旅遊的樂趣！在平價超市挑選熊本產黑毛和牛或清甜的阿蘇野菜。配上一罐當地限定啤酒，在自駕民宿中享受一場屬於自己的阿蘇饗宴超市🍻。", tag: "超市早餐", lat: 32.8825, lng: 131.1025, mapUrl: "https://www.google.com/maps/search/?api=1&query=超市+阿蘇" }
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
                image: "images/ikinari Dango.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇+赤牛味噌"
            },
            {
                name: "阿蘇火山灰御守",
                hours: "店鋪營業時間",
                desc: "利用阿蘇火山噴發後的天然火山灰製作而成的獨特御守。外型粗獷且帶有大地的力量，祈求如火山般屹立不搖的意志與身體健康。是極具地標紀念價值的特色小物。",
                tag: "紀念品",
                lat: 32.8844,
                lng: 131.0844,
                image: "images/阿蘇高菜漬.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=阿蘇火山+賣店"
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
                { name: "信秀本店 (博多燒鳥)", hours: "16:30-24:00", desc: "博多燒鳥界的活字典！在這裡一定要體驗道地博多「捲入生包菜」吃法。職人在炭火前揮灑汗水烤出的每一支肉串，都承載著跨越時空的博多熱情居酒屋🏮。", tag: "居酒屋", lat: 33.5925, lng: 130.4055, mapUrl: "https://www.google.com/maps/search/?api=1&query=天下の焼鳥+信秀本店" },
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
                image: "images/pudding.png",
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
                { name: "Il Palazzo 絕美早餐", hours: "07:00-10:00", desc: "在普立茲克建築大師的作品中醒來。飯店提供融合中西美學的高級自助餐，嚴選福岡在地直送的有機食材。在充滿現代設計感的空間享用早餐，是行程最高規的落幕飯店🍽️。", tag: "飯店", lat: 33.5905, lng: 130.4025, mapUrl: "https://www.google.com/maps/search/?api=1&query=Il+Palazzo" }
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
