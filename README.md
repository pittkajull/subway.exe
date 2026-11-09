# subway.exe — marketing site

Landing page for **subway.exe**, a real social network that lives in the terminal. Users install a global CLI with npm; posts, follows, and messages live on the server, so the account is the same from any machine.

> This repo is the marketing website only (React + Vite, static, no backend). The CLI and server are developed separately and are not public yet.

## Product scope

**MVP (current focus):** register, login, logout, `whoami`, text posts, a live chronological feed, likes, comments, follow/unfollow, profiles, and realtime 1:1 chat.

**Phase 2 (next, not built yet):** profile management, public/private accounts with a global feed, an interactive menu, edit/delete, reposts, and 24-hour stories.

**Later:** photo posts converted to ASCII art.

The product is not released. The npm package is not published, and the public server is not available. The site describes this explicitly instead of advertising features that cannot be used yet.

## What is in this site

- Terminal-native UI: monospace type, flat surfaces, hard rules, TUI frames, and the real logo.
- Interactive terminal demo (`feed`, `profile`, `chat`) with typed commands.
- Feature walkthroughs for the MVP feed, chat, and profiles.
- Searchable command reference for all 19 known commands, tagged `mvp` or `next`.
- Honest roadmap: MVP scope, missing release work, and the phase 2 sequence.
- Planned install (`npm install -g subwayexe`) marked as **not released**.
- FAQ, light/dark favicons, a 1200×630 social preview, responsive layout, and reduced-motion support.

## Public copy policy

The site is written from the product spec but deliberately keeps internals out of the public page:

- **Published:** product behavior, MVP scope, phase 2 roadmap, command names/flags, install command, and release status.
- **Not published:** authentication and token internals, REST/WebSocket contracts, database schema and ORM details, visibility query logic, repository layout, hosting/VPS plans, and open security questions (rate limiting, password reset, and similar).

No unconfirmed claim is added to fill a gap. If a fact is not settled, the page leaves it out and says so.

## Stack

- React 19 + Vite 7
- Plain CSS with a small set of custom properties
- JetBrains Mono (Google Fonts)
- Brand assets in `public/`

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build and deploy

```bash
npm run build    # static output in dist/
npm run preview  # check the production build locally
```

`dist/` can be deployed to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static file server. No environment variables are required.

## Structure

```text
public/
  logo.png                transparent logo (navbar, hero, footer)
  favicon-dark.png        transparent favicon for dark tabs
  favicon-light.png       transparent favicon for light tabs
  apple-touch-icon.png    iOS icon
  og.png                  1200×630 social preview
src/
  App.jsx                 section order
  data/content.js         all public copy, commands, and roadmap data
  styles.css              design system and layout
  components/
    Nav.jsx  Hero.jsx  Why.jsx  Features.jsx
    Commands.jsx  Status.jsx  Install.jsx  Faq.jsx  Footer.jsx
    TerminalDemo.jsx      interactive terminal demo
    CopyButton.jsx        clipboard helper
    SectionHead.jsx       shared section header
    terminal/
      TerminalFrame.jsx   TUI window frame
      Outputs.jsx         feed, profile, and chat output
```

## Editing content

- **Copy, commands, roadmap:** `src/data/content.js`
- **Colors, spacing, type:** CSS custom properties at the top of `src/styles.css`
- **Brand assets:** replace `public/logo.png`, then regenerate the favicons and `public/og.png`
- **Install and status:** keep them marked unreleased/incomplete until the npm package actually ships
- **Command tags:** `phase: 'mvp'` or `phase: 'next'` controls the label and the counts on the page
- **Social preview:** after deploying, make `og:image` an absolute URL so every platform can read it

## Security

This repo is static and stores no user data, but the rules still apply:

- No API keys, tokens, passwords, or real credentials are committed.
- Passwords in the install preview are placeholders, not real accounts.
- `.gitignore` excludes `node_modules/`, `dist/`, all `.env*` files (except `.env.example`), key files (`*.pem`, `*.key`, `*.p12`), `.npmrc`, logs, and caches.
- Never commit `.env`, tokens, or credential files. If a secret is ever pushed, treat it as leaked: revoke/rotate it first, then clean the history.
- Report security issues privately through GitHub Security Advisories rather than a public issue.

## License

Released under the [MIT License](./LICENSE) — Copyright (c) 2026 Muhajir Amrullah.

This license covers the website source in this repo. The CLI and server may use a different license.
