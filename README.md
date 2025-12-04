# Subtitle Downloader Pro – Chrome Extension

<!-- PROJECT LOGO -->
<p align="center">
  <!-- Replace this with your logo path -->
  <img src="assets/logo.png" alt="Subtitle Downloader Pro Logo" width="120">
</p>

Subtitle Downloader Pro is a lightweight and efficient Chrome extension that lets you search and download subtitles instantly using the official OpenSubtitles API.[web:21]  
Designed for simplicity and speed, it helps you find correct subtitles for movies, TV shows, anime, documentaries, and more with just a click.[web:21]

<!-- DOWNLOAD BUTTON -->
<p align="center">
  <a href="Download/subtitle-downloader.zip">
    <img src="https://img.shields.io/badge/Download-subtitle--downloader.zip-blue?style=for-the-badge" alt="Download subtitle-downloader.zip">
  </a>
</p>

---

## Screenshot

<!-- Replace this with your actual screenshot path -->
<p align="center">
  <img src="assets/screenshot.png" alt="Subtitle Downloader Pro Screenshot" width="720">
</p>

---

## Features

- 🔍 Instant subtitle search by movie name, show name, season/episode, or keyword  
- ⬇️ One-click subtitle download (SRT format)  
- ⚡ Powered by OpenSubtitles API for fast and reliable results  
- 🎨 Clean UI built with TailwindCSS  
- 📦 Lightweight extension with minimal permissions  
- 💾 Uses Chrome Storage & Downloads APIs  
- 💯 Works on all Chromium-based browsers (Chrome, Edge, Brave, etc.)[web:21]

---

## Project Structure

```
subtitle-downloader/
│── background.js
│── popup.html
│── popup.js
│── manifest.json
│── styles.css
│── tailwind.css
│── input.css
│── icon16.png
│── icon48.png
│── icon128.png
│── README.md
│── package.json
│── package-lock.json
│── node_modules/
│── assets/
│ ├── logo.png 
│ └── screenshot.png 
│── Download/
│ ├── subtitle-downloader.zip

```

---

## Installation (Local Development)

1. Clone or download this repository:

- git clone https://github.com/Maijied/subtitle-downloader.git
- cd subtitle-downloader

2. Open Chrome and go to: chrome://extensions/

3. Turn on **Developer mode**.  
4. Click **Load unpacked**.  
5. Select the `subtitle-downloader/` folder.  
6. The extension will appear in your Chrome extensions list and toolbar.[web:21]

---

## Usage

1. Click the **Subtitle Downloader Pro** icon in the browser toolbar.  
2. Enter a movie name, TV show name with season/episode, or any keyword.  
3. Browse the subtitles returned from OpenSubtitles.  
4. Click **Download** next to a subtitle to save it as an SRT file via Chrome’s Downloads API.[web:21]

---

## How It Works

- The popup UI collects the user’s search query.  
- The query is sent to the background service worker.  
- The service worker communicates with the OpenSubtitles REST API and fetches matching subtitles.  
- When a result is selected, the service worker triggers a direct SRT download.[web:21]

---

## Manifest (Current Version)

```
{
    "manifest_version": 3,
    "name": "Subtitle Downloader Pro",
    "version": "1.0.2",
    "author": "Maizied Hasan Majumder",
    "homepage_url": "https://github.com/Maijied",
    "description": "Professional subtitle search & download using   OpenSubtitles API",
    "permissions": ["downloads", "storage"],
    "host_permissions": ["https://api.opensubtitles.com/*"],
    "action": {
    "default_popup": "popup.html",
    "default_title": "Subtitle Downloader"
},
    "icons": {
        "16": "icon16.png",
        "48": "icon48.png",
        "128": "icon128.png"
    },
    "background": {
        "service_worker": "background.js"
    }
}
```

---

## Tech Stack

- JavaScript (Vanilla)  
- TailwindCSS  
- Chrome Extensions Manifest V3  
- OpenSubtitles REST API[web:21]

---

## Publishing to Chrome Web Store

1. Create a ZIP of your extension folder:

- cd ~/Desktop
- zip -r subtitle-downloader.zip subtitle-downloader/

2. Go to the Chrome Web Store Developer Dashboard:  
https://chrome.google.com/webstore/devconsole  
3. Click **New Item** and upload `subtitle-downloader.zip`.  
4. Add title, description, screenshots/promo images, and a 128×128 icon.  
5. Submit for review.[web:21]

---

## Author

**Maizied Hasan Majumder**  
GitHub: https://github.com/Maijied[web:21]

---

## License

This project is licensed under the **MIT License** and is free to use and modify.[web:21]
