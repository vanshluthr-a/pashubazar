/* ==========================================================================
   PASHUOLX / GOLX - CORE APPLICATION LOGIC
   Clean Desi Cow & Livestock Marketplace Experience
   Full Filter Engine, GoLX Cards, Sell Wizard, Live Chat, Favorites
   ========================================================================== */

// --- DATASET (Clean GoLX Livestock Catalog) ---
const INITIAL_LIVESTOCK = [
    {
        id: "golx-101",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Punganur",
        breedLabel: "Punganur (పుంగనూరు)",
        title: "Pungunru Cow",
        price: 85000,
        listingType: "sale",
        negotiable: true,
        verification: "geo", // geo or aadhaar
        milkYield: 5.5,
        peakMilk: 7.0,
        age: "3y 8m",
        location: "East Godavari, Andhra Pradesh",
        state: "Andhra Pradesh",
        sellerName: "Srinivasa Rao",
        phone: "+91 98480 12345",
        image: "./images/cow_punganur.jpg",
        description: "Pure indigenous Punganur dwarf cow from original Chittoor lineage. Highly docile, healthy and grazing on natural grass. Morning & evening milking test welcome.",
        timestamp: Date.now() - 1000 * 60 * 15
    },
    {
        id: "golx-102",
        category: "calf",
        gender: "calf-f",
        genderLabel: "Female Calf",
        breed: "Holstein Friesian",
        breedLabel: "HF Cross (एचएफ क्रॉस)",
        title: "HF cow",
        price: 10000,
        listingType: "sale",
        negotiable: true,
        verification: "none",
        milkYield: 0,
        peakMilk: 24.0,
        age: "1y",
        location: "Jhunjhunu, Rajasthan",
        state: "Rajasthan",
        sellerName: "Rakesh Kumar",
        phone: "+91 94140 88221",
        image: "./images/cow_hf_calf.jpg",
        description: "Healthy 1-year-old HF cross female calf with excellent mother milk pedigree (Mother yielded 28L/day). Fully dewormed and vaccinated.",
        timestamp: Date.now() - 1000 * 60 * 45
    },
    {
        id: "golx-103",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Desi",
        breedLabel: "Local / Mixed (देसी)",
        title: "Healthy 4-Year-Old Desi Cow, Active & Energetic",
        price: 10000,
        listingType: "sale",
        negotiable: true,
        verification: "aadhaar",
        milkYield: 8.0,
        peakMilk: 10.0,
        age: "4y",
        location: "Una, Himachal Pradesh",
        state: "Himachal Pradesh",
        sellerName: "Kewal Krishan",
        phone: "+91 98160 55432",
        image: "./images/cow_desi_black.jpg",
        description: "Healthy Desi local cow, highly active, fed on organic mountain fodder. Very sweet A2 milk. Cow Aadhaar tag verified.",
        timestamp: Date.now() - 1000 * 60 * 120
    },
    {
        id: "golx-104",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Gir",
        breedLabel: "Gir (गीर गाय)",
        title: "Pure Gir Cow 2nd Lactation with Female Calf",
        price: 88000,
        listingType: "sale",
        negotiable: true,
        verification: "aadhaar",
        milkYield: 18.5,
        peakMilk: 22.0,
        age: "4y 6m",
        location: "Junagadh, Gujarat",
        state: "Gujarat",
        sellerName: "Patel Ramesh Bhai",
        phone: "+91 98250 12345",
        image: "./images/cow_gir.jpg",
        description: "Authentic indigenous Gir cow with pendulous ears and convex forehead. 18.5 Liters proven daily milk yield. Calm temperament.",
        timestamp: Date.now() - 1000 * 60 * 200
    },
    {
        id: "golx-105",
        category: "buffalo",
        gender: "cow",
        genderLabel: "Buffalo (Female)",
        breed: "Murrah",
        breedLabel: "Murrah (मुर्राह भैंस)",
        title: "Champion Jet Black Murrah Buffalo - 22L Daily",
        price: 125000,
        listingType: "sale",
        negotiable: true,
        verification: "geo",
        milkYield: 22.0,
        peakMilk: 26.0,
        age: "5y 5m",
        location: "Karnal, Haryana",
        state: "Haryana",
        sellerName: "Sardar Gurpreet Singh",
        phone: "+91 98120 98765",
        image: "./images/cow_murrah_buffalo.jpg",
        description: "Heavy body structure with tight spiral horns and jet black skin. High fat percentage (7.8%). Calved 3 weeks ago with female calf.",
        timestamp: Date.now() - 1000 * 60 * 320
    },
    {
        id: "golx-106",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Sahiwal",
        breedLabel: "Sahiwal (साहीवाल)",
        title: "Purebred Sahiwal Cow 1st Lactation",
        price: 72000,
        listingType: "sale",
        negotiable: true,
        verification: "aadhaar",
        milkYield: 16.0,
        peakMilk: 18.5,
        age: "3y 2m",
        location: "Abohar, Punjab",
        state: "Punjab",
        sellerName: "Harpreet Dhillon",
        phone: "+91 98720 11223",
        image: "./images/cow_sahiwal_red.jpg",
        description: "High heat tolerant Sahiwal cow. Red golden coat with loose skin dewlap and symmetrical udder. Milking test ready.",
        timestamp: Date.now() - 1000 * 60 * 450
    },
    {
        id: "golx-107",
        category: "buffalo",
        gender: "cow",
        genderLabel: "Buffalo (Female)",
        breed: "Jafarabadi",
        breedLabel: "Jafarabadi (जाफराबादी)",
        title: "Gigantic Jafarabadi Dairy Buffalo - 8.5% Fat",
        price: 140000,
        listingType: "sale",
        negotiable: true,
        verification: "geo",
        milkYield: 20.5,
        peakMilk: 24.0,
        age: "6y",
        location: "Rajkot, Gujarat",
        state: "Gujarat",
        sellerName: "Bhavesh Bhai Ahir",
        phone: "+91 99090 55667",
        image: "./images/cow_jafarabadi.jpg",
        description: "Original Gir forest Jafarabadi heavy buffalo. Drooping wide horns and creamy milk ideal for Ghee and Paneer.",
        timestamp: Date.now() - 1000 * 60 * 600
    },
    {
        id: "golx-108",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Rathi",
        breedLabel: "Rathi (राठी)",
        title: "Pure Rathi Cow - Brown & White Patches 15L",
        price: 62000,
        listingType: "sale",
        negotiable: true,
        verification: "none",
        milkYield: 15.0,
        peakMilk: 17.5,
        age: "4y",
        location: "Bikaner, Rajasthan",
        state: "Rajasthan",
        sellerName: "Murlidhar Godara",
        phone: "+91 94144 55667",
        image: "./images/cow_rathi.jpg",
        description: "Hardy desert milch breed of western Rajasthan. High heat resistance, peaceful and gentle animal with 15L daily production.",
        timestamp: Date.now() - 1000 * 60 * 750
    },
    {
        id: "golx-109",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Tharparkar",
        breedLabel: "Tharparkar (थारपारकर)",
        title: "Tharparkar Silver-White Cow A2 Milk",
        price: 65000,
        listingType: "sale",
        negotiable: true,
        verification: "geo",
        milkYield: 14.5,
        peakMilk: 17.0,
        age: "3y 6m",
        location: "Jodhpur, Rajasthan",
        state: "Rajasthan",
        sellerName: "Ratan Singh Rathore",
        phone: "+91 94140 12399",
        image: "./images/cow_tharparkar.jpg",
        description: "Bright silver white Thar desert cow. High medicinal A2 milk, completely tick and heat resistant.",
        timestamp: Date.now() - 1000 * 60 * 900
    },
    {
        id: "golx-110",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Jersey",
        breedLabel: "Jersey Cross (जर्सी)",
        title: "Jersey Cross Dairy Cow - High Fat & Cream",
        price: 78000,
        listingType: "sale",
        negotiable: true,
        verification: "none",
        milkYield: 21.0,
        peakMilk: 24.0,
        age: "4y 2m",
        location: "Solan, Himachal Pradesh",
        state: "Himachal Pradesh",
        sellerName: "Devraj Sharma",
        phone: "+91 98160 44556",
        image: "./images/cow_jersey.jpg",
        description: "Compact Jersey cow with high butterfat content. Very peaceful and machine milking ready.",
        timestamp: Date.now() - 1000 * 60 * 1100
    },
    {
        id: "golx-111",
        category: "bull",
        gender: "bull",
        genderLabel: "Bull (Male)",
        breed: "Murrah",
        breedLabel: "Murrah Bull (मुर्राह झोटा)",
        title: "Pure Murrah Breeding Stud Bull (झोटा)",
        price: 180000,
        listingType: "sale",
        negotiable: true,
        verification: "aadhaar",
        milkYield: 0,
        peakMilk: 0,
        age: "3y 8m",
        location: "Rohtak, Haryana",
        state: "Haryana",
        sellerName: "Chaudhary Virender",
        phone: "+91 94160 88990",
        image: "./images/cow_kankrej_bull.jpg",
        description: "Elite pedigree Murrah stud bull for dairy breeding. Mother milk record is 26L per day. Champion bloodline.",
        timestamp: Date.now() - 1000 * 60 * 1300
    },
    {
        id: "golx-112",
        category: "calf",
        gender: "heifer",
        genderLabel: "Heifer",
        breed: "Sahiwal",
        breedLabel: "Sahiwal (साहीवाल)",
        title: "Pure Sahiwal Pregnant Heifer (बछिया)",
        price: 55000,
        listingType: "sale",
        negotiable: true,
        verification: "geo",
        milkYield: 0,
        peakMilk: 18.0,
        age: "2y 4m",
        location: "Meerut, Uttar Pradesh",
        state: "Uttar Pradesh",
        sellerName: "Chaudhary Om Prakash",
        phone: "+91 98370 44556",
        image: "./images/cow_heifer.jpg",
        description: "First pregnancy Sahiwal heifer (6 months pregnant). Artificial insemination with elite NDRI semen.",
        timestamp: Date.now() - 1000 * 60 * 1500
    },
    {
        id: "golx-113",
        category: "cow",
        gender: "cow",
        genderLabel: "Cow (Female)",
        breed: "Desi",
        breedLabel: "Local / Mixed (देसी)",
        title: "Desi Gau Seva Cow (Free for Gau Shala / Adoption)",
        price: 0,
        listingType: "adoption",
        negotiable: false,
        verification: "geo",
        milkYield: 6.0,
        peakMilk: 8.0,
        age: "7y",
        location: "Mathura, Uttar Pradesh",
        state: "Uttar Pradesh",
        sellerName: "Gau Seva Ashram",
        phone: "+91 98390 11998",
        image: "./images/cow_adoption.jpg",
        description: "Gentle mother cow looking for loving home or dairy farm for adoption. Free of cost to good caretakers.",
        timestamp: Date.now() - 1000 * 60 * 1800
    },
    {
        id: "golx-114",
        category: "calf",
        gender: "calf-m",
        genderLabel: "Male Calf",
        breed: "Gir",
        breedLabel: "Gir (गीर बछड़ा)",
        title: "Gir Purebred Male Calf (बछड़ा)",
        price: 25000,
        listingType: "sale",
        negotiable: true,
        verification: "none",
        milkYield: 0,
        peakMilk: 22.0,
        age: "1y 2m",
        location: "Anand, Gujarat",
        state: "Gujarat",
        sellerName: "Bhavin Patel",
        phone: "+91 98251 33445",
        image: "./images/cow_calf_male.jpg",
        description: "Promising Gir male calf for future breeding or ox work. Active, playful, fed on mother milk and green clover.",
        timestamp: Date.now() - 1000 * 60 * 2100
    }
];

// --- APP STATE ---
class AppState {
    constructor() {
        this.listings = this.loadListings();
        this.favorites = JSON.parse(localStorage.getItem('golx_favs') || '[]');
        
        // Exact filter parameters from Picture 1
        this.filters = {
            listingType: 'all',    // 'all', 'sale', 'adoption'
            sortBy: 'newest',      // 'newest', 'price-low', 'price-high', 'milk-high'
            breed: '',             // '' for all breeds or 'Gir', 'Punganur', etc.
            gender: 'all',         // 'all', 'cow', 'bull', 'calf-f', 'calf-m', 'heifer'
            state: 'All States',   // 'All States' or specific state
            minPrice: null,        // number or null
            maxPrice: null,        // number or null
            minMilk: 0,            // 0 - 35
            vetOnly: false,        // boolean
            searchQuery: ''        // search bar text
        };

        this.currentChatAd = null;
        this.chats = JSON.parse(localStorage.getItem('golx_chats') || '{}');
    }

    loadListings() {
        const stored = localStorage.getItem('golx_listings_v3');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Error loading stored listings", e);
            }
        }
        return [...INITIAL_LIVESTOCK];
    }

    saveListings() {
        localStorage.setItem('golx_listings_v3', JSON.stringify(this.listings));
    }

    saveFavorites() {
        localStorage.setItem('golx_favs', JSON.stringify(this.favorites));
    }

    saveChats() {
        localStorage.setItem('golx_chats', JSON.stringify(this.chats));
    }
}

const state = new AppState();

// --- DOM ELEMENTS ---
const dom = {
    // Header
    homeLogoBtn: document.getElementById('homeLogoBtn'),
    keywordSearchInput: document.getElementById('keywordSearchInput'),
    searchSubmitBtn: document.getElementById('searchSubmitBtn'),
    openFavoritesBtn: document.getElementById('openFavoritesBtn'),
    favBadge: document.getElementById('favBadge'),
    openChatListBtn: document.getElementById('openChatListBtn'),
    openSellModalBtn: document.getElementById('openSellModalBtn'),
    promoPostAdBtn: document.getElementById('promoPostAdBtn'),

    // Breed Bubbles
    breedBubbles: document.querySelectorAll('.breed-bubble'),

    // Sidebar Filters (From Picture 1)
    clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
    listingTypePills: document.querySelectorAll('#listingTypePills .golx-pill'),
    sortSelect: document.getElementById('sortSelect'),
    sidebarBreedSelect: document.getElementById('sidebarBreedSelect'),
    genderPills: document.querySelectorAll('#genderPills .golx-pill'),
    stateSelect: document.getElementById('stateSelect'),
    minPriceInput: document.getElementById('minPriceInput'),
    maxPriceInput: document.getElementById('maxPriceInput'),
    sidebarMilkRange: document.getElementById('sidebarMilkRange'),
    milkFilterVal: document.getElementById('milkFilterVal'),
    vetOnlyCheck: document.getElementById('vetOnlyCheck'),

    // Feed Area (From Picture 2)
    resultsCountDisplay: document.getElementById('resultsCountDisplay'),
    activeChipsStrip: document.getElementById('activeChipsStrip'),
    olxCardsGrid: document.getElementById('olxCardsGrid'),
    emptyFeedBox: document.getElementById('emptyFeedBox'),
    resetEmptyFeedBtn: document.getElementById('resetEmptyFeedBtn'),

    // Modals
    itemDetailModal: document.getElementById('itemDetailModal'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    detailPageContent: document.getElementById('detailPageContent'),

    sellWizardModal: document.getElementById('sellWizardModal'),
    closeSellModalBtn: document.getElementById('closeSellModalBtn'),
    cancelSellBtn: document.getElementById('cancelSellBtn'),
    sellCattleForm: document.getElementById('sellCattleForm'),

    chatModal: document.getElementById('chatModal'),
    closeChatModalBtn: document.getElementById('closeChatModalBtn'),
    chatSellerTitle: document.getElementById('chatSellerTitle'),
    chatAdThumb: document.getElementById('chatAdThumb'),
    chatAdTitle: document.getElementById('chatAdTitle'),
    chatAdPrice: document.getElementById('chatAdPrice'),
    chatMessagesContainer: document.getElementById('chatMessagesContainer'),
    chatSendForm: document.getElementById('chatSendForm'),
    chatInputText: document.getElementById('chatInputText'),
    chatQuickChips: document.querySelectorAll('.chip-btn'),

    toastContainer: document.getElementById('toastContainer')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateFavoriteBadge();
    renderFeed();
});

// --- FILTER & SORT ENGINE ---
function getFilteredListings() {
    let list = state.listings.filter(item => {
        // 1. Listing Type (All, For Sale, For Adoption)
        if (state.filters.listingType !== 'all') {
            if (item.listingType !== state.filters.listingType) return false;
        }

        // 2. Breed
        if (state.filters.breed) {
            const b = state.filters.breed.toLowerCase();
            const itemBreed = (item.breed + ' ' + (item.breedLabel || '')).toLowerCase();
            if (!itemBreed.includes(b)) return false;
        }

        // 3. Gender / Animal Type
        if (state.filters.gender !== 'all') {
            if (item.gender !== state.filters.gender) return false;
        }

        // 4. All States
        if (state.filters.state && state.filters.state !== 'All States') {
            if (item.state !== state.filters.state) return false;
        }

        // 5. Price Range
        if (state.filters.minPrice !== null && item.price < state.filters.minPrice) return false;
        if (state.filters.maxPrice !== null && item.price > state.filters.maxPrice) return false;

        // 6. Daily Milk Yield
        if (item.milkYield < state.filters.minMilk) return false;

        // 7. Vet-Verified Only
        if (state.filters.vetOnly && item.verification === 'none') return false;

        // 8. Keyword Search
        if (state.filters.searchQuery) {
            const q = state.filters.searchQuery.toLowerCase();
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchBreed = (item.breed + ' ' + (item.breedLabel || '')).toLowerCase().includes(q);
            const matchLoc = item.location.toLowerCase().includes(q);
            const matchSeller = item.sellerName.toLowerCase().includes(q);
            if (!matchTitle && !matchBreed && !matchLoc && !matchSeller) return false;
        }

        return true;
    });

    // Sort
    switch (state.filters.sortBy) {
        case 'price-low':
            list.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            list.sort((a, b) => b.price - a.price);
            break;
        case 'milk-high':
            list.sort((a, b) => b.milkYield - a.milkYield);
            break;
        case 'newest':
        default:
            list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
            break;
    }

    return list;
}

// --- PRICE FORMATTER (e.g. ₹85.0K, ₹10.0K or Free) ---
function formatPriceCompact(price) {
    if (price === 0) return 'Free';
    if (price >= 1000) {
        const inK = (price / 1000).toFixed(1);
        // e.g. 85.0K or 10.0K
        return `₹${inK}K`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
}

// --- RENDER FEED ---
function renderFeed() {
    const list = getFilteredListings();
    dom.resultsCountDisplay.textContent = list.length;

    renderActiveChips();

    if (list.length === 0) {
        dom.olxCardsGrid.innerHTML = '';
        dom.olxCardsGrid.classList.add('hidden');
        dom.emptyFeedBox.classList.remove('hidden');
        return;
    }

    dom.emptyFeedBox.classList.add('hidden');
    dom.olxCardsGrid.classList.remove('hidden');

    dom.olxCardsGrid.innerHTML = list.map(item => createGoLXCardHTML(item)).join('');

    // Attach card clicks
    dom.olxCardsGrid.querySelectorAll('.golx-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.golx-fav-btn')) return;
            const id = card.getAttribute('data-id');
            openDetailModal(id);
        });
    });

    // Attach heart button clicks
    dom.olxCardsGrid.querySelectorAll('.golx-fav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            toggleFavorite(id);
        });
    });
}

// --- CREATE GOLX CARD HTML (Exact Picture 2 Layout) ---
function createGoLXCardHTML(item) {
    const isFav = state.favorites.includes(item.id);
    const compactPrice = formatPriceCompact(item.price);

    // Badges on left
    let leftBadgeHTML = '';
    if (item.verification === 'aadhaar') {
        leftBadgeHTML = `<span class="badge-tag badge-aadhaar">Cow Aadhaar ✓</span>`;
    } else if (item.verification === 'geo') {
        leftBadgeHTML = `<span class="badge-tag badge-geo"><i class="fa-solid fa-shield-halved"></i> Geo verified</span>`;
    }

    // Right Badge
    const rightBadgeHTML = item.negotiable ? `<span class="badge-negotiable">Negotiable</span>` : '';

    // Subtitle snippet (e.g. "Cow (Female)  3y 8m" or "Female Calf  1y")
    const subSnippet = `${item.genderLabel} • ${item.age}${item.milkYield > 0 ? ` • ${item.milkYield}L/d` : ''}`;

    return `
        <div class="golx-card" data-id="${item.id}">
            <div class="golx-card-media">
                <img src="${item.image}" alt="${item.title}" class="golx-img" loading="lazy" onerror="this.src='./images/cow_punganur.jpg'">
                
                <div class="golx-media-badges-left">
                    ${leftBadgeHTML}
                </div>
                
                <div class="golx-media-badges-right">
                    ${rightBadgeHTML}
                </div>

                <button class="golx-fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Save to favorites">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>

            <div class="golx-card-body">
                <div class="golx-breed-pill">${item.breedLabel || item.breed}</div>
                <h4 class="golx-card-title" title="${item.title}">${item.title}</h4>
                <div class="golx-card-sub">${subSnippet}</div>
                
                <div class="golx-card-bottom">
                    <div class="golx-card-price">${compactPrice}</div>
                    <div class="golx-card-loc" title="${item.location}">
                        <i class="fa-solid fa-location-dot"></i> ${item.location}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- RENDER ACTIVE CHIPS ---
function renderActiveChips() {
    const chips = [];

    if (state.filters.listingType !== 'all') {
        chips.push({ label: `Type: ${state.filters.listingType === 'sale' ? 'For Sale' : 'For Adoption'}`, key: 'listingType' });
    }
    if (state.filters.breed) {
        chips.push({ label: `Breed: ${state.filters.breed}`, key: 'breed' });
    }
    if (state.filters.gender !== 'all') {
        chips.push({ label: `Gender: ${state.filters.gender}`, key: 'gender' });
    }
    if (state.filters.state && state.filters.state !== 'All States') {
        chips.push({ label: `State: ${state.filters.state}`, key: 'state' });
    }
    if (state.filters.minPrice !== null || state.filters.maxPrice !== null) {
        chips.push({ label: `₹${state.filters.minPrice || 0} - ₹${state.filters.maxPrice || 'Max'}`, key: 'price' });
    }
    if (state.filters.minMilk > 0) {
        chips.push({ label: `Min Milk: ${state.filters.minMilk}L`, key: 'minMilk' });
    }
    if (state.filters.vetOnly) {
        chips.push({ label: 'Verified Only', key: 'vetOnly' });
    }

    if (chips.length === 0) {
        dom.activeChipsStrip.classList.add('hidden');
        dom.activeChipsStrip.innerHTML = '';
        return;
    }

    dom.activeChipsStrip.classList.remove('hidden');
    dom.activeChipsStrip.innerHTML = chips.map(c => `
        <span class="filter-chip">
            ${c.label}
            <i class="fa-solid fa-xmark remove-chip" data-key="${c.key}"></i>
        </span>
    `).join('');

    dom.activeChipsStrip.querySelectorAll('.remove-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const k = btn.getAttribute('data-key');
            if (k === 'listingType') {
                state.filters.listingType = 'all';
                dom.listingTypePills.forEach(p => p.classList.toggle('active', p.getAttribute('data-type') === 'all'));
            }
            if (k === 'breed') {
                state.filters.breed = '';
                dom.sidebarBreedSelect.value = '';
            }
            if (k === 'gender') {
                state.filters.gender = 'all';
                dom.genderPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-gender') === 'all'));
            }
            if (k === 'state') {
                state.filters.state = 'All States';
                dom.stateSelect.value = 'All States';
            }
            if (k === 'price') {
                state.filters.minPrice = null;
                state.filters.maxPrice = null;
                dom.minPriceInput.value = '';
                dom.maxPriceInput.value = '';
            }
            if (k === 'minMilk') {
                state.filters.minMilk = 0;
                dom.sidebarMilkRange.value = 0;
                dom.milkFilterVal.textContent = '0 L/Day';
            }
            if (k === 'vetOnly') {
                state.filters.vetOnly = false;
                dom.vetOnlyCheck.checked = false;
            }
            renderFeed();
        });
    });
}

// --- FAVORITES ---
function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
        showToast('Removed from saved cattle');
    } else {
        state.favorites.push(id);
        showToast('Saved to your favorites!');
    }
    state.saveFavorites();
    updateFavoriteBadge();
    renderFeed();
}

function updateFavoriteBadge() {
    dom.favBadge.textContent = state.favorites.length;
}

// --- DETAIL MODAL ---
function openDetailModal(id) {
    const item = state.listings.find(x => x.id === id);
    if (!item) return;

    state.currentChatAd = item;
    const formattedPrice = item.price > 0 
        ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.price) 
        : 'Free for Adoption';

    dom.detailPageContent.innerHTML = `
        <div class="detail-left-col">
            <div class="detail-gallery-box">
                <div class="main-hero-image-wrap">
                    <img src="${item.image}" alt="${item.title}" class="main-hero-img" onerror="this.src='./images/cow_punganur.jpg'">
                </div>
            </div>

            <div class="detail-specs-box">
                <h3>ANIMAL OVERVIEW & SPECS</h3>
                <div class="specs-data-grid">
                    <div class="spec-cell"><span class="cell-label">Breed:</span> <span class="cell-value">${item.breedLabel || item.breed}</span></div>
                    <div class="spec-cell"><span class="cell-label">Gender:</span> <span class="cell-value">${item.genderLabel}</span></div>
                    <div class="spec-cell"><span class="cell-label">Age:</span> <span class="cell-value">${item.age}</span></div>
                    <div class="spec-cell"><span class="cell-label">Daily Milk Yield:</span> <span class="cell-value">${item.milkYield > 0 ? item.milkYield + ' Liters / Day' : 'N/A'}</span></div>
                    <div class="spec-cell"><span class="cell-label">Peak Yield:</span> <span class="cell-value">${item.peakMilk > 0 ? item.peakMilk + ' Liters' : 'N/A'}</span></div>
                    <div class="spec-cell"><span class="cell-label">Verification:</span> <span class="cell-value">${item.verification === 'aadhaar' ? 'Cow Aadhaar Tagged' : (item.verification === 'geo' ? 'Geo-Verified Farm' : 'Standard')}</span></div>
                    <div class="spec-cell"><span class="cell-label">Price Terms:</span> <span class="cell-value">${item.negotiable ? 'Negotiable' : 'Fixed Price'}</span></div>
                    <div class="spec-cell"><span class="cell-label">Location:</span> <span class="cell-value">${item.location}</span></div>
                </div>
            </div>

            <div class="detail-desc-box">
                <h3>FARMER DESCRIPTION</h3>
                <p>${item.description}</p>
            </div>
        </div>

        <div class="detail-right-col">
            <div class="detail-price-card">
                <div class="detail-big-price">${formattedPrice} <span style="font-size:1rem; color:#64748b; font-weight:500;">(${formatPriceCompact(item.price)})</span></div>
                <h2 class="detail-ad-title">${item.title}</h2>
                <div class="detail-loc-date">
                    <span><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
                </div>
            </div>

            <div class="detail-seller-card">
                <div class="seller-meta-top">
                    <div class="seller-avatar-big"><i class="fa-solid fa-user"></i></div>
                    <div class="seller-name-info">
                        <strong>${item.sellerName}</strong>
                        <span><i class="fa-solid fa-circle-check text-success"></i> Verified Dairy Farmer</span>
                        <span>Member on PashuOLX since 2023</span>
                    </div>
                </div>

                <button class="btn-chat-seller" id="detailChatBtn">
                    <i class="fa-regular fa-comment-dots"></i> Chat with Seller
                </button>
                
                <button class="btn-call-seller" id="detailCallBtn">
                    <i class="fa-solid fa-phone"></i> <span id="callBtnText">Call Seller</span>
                </button>
            </div>

            <div class="detail-safety-box">
                <h4><i class="fa-solid fa-shield-halved text-success"></i> Verified Safety Guide</h4>
                <ul>
                    <li>Always conduct a physical milking test in morning and evening before final payment.</li>
                    <li>Verify cattle health and pregnancy duration in person at the farm.</li>
                    <li>Ensure proper animal transit permits for inter-state transportation.</li>
                </ul>
            </div>
        </div>
    `;

    document.getElementById('detailChatBtn').addEventListener('click', () => {
        closeModal(dom.itemDetailModal);
        openChatModal(item);
    });

    const callBtn = document.getElementById('detailCallBtn');
    const callText = document.getElementById('callBtnText');
    callBtn.addEventListener('click', () => {
        callText.textContent = item.phone;
        callBtn.style.backgroundColor = '#00875a';
        callBtn.style.color = '#ffffff';
        showToast(`Seller Contact: ${item.phone}`);
    });

    openModal(dom.itemDetailModal);
}

// --- LIVE IN-APP CHAT ---
function openChatModal(item) {
    state.currentChatAd = item;
    dom.chatSellerTitle.textContent = item.sellerName;
    dom.chatAdThumb.src = item.image;
    dom.chatAdTitle.textContent = item.title;
    dom.chatAdPrice.textContent = formatPriceCompact(item.price);

    renderChatMessages(item.id);
    openModal(dom.chatModal);
}

function renderChatMessages(adId) {
    const history = state.chats[adId] || [
        { sender: 'seller', text: `Namaste! Yes, this ${state.currentChatAd.breed} is available at my farm. When would you like to visit for physical inspection?`, time: 'Just now' }
    ];

    dom.chatMessagesContainer.innerHTML = `
        <div class="chat-msg system">
            <span>Safety Rule: Always conduct physical morning & evening milking tests before payment.</span>
        </div>
    `;

    history.forEach(msg => {
        const div = document.createElement('div');
        div.className = `chat-msg ${msg.sender}`;
        div.innerHTML = `
            <div class="bubble">${msg.text}</div>
            <span class="time">${msg.time}</span>
        `;
        dom.chatMessagesContainer.appendChild(div);
    });

    dom.chatMessagesContainer.scrollTop = dom.chatMessagesContainer.scrollHeight;
}

function sendChatMessage(text) {
    if (!state.currentChatAd || !text.trim()) return;
    const adId = state.currentChatAd.id;

    if (!state.chats[adId]) {
        state.chats[adId] = [
            { sender: 'seller', text: `Namaste! Yes, this ${state.currentChatAd.breed} is available at my farm. When would you like to visit for physical inspection?`, time: 'Just now' }
        ];
    }

    state.chats[adId].push({ sender: 'buyer', text: text.trim(), time: 'Just now' });
    state.saveChats();
    renderChatMessages(adId);
    dom.chatInputText.value = '';

    setTimeout(() => {
        let reply = "Sure, you are welcome! Please call me on my phone before coming to the farm.";
        if (text.toLowerCase().includes('price') || text.toLowerCase().includes('best')) {
            reply = "The price is slightly negotiable if you visit in person and finalize today.";
        } else if (text.toLowerCase().includes('milking') || text.toLowerCase().includes('test')) {
            reply = "Yes, you can do milking test yourself at 6:00 AM or 5:30 PM!";
        }
        state.chats[adId].push({ sender: 'seller', text: reply, time: 'Just now' });
        state.saveChats();
        renderChatMessages(adId);
    }, 1100);
}

// --- "+ SELL" WIZARD ---
function handleSellSubmit(e) {
    e.preventDefault();

    const category = document.getElementById('sellCategory').value;
    const breed = document.getElementById('sellBreed').value;
    const gender = document.getElementById('sellGender').value;
    const age = document.getElementById('sellAge').value;
    const title = document.getElementById('sellTitle').value;
    const price = parseFloat(document.getElementById('sellPrice').value) || 0;
    const listingType = document.getElementById('sellListingType').value;
    const stateVal = document.getElementById('sellState').value;
    const locationVal = document.getElementById('sellLocation').value;
    const sellerName = document.getElementById('sellSellerName').value;
    const phone = document.getElementById('sellPhone').value;
    const milkYield = parseFloat(document.getElementById('sellMilk').value) || 0;
    const description = document.getElementById('sellDesc').value || "Purebred healthy cattle ready for inspection.";

    let image = "./images/cow_punganur.jpg";
    const preset = document.getElementById('sellPhotoPreset').value;
    if (preset === 'preset-gir') image = "./images/cow_gir.jpg";
    else if (preset === 'preset-punganur') image = "./images/cow_punganur.jpg";
    else if (preset === 'preset-murrah') image = "./images/cow_murrah_buffalo.jpg";
    else if (preset === 'preset-sahiwal') image = "./images/cow_sahiwal_red.jpg";
    else if (preset === 'preset-hf') image = "./images/cow_hf_calf.jpg";

    const newAd = {
        id: "golx-" + Date.now(),
        category,
        gender: gender.includes('Female Calf') ? 'calf-f' : (gender.includes('Male Calf') ? 'calf-m' : (gender.includes('Bull') ? 'bull' : (gender.includes('Heifer') ? 'heifer' : 'cow'))),
        genderLabel: gender,
        breed,
        breedLabel: breed,
        title,
        price,
        listingType,
        negotiable: true,
        verification: "geo",
        milkYield,
        peakMilk: milkYield + 3,
        age,
        location: `${locationVal}, ${stateVal}`,
        state: stateVal,
        sellerName,
        phone,
        image,
        description,
        timestamp: Date.now()
    };

    state.listings.unshift(newAd);
    state.saveListings();

    closeModal(dom.sellWizardModal);
    dom.sellCattleForm.reset();
    showToast('Your Cattle Listing is now LIVE on PashuOLX!');
    
    // Reset filters and show feed
    resetAllFilters();
}

// --- MODAL UTILS ---
function openModal(el) {
    el.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(el) {
    el.classList.add('hidden');
    document.body.style.overflow = '';
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'olx-toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> <span>${msg}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        toast.style.transition = '0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- EVENT BINDINGS ---
function bindEvents() {
    // 1. Logo / Home Click
    dom.homeLogoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetAllFilters();
    });

    // 2. Keyword Search
    const executeSearch = () => {
        state.filters.searchQuery = dom.keywordSearchInput.value.trim();
        renderFeed();
    };
    dom.searchSubmitBtn.addEventListener('click', executeSearch);
    dom.keywordSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') executeSearch();
    });

    // 3. Sell Modal Triggers
    dom.openSellModalBtn.addEventListener('click', () => openModal(dom.sellWizardModal));
    dom.promoPostAdBtn.addEventListener('click', () => openModal(dom.sellWizardModal));
    dom.closeSellModalBtn.addEventListener('click', () => closeModal(dom.sellWizardModal));
    dom.cancelSellBtn.addEventListener('click', () => closeModal(dom.sellWizardModal));
    dom.sellCattleForm.addEventListener('submit', handleSellSubmit);

    // 4. Favorites header trigger
    dom.openFavoritesBtn.addEventListener('click', () => {
        if (state.favorites.length === 0) {
            showToast('You have not saved any cattle yet! Click the heart icon on any ad.');
            return;
        }
        // Filter by favorites
        const favItems = state.listings.filter(x => state.favorites.includes(x.id));
        dom.resultsCountDisplay.textContent = favItems.length;
        dom.olxCardsGrid.innerHTML = favItems.map(item => createGoLXCardHTML(item)).join('');
        showToast('Showing your saved cattle');
    });

    // 5. Chat header trigger
    dom.openChatListBtn.addEventListener('click', () => {
        if (state.listings.length > 0) openChatModal(state.listings[0]);
    });

    // 6. Breed Quick Bubbles
    dom.breedBubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            dom.breedBubbles.forEach(b => b.classList.remove('active'));
            bubble.classList.add('active');
            const breed = bubble.getAttribute('data-bubble-breed');
            state.filters.breed = breed === 'all' ? '' : breed;
            dom.sidebarBreedSelect.value = breed === 'all' ? '' : breed;
            renderFeed();
        });
    });

    // 7. SIDEBAR: Listing Type Pills (Picture 1)
    dom.listingTypePills.forEach(pill => {
        pill.addEventListener('click', () => {
            dom.listingTypePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.filters.listingType = pill.getAttribute('data-type');
            renderFeed();
        });
    });

    // 8. SIDEBAR: Sort Select (Picture 1)
    dom.sortSelect.addEventListener('change', (e) => {
        state.filters.sortBy = e.target.value;
        renderFeed();
    });

    // 9. SIDEBAR: Breed Select (Picture 1)
    dom.sidebarBreedSelect.addEventListener('change', (e) => {
        state.filters.breed = e.target.value;
        renderFeed();
    });

    // 10. SIDEBAR: Gender Pills (Picture 1)
    dom.genderPills.forEach(pill => {
        pill.addEventListener('click', () => {
            dom.genderPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.filters.gender = pill.getAttribute('data-gender');
            renderFeed();
        });
    });

    // 11. SIDEBAR: State Select (Picture 1)
    dom.stateSelect.addEventListener('change', (e) => {
        state.filters.state = e.target.value;
        renderFeed();
    });

    // 12. SIDEBAR: Price Range Inputs (Picture 1)
    const handlePriceInput = () => {
        state.filters.minPrice = dom.minPriceInput.value ? parseFloat(dom.minPriceInput.value) : null;
        state.filters.maxPrice = dom.maxPriceInput.value ? parseFloat(dom.maxPriceInput.value) : null;
        renderFeed();
    };
    dom.minPriceInput.addEventListener('input', handlePriceInput);
    dom.maxPriceInput.addEventListener('input', handlePriceInput);

    // 13. SIDEBAR: Daily Milk Range Slider
    dom.sidebarMilkRange.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        dom.milkFilterVal.textContent = `${val} L/Day`;
        state.filters.minMilk = val;
    });
    dom.sidebarMilkRange.addEventListener('change', () => {
        renderFeed();
    });

    // 14. SIDEBAR: Vet-Verified Checkbox
    dom.vetOnlyCheck.addEventListener('change', (e) => {
        state.filters.vetOnly = e.target.checked;
        renderFeed();
    });

    // 15. Clear All Filters Button (Picture 1)
    dom.clearAllFiltersBtn.addEventListener('click', resetAllFilters);
    dom.resetEmptyFeedBtn.addEventListener('click', resetAllFilters);

    // 16. Detail modal close
    dom.closeDetailModalBtn.addEventListener('click', () => closeModal(dom.itemDetailModal));
    dom.closeChatModalBtn.addEventListener('click', () => closeModal(dom.chatModal));

    // 17. Chat input submit & chips
    dom.chatSendForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sendChatMessage(dom.chatInputText.value);
    });

    dom.chatQuickChips.forEach(chip => {
        chip.addEventListener('click', () => {
            sendChatMessage(chip.getAttribute('data-reply'));
        });
    });

    // 18. Footer links
    document.querySelectorAll('.footer-breed-link').forEach(link => {
        link.addEventListener('click', () => {
            const b = link.getAttribute('data-breed');
            state.filters.breed = b;
            dom.sidebarBreedSelect.value = b;
            renderFeed();
            window.scrollTo({ top: 300, behavior: 'smooth' });
        });
    });

    document.querySelectorAll('.footer-loc-link').forEach(link => {
        link.addEventListener('click', () => {
            const loc = link.getAttribute('data-loc');
            state.filters.state = loc;
            dom.stateSelect.value = loc;
            renderFeed();
            window.scrollTo({ top: 300, behavior: 'smooth' });
        });
    });
}

function resetAllFilters() {
    state.filters = {
        listingType: 'all',
        sortBy: 'newest',
        breed: '',
        gender: 'all',
        state: 'All States',
        minPrice: null,
        maxPrice: null,
        minMilk: 0,
        vetOnly: false,
        searchQuery: ''
    };

    dom.keywordSearchInput.value = '';
    dom.sidebarBreedSelect.value = '';
    dom.stateSelect.value = 'All States';
    dom.sortSelect.value = 'newest';
    dom.minPriceInput.value = '';
    dom.maxPriceInput.value = '';
    dom.sidebarMilkRange.value = 0;
    dom.milkFilterVal.textContent = '0 L/Day';
    dom.vetOnlyCheck.checked = false;

    dom.listingTypePills.forEach(p => p.classList.toggle('active', p.getAttribute('data-type') === 'all'));
    dom.genderPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-gender') === 'all'));
    dom.breedBubbles.forEach(b => b.classList.toggle('active', b.getAttribute('data-bubble-breed') === 'all'));

    renderFeed();
    showToast('Filters reset to default');
}
