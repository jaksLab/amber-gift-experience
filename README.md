# Amber Gift Experience

A mobile-first React + Vite digital gift website for Amber. The experience is a simple, stable, dark-romantic gothic gift page designed to work on GitHub Pages at:

https://jakslab.github.io/amber-gift-experience/

The site opens with:

- “For Amber…”
- “A little piece of my heart, made with time, patience, and love.”
- “Open Your Gift”

After Amber taps the button, the rest of the gift rooms appear: welcome, creation process video, memory gallery, ancient letter, music chamber, and final question.

## Deployment

This project is deployed **only with GitHub Pages using GitHub Actions**.

GitHub Pages should be configured to use:

- **Source:** GitHub Actions

The workflow file is located at:

```bash
.github/workflows/deploy.yml
```

On every push to `main`, GitHub Actions installs dependencies, builds the Vite app, uploads `dist`, and deploys it to GitHub Pages.

## Local install

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

## Preview the production build

```bash
npm run preview
```

## GitHub Pages base path

The Vite base path is configured in `vite.config.js` as:

```js
base: '/amber-gift-experience/'
```

This ensures built assets load correctly under the GitHub Pages URL.

## Where to replace assets

Upload images here:

```bash
public/assets/images
```

Recommended image names:

- `amber-01.jpg`
- `amber-02.jpg`
- `gift-01.jpg`
- `gift-02.jpg`

Upload the process video here:

```bash
public/assets/videos/gift-process.mp4
```

Upload the music here:

```bash
public/assets/audio/background-music.mp3
```

## Where to edit text

Edit all names, section copy, asset paths, and the letter in:

```bash
src/data/content.js
```

## Notes

- Video does not autoplay and uses native controls.
- Music does not autoplay and only plays after tapping the Play Music button.
- Missing images show elegant placeholder frames.
- Missing video shows “The video will be added soon.”
- Missing audio shows “Music will be added soon.”
