# 2026 九州七日深渡探險 | Kyushu Travel Map

這是一個為 2026 年 6 月九州七日遊量身打造的互動式旅遊導覽網頁。整合了動態地圖、每日行程切換、美食特產探索以及詳盡的購物指南。

This is an interactive travel guide web application for a 7-day trip to Kyushu in June 2026. It integrates dynamic mapping, daily itinerary switching, food/specialty exploration, and a detailed shopping guide.

---

## 🌟 主要功能 / Key Features

### 1. 互動式地圖導航 / Interactive Map Navigation
- 使用 **Leaflet.js** 呈現旅行路線。
- 標記每日住宿點、推薦餐廳與購物中心。
- 具備連動功能，點擊清單項目可自動聚焦地圖位置。

### 2. 智慧行程管理 / Smart Itinerary Management
- **交通模式切換**：支援「自駕租車」與「公共交通」模式。
- **方案分支**：在特定天數提供不同方案（如：方案 A 阿蘇火山 vs 方案 B 別府慢遊）。
- **完整時序表**：精確記錄每日活動、飯店資訊與天氣預警。

### 3. 深度購物與美食探索 / Deep Exploration
- **美食分類**：早、午、晚餐推薦，含營業時間與 Google Map 連結。
- **特產推薦**：附帶圖片與描述，輕鬆掌握必買伴手禮。
- **福岡購物完整指南**：專屬 Modal 視窗，收錄 PORTER 包、二手精品及各大品牌資訊。

### 4. PWA 支援 / Progress Web App Support
- 整合 Service Worker 與 Web Manifest，支援離線快取與安裝至主畫面。


## 🚀 最近更新 / Recent Updates (2026.06.06)

### 🎁 補齊福岡機場免稅伴手禮 / Added Missing Fukuoka Airport Duty-Free Souvenirs
- **補齊 9 種免稅伴手禮**：新增影片推薦且地圖中缺少的 Butter Butler、honey chocolate sand、花福堂、Amanberry、Mount Baum、Pista & Tokyo、KYOTO MILK MEISTER、NY perfect cheese、Tokyo Tulip Rose 到第七天（Day 7）的特產清單。
- **更新現有特產描述**：更新「管狀明太子」加上 Yamaya 軟管與美乃滋介紹；更新 Day 1 的「茅乃舍高湯包」加上影片推薦的茶碗蒸與即食湯塊。
- **圖片路徑更新與檔案搬移**：已將使用者提供的 9 張桌面圖片複製並重新命名移入專案 `images/` 資料夾下，並在代碼中完成了路徑及副檔名的關聯配置：
  1. Butter Butler: `images/butter_butler.avif`
  2. honey chocolate sand: `images/honey_chocolate.jpeg`
  3. 花福堂: `images/hafukudo_millefeuille.png`
  4. Amanberry: `images/amanberry.webp`
  5. Mount Baum: `images/mount_baum.webp`
  6. Pista & Tokyo: `images/pista_tokyo.webp`
  7. KYOTO MILK MEISTER: `images/kyoto_milk_meister.avif`
  8. NY perfect cheese: `images/ny_perfect_cheese.webp`
  9. Tokyo Tulip Rose: `images/tulip_rose.jpg`
- **清理未使用圖片**：經程式碼掃描，刪除了 `images/` 資料夾下 18 張未被任何頁面或代碼引用的冗餘/重複圖片檔案，維持專案資源乾淨。
- *Added 9 Missing Souvenirs: Added missing items from the Instagram video to Day 7 specialties.*
- *Updated Descriptions: Updated descriptions of Tube Mentaiko (added Yamaya tube/mayo) and Kayanoya soup stock (added chawanmushi/instant soup).*
- *Images Moved & Configured: Successfully copied and renamed user's 9 Desktop images to the `images/` directory and configured code associations with their correct extensions.*
- *Unused Images Cleanup: Scanned and deleted 18 unused/duplicate image files in the `images/` folder to keep project assets clean.*

---

## 🚀 最近更新 / Recent Updates (2026.06.05)

### 🍡 新增美食與特產景點 / Added Gourmet & Specialty Spot
- **新增 Imonne Hakata (いもんね)**：將位於博多車站 KITTE 百貨 1F 的人氣「現包麻糬冰淇淋」甜點店新增至 Day 1（6/11）的 `meals.lunch` 與 `specialties` 清單。
- **AI 圖片生成與整合 / AI Image Generation & Integration**：使用 `generate_image` 工具生成該店現包麻糬冰淇淋的精美示意圖，存放於 `images/imonne_hakata.png`。
- *Added Imonne Hakata (いもんね): Added the popular "freshly wrapped mochi ice cream" dessert shop on the 1st floor of KITTE Hakata to Day 1 (6/11) meals.lunch and specialties lists.*
- *AI Image Generation & Integration: Generated a premium mockup image of the mochi ice cream using `generate_image` and saved it to `images/imonne_hakata.png`.*

---

## 🚀 歷史更新 / Update History (2026.05.31)

### 🐛 Bug 修復與功能補齊 / Bug Fixes & Feature Completion
- **修復 Floating Coupon Button / Fixed Coupon FAB**：補上遺失的 `#coupon-btn` 懸浮按鈕，原有 JS 功能正常運作。
- **啟用 Hero Weather Widget / Enabled Hero Weather Widget**：將 CSS 已存在的天氣小部件渲染至首頁，顯示 7 天預報卡片。
- **修正全域變數與初始狀態 / Fixed Globals & Initial State**：補上 `supermarketMarkers` 的 `let` 宣告與 `state.plan` 初始值。
- **新增圖片載入錯誤處理 / Added Image Error Fallback**：飯店圖片載入失敗時隱藏，避免破圖。
- **天氣 API 失敗提示 / Weather API Error Notification**：Open-Meteo 失敗時在使用者介面顯示提示。

### ☔ 6/15 雨天宙館行程 / Rainy Day Sora-kan Itinerary
- **方案 B 全面改寫 / Plan B Rewrite**：針對 6/15 下雨天，將方案 B 重新設計為「宙館雨天完整攻略」，包含館內 10 項設施介紹、時間軸、美食推薦與地圖景點。
- **天氣資料更新**：6/15 天氣改為 🌧️ 70%，裝備建議新增泳衣提醒。
- **照片放大修正**：移除 hover 縮放效果，改用 `object-fit: contain` 避免裁切變形。
- **設施介紹展開/收起**：飯店描述改為精簡版，點擊「📄 查看完整介紹」展開詳細設施說明。
- **另開視窗連結**：時間軸與設施卡片加入 `🔗 Google Maps` 按鈕，可直接開啟地圖。

---

## 🚀 歷史更新 / Update History (2026.05.30)

### 🛠️ 核心功能修復與 PWA 體驗改善 / Core Fixes & PWA Enhancements
- **Day 5 方案切換修復 / Day 5 Plan Selection Fix**：新增 `getCurrentDayData()` 函式以正確區分 A/B 方案，解決點擊景點/美食/購物時地圖聚焦至錯誤方案資料的問題。
- **清除重複定義 / Duplicate Clean-up**：移除 `app.js` 中重複定義的 `focusOnSpot` 和 `focusOnSpecialty` 函式。
- **天氣更新範圍釐清 / Weather Range Clarification**：在天氣時間戳記上明確標示「以 16 天內為限」，並在每日天氣列表中依據即時狀態附加 `(即時/Live)` 或 `(預估/Est)` 標籤。
- **Day 4 住宿一致性 / Day 4 Accommodation Alignment**：將 Day 4 的時間軸與景點與飯店住宿統一改為「御宿 野乃別府」，並校正經緯度。
- **移除停業景點 / Closed Spot Removal**：移除了已於 2020 年停業的 `天神CORE` 購物點。
- **PWA 離線快取升級 / PWA Caching Upgrade**：在 `sw.js` 中實作 Stale-While-Revalidate 與 Network-First 快取策略，並預先快取 Leaflet CDN、Google Fonts 及首頁封面與飯店主要圖片，提升離線體驗。
- **連結安全提升 / Link Security**：為所有 `target="_blank"` 的外部連結補上 `rel="noopener noreferrer"`。

---

## 🚀 歷史更新 / Update History (2026.04.20)

### 🌤️ 即時7天天氣預報 / Live 7-Day Forecast Integration
- **Open-Meteo API**：整合完全免費、**無需 API Key** 的 [Open-Meteo](https://open-meteo.com/) 天氣服務。
- **動態取代靜態資料**：載入後以福岡即時7天日預報**覆蓋 `weather` 陣列**，使 Day 1–7 導覽列的天氣圖示與溫度資料成為真實預報值。
- **超出預報範圍自動降級**：出發日若尚未進入 16 天預報範圍，保留靜態歷史估計資料，不顯示錯誤。
- **WMO 天氣代碼**：完整實作 WMO weathercode 對應中文描述與 Emoji 圖示。
- **自動更新裝備/服裝建議**：依即時降雨機率與氣溫動態生成建議文字。
- **錯誤降級**：API 失敗時靜默保留靜態資料，不影響任何功能。

---

## 🚀 更新紀錄 / Update History (2026.02)

### 🛍️ 購物導覽強化 / Shopping Guide Enhancements
- **Alpen Fukuoka**：加入第一天購物行程，並在購物指南中提升為**獨立主題項目**。
- **Uniqlo & GU**：加入第二天行程，提供**天神旗艦店**的專屬推薦標記。
- **超市清單**：每日新增附近推薦超市推薦（如 Lopia, Sunny, AEON 等）。

## 📝 每次修改後提交 Git / Git Workflow

每次修改檔案後，用以下指令記錄版本：

```bash
# 查看哪些檔案被修改
git status

# 查看修改內容
git diff

# 加入所有修改並提交
git add -A
git commit -m "簡短描述這次修改的內容"

# 查看提交歷史
git log --oneline
```

---

## 🛠️ 技術棧 / Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+)
- **Map Engine**: Leaflet.js
- **Typography**: Google Fonts (Noto Sans JP, Noto Serif JP)
- **Icons**: Emoji based rich UI
- **Deployment**: PWA enabled (sw.js, manifest.json)

---

## 📂 專案結構 / Project Structure

- `index.html`: 主頁面結構
- `styles.css`: 現代化、期刊風格的視覺設計
- `data.js`: 核心狀態與 Day 1-2 基本資料
- `data-extended.js`: Day 3-7 的詳細擴充資料
- `app.js`: 地圖邏輯、狀態切換與 Modal 渲染
- `sw.js`: Service Worker 離線支援

---

✦ Enjoy your digital journey through Kyushu! ✦
✦ 祝您在九州的數位旅程中獲得最佳體驗！ ✦
