# Ibrahim Portfolio

**Personal portfolio website** — Ibrahim, Founder &amp; Engineer at UMG Africa, Tanzania.

> 19-year-old mechatronics engineer building deep-tech for Africa's future: swarm robotics, AI agents, programming languages, and space technology.

🔗 **Live site:** [ibrahim-portfolio-nu.vercel.app](https://ibrahim-portfolio-nu.vercel.app)

---

## Tech Stack

- **HTML + CSS + Vanilla JS** — No frameworks. One file.
- **Catppuccin Mocha** — Dark-only theme design system
- **Custom SVG icons** — All icons are inline SVGs (no icon library dependency)
- **Brand logos** — Tools shown with Simple Icons CDN logos + letter fallbacks
- **Background** — Custom SVG (Boston Dynamics-style robot + circuit traces)
- **Deployment** — Vercel (automatic from `main` branch)

## Features

| Feature | Description |
|---------|-------------|
| Hero | Full-screen intro with profile photo, stats, and CTA |
| About | Bio, mission, 4 stat cards (AI, Robotics, Languages, Space) |
| Flywheel | UMG Africa 5-subsidiary visual |
| Projects | 4 featured projects with descriptions |
| Skills | Animated progress bars for 8 domains |
| Integrations | 45+ tools across 5 categories with brand logo chips |
| YouTube | Embedded channel showcase |
| Chatbot | AI assistant (JS-based, portfolio Q&A) |
| SEO | JSON-LD structured data, OG/Twitter cards, sitemap |

## Sections

```
index.html   ← Single-page portfolio (everything in one file)
bg.svg       ← Custom background illustration
profile.jpg  ← Professional photo
robots.txt   ← AI crawler configuration
sitemap.xml  ← XML sitemap for search engines
```

## Local Development

```bash
# Just open in browser
open index.html
# Or serve locally
python3 -m http.server 8000
```

## Deployment

Auto-deployed to Vercel on push to `main`.

```bash
vercel deploy --prod --yes
```

---

<div align="center">
  Built from Tanzania, for Africa.
</div>
