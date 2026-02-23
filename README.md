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

---

## 🚀 最近更新 / Recent Updates (2026.02)

### 🛍️ 購物導覽強化 / Shopping Guide Enhancements
- **Alpen Fukuoka**：加入第一天購物行程，並在購物指南中提升為**獨立主題項目**。
- **Uniqlo & GU**：加入第二天行程，提供**天神旗艦店**的專屬推薦標記。
- **超市清單**：每日新增附近推薦超市推薦（如 Lopia, Sunny, AEON 等）。

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
