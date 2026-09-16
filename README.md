# Po-Lung Wu (吳柏瀧) | Personal Portfolio & Live Dashboard

[![GitHub Repo](https://img.shields.io/badge/GitHub-DIC1__PersonalPage-blue?style=flat-square&logo=github)](https://github.com/wupojung/DIC1_PersonalPage)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

> 🔗 **Live Demo:** [https://github.com/wupojung/DIC1_PersonalPage](https://github.com/wupojung/DIC1_PersonalPage)

A modern, high-performance personal digital station and portfolio for **Po-Lung Wu (吳柏瀧)** — Ph.D. Student at Dept. of Computer Science & Engineering, National Chung Hsing University (NCHU CSE), Co-founder of TiGG (Taiwan Indie Game Group), and Senior Technical Consultant in AIoT, Digital Twins, and Computer Graphics.

---

## 📸 Preview

![Po-Lung Wu Portfolio Screenshot](./screenshot.png)

---

## 🌟 Overview

This project is a lightweight, zero-dependency personal portal built entirely with vanilla web technologies. It seamlessly integrates a real-time live clock engine, dynamic ambient greeting logic, and an interactive categorized showcase of academic publications, industry consulting projects, mentorship awards (including two Red Dot Design Award winners), and professional review services.

### Key Highlights
- **Zero Framework Overhead**: Built with pure HTML5, vanilla CSS3, and ES6+ JavaScript for instant loading and optimal performance.
- **Privacy-First Identity**: Features a custom high-tech "PW" monogram badge with iridescent glowing rings in place of personal photos.
- **Glassmorphism & Micro-Animations**: Tailored dark-mode UI with floating aurora mesh gradients, smooth tab transitions, and responsive cards.
- **Live Clock Station**: High-precision ticking clock (`HH:MM:SS`) with a 12H/24H format toggle, circular seconds indicator, dynamic day-phase greetings, full localized date, and year progress tracking.
- **Multi-Theme Support**: Instant client-side palette switching between **Aurora Glass**, **Midnight Obsidian**, and **Cyber Sunset**.

---

## ✨ Features & Architecture

### 1. Live Clock & Temporal Telemetry
- **Millisecond-Synced Clock**: Real-time `HH:MM:SS` display powered by a non-blocking JavaScript interval.
- **12H / 24H Toggle**: Instant format switching with state saved to `localStorage`.
- **Dynamic Day Phase & Greeting**: Context-aware greetings (Morning, Afternoon, Evening, Night) dynamically updated based on local time.
- **Temporal Metrics**: Displays local date (Traditional Chinese format), timezone offset (`GMT+8`), day-of-year counter, and year completion percentage.
- **Anti-Wrap Layout**: Robust `white-space: nowrap` design ensuring the time readout never breaks across lines on any screen resolution.

### 2. Structured Portfolio Navigation
The interface is structured into five accessible, interactive tabbed modules:
- 💼 **Experience & Education (經歷與學歷)**
  - Current Status: Ph.D. Student at Dept. of Computer Science & Engineering, National Chung Hsing University (NCHU CSE).
  - Education: Ph.D. Program in Computer Science (National Chung Hsing University, ongoing); M.S. (Computer Graphics) & B.S. (Image Processing) from National Chin-Yi University of Technology.
  - Academic & Teaching: University lecturing experience in interactive multimedia, game programming, and hardware-software systems.
  - Community: Co-founder of Taiwan Indie Game Group (TiGG).
  - Industry Consulting: Technical Director / Consultant at Jincheng Tech, Force Corp, Yongyi Info, and FirstEd International; former POS Team Project Lead at Wowprime Group.
- 🛠️ **Projects & Industry Applications (執行專案與產學)**
  - MOEA Industry Innovation Project (Co-PI, NT$840,000 grant).
  - iPAS Certified Digital Courses: *IoT Environmental Monitoring with MQTT*, *WebAPI & LINE Bot Development*, and *Industrial Modbus Protocols*.
  - Public Sector & AI Systems: Central Taiwan Traffic Coordination Platform, Taichung Police Surveillance Management System, Smart License Plate Recognition, and National Forum AI Virtual Host.
  - Commercial Systems: Wowprime 12Hotpot App, Queue Management System, POS Core, and Corporate Mobile EIP.
- 🏆 **Mentorship & Honors (指導學生獲獎紀錄)**
  - **Red Dot Design Award Winner (2023)**: *PING PING PONG PONG (拼拼乓乓)* & *Project Salaman (薩拉曼計畫)*.
  - **Bahamut ACG Creation Award (2023)**: SheenaGames Special Award (*Project Salaman*).
  - **Vision Get Wild (放視大賞)**: Finalist in 2024 (*I Want to Be a Top Adventurer*) & 2023 (*PING PING PONG PONG*, *Project Salaman*).
- 📚 **Academic Research & Publications (學術論文發表)**
  - 12 conference papers covering Unity CI/CD automation, PC/VR virtual art galleries, party game UI evaluation, Pantone skin tone analysis, cloud-based virtual museums, and wearable AR IoT tools.
  - **IEEE IS3C (EI Indexed)**: *A Refractive Distortion Correction Method for 3D Root Reconstruction*.
- ⚖️ **Professional Service & Reviewing (評審與審稿服務)**
  - Judge: Taipei Game Show Indie Game Award (2025, 2026) — Taipei Computer Association (TCA).
  - Conference Reviewer: IS&DMD, Computer Graphics Workshop (CGW), and Intelligent Living Technology (ILT).

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic markup, Open Graph tags, accessibility attributes |
| **Styling** | Vanilla CSS3 | Custom properties (CSS variables), Glassmorphism, CSS Grid, Flexbox, Keyframes |
| **Scripting** | Vanilla JavaScript (ES6+) | Non-blocking clock engine, DOM manipulation, LocalStorage state persistence |
| **Typography** | Google Fonts | `Plus Jakarta Sans`, `Noto Sans TC`, `JetBrains Mono` |
| **Icons** | Lucide Icons | Modern lightweight SVG icon library |
| **Favicon** | Inline SVG | Custom high-resolution vector favicon |

---

## 📁 Repository Structure

```
├── index.html        # Semantic single-page application markup & metadata
├── style.css         # Complete design system, theme definitions & animations
├── script.js         # Clock engine, tab switcher, theme persistence & handlers
├── screenshot.png    # High-resolution application preview screenshot
└── README.md         # Professional project documentation
```

---

## 🚀 Getting Started

Since this project has zero build steps or package dependencies, you can run it immediately in any modern web browser.

### Option 1: Direct File Access
Simply double-click `index.html` or open it in your browser of choice (Chrome, Edge, Firefox, Safari).

### Option 2: Lightweight Python Server
```bash
# Clone the repository
git clone https://github.com/wupojung/DIC1_PersonalPage.git
cd DIC1_PersonalPage

# Start a local HTTP server
python -m http.server 5173
```
Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

### Option 3: Node.js / npx
```bash
npx serve .
```

---

## 🌐 Deployment (GitHub Pages)

This repository is configured for direct deployment via GitHub Pages:

1. Push your code to the `main` branch of your repository:
   ```bash
   git add .
   git commit -m "feat: release personal portfolio portal"
   git push origin main
   ```
2. In your GitHub repository, navigate to **Settings** → **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`, then click **Save**.
5. The live site will be accessible at [https://wupojung.github.io/DIC1_PersonalPage/](https://wupojung.github.io/DIC1_PersonalPage/) (or [https://github.com/wupojung/DIC1_PersonalPage](https://github.com/wupojung/DIC1_PersonalPage)).

---

## 📬 Contact & Links

- **Author:** Po-Lung Wu (吳柏瀧)
- **Affiliation:** Ph.D. Student, Dept. of Computer Science & Engineering, National Chung Hsing University (國立中興大學 資訊工程學系 博士班)
- **Email:** [wupojung@gmail.com](mailto:wupojung@gmail.com)
- **GitHub:** [@wupojung](https://github.com/wupojung)
- **Online CV:** [HackMD CV Profile](https://hackmd.io/@wupojung/polungwu-cv)
- **Live Demo:** [https://github.com/wupojung/DIC1_PersonalPage](https://github.com/wupojung/DIC1_PersonalPage)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
