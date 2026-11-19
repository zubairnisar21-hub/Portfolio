# Quick handoff — Zubair's Portfolio

## Where things live
- **Local folder:** `C:\Users\Zohaib\zubair-portfolio`
- **GitHub repo:** https://github.com/zubairnisar21-hub/Portfolio
- **Live site:** https://zubairnisar21-hub.github.io/Portfolio/
- **Branch:** `main` (source) → `gh-pages` (generated site)

## What to edit for common changes
| Change | File |
|---|---|
| Name, email, phone, links, stats | `lib/data.ts` → `profile`, `stats` |
| Projects (titles, descriptions, skills, Play Store links) | `lib/data.ts` → `projects` |
| Skills list | `lib/data.ts` → `skillGroups`, `marqueeItems` |
| Experience / NAVTAC | `lib/data.ts` → `experience` |
| Your photo | `assets/profile.jpg` (replace the JPG, keep the name) |
| Colors, fonts, hover/background effects | `app/globals.css` |
| Section layout / content | `components/*.tsx` |

## Commands
```bash
cd C:\Users\Zohaib\zubair-portfolio

# Preview locally
npm run dev
# open http://localhost:3000

# Save and publish changes
git add .
git commit -m "describe your change"
git push
```
Pushing to `main` automatically rebuilds and redeploys the live site via `.github/workflows/deploy.yml`.

## Important
- The **live GitHub Pages site does not depend on your terminal**. You can close the terminal any time; the website stays online.
- The terminal is only needed for the **local preview** (`npm run dev`).
- If asking an AI assistant for help in a new chat, say: *"Make changes in `C:\Users\Zohaib\zubair-portfolio`"* — all context is in the files above.
