# Amber Gift Experience

A premium, mobile-first React + Vite digital gift experience for Amber. The site is designed as a dark romantic gothic castle journey opened from an NFC chip inside a physical gift box.

Production URL:

```text
https://jakslab.github.io/amber-gift-experience/
```

The first screen shows:

- “For Amber…”
- “A little world made with time, patience, and love.”
- “Play Music”
- “Enter the Castle”

## Visual concept

The experience is a small digital castle made for Amber. The first screen feels like a gothic castle entrance with a moonlit glow, dark door panels, mist, burgundy shadows, antique gold borders, and a manual music chamber. After Amber enters, each scroll moves through another room: first room, creation room, memory room, adoration room, ancient letter room, final question room, and a subtle Jonathan/JAKS footer.

## Deployment

This project is deployed **only with GitHub Pages using GitHub Actions**.

GitHub Pages should be configured to use:

- **Source:** GitHub Actions

The workflow file is:

```bash
.github/workflows/deploy.yml
```

On every push to `main`, GitHub Actions installs dependencies, builds the Vite app, uploads `dist`, and deploys it to GitHub Pages.

## Local commands

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages base path

The Vite base path is configured in `vite.config.js` as:

```js
base: '/amber-gift-experience/'
```

All public assets are referenced through `import.meta.env.BASE_URL` in `src/data/content.js`, so they load correctly from the GitHub Pages subpath.

## Replace images

Upload images here:

```bash
public/assets/images
```

Recommended image names:

- `amber-01.jpg`
- `amber-02.jpg`
- `gift-01.jpg`
- `gift-02.jpg`
- `process-01.jpg`
- `process-02.jpg`

## Replace video

Upload the process video here:

```bash
public/assets/videos/gift-process.mp4
```

The video does not autoplay and uses native controls. If the file is missing, the site shows “The process video will be added soon.”

## Replace music

Upload the music here:

```bash
public/assets/audio/background-music.mp3
```

The music does not autoplay. Amber can manually press Play Music from the castle entrance screen. If the file is missing, the site shows “Music will be added soon.”

## Edit text and asset paths

Edit all names, room copy, image/video/audio paths, the adoration list, the letter, the final question, and the footer in:

```bash
src/data/content.js
```

## GitHub Pages checklist

1. Push to `main`.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy to GitHub Pages” to finish.
6. Visit `https://jakslab.github.io/amber-gift-experience/`.
