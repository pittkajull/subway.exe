# subway.exe — marketing site

Landing page / company profile untuk **subway.exe**, sosial media berbasis CLI: feed kronologis, story 24 jam, repost, dan chat — semuanya dari terminal.

> Repo ini **hanya website marketing-nya** (React + Vite, statis tanpa backend). Aplikasi CLI, server, dan database-nya ada di repo produk terpisah.

## Software apa ini?

subway.exe adalah sosial media yang hidup di terminal. Nggak ada aplikasi native, nggak ada feed algoritma, nggak ada notifikasi yang nyari perhatian. Semua interaksi lewat command:

```bash
subwayexe register          # bikin akun
subwayexe feed              # lihat post dari orang yang di-follow
subwayexe post "halo"       # bikin post
subwayexe story post "..."  # story, hilang dalam 24 jam
subwayexe chat budi         # ngobrol langsung
subwayexe repost <id>       # repost ke feed sendiri
```

Website ini memperkenalkan produk tersebut dengan tema terminal: headline serif editorial, body monospace, aksen phosphor, dan demo TUI interaktif.

## Isi website

- Hero dengan demo terminal interaktif (`feed`, `story feed`, `profile`, `chat`).
- Marquee command.
- Enam alasan kenapa produknya CLI.
- Mockup fitur feed, story, dan chat.
- Referensi 15 command yang bisa difilter (shortcut `/`).
- Build status yang jujur — produknya masih alpha dan belum diuji end-to-end.
- Quickstart instalasi dengan tombol copy.
- FAQ, plus layout responsif dan dukungan `prefers-reduced-motion`.

## Tech stack

- React 19 + Vite 7
- CSS custom (tanpa UI framework)
- Font: Instrument Serif + IBM Plex Mono (Google Fonts)

## Menjalankan

Butuh Node.js dan npm.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & deploy

```bash
npm run build    # output statis di dist/
npm run preview  # cek hasil build secara lokal
```

Karena hasilnya statis, `dist/` bisa di-deploy ke Netlify, Vercel, Cloudflare Pages, GitHub Pages, atau file server apa pun. Nggak ada environment variable yang dibutuhkan.

## Struktur

```text
src/
  App.jsx                 urutan section
  data/content.js         semua copy produk & data command
  styles.css              design system + seluruh styling
  components/
    Nav.jsx  Hero.jsx  Marquee.jsx  Why.jsx  Features.jsx
    Commands.jsx  Status.jsx  Install.jsx  Faq.jsx  Footer.jsx
    TerminalDemo.jsx      demo terminal interaktif
    Reveal.jsx            animasi masuk saat scroll
    SectionHead.jsx       header section yang dipakai berulang
    terminal/
      TerminalFrame.jsx   frame TUI (title bar + body)
      Outputs.jsx         mock output feed, story, profil, chat
```

## Kustomisasi

- **Teks & data command**: `src/data/content.js`
- **Warna, tipografi, spacing**: variabel CSS di bagian atas `src/styles.css`
- **Placeholder instalasi**: ganti `<repo-url>` di `src/data/content.js` setelah repo produk public

## Keamanan

Repo ini statis dan tidak menyimpan data pengguna, tapi tetap ada aturan yang dipegang:

- Tidak ada API key, token, password, atau kredensial asli di source code.
- Password yang muncul di contoh dokumentasi (`mypassword123`) cuma placeholder fiktif, bukan akun nyata.
- `.gitignore` mengecualikan `node_modules/`, `dist/`, seluruh `.env*` (kecuali `.env.example`), file key (`*.pem`, `*.key`, `*.p12`), `.npmrc`, log, dan cache.
- Jangan pernah commit `.env`, token, atau file kredensial. Kalau sebuah secret sempat ke-push, anggap sudah bocor: revoke/rotate dulu, baru bersihkan history.
- Laporan celah keamanan: buka GitHub Security Advisory atau hubungi maintainer secara privat, jangan lewat issue publik.

## Lisensi

Dirilis di bawah [MIT License](./LICENSE) — Copyright (c) 2026 Muhajir Amrullah.

Lisensi ini berlaku untuk source code website di repo ini. Aplikasi CLI subway.exe di repo terpisah bisa punya lisensi sendiri.
