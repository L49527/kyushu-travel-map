// Main application functions
const allData = [...data, ...dataDay3to7];
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
    renderShoppingGuideModal();
    renderPrepModal();
    updateCountdown();

    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.mode = btn.dataset.mode;
            showDay(state.day);
        });
    });

    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.plan-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.plan = btn.dataset.plan;
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

    // Use unique days for main map markers
    const uniqueDayData = [];
    const seenDaysMap = new Set();
    allData.forEach(d => {
        if (!seenDaysMap.has(d.day)) {
            seenDaysMap.add(d.day);
            uniqueDayData.push(d);
        }
    });

    uniqueDayData.forEach((d, idx) => {
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

    // Get unique days for navigation
    const uniqueDays = [];
    const seenDays = new Set();
    allData.forEach(d => {
        if (!seenDays.has(d.day)) {
            seenDays.add(d.day);
            uniqueDays.push(d);
        }
    });

    container.innerHTML = uniqueDays.map((d, i) => {
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

    // Find all plans for this day
    const dayPlans = allData.filter(x => x.day === dayNum);

    // Check if we need to show the plan toggle
    const planToggle = document.getElementById('plan-toggle');
    if (dayPlans.length > 1) {
        planToggle.style.display = 'flex';
        // Adjust labels based on day if needed, but currently only Day 5 has it
    } else {
        planToggle.style.display = 'none';
        state.plan = 'A'; // Reset to default if no plan selection
    }

    // Filter by plan if multiple exist, otherwise just take the first one
    const d = dayPlans.find(x => x.plan === state.plan) || dayPlans[0];

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
                        ${d.day <= 2 ? `
                        <div class="guide-btn-container">
                            <button class="open-guide-btn" onclick="openShoppingGuide()">✨ 查看福岡購物攻略 Guide</button>
                        </div>
                        ` : ''}
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
    return meals.map((m, i) => `
        <div class="meal-item" data-index="${i}" onclick="focusOnMeal(${i}, ${m.lat}, ${m.lng})">
            <div class="meal-item-header">
                <a href="${m.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()">
                    <span class="item-num">${i + 1}</span> ${m.name}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <span class="tag">${m.tag}</span>
            </div>
            <div class="hours">🕒 ${m.hours}</div>
            <div class="desc">${m.desc}</div>
        </div>
    `).join('');
}

function renderShopping(shops) {
    if (!shops) return '<p>暫無購物資訊</p>';
    return shops.map((s, i) => `
        <div class="shopping-item" data-index="${i}" onclick="focusOnShopping(${i}, ${s.lat}, ${s.lng})">
            <div class="shopping-header">
                <a href="${s.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name + ' ' + (allData.find(x => x.day === state.day).area || 'Japan'))}`}" target="_blank" onclick="event.stopPropagation()">
                    <span class="item-num purple">${i + 1}</span> ${s.name}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <span class="tag purple">${s.tag}</span>
            </div>
            <div class="hours">🕒 ${s.hours}</div>
            <div class="desc">${s.desc}</div>
        </div>
    `).join('');
}

function renderSpecialties(specs) {
    return specs.map((s, i) => {
        // Image Element (if exists)
        const imageHtml = s.image ? `
            <div class="specialty-image">
                <img src="${s.image}" alt="${s.name}" onerror="this.onerror=null; this.src='https://placehold.co/600x338/B8A060/FFFFFF?text=Specialty'">
            </div>
        ` : '';

        // Link Element (if exists)
        const linkHtml = s.link ? `
            <a href="${s.link}" target="_blank" class="blog-link">
                🔗 閱讀詳細介紹
            </a>
        ` : '';

        return `
        <div class="specialty-item" data-index="${i}" onclick="focusOnSpecialty(${i}, ${s.lat}, ${s.lng})">
            ${imageHtml}
            <div class="specialty-header">
                <h4><span class="item-num gold">${i + 1}</span> ${s.name}</h4>
                <span class="tag">${s.tag}</span>
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
    supermarketMarkers = []; // New array

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

    // Initial update of markers visibility
    updateMapMarkers(allData.find(x => x.day === state.day));
}

function updateMapMarkers(d) {
    // Hide all markers logic
    Object.values(mealMarkers).flat().forEach(m => m.remove());
    shoppingMarkers.forEach(m => m.remove());
    specialtyMarkers.forEach(m => m.remove());
    supermarketMarkers.forEach(m => m.remove());

    // Show/Hide markers based on section
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
    localMap.setView([lat, lng], 16, { animate: true });
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    specialtyMarkers[index]?.openPopup();
}

function focusOnSupermarket(index, lat, lng) {
    localMap.setView([lat, lng], 16, { animate: true });
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    supermarketMarkers[index]?.openPopup();
}

function focusOnSpot(index) {
    const d = allData.find(x => x.day === state.day);
    if (!d.spots || !d.spots[index]) return;
    const spot = d.spots[index];
    localMap.setView([spot.lat, spot.lng], 15, { animate: true });
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function focusOnMeal(index, lat, lng) {
    if (!localMap || !lat || lat === 0) return;
    document.querySelectorAll('.meal-item').forEach(el => el.classList.remove('focused'));
    document.querySelector(`.meal-item[data-index="${index}"]`)?.classList.add('focused');
    localMap.setView([lat, lng], 16, { animate: true });

    // Open popup for the specific meal marker based on current type and index
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

function focusOnSpecialty(index, lat, lng) {
    if (!localMap || !lat || lat === 0) return;
    document.querySelectorAll('.specialty-item').forEach(el => el.classList.remove('focused'));
    document.querySelector(`.specialty-item[data-index="${index}"]`)?.classList.add('focused');
    localMap.setView([lat, lng], 16, { animate: true });
    if (specialtyMarkers[index]) specialtyMarkers[index].openPopup();
    document.getElementById('local-map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Shopping Guide Modal Logic
function renderShoppingGuideModal() {
    if (document.getElementById('shopping-guide-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'shopping-guide-modal';
    modal.className = 'shopping-guide-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeShoppingGuide()">&times;</span>
            <div id="guide-modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeShoppingGuide();
    });
}

function openShoppingGuide() {
    const modal = document.getElementById('shopping-guide-modal');
    const body = document.getElementById('guide-modal-body');
    body.innerHTML = `
        <div class="guide-header">
            <h2>🛍️ 福岡購物完整指南</h2>
            <p>Fukuoka Shopping Guide — 品牌・PORTER・二手精品</p>
        </div>

        <div class="guide-section">
            <h3>📍 天神區 (Tenjin) — 品牌最齊全，步行掃貨首選</h3>
            <div class="guide-item">
                <h4>Aesop 天神旗艦店</h4>
                <p>位於大名區獨立店面，裝潢非常美，提供完整產品線與親切諮詢。</p>
            </div>
            <div class="guide-item">
                <h4>Le Labo 福岡大名</h4>
                <p>靠近天神，<strong>九州唯一的直營店</strong>，可享手工標籤定制服務。</p>
            </div>
            <div class="guide-item">
                <h4>岩田屋本店 (Iwataya)</h4>
                <p>精品百貨，SABON・三宅一生 (ISSEY MIYAKE)・川久保玲 (CDG) 一站齊全。新館 6F 設有 PORTER 專櫃。</p>
            </div>
            <div class="guide-item">
                <h4>天神地下街 & 福岡 PARCO</h4>
                <p>地下街東側有 <strong>clear・Sanrio（三麗鷗）</strong>；PARCO 內有 <strong>Lowrys Farm・Disney Store</strong>，4F COLLECTORS 選物店有年輕化 PORTER 款式。</p>
            </div>
            <div class="guide-item">
                <h4>LOFT 天神店</h4>
                <p>包包區有大量 PORTER 基本款與經典尼龍包款，適合順路補貨。</p>
            </div>
            <div class="guide-item" style="background:rgba(184,160,96,0.05);border-left:3px solid #f3245d">
                <h4>🔴 Uniqlo & GU (天神旗艦店)</h4>
                <p><strong>九州最大規格旗艦店</strong>。Uniqlo 與 GU 並設，品項最齊全，還有福岡限定的聯名設計款，免稅服務非常快速。</p>
            </div>
        </div>

        <div class="guide-section">
            <h3>📍 博多區 (Hakata) — 交通樞紐，快速補貨</h3>
            <div class="guide-item">
                <h4>博多 AMU PLAZA</h4>
                <p>Aesop・LUSH・<strong>PORTER STAND</strong>（車站概念店，常有限時快閃合作款）。</p>
            </div>
            <div class="guide-item">
                <h4>博多阪急</h4>
                <p>SABON・Sanrio 專櫃，<strong>8F 有 PORTER 包款與旅行用品區</strong>，退稅手續最方便。</p>
            </div>
            <div class="guide-item">
                <h4>Ball & Chain (COELACANTH)</h4>
                <p>博多站專門店，超人氣刺繡環保購物袋。</p>
            </div>
            <div class="guide-item">
                <h4>川久保玲 (CDG)</h4>
                <p>JR 博多站旁獨立店面，潮流玩家聖地。</p>
            </div>
            <div class="guide-item" style="background:rgba(0,103,177,0.05);border-left:3px solid #0067b1">
                <h4>🟦 Alpen Fukuoka (博多運河城)</h4>
                <p><strong>九州最大級體育用品旗艦店</strong>（北棟 1F-3F）。包含 Alpen Outdoors、Golf 5 及相關運動品牌，是戶外愛好者必逛聖地。</p>
            </div>
            <div class="guide-item" style="background:rgba(184,160,96,0.08);border-left:3px solid #C9A962">
                <h4>🏰 博多運河城 (Canal City)</h4>
                <p>包含 <strong>Disney Store</strong> 與 <strong>Sanrio Gallery</strong>，整點有噴水秀演出，適合家庭漫步購物。</p>
            </div>
        </div>

        <div class="guide-section">
            <h3>🎒 PORTER (吉田包) 專修指南</h3>
            <table class="guide-table">
                <thead>
                    <tr><th>類型</th><th>店名</th><th>地點</th><th>特色</th></tr>
                </thead>
                <tbody>
                    <tr><td>🏆 直營精品</td><td><strong>KURA CHIKA by PORTER</strong></td><td>天神 SOLARIA 3F</td><td>款式最全、旗艦限定款</td></tr>
                    <tr><td>🚉 主題概念</td><td><strong>PORTER STAND</strong></td><td>博多 AMU PLAZA</td><td>車站便利、常有跨界聯名</td></tr>
                    <tr><td>🏬 百貨專櫃</td><td>博多阪急 (8F)</td><td>博多站</td><td>退稅最速、旅行用品多</td></tr>
                    <tr><td>🛒 選物通路</td><td>COLLECTORS</td><td>福岡 PARCO 4F</td><td>年輕化款式</td></tr>
                    <tr><td>📦 基礎款</td><td>LOFT 天神</td><td>天神</td><td>基本款與經典尼龍包</td></tr>
                </tbody>
            </table>
            <div class="guide-item" style="margin-top:12px;background:rgba(155,89,182,0.06)">
                <h4>💜 想省錢？淘二手 PORTER</h4>
                <p>天神的 <strong>2nd STREET</strong> 或 <strong>RAGTAG</strong> 常有保存良好的二手 PORTER，價格約全新品 <strong>5-7 折</strong>。停產款與特別色都有可能挖到！</p>
            </div>
        </div>

        <div class="guide-section">
            <h3>💎 二手精品挖寶 — 九州小香大本營</h3>
            <p style="margin-bottom:12px;color:#888;font-size:13px">福岡天神的二手店非常集中，可安排半天步行掃貨。</p>
            <div class="guide-item">
                <h4>⭐⭐⭐⭐⭐ 高山質店 (Takayama Pawn Shop)</h4>
                <p>福岡在地老字號，價格通常比大型連鎖店更親民。小香包款狀態極佳，常有剛收購進來的「現貨」，是許多內行人到福岡的<strong>第一站</strong>。<br>
                📍 分店：天神・西新・半道橋</p>
            </div>
            <div class="guide-item">
                <h4>⭐⭐⭐⭐⭐ KOMEHYO (米兵) 天神店</h4>
                <p>天神 2 丁目，貨源最穩定，設有專門 <strong>Chanel 專櫃</strong>。鑑定流程極其嚴格，等級標示（<strong>S・A・B</strong>）最值得信賴。擔心真偽？選 KOMEHYO 最安心。</p>
            </div>
        </div>

        <div class="guide-tip">
            <h4>💡 購物攻略</h4>
            <p>
                🛂 <strong>退稅提醒</strong>：在 SOLARIA、AMU PLAZA、百貨公司（博多阪急、岩田屋）購買皆可退稅，<strong>請帶護照正本</strong>。<br>
                🗺️ <strong>動線建議</strong>：<br>
                &nbsp;&nbsp;• 在<strong>博多站</strong>：AMU PLAZA (PORTER STAND) → 博多阪急 → 運河城<br>
                &nbsp;&nbsp;• 在<strong>天神區</strong>：Aesop/Le Labo → SOLARIA (KURA CHIKA) → 高山質店/KOMEHYO<br>
                👟 天神區各店步行距離內，建議穿好走的鞋！
            </p>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeShoppingGuide() {
    document.getElementById('shopping-guide-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// ======================================
// Pre-trip Preparation Modal Logic
// 行前準備 Modal 邏輯
// ======================================

function updateCountdown() {
    const departure = new Date('2026-06-11T00:00:00+08:00');
    const now = new Date();
    const diff = departure - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const el = document.getElementById('prep-countdown');
    if (!el) return;
    if (days > 0) {
        el.innerHTML = `<span class="countdown-num">${days}</span><span class="countdown-label">天後出發 days until departure</span>`;
    } else if (days === 0) {
        el.innerHTML = `<span class="countdown-num">🎉</span><span class="countdown-label">今天出發！Departure day!</span>`;
    } else {
        el.innerHTML = `<span class="countdown-num">✈️</span><span class="countdown-label">旅途愉快！Enjoy your trip!</span>`;
    }
}

function renderPrepModal() {
    if (document.getElementById('prep-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'prep-modal';
    modal.className = 'shopping-guide-modal';
    modal.innerHTML = `
        <div class="modal-content prep-modal-content">
            <span class="close-modal" onclick="closePrepModal()">&times;</span>
            <div id="prep-modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePrepModal();
    });
}

function openPrepModal(type) {
    const modal = document.getElementById('prep-modal');
    const body = document.getElementById('prep-modal-body');

    if (type === 'insurance') {
        body.innerHTML = `
            <div class="guide-header">
                <h2>🛡️ 保險準備指南</h2>
                <p>Travel Insurance Guide</p>
            </div>

            <div class="guide-section">
                <h3>旅遊平安險 Travel Insurance</h3>
                <div class="guide-item">
                    <h4>基本保障 Basic Coverage</h4>
                    <p>意外身故/殘廢、意外醫療費用<br>Accidental death/disability, medical expenses</p>
                </div>
                <div class="guide-item">
                    <h4>海外突發疾病 Overseas Illness</h4>
                    <p>確認是否涵蓋海外突發疾病門診/住院<br>Confirm outpatient & inpatient illness coverage abroad</p>
                </div>
                <div class="guide-item">
                    <h4>建議保額 Recommended Amount</h4>
                    <p>壽險至少 <strong>500 萬</strong>、醫療至少 <strong>100 萬</strong><br>Life: min NT$5M, Medical: min NT$1M</p>
                </div>
            </div>

            <div class="guide-section">
                <h3>旅遊不便險 Inconvenience Insurance</h3>
                <div class="guide-item">
                    <h4>班機延誤 Flight Delay</h4>
                    <p>延誤 4 小時以上可理賠<br>Compensation for delays over 4 hours</p>
                </div>
                <div class="guide-item">
                    <h4>行李延誤/遺失 Baggage Delay/Loss</h4>
                    <p>行李遲到或遺失的購物補償<br>Shopping compensation for late/lost luggage</p>
                </div>
                <div class="guide-item">
                    <h4>旅程取消/縮短 Trip Cancellation</h4>
                    <p>因不可抗力因素取消行程之補償<br>Compensation for force majeure cancellation</p>
                </div>
            </div>

            <div class="guide-tip">
                <h4>💡 保險小提醒 Insurance Tips</h4>
                <p>
                    • 信用卡刷機票通常附帶基本旅平險，但保額偏低，<strong>建議額外加保</strong><br>
                    • 日本醫療費用昂貴，感冒門診約 ¥5,000-10,000（~NT$1,100-2,200），住院更貴<br>
                    • 推薦管道：<strong>產險公司線上投保</strong>（國泰產險、富邦產險、新光產險），比臨櫃便宜<br>
                    • 建議 <strong>6/4-6/10</strong> 之間完成投保
                </p>
            </div>
        `;
    } else if (type === 'immigration') {
        body.innerHTML = `
            <div class="guide-header">
                <h2>🛂 入境審查指南</h2>
                <p>Immigration & Customs Guide</p>
            </div>

            <div class="guide-section">
                <h3>出發前必備文件 Required Documents</h3>
                <div class="guide-item">
                    <h4>🔵 護照 Passport</h4>
                    <p>有效期限至少 <strong>6 個月以上</strong>（至少到 2026/12 以後）</p>
                </div>
                <div class="guide-item">
                    <h4>🔵 來回機票 Round-trip Ticket</h4>
                    <p>電子機票或訂位確認單 E-ticket or booking confirmation</p>
                </div>
                <div class="guide-item">
                    <h4>🔵 飯店預訂 Hotel Booking</h4>
                    <p>至少第一晚住宿證明（都ホテル博多）</p>
                </div>
                <div class="guide-item prep-vjw-highlight">
                    <h4>🔑 Visit Japan Web</h4>
                    <p><strong>出發前必填！</strong>線上預先登錄入境資訊與海關申報<br>
                    <a href="https://www.vjw.digital.go.jp/" target="_blank" class="prep-link">前往 Visit Japan Web →</a></p>
                </div>
            </div>

            <div class="guide-section">
                <h3>Visit Japan Web 登錄步驟</h3>
                <div class="prep-steps">
                    <div class="prep-step"><span class="step-num">1</span><span>註冊帳號（護照號碼、姓名等）</span></div>
                    <div class="prep-step"><span class="step-num">2</span><span>登錄旅客資訊</span></div>
                    <div class="prep-step"><span class="step-num">3</span><span>登錄入境・回國預定（航班資訊）</span></div>
                    <div class="prep-step"><span class="step-num">4</span><span>填寫「入境審查」準備</span></div>
                    <div class="prep-step"><span class="step-num">5</span><span>填寫「海關申報」準備</span></div>
                    <div class="prep-step"><span class="step-num">6</span><span>產出 QR Code，入境時出示</span></div>
                </div>
            </div>

            <div class="guide-section">
                <h3>入境時流程 At Immigration</h3>
                <div class="prep-steps">
                    <div class="prep-step"><span class="step-num">1</span><span>入境審查：出示護照 + VJW QR Code</span></div>
                    <div class="prep-step"><span class="step-num">2</span><span>指紋採集：16歲以上外國旅客需按指紋、拍照</span></div>
                    <div class="prep-step"><span class="step-num">3</span><span>台灣護照免簽入境，停留上限 90 天</span></div>
                    <div class="prep-step"><span class="step-num">4</span><span>領取行李</span></div>
                    <div class="prep-step"><span class="step-num">5</span><span>海關檢查：出示 QR Code 或紙本申報表</span></div>
                </div>
            </div>

            <div class="guide-section">
                <h3>海關免稅額度 Duty-Free Allowance</h3>
                <div class="guide-item">
                    <h4>🍶 酒類 Alcohol</h4>
                    <p>3 瓶（每瓶 760ml）</p>
                </div>
                <div class="guide-item">
                    <h4>🚬 菸草 Tobacco</h4>
                    <p>加熱菸 200 支或捲菸 200 支</p>
                </div>
                <div class="guide-item">
                    <h4>💐 香水 Perfume</h4>
                    <p>2 盎司（約 56ml）</p>
                </div>
                <div class="guide-item">
                    <h4>🛍️ 其他物品 Other</h4>
                    <p>總價 ¥200,000 以下免稅</p>
                </div>
            </div>

            <div class="guide-tip prep-warning">
                <h4>⛔ 嚴禁攜入 Prohibited Items</h4>
                <p>肉類製品（含肉乾、肉鬆、泡麵含肉包）一律嚴禁攜入日本，違者最高罰款 ¥1,000,000。<br>
                Meat products are strictly prohibited. Violators face fines up to ¥1,000,000.</p>
            </div>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePrepModal() {
    document.getElementById('prep-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// ======================================
// Floating Side Navigation 浮動側邊導覽
// ======================================

(function initFloatNav() {
    const nav = document.getElementById('float-nav');
    const toggle = document.getElementById('float-nav-toggle');
    if (!nav || !toggle) return;

    // Toggle menu open/close 切換選單
    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Smooth scroll & close menu on click 點擊後平滑捲動
    nav.querySelectorAll('.float-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.remove('open');
            const href = item.getAttribute('href');
            const tab = item.dataset.tab;
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                // Switch to specific tab after scrolling 切換標籤頁
                if (tab) {
                    setTimeout(() => {
                        const tabBtn = document.querySelector(`.section-tab[onclick*="'${tab}'"]`);
                        if (tabBtn) tabBtn.click();
                    }, 400);
                }
            }
        });
    });

    // Show nav after scrolling past hero 離開首頁才顯示
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            nav.classList.remove('visible');
        } else {
            nav.classList.add('visible');
        }
    }, { threshold: 0.1 });

    const header = document.querySelector('.header');
    if (header) observer.observe(header);

    // Active section highlighting 目前區塊高亮
    const sections = [
        { el: document.querySelector('.map-section'), attr: 'map-section' },
        { el: document.querySelector('.days-section'), attr: 'days-section' },
        { el: document.getElementById('essentials'), attr: 'essentials-section' },
        { el: document.getElementById('prep'), attr: 'prep-section' }
    ].filter(s => s.el);

    function updateActiveNav() {
        const scrollY = window.scrollY + window.innerHeight / 3;
        let current = '';
        sections.forEach(s => {
            if (s.el.offsetTop <= scrollY) {
                current = s.attr;
            }
        });
        nav.querySelectorAll('.float-nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.section === current);
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
})();
