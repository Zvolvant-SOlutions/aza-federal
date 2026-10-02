# AZA Federal — JV Marketing Site

Static one-page marketing site for **AZA Federal**, a joint venture of
**Applied Innovative Technologies (AIT)**, **Zvolvant Solutions**, and **AccountsPro**.
Positioning: federal systems integration contractor — software development, data
engineering, cloud, AI, cybersecurity, and systems engineering.

## Stack
- Static HTML/CSS in `public/` (no build step)
- Served via Cloudflare Workers (`worker.js` → `env.ASSETS.fetch`)
- Temporary SVG logo in `public/logo.svg` (pending final branding)

## Develop
```bash
npm install
npm run dev        # wrangler dev --local → http://localhost:8787
```

## Deploy
```bash
CLOUDFLARE_API_TOKEN=<token> npx wrangler deploy
```
Deploys to `https://aza-federal.zvolvant.workers.dev`.

## Notes
- Content synthesized from zvolvant.com, ait.international, and accountspro.com.
- No fabricated credentials (UEI/CAGE/contract numbers) — JV is newly formed;
  contract vehicles marked "in process." "SBA 8(a)" reference is via Zvolvant.
- Logo and contact email (`contact@azafederal.com`) are placeholders.
