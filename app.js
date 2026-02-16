// Main application functions
const allData = data;
let mainMap, localMap;
let currentMealType = 'breakfast';
let currentSection = 'meals'; // 'meals', 'shopping', or 'specialties'
let mealMarkers = [];
let specialtyMarkers = [];
let shoppingMarkers = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
    initMainMap();
    renderDayNav();
    showDay(1);

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.mode = btn.dataset.mode;
            showDay(state.day);
        });
    });
}



function initMainMap() {
    mainMap = L.map('main-map').setView([33.2, 131.0], 8);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO'
    }).addTo(mainMap);

    const colors = ['#B8A060', '#B8A060', '#B8A060', '#B8A060', '#B8A060', '#B8A060', '#B8A060'];
    const route = [[33.585, 130.451], [33.590, 130.411], [33.618, 130.428], [33.520, 130.536], [33.267, 131.367], [33.344, 131.473], [33.285, 131.491], [32.884, 131.084], [33.320, 131.443], [33.592, 130.404], [33.585, 130.451]];

    allData.forEach((d, idx) => {
        const icon = L.divIcon({
            html: `<div style="background:${colors[idx]};border:3px solid white;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:13px;box-shadow:0 3px 12px rgba(0,0,0,0.3)">${d.day}</div>`,
            className: '', iconSize: [30, 30], iconAnchor: [15, 15]
        });
        if (d.spots && d.spots[0]) {
            L.marker([d.spots[0].lat, d.spots[0].lng], { icon }).addTo(mainMap)
                .bindPopup(`<div class="popup-day">Day ${d.day}</div><div class="popup-title">${d.title}</div>`);
        }
    });
    L.polyline(route, { color: '#C9A962', weight: 3, opacity: 0.7, dashArray: '10,10' }).addTo(mainMap);
}

function renderDayNav() {
    const container = document.getElementById('day-nav');
    container.innerHTML = allData.map((d, i) => {
        const w = weather[i];
        return `
            <button class="day-nav-btn ${d.day === 1 ? 'active' : ''}" onclick="showDay(${d.day})">
                <span class="nav-day">Day ${d.day}</span>
                <span class="nav-date">${w.date}</span>
                <span class="nav-icon">${w.icon}</span>
            </button>
        `;
    }).join('');
}

function showDay(dayNum) {
    state.day = dayNum;
    currentMealType = 'breakfast';
    currentSection = 'meals';
    const d = allData.find(x => x.day === dayNum);

    document.querySelectorAll('.day-nav-btn').forEach((btn, i) => btn.classList.toggle('active', i + 1 === dayNum));

    document.getElementById('day-content').innerHTML = renderDayPanel(d);
    setTimeout(() => initLocalMap(d), 100);
}

function renderDayPanel(d) {
    const icon = state.mode === 'drive' ? '🚗' : '🚌';
    const label = state.mode === 'drive' ? '自駕建議' : '公共交通建議';
    const w = weather[d.day - 1];

    return `
        <div class="day-panel active">
            <div class="day-header">
                <h2>Day ${d.day}: ${d.title}</h2>
                <div class="day-info-strip">
                    <div class="info-cell">
                        <span class="info-label">DATE</span>
                        <span class="info-value">📅 ${d.date}</span>
                    </div>
                    <div class="info-cell">
                        <span class="info-label">AREA</span>
                        <span class="info-value">📍 ${d.area}</span>
                    </div>
                    <div class="info-cell">
                        <span class="info-label">WEATHER</span>
                        <span class="info-value">${w.icon} ${w.high}°/${w.low}° 💧${w.rain}%</span>
                    </div>
                    <div class="info-cell">
                        <span class="info-label">☂️ GEAR</span>
                        <span class="info-value">${w.gear}</span>
                    </div>
                    <div class="info-cell">
                        <span class="info-label">👕 OUTFIT</span>
                        <span class="info-value">${w.clothing}</span>
                    </div>
                </div>
            </div>
            
            ${d.transport ? `
            <div class="transport-box">
                <h4>${icon} ${label}</h4>
                <p>${d.transport[state.mode]}</p>
            </div>
            ` : ''}
            
            ${d.hotelImage ? `
            <div class="hotel-showcase">
                <div class="hotel-showcase-info">
                    <span class="hotel-label">🏨 今晚住宿</span>
                    <h3 class="hotel-name">${d.hotel}</h3>
                    <p class="hotel-description">${d.hotelDesc || ''}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.hotel + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}" target="_blank" class="hotel-link">
                        查看地圖位置 →
                    </a>
                </div>
                <div class="hotel-showcase-image">
                    <img src="${d.hotelImage}" alt="${d.hotel}">
                </div>
            </div>
            ` : d.hotel !== '溫暖的家' ? `
            <div class="hotel-simple">
                <span>🏨</span>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.hotel + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}" target="_blank">${d.hotel}</a>
                ${d.hotelDesc ? `<p>${d.hotelDesc}</p>` : ''}
            </div>
            ` : ''}
            
            <div class="map-legend">
                <span class="legend-item"><span class="legend-dot" style="background:#B8A060"></span> 景點</span>
                <span class="legend-item"><span class="legend-dot meal-dot"></span> 餐廳</span>
                <span class="legend-item"><span class="legend-dot" style="background:#B8A060"></span> 購物</span>
                <span class="legend-item"><span class="legend-dot" style="background:#C9A962"></span> 特產</span>
                <span class="legend-item"><span class="legend-dot" style="background:#4CAF50"></span> 超市</span>
                <span class="legend-hint">💡 點擊項目可聚焦地圖</span>
            </div>
            <div id="local-map" class="local-map"></div>
            
            <div class="day-grid">
                <div class="card">
                    <div class="card-title">🗺️ 當日行程</div>
                    <div class="timeline">
                        ${d.timeline.map((t, i) => `
                            <div class="timeline-item" onclick="focusOnSpot(${i})">
                                <span class="time">${t.time}</span>
                                <h4><span class="timeline-num">${i + 1}</span> ${t.act}</h4>
                                <p>${t.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="card">
                    <div class="section-tabs">
                        <button class="section-tab active" onclick="switchSection(this, 'meals')">🍽️ 美食</button>
                        <button class="section-tab" onclick="switchSection(this, 'shopping')">🛒 購物</button>
                        <button class="section-tab" onclick="switchSection(this, 'specialties')">🎁 特產</button>
                        <button class="section-tab" onclick="switchSection(this, 'supermarkets')">🏪 超市</button>
                    </div>
                    
                    <div class="section-content active" id="section-meals">
                        <div class="meal-tabs">
                            <button class="meal-tab active" onclick="switchMeal(this, 'breakfast')">☀️ 早餐</button>
                            <button class="meal-tab" onclick="switchMeal(this, 'lunch')">🍛 午餐</button>
                            <button class="meal-tab" onclick="switchMeal(this, 'dinner')">🌙 晚餐</button>
                        </div>
                        <div class="meal-list active" id="meal-breakfast">${renderMeals(d.meals.breakfast)}</div>
                        <div class="meal-list" id="meal-lunch">${renderMeals(d.meals.lunch)}</div>
                        <div class="meal-list" id="meal-dinner">${renderMeals(d.meals.dinner)}</div>
                    </div>
                    
                    <div class="section-content" id="section-shopping">
                        <div class="shopping-list">${renderShopping(d.shopping)}</div>
                    </div>
                    
                    <div class="section-content" id="section-specialties">
                        <div class="specialty-list">${renderSpecialties(d.specialties)}</div>
                    </div>

                    <div class="section-content" id="section-supermarkets">
                        <div class="specialty-list">${renderSupermarkets(d.supermarkets || [])}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMeals(meals) {
    if (!meals || meals.length === 0) return '<div class="no-data">此時段暫無推薦餐廳</div>';
    return meals.map((m, i) => {
        const igBadge = m.igRecommend ? `<span class="ig-badge">IG推薦</span>` : '';
        return `
        <div class="meal-item" data-index="${i}" onclick="focusOnMeal(${i}, ${m.lat}, ${m.lng})">
            <div class="meal-item-header">
                <a href="${m.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()">
                    <span class="item-num">${i + 1}</span> ${m.name}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <div class="tag-group">
                    ${igBadge}
                    <span class="tag">${m.tag}</span>
                </div>
            </div>
            <div class="hours">🕒 ${m.hours}</div>
            <div class="desc">${m.desc}</div>
        </div>
    `}).join('');
}

function renderShopping(shops) {
    if (!shops || shops.length === 0) return '<div class="no-data">暫無購物資訊</div>';
    return shops.map((s, i) => {
        // Coupon badge detection & matching
        let matchedCouponId = null;
        if (typeof coupons !== 'undefined') {
            const sName = s.name.toLowerCase();
            const found = coupons.find(c =>
                sName.includes(c.name.toLowerCase()) ||
                sName.includes(c.nameEn.toLowerCase()) ||
                (c.keywords && c.keywords.some(k => sName.includes(k)))
            );
            if (found) matchedCouponId = found.id;
        }

        const hasCouponDesc = (s.desc || '').indexOf('優惠') > -1;

        let couponBadge = '';
        if (hasCouponDesc || matchedCouponId) {
            const clickAttr = matchedCouponId ? `onclick="event.stopPropagation(); window.openCouponModal('${matchedCouponId}')"` : '';
            const cursorStyle = matchedCouponId ? 'cursor:pointer;' : '';
            const titleAttr = matchedCouponId ? 'title="點擊查看優惠券"' : '';
            couponBadge = `<span class="coupon-badge" ${clickAttr} ${titleAttr} style="background:#E60012;color:white;padding:2px 6px;border-radius:4px;font-size:0.7rem;margin-left:6px;display:inline-block;${cursorStyle}">優惠券</span>`;
        }

        const displayDesc = s.desc ? s.desc.replace('【優惠券】', '').trim() : '';

        return `
        <div class="shopping-item" data-index="${i}" onclick="focusOnShopping(${i}, ${s.lat}, ${s.lng})">
            <div class="shopping-header">
                <a href="${s.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()">
                    <span class="item-num purple">${i + 1}</span> ${s.name}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <div class="tag-group">
                    ${couponBadge}
                    <span class="tag purple">${s.tag}</span>
                </div>
            </div>
            <div class="hours">🕒 ${s.hours}</div>
            <div class="desc">${displayDesc}</div>
            <div class="links">
                ${s.floorGuide ? `<a href="${s.floorGuide}" target="_blank" class="floor-guide-link">🗺️ 樓層地圖</a>` : ''}
            </div>
        </div>
    `}).join('');
}

function renderSpecialties(specs) {
    if (!specs || specs.length === 0) return '<div class="no-data">暫無特產資訊</div>';
    return specs.map((s, i) => {
        const imageHtml = s.image ? `
            <div class="specialty-image">
                <img src="${s.image}" alt="${s.name}" onerror="this.onerror=null; this.src='https://placehold.co/600x338/B8A060/FFFFFF?text=Specialty'">
            </div>
        ` : '';

        const linkHtml = s.link ? `
            <a href="${s.link}" target="_blank" class="blog-link">
                🔗 閱讀詳細介紹
            </a>
        ` : '';

        const igBadge = s.igRecommend ? `<span class="ig-badge">IG推薦</span>` : '';

        return `
        <div class="specialty-item" data-index="${i}" onclick="focusOnSpecialty(${i}, ${s.lat}, ${s.lng})">
            ${imageHtml}
            <div class="specialty-header">
                <h4><span class="item-num gold">${i + 1}</span> ${s.name}</h4>
                <div class="tag-group">
                    ${igBadge}
                    <span class="tag">${s.tag}</span>
                </div>
            </div>
            <div class="hours">🕒 ${s.hours}</div>
            <p>${s.desc}</p>
            ${linkHtml}
            <a href="${s.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()" class="map-link">📍 Google Map</a>
        </div>
    `}).join('');
}

function renderSupermarkets(supers) {
    if (!supers || supers.length === 0) return '<div class="no-data">附近沒有推薦的超市</div>';
    return supers.map((s, i) => `
        <div class="specialty-item" data-index="${i}" onclick="focusOnSupermarket(${i}, ${s.lat}, ${s.lng})">
            <div class="specialty-header">
                <h4><span class="item-num supermarket-num">${i + 1}</span> ${s.name}</h4>
                <span class="tag supermarket-tag">${s.tag}</span>
            </div>
            <div class="hours">🕒 ${s.hours}</div>
            <p>${s.desc}</p>
            <a href="${s.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()" class="map-link">📍 Google Map</a>
        </div>
    `).join('');
}

function switchSection(btn, section) {
    currentSection = section;
    document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.section-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`section-${section}`).classList.add('active');

    const d = allData.find(x => x.day === state.day);
    updateMapMarkers(d);
}

function switchMeal(btn, type) {
    currentMealType = type;
    btn.parentElement.querySelectorAll('.meal-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.meal-list').forEach(l => l.classList.remove('active'));
    document.getElementById(`meal-${type}`).classList.add('active');

    const d = allData.find(x => x.day === state.day);
    updateMapMarkers(d);
}

function initLocalMap(d) {
    const mapEl = document.getElementById('local-map');
    if (!mapEl) return;
    if (localMap) localMap.remove();
    mealMarkers = { breakfast: [], lunch: [], dinner: [] };
    specialtyMarkers = [];
    shoppingMarkers = [];
    supermarketMarkers = [];

    localMap = L.map('local-map').setView(d.center, 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO'
    }).addTo(localMap);

    // Add spot markers
    if (d.spots) {
        d.spots.forEach((spot, i) => {
            const icon = L.divIcon({
                html: `<div class="spot-marker"><span>${i + 1}</span></div>`,
                className: '', iconSize: [36, 36], iconAnchor: [18, 18]
            });
            L.marker([spot.lat, spot.lng], { icon }).addTo(localMap)
                .bindPopup(`<div class="popup-day">行程 ${i + 1}</div><div class="popup-title">${spot.name}</div>`);
        });
    }

    // Add hotel marker
    if (d.hotelLat && d.hotelLat !== 0) {
        const hotelIcon = L.divIcon({
            html: `<div class="hotel-marker"><span>🏨</span></div>`,
            className: '', iconSize: [32, 32], iconAnchor: [16, 16]
        });
        L.marker([d.hotelLat, d.hotelLng], { icon: hotelIcon }).addTo(localMap)
            .bindPopup(`<div class="popup-day">🏨 今晚住宿</div><div class="popup-title">${d.hotel}</div><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.hotel + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}" target="_blank" style="font-size:11px;color:#E8A598">📍 Google Map</a>`);
    }

    // Add supermarket markers
    if (d.supermarkets) {
        d.supermarkets.forEach((s, i) => {
            if (s.lat && s.lat !== 0) {
                const icon = L.divIcon({
                    html: `<div class="supermarket-marker"><span>${i + 1}</span></div>`,
                    className: '', iconSize: [26, 26], iconAnchor: [13, 13]
                });
                const marker = L.marker([s.lat, s.lng], { icon }).addTo(localMap)
                    .bindPopup(`<div class="popup-day">🏪 超市 ${i + 1}</div><div class="popup-title">${s.name}</div><div style="font-size:11px;color:#666">🕒 ${s.hours}</div>`);
                supermarketMarkers.push(marker);
            }
        });
    }

    // Add meal markers
    if (d.meals) {
        ['breakfast', 'lunch', 'dinner'].forEach(type => {
            if (d.meals[type]) {
                d.meals[type].forEach((m, i) => {
                    if (m.lat && m.lat !== 0) {
                        const icon = L.divIcon({
                            html: `<div class="meal-marker ${type}" style="background:#E67E22;border:2px solid white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:12px;box-shadow:0 2px 5px rgba(0,0,0,0.2)"><span>${i + 1}</span></div>`,
                            className: '', iconSize: [24, 24], iconAnchor: [12, 12]
                        });
                        const marker = L.marker([m.lat, m.lng], { icon })
                            .bindPopup(`<div class="popup-day">🍽️ 美食 ${i + 1}</div><div class="popup-title">${m.name}</div><p>${m.tag}</p>`);
                        mealMarkers[type].push(marker);
                    }
                });
            }
        });
    }

    // Add shopping markers
    if (d.shopping) {
        d.shopping.forEach((s, i) => {
            if (s.lat && s.lat !== 0) {
                const icon = L.divIcon({
                    html: `<div class="shopping-marker" style="background:#9B59B6;border:2px solid white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:12px;box-shadow:0 2px 5px rgba(0,0,0,0.2)"><span>${i + 1}</span></div>`,
                    className: '', iconSize: [24, 24], iconAnchor: [12, 12]
                });
                const marker = L.marker([s.lat, s.lng], { icon })
                    .bindPopup(`<div class="popup-day">🛒 購物 ${i + 1}</div><div class="popup-title">${s.name}</div><p>${s.desc}</p>`);
                shoppingMarkers.push(marker);
            }
        });
    }

    // Add specialty markers
    if (d.specialties) {
        d.specialties.forEach((s, i) => {
            if (s.lat && s.lat !== 0) {
                const icon = L.divIcon({
                    html: `<div class="specialty-marker" style="background:#F1C40F;border:2px solid white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:12px;box-shadow:0 2px 5px rgba(0,0,0,0.2)"><span>${i + 1}</span></div>`,
                    className: '', iconSize: [24, 24], iconAnchor: [12, 12]
                });
                const marker = L.marker([s.lat, s.lng], { icon })
                    .bindPopup(`<div class="popup-day">🎁 特產 ${i + 1}</div><div class="popup-title">${s.name}</div><p>${s.desc}</p>`);
                specialtyMarkers.push(marker);
            }
        });
    }

    updateMapMarkers(allData.find(x => x.day === state.day));
}

function updateMapMarkers(d) {
    Object.values(mealMarkers).flat().forEach(m => m.remove());
    shoppingMarkers.forEach(m => m.remove());
    specialtyMarkers.forEach(m => m.remove());
    supermarketMarkers.forEach(m => m.remove());

    if (currentSection === 'meals') {
        if (mealMarkers[currentMealType]) {
            mealMarkers[currentMealType].forEach(m => m.addTo(localMap));
        }
    } else if (currentSection === 'shopping') {
        shoppingMarkers.forEach(m => m.addTo(localMap));
    } else if (currentSection === 'specialties') {
        specialtyMarkers.forEach(m => m.addTo(localMap));
    } else if (currentSection === 'supermarkets') {
        supermarketMarkers.forEach(m => m.addTo(localMap));
    }
}

function focusOnSpot(index) {
    const d = allData.find(x => x.day === state.day);
    if (!d.spots || !d.spots[index]) return;
    const spot = d.spots[index];
    localMap.setView([spot.lat, spot.lng], 15, { animate: true });
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function focusOnSpecialty(index, lat, lng) {
    if (!localMap || !lat || lat === 0) return;
    document.querySelectorAll('.specialty-item').forEach(el => el.classList.remove('focused'));
    document.querySelector(`.specialty-item[data-index="${index}"]`)?.classList.add('focused');
    localMap.setView([lat, lng], 16, { animate: true });
    if (specialtyMarkers[index]) specialtyMarkers[index].openPopup();
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function focusOnSupermarket(index, lat, lng) {
    localMap.setView([lat, lng], 16, { animate: true });
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    supermarketMarkers[index]?.openPopup();
}

function focusOnMeal(index, lat, lng) {
    if (!localMap || !lat || lat === 0) return;
    document.querySelectorAll('.meal-item').forEach(el => el.classList.remove('focused'));
    document.querySelector(`.meal-item[data-index="${index}"]`)?.classList.add('focused');
    localMap.setView([lat, lng], 16, { animate: true });

    if (mealMarkers[currentMealType] && mealMarkers[currentMealType][index]) {
        mealMarkers[currentMealType][index].openPopup();
    }
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function focusOnShopping(index, lat, lng) {
    if (!localMap || !lat || lat === 0) return;
    document.querySelectorAll('.shopping-item').forEach(el => el.classList.remove('focused'));
    document.querySelector(`.shopping-item[data-index="${index}"]`)?.classList.add('focused');
    localMap.setView([lat, lng], 18, { animate: true });
    if (shoppingMarkers[index]) shoppingMarkers[index].openPopup();
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Floating Nav & Coupon System Logic
document.addEventListener('DOMContentLoaded', () => {
    const floatingNav = document.getElementById('floating-nav');
    const fabTrigger = document.getElementById('fab-trigger');
    const jumpItineraryBtn = document.getElementById('jump-itinerary');
    const jumpExploreBtn = document.getElementById('jump-explore');
    const couponBtn = document.getElementById('coupon-btn');
    const couponModal = document.getElementById('coupon-modal');
    const modalClose = document.querySelector('.modal-close');
    const couponList = document.getElementById('coupon-list');
    const heroSection = document.querySelector('.hero-cover');

    // 1. Floating Nav Visibility
    if (floatingNav && heroSection) {
        const toggleFloatingNav = () => {
            const heroHeight = heroSection.offsetHeight;
            const scrollY = window.scrollY;

            if (scrollY > heroHeight * 0.8) {
                floatingNav.classList.remove('hidden-on-hero');
            } else {
                floatingNav.classList.add('hidden-on-hero');
            }
        };
        window.addEventListener('scroll', toggleFloatingNav, { passive: true });
        toggleFloatingNav();
    }

    // 2. Jump Logic
    if (jumpItineraryBtn) {
        jumpItineraryBtn.addEventListener('click', () => {
            const daysSection = document.querySelector('.days-section');
            if (daysSection) {
                daysSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    if (jumpExploreBtn) {
        jumpExploreBtn.addEventListener('click', () => {
            const tabs = document.querySelector('.section-tabs');
            if (tabs) {
                const card = tabs.closest('.card');
                if (card) {
                    const yOffset = -20;
                    const y = card.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else {
                    tabs.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    // 3. Coupon Modal Logic
    if (!couponBtn || !couponModal || !couponList) return;

    function renderCoupons() {
        if (typeof coupons === 'undefined') return;

        couponList.innerHTML = coupons.map(coupon => `
            <div class="coupon-card" id="coupon-${coupon.id}">
                <div class="coupon-card-header" style="background-color: ${coupon.color}; color: ${coupon.textColor}">
                    <div class="coupon-card-icon">${coupon.icon}</div>
                    <h3>${coupon.name}</h3>
                </div>
                <div class="coupon-card-body">
                    <div class="coupon-discount">${coupon.discount}</div>
                    <div class="coupon-desc">${coupon.desc}</div>
                    <div class="coupon-tips">💡 ${coupon.tips}</div>
                    <a href="${coupon.link}" target="_blank" class="coupon-btn">領取優惠券</a>
                </div>
            </div>
        `).join('');
    }

    window.openCouponModal = function (targetId) {
        if (couponList.children.length === 0) {
            renderCoupons();
        }
        couponModal.style.display = 'block';

        if (targetId) {
            setTimeout(() => {
                const el = document.getElementById(`coupon-${targetId}`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.style.boxShadow = '0 0 0 4px rgba(255, 215, 0, 0.6)';
                    el.style.transform = 'scale(1.02)';
                    el.style.transition = 'all 0.3s';
                    setTimeout(() => {
                        el.style.boxShadow = '';
                        el.style.transform = '';
                    }, 2000);
                }
            }, 100);
        }
    };

    couponBtn.addEventListener('click', () => {
        window.openCouponModal();
    });

    modalClose.addEventListener('click', () => {
        couponModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === couponModal) {
            couponModal.style.display = 'none';
        }
    });

    // --- Floating Navigation (FAB) Toggle Logic ---
    if (fabTrigger && floatingNav) {
        fabTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            floatingNav.classList.toggle('expanded');
        });

        // Close menu when clicking anywhere else
        document.addEventListener('click', () => {
            floatingNav.classList.remove('expanded');
        });

        // Close menu after clicking an option
        floatingNav.querySelectorAll('.float-btn:not(.main-trigger)').forEach(btn => {
            btn.addEventListener('click', () => {
                floatingNav.classList.remove('expanded');
            });
        });
    }
});
