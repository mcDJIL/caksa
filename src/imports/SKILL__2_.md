---
name: caksa-website-dev
description: Panduan development website company profile CAKSA (Cakrawala Skala) — tim riset internasional UAV/Unmanned Aerial Vehicle di Politeknik Elektronika Negeri Surabaya (PENS). Gunakan skill ini setiap kali mengerjakan halaman, komponen, design system, atau konten di project website ini, agar implementasi konsisten dengan visual identity, data prestasi, dan struktur sitemap yang sudah ditentukan. Trigger juga saat user menyebut "CAKSA website", "company profile CAKSA", nama halaman (Home/About/Research/Achievements/Partnership/Contact), atau elemen desain seperti hero section, design system, checkered pattern.
---

# CAKSA Website — Development Skill

Skill ini merangkum keputusan desain & konten untuk website company profile CAKSA menjadi acuan teknis yang bisa langsung dipakai saat build di Antigravity. Baca ini dulu sebelum membuat halaman, komponen, atau section baru di project ini.

## 1. Konteks Produk (ringkas)

CAKSA (Cakrawala Skala) adalah tim riset internasional UAV di bawah PENS, aktif sejak 2022 (diteruskan dari tim Aeronautics PENS yang sudah kompetisi KRTI sejak 2007). Tagline: **"Gala Akasa Wirya Satya"** (Sansekerta — harapan agar tim mampu meraung di angkasa dengan gagah dan berani).

Website ini adalah **multi-page company profile** dengan tujuan utama:
1. Menarik audiens luas untuk mengenal riset UAV mereka (positioning-nya ke arah **Awwwards-style**: cinematic, scroll-storytelling, bukan template korporat kaku).
2. Menjadi materi kredibel untuk menggaet sponsor.
3. Menjadi pintu masuk bagi calon anggota tim baru.

Jangan bangun ini sebagai landing page satu section — ini situs multi-halaman dengan design system yang konsisten di semua halaman.

## 2. Design System — WAJIB dipatuhi di semua halaman/komponen

**Warna:**
| Token | Hex | Peran |
|---|---|---|
| `navy-base` | `#0F1B33` | Background utama, section dark |
| `orange-accent` | `#F4841E` | Aksen signature, CTA, highlight angka |
| `white` | `#FFFFFF` | Breathing room, section terang, teks di atas navy |
| Checkered pattern | hitam-putih | Elemen grafis khas brand (dipakai di corner/divider, bukan full background) |

**Tipografi:**
- Heading: bold-condensed sans-serif (gaya Archivo Black / Space Grotesk) — dipakai besar untuk statement dan angka pencapaian.
- Body: clean sans-serif (gaya Inter) — untuk narasi dan deskripsi.
- Data teknis (spesifikasi UAV, kode misi, koordinat): monospace kecil, dipakai sebagai aksen, bukan body text utama.

**Interaksi standar di semua halaman:**
- Navbar sticky: transparan saat di hero, jadi solid navy + blur begitu discroll.
- Scroll-triggered reveal (fade/slide-up) untuk tiap section masuk viewport.
- Hover state: foto dokumentasi pakai efek grayscale → color; card project pakai reveal detail teknis.
- Background hero pakai subtle blueprint-grid dengan parallax halus — jangan berlebihan sampai mengganggu keterbacaan teks.
- Transisi antar halaman smooth, hindari hard-cut/reload terasa kasar.

**Prinsip Awwwards yang harus dijaga:**
- Setiap halaman harus punya satu "hero moment" visual yang kuat, bukan sekadar heading + paragraf.
- Storytelling scroll, bukan grid card generik yang menumpuk rata.
- White space besar tetap dipertahankan meski palet dominan dark — jangan penuhi semua ruang dengan elemen dekoratif.

## 3. Sitemap & Rincian Konten per Halaman

Bangun sesuai urutan ini (Home dulu sebagai fondasi design system, baru halaman lain menyusul).

### 3.1 Home
1. Navbar (lihat spesifikasi di atas)
2. Hero full-screen — render/foto UAV Galakasa, parallax halus, headline "BERSATU MEMBANGUN DIRGANTARA INDONESIA", subtext "International UAV Research Team — Politeknik Elektronika Negeri Surabaya", CTA ganda: "Explore Research" & "Partner With Us"
3. Quick stats bar — angka animasi: 2nd Runner-up TEKNOFEST 2023, Rank 11 TEKNOFEST 2024, Top 8 SAFMC 2024
4. About preview — split layout foto + narasi singkat asal-usul sejak 2007, CTA ke halaman About
5. Research preview — grid 3-4 card UAV (Gacor X1, Galakasa, Kalamangga) hover reveal, CTA ke halaman Research
6. Achievement teaser — timeline horizontal ringkas 2023-2025, CTA ke halaman Achievements
7. Partnership CTA banner — full-width kontras, "Jadi Bagian dari Perjalanan Kami" → "Become a Sponsor"
8. Footer — logo, tagline, kontak, alamat PENS, checkered pattern kecil

### 3.2 About Us
- Narasi editorial asal-usul CAKSA (Aeronautics PENS 2007 → CAKSA 2022), filosofi tagline
- Foto ekspedisi dokumenter (style grayscale, konsisten dengan proposal sponsorship)
- Struktur tim sebagai visual org chart interaktif:
  - **Technical:** Team Leader, Electrical, Mechanic, Programming
  - **Non-Technical:** Project Manager, Administration, Sponsorship, Branding

### 3.3 Research & Projects
Gallery museum-style, full-bleed image per card, hover reveal spesifikasi teknis. Wahana yang ditampilkan (urut riwayat):
- **Gacor X1** — Fixed wing, konfigurasi tractor, TEKNOFEST 2023 International UAV Competition
- **Galakasa** — 3rd Cakrawala Skala Aerial Vehicle
- **Anak Lanang & Anak Wadon** — drone/wahana
- **Kalamangga**
- **Desain UAV SAFMC 2026** — quadcopter terbaru, masih tahap desain

### 3.4 Achievements
Timeline vertikal cinematic 2023–2025, dengan big-number animation:
| Tahun | Kompetisi | Hasil |
|---|---|---|
| 2023 | TEKNOFEST International Startup Competition | Finalis, **2nd Runner-up** (satu-satunya perwakilan Indonesia) |
| 2023 | TEKNOFEST International UAV Competition | Finalis, presentasi langsung di Turki |
| 2024 | TEKNOFEST International UAV Competition | **Rank 11** dari peserta internasional |
| 2024 | SAFMC — CAT D1 (Semi-Autonomous) | **Top 8**, perwakilan Indonesia |

Sertakan embed video misi YouTube dan dokumentasi foto pertemuan dengan Menteri Luar Negeri Turki (Hakan Fidan) & CTO Baykar Defense (Selçuk Bayraktar).

**PENTING — kredibilitas data:** Bedakan secara eksplisit di UI mana yang data riil (hasil kompetisi, foto dokumentasi) vs mana yang masih rencana/simulasi (misal desain SAFMC 2026 yang belum tanding). Jangan sampai desain UAV yang belum ikut kompetisi ditampilkan seolah sudah punya hasil resmi.

### 3.5 Partnership / Sponsorship
- Value proposition: media exposure, asosiasi brand dengan PENS (top 5 Politeknik se-Asia versi SCImago)
- Tabel paket sponsorship dengan visual perbandingan:

| Paket | Nominal | Ukuran Logo |
|---|---|---|
| Platinum | ≥ Rp 20.000.000 | XL — logo di wahana, remote, laptop, bendera perusahaan, promosi produk (termasuk di negara tujuan), video produk di website |
| Gold | Rp 15.000.000 – 19.999.999 | L — logo di koper, toolbox, polo, kaos, medsos, website, video harian |
| Silver | Rp 10.000.000 – 14.999.999 | M — logo di kaos, medsos, website, video harian |
| Custom | Sesuai kesepakatan | Bisa berupa fresh money, barang, atau jasa |

- Showcase penempatan logo (mockup: bendera, drone, laptop, koper, toolbox, kaos, polo)
- Logo wall sponsor sebelumnya: Djarum Foundation (Bakti Pendidikan), Akhishop Electronics, Sekolah Robot Indonesia, Spectrum, Buaya Aerotech, PLN Indonesia Power, Marvin Foundation, Altair, SolidWorks
- Cantumkan ringkas ketentuan kerja sama (pendaftaran via MoU, skema pembayaran 50% di muka, kontak: Regina Adristya A.M. — partnershipcaksa@gmail.com)

### 3.6 Contact / Join Us
- CTA ganda: untuk sponsor (kontak partnership) dan calon anggota tim (join CAKSA)
- Form kontak minimalis
- Info: alamat PENS (Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111), Instagram @caksaeepis, LinkedIn CAKSA Team, YouTube Cakrawala Skala Dirgantara, linktr.ee/caksa_team
- Closing statement "Let's Support Us" dengan visual bendera Indonesia, hashtag `#GALAAKASAWIRYASATYA`

## 4. Tech Stack (disarankan, sesuaikan dengan setup Antigravity project)

- **Frontend:** React + Vite, Tailwind CSS untuk utility styling, Framer Motion (atau library animasi setara) untuk scroll-triggered reveal & parallax
- **Routing:** React Router (multi-page, bukan single scroll panjang)
- **Asset:** render 3D UAV & foto dokumentasi disiapkan dalam resolusi tinggi untuk hero full-bleed; siapkan versi grayscale untuk efek hover
- **Deployment:** statis, cocok di-hosting di Vercel

## 5. Urutan Build (ikuti urutan ini)

1. Setup design system dulu — palet warna, tipografi, komponen dasar (button, navbar, footer, card) sebagai shared component.
2. Build halaman **Home** penuh — ini jadi acuan visual untuk halaman lain.
3. Build **Research & Projects** (paling visual, gallery-driven).
4. Build **Achievements** (timeline + data animasi).
5. Build **About Us**.
6. Build **Partnership/Sponsorship** (tabel paket + logo wall).
7. Build **Contact/Join Us**.
8. Terakhir: polish interaksi lintas halaman (page transition, konsistensi hover state, performa animasi di mobile).

## 6. Hal yang Harus Dihindari

- Jangan jadikan ini single-page scroll panjang — ini situs multi-halaman, tiap halaman punya URL & hero moment sendiri.
- Jangan gunakan grid card generik rata tanpa hierarki visual — ini yang membedakan dari template korporat biasa.
- Jangan campur data prestasi riil dengan proyeksi/rencana tanpa pembeda visual yang jelas (lihat catatan kredibilitas di section Achievements).
- Jangan taruh checkered pattern sebagai full background — pakai sebagai aksen di corner/divider saja supaya tidak mengganggu keterbacaan.
- Jangan lupa responsive: efek parallax dan hover berat harus punya fallback ringan di mobile.

## 7. Skill Eksternal Pendukung (agentskill.sh)

Skill ini adalah acuan konten & design system CAKSA — bukan pengganti skill teknis animasi/layout. Kalau tersedia di Antigravity, install dan pakai bersamaan skill berikut sesuai kebutuhan section yang sedang dikerjakan:

**Fondasi:**
- `frontend-design` (Anthropic) — pastikan hasil tidak jatuh ke aesthetic generic AI, pakai di semua halaman.
- `awwwards-landing-page` (eng0ai) — referensi scaffold Next.js + Locomotive Scroll + GSAP + Framer Motion, cocok jadi starting point struktur project sebelum di-custom ke design system CAKSA di atas.
- `web-design-guidelines` (vercel-labs) — jalankan sebagai quality check di akhir tiap halaman (aksesibilitas, UX correctness).

**Animasi & scroll storytelling:**
- `cinematic-scroll-storytelling` / `gsap-scrolltrigger-storytelling` — untuk narasi scroll di Home & About (hero → stats → preview section).
- `staggered-word-reveal` — untuk headline besar seperti "BERSATU MEMBANGUN DIRGANTARA INDONESIA".
- `masked-reveal` — untuk transisi foto dokumentasi grayscale-ke-color di Achievements & About.
- `animation-on-scroll` — reveal section umum, dipakai di semua halaman.

**Visual detail khas brand:**
- `corner-diagonals` / `container-lines` — untuk elemen checkered pattern & garis blueprint tipis (lihat section 2, Design System).
- `technical-wireframe-info-layout` / `split-layout-technical` — untuk halaman Research & Projects (spesifikasi UAV) dan split layout foto-teks di About.
- `editorial-tech` — arah layout narasi "Latar Belakang" gaya majalah di About Us.

**Arah rasa desain:**
- `design-taste-frontend` (leonxlnx/taste-skill) — beri vibe word langsung ("Awwwards", "dark tech", "editorial-technical") untuk menerjemahkan brief ke keputusan desain konkret saat brief section 2 & 3 terasa kurang spesifik.

Cek security score tiap skill sebelum install (idealnya di atas 30). Kalau ada skill baru yang lebih cocok ditemukan di kemudian hari, update list ini supaya tetap jadi acuan tunggal.

## 8. Referensi

Data prestasi, struktur tim, dan paket sponsorship diambil dari `Proposal Sponsorship CAKSA 2025`. Kalau ada update prestasi/wahana baru, update section 3.3 dan 3.4 di skill ini supaya konten website tetap sinkron dengan materi resmi tim.
