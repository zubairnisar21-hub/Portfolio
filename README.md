# Muhammad Zubair — Mobile App Developer Portfolio

A modern, dark-themed personal portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

**Live:** https://zubairnisar21-hub.github.io/Portfolio/

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

The static site is exported to `out/`.

## Deploy

The site deploys automatically to **GitHub Pages** on every push to `main` via `.github/workflows/deploy.yml`.

- Source repo: https://github.com/zubairnisar21-hub/Portfolio
- Live URL: https://zubairnisar21-hub.github.io/Portfolio/
- The `gh-pages` branch holds the generated static site; the workflow rebuilds and publishes it.

No secrets or environment variables are required.

## Structure

- `app/` — Next.js App Router pages, global styles and favicon
- `components/` — UI sections (Hero, About, Skills, Work, Experience, Contact) and effects
- `lib/data.ts` — all profile, project and skill content (edit here to update the site)
- `assets/profile.jpg` — your portrait (bundled as a hashed static asset)

## Change your photo

Replace `assets/profile.jpg` with a square JPG and push to `main`. A stylish "MZ" monogram is shown automatically if the image is missing.

## Contact

- Email: zubairnisaar21@gmail.com
- Phone: +92 344 7422203
- GitHub: https://github.com/zubairnisar21-hub
