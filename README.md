# YouTube Auto-Theatre Mode Extension

A lightweight Chrome/Edge/Opera (etc.) extension that automatically opens all YouTube videos in **Theatre Mode**.  
Works on Windows, macOS, and Linux.

---

## 📦 Installation

### 1. Download / Clone
Save these two files in a new folder called `youtube-theatre-mode`:

- `manifest.json`
- `theatre.js`

---

### 2. Enable Developer Mode
1. Open Chrome (or Edge).
2. In the address bar, go to:
3. Toggle **Developer mode** on (top-right corner).

---

### 3. Load the Extension
1. Click **Load unpacked**.
2. Select the `youtube-theatre-mode` folder.
3. The extension will now appear in your extensions list.

---

### 4. Test It
1. Open a new tab and go to any YouTube video.
2. The player should automatically switch to **Theatre Mode**.
3. Works for:
- Videos opened directly
- Videos opened in new tabs
- Navigating within YouTube

---

## 🖥️ Platforms

- ✅ Windows
- ✅ macOS
- ✅ Linux

(Any system that supports Chrome, Opera, or Microsoft Edge.)

---

## 🔧 Troubleshooting
- If it doesn’t work, click the **puzzle icon (Extensions)** in Chrome and make sure the extension is enabled.
- If you see flickering or glitches, reload the extension (`chrome://extensions/`) after making sure the right files were copied by clicking the circular arrow loading icon on this extension.
- Clearing cookies will not affect this extension — it always forces Theatre Mode.

---

## 🚀 Optional Tweaks
- Want **Fullscreen** instead of Theatre?  
Replace the logic in `theatre.js` with a call to the fullscreen button.  
- Tested on [Chrome](https://www.google.com/chrome/), [Microsoft Edge](https://www.microsoft.com/edge) and [Opera](https://www.opera.com/opera).

---

## 📝 License
Free to use and modify for personal use.
