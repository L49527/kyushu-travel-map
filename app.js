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
                <div class="day-meta">
                    <span>📅 ${d.date}</span>
                    <span>📍 ${d.area}</span>
                    <span class="weather-info">${w.icon} ${w.high}°/${w.low}° 💧${w.rain}%</span>
                </div>
            </div>
            
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
            
            <div class="transport-box">
                <h4>${icon} ${label}</h4>
                <p>${d.transport[state.mode]}</p>
            </div>
            
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

// Coupon System Logic
document.addEventListener('DOMContentLoaded', () => {
    const couponBtn = document.getElementById('coupon-btn');
    const couponModal = document.getElementById('coupon-modal');
    const modalClose = document.querySelector('.modal-close');
    const couponList = document.getElementById('coupon-list');

    // Only proceed if elements exist
    if (!couponBtn || !couponModal || !couponList) return;

    // Render Coupons
    function renderCoupons() {
        if (typeof coupons === 'undefined') return;

        couponList.innerHTML = coupons.map(coupon => `
            <div class="coupon-card">
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

    // Event Listeners
    couponBtn.addEventListener('click', () => {
        renderCoupons();
        couponModal.style.display = 'block';
    });

    modalClose.addEventListener('click', () => {
        couponModal.style.display = 'none';
    });

    // Close on click outside
    window.addEventListener('click', (event) => {
        if (event.target === couponModal) {
            couponModal.style.display = 'none';
        }
    });
});
