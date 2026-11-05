# PashuOLX / GoLX - Livestock & Cattle Marketplace 🐄

> An interactive web platform inspired by GoLX and OLX India, dedicated exclusively to the trade, verification, and adoption of indigenous Desi cows, commercial dairy cattle, and buffaloes.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🌟 Key Features

- **Multi-Vector Filtering Engine**:
  - **Listing Type**: All Listings, For Sale, or Free Gau Seva Adoption.
  - **Breed Categorization**: Desi Indigenous Breeds (Gir, Punganur, Sahiwal, Rathi, Tharparkar, Kankrej), Commercial Breeds (HF Cross, Jersey), and Buffaloes (Murrah, Jafarabadi).
  - **Gender / Life Stage**: Cow, Bull, Female Calf, Male Calf, Heifer.
  - **Daily Milk Production**: Dynamic slider range (0 to 35+ Liters/Day).
  - **State / Region Filter**: Region-specific livestock filtering across India.
  - **Verification Badges**: Filter by Cow Aadhaar Tagged or Geo-verified farms.
- **GoLX-Inspired Card Architecture**:
  - Verification badges (`Cow Aadhaar ✓`, `Geo verified`, `Negotiable`).
  - Compact price formatting (e.g., `₹85.0K` or `Free for Adoption`).
  - Quick-action favorite buttons with persistent storage.
- **Top Breed Discovery Bubbles**:
  - Horizontal quick-scroll bubbles with breed portraits for one-click discovery.
- **Detailed Health & Spec Modal**:
  - View lactation cycle, peak yield, lineage, age, and seller verification credentials.
- **Interactive In-App Buyer-Seller Chat**:
  - Instant direct communication simulator for price negotiations.
- **Sell Cattle Wizard**:
  - Easy-to-use form to list new cattle with photo preset selections and real-time feed updates.
- **Zero-Latency Local Media**:
  - High-resolution local cattle photographs with automatic fallback protection.

---

## 📁 Project Structure

```text
pashubazaar/
├── index.html       # Semantic HTML layout and modal structures
├── styles.css       # Responsive CSS Grid, Flexbox & GoLX styling
├── app.js           # State management, filter engine & LocalStorage
└── images/          # Dedicated breed photographs
    ├── cow_punganur.jpg
    ├── cow_gir.jpg
    ├── cow_murrah_buffalo.jpg
    ├── cow_sahiwal_red.jpg
    ├── cow_hf_calf.jpg
    ├── cow_jafarabadi.jpg
    ├── cow_rathi.jpg
    ├── cow_tharparkar.jpg
    ├── cow_jersey.jpg
    ├── cow_kankrej_bull.jpg
    ├── cow_heifer.jpg
    ├── cow_adoption.jpg
    ├── cow_calf_male.jpg
    └── cow_desi_black.jpg
```

---

## 🚀 Getting Started

No build tools, npm, or complex dependencies are needed. Simply run:

### Method 1: Direct in Browser
Double-click `index.html` to open it in any web browser.

### Method 2: Local Python Server (Recommended)
```bash
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
