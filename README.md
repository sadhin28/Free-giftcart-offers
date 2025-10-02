# AdBlue React Project (Vite)

Simple React + Vite starter tailored for AdBlue Media offers:
- Pages for posts
- Sitemap and robots in `public/`
- SEO meta with `react-helmet`
- Easy to deploy to Vercel / Netlify

## How to run locally

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Build:
   ```bash
   npm run build
   npm run preview
   ```

## Deploy
- Push to a GitHub repo and deploy to Vercel (automatic).
- Make sure `public/sitemap.xml` and `public/robots.txt` are present.

## Replace links
Edit `src/config.js` and set `OFFER_LINK` and `BASE_URL` before deploy.
