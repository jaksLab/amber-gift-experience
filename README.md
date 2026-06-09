# Amber Gift Experience

A production-ready React + Vite digital gift website for Amber. The experience is designed as a sentimental, premium, dark romantic gothic fantasy castle that can be opened from a QR code or NFC tag inside a physical gift.

The website includes:

- A cinematic castle entrance
- A welcome room
- A gift creation process video room
- A memories gallery room
- An ancient parchment letter room
- A manual music chamber
- A final romantic question room

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy to Netlify

1. Push this repository to GitHub.
2. Connect the GitHub repository to Netlify.
3. Use this build command:

```bash
npm run build
```

4. Use this publish directory:

```bash
dist
```

The included `netlify.toml` already configures the same build command and publish directory.

## Where to replace files

Upload your real assets into the public asset folders:

- Images: `/public/assets/images`
- Video: `/public/assets/videos/gift-process.mp4`
- Music: `/public/assets/audio/background-music.mp3`

The site gracefully displays premium gothic fallback frames/messages if images, video, or music are missing.

## Where to edit text

Edit all main website copy, names, the letter, and asset paths in:

```bash
/src/data/content.js
```

## Recommended asset names

Use these file names to match the default configuration:

- `amber-01.jpg`
- `amber-02.jpg`
- `gift-01.jpg`
- `gift-02.jpg`
- `process-01.jpg`
- `process-02.jpg`
- `gift-process.mp4`
- `background-music.mp3`

## Notes

- Video does not autoplay and includes controls.
- Music does not autoplay and only starts after tapping the Play Music button.
- The layout is mobile-first and optimized for iPhone-sized screens.
- Animations respect `prefers-reduced-motion`.
