# subway.exe — marketing site

Landing page for **subway.exe**, a terminal-based social network: chronological feed, 24-hour stories, reposts, and chat — all through commands.

> This repo is the marketing website only (React + Vite, static, no backend). The CLI product is developed separately and is not public yet.

## What is subway.exe?

subway.exe is social media without the app. No algorithmic feed, no notifications chasing you, no native client to install. You open a terminal and use commands:

```bash
subwayexe register          # create an account
subwayexe feed              # read posts from people you follow
subwayexe post "hello"      # create a post
subwayexe story post "..."  # a story that expires in 24 hours
subwayexe chat budi         # open a conversation
subwayexe repost <id>       # repost to your own feed
```

The product is in alpha. The structure and core endpoints exist, but it has never been run or tested end to end, and the npm package is not published. The site states this explicitly instead of advertising features that are not usable yet.

## What is in this site

- Terminal-native UI: monospace type, flat surfaces, hard rules, TUI frames, and the real logo.
- Interactive terminal demo (`feed`, `story feed`, `profile`, `chat`) with typed commands.
- Feature walkthroughs for feed, stories, and chat.
- Searchable reference for all 14 known commands.
- Honest build status: what exists, what has not been tested, what is missing.
- Planned one-line install (`npm install -g subway.exe`) marked as **not released**.
- FAQ, favicons for light/dark tabs, a 1200×630 social preview, responsive layout, and reduced-motion support.

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
  data/content.js         all product copy and command data
  styles.css              design system and layout
  components/
    Nav.jsx  Hero.jsx  Why.jsx  Features.jsx
    Commands.jsx  Status.jsx  Install.jsx  Faq.jsx  Footer.jsx
    TerminalDemo.jsx      interactive terminal demo
    CopyButton.jsx        clipboard helper
    SectionHead.jsx       shared section header
    terminal/
      TerminalFrame.jsx   TUI window frame
      Outputs.jsx         feed, story, profile, and chat output
```

## Editing content

- **Copy and commands:** `src/data/content.js`
- **Colors, spacing, type:** CSS custom properties at the top of `src/styles.css`
- **Brand assets:** replace `public/logo.png`, then regenerate the favicons and `public/og.png`
- **Install and status:** these are intentionally marked as unreleased/incomplete. Update them when the package actually ships — do not add claims before that.
- **Social preview:** after deploying, make `og:image` an absolute URL so every platform can read it.

## Security

This repo is static and stores no user data, but the rules still apply:

- No API keys, tokens, passwords, or real credentials are committed.
- The password in the install preview (`••••••••`) is a placeholder, not a real account.
- `.gitignore` excludes `node_modules/`, `dist/`, all `.env*` files (except `.env.example`), key files (`*.pem`, `*.key`, `*.p12`), `.npmrc`, logs, and caches.
- Never commit `.env`, tokens, or credential files. If a secret is ever pushed, treat it as leaked: revoke/rotate it first, then clean the history.
- Report security issues privately through GitHub Security Advisories rather than a public issue.

## License

Released under the [MIT License](./LICENSE) — Copyright (c) 2026 Muhajir Amrullah.

This license covers the website source in this repo. The CLI product in its separate repo may use a different license.
