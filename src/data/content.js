// Semua copy produk ada di sini biar gampang diupdate tanpa nyentuh layout.

export const commandGroups = [
  {
    name: 'auth',
    items: [
      { name: 'register', args: '', desc: 'Bikin akun baru, langsung login.' },
      { name: 'login', args: '', desc: 'Masuk ke akun yang udah ada.' },
    ],
  },
  {
    name: 'posting',
    items: [
      { name: 'feed', args: '', desc: 'Lihat post dari orang yang kamu follow.' },
      { name: 'post', args: '<text>', desc: 'Bikin post baru.' },
      { name: 'edit', args: '<id> <text>', desc: 'Edit post kamu. Label "edited" baru muncul kalau diedit lewat 24 jam.' },
      { name: 'delete', args: '<id>', desc: 'Hapus post, pakai konfirmasi y/N.' },
      { name: 'repost', args: '<id>', desc: 'Bawa post orang lain ke feed kamu.' },
    ],
  },
  {
    name: 'story',
    items: [
      { name: 'story post', args: '<text>', desc: 'Story yang hilang otomatis dalam 24 jam.' },
      { name: 'story feed', args: '', desc: 'Lihat story yang masih aktif, lengkap sama sisa waktunya.' },
    ],
  },
  {
    name: 'sosial',
    items: [
      { name: 'follow', args: '<username>', desc: 'Follow seseorang, feed kamu langsung keisi.' },
      { name: 'unfollow', args: '<username>', desc: 'Berhenti follow.' },
      { name: 'chat', args: '<username>', desc: 'Buka chat langsung. Enter buat kirim, Esc buat keluar.' },
    ],
  },
  {
    name: 'profil',
    items: [
      { name: 'profile', args: '<username>', desc: 'Lihat bio, jumlah post, follower, dan tanggal gabung.' },
      { name: 'profile edit', args: '', desc: 'Ubah username dan bio lewat prompt interaktif.' },
      { name: 'profile password', args: '', desc: 'Ganti password. Input-nya nggak ditampilin.' },
    ],
  },
]

export const whyCards = [
  {
    num: '01',
    title: 'Kronologis, titik.',
    body: 'Feed isinya cuma orang yang kamu follow, urut dari yang paling baru. Nggak ada "discover", nggak ada saran konten, nggak ada yang ngatur apa yang kamu lihat.',
    foot: '$ subwayexe feed',
  },
  {
    num: '02',
    title: 'Story yang beneran sementara.',
    body: 'Satu baris, tampil sehari, terus hilang. Nggak ada arsip abadi buat di-stalking bulan depan. Selesai ya selesai.',
    foot: '$ subwayexe story post "lagi ngopi"',
  },
  {
    num: '03',
    title: 'Satu command, satu aksi.',
    body: 'Post, edit, hapus, repost — semuanya satu baris. Nggak perlu buka menu, nggak perlu nyari tombol di balik titik tiga.',
    foot: '$ subwayexe repost e5f6g7h8',
  },
  {
    num: '04',
    title: 'Keyboard doang.',
    body: 'Navigasi pakai ↑/↓, keluar pakai q, kirim chat pakai Enter. Tangan kamu nggak perlu pindah dari home row.',
    foot: '↑/↓ · q · Enter · Esc',
  },
  {
    num: '05',
    title: 'Jalan di mana aja.',
    body: 'Selama ada Node.js dan terminal, subway.exe jalan. Windows, macOS, Linux — nggak ada app store, nggak ada update paksa.',
    foot: 'win · mac · linux',
  },
  {
    num: '06',
    title: 'Data kamu, database kamu.',
    body: 'Default-nya SQLite satu file buat development. Kalau udah serius, tinggal pindah ke Postgres. Nggak ada lock-in.',
    foot: 'SQLite → Postgres',
  },
]

export const features = [
  {
    id: 'feed',
    label: '01 / feed',
    title: 'Urutan waktu. Bukan urutan algoritma.',
    body:
      'Post terbaru dari orang yang kamu follow, di atas. Repost ditandai jelas, post yang diedit dikasih label abu-abu, dan tiap post punya id pendek buat diedit atau dihapus.',
    points: [
      'Baris ↻ reposted by muncul di atas post hasil repost.',
      'Label (edited) cuma muncul kalau diedit lebih dari 24 jam.',
      '↑/↓ buat navigasi, q buat keluar.',
    ],
  },
  {
    id: 'story',
    label: '02 / story',
    title: 'Hidup 24 jam, terus hilang.',
    body:
      'Story punya feed sendiri, terpisah dari post biasa. Tiap baris nunjukin sisa waktunya, jadi kamu tahu mana yang udah mau kedaluwarsa.',
    points: [
      'Story post langsung hilang dalam 24 jam.',
      'Sisa waktu dihitung per story, bukan per hari.',
      'Story kamu ditandai "(kamu)" biar nggak ketuker.',
    ],
  },
  {
    id: 'chat',
    label: '03 / chat',
    title: 'Ngobrol tanpa pindah jendela.',
    body:
      'Chat langsung dari terminal yang sama. Nggak ada tab baru, nggak ada aplikasi kedua. Ketik command, ngobrol, Esc, balik lagi ke feed.',
    points: [
      'Enter buat kirim, Esc buat keluar.',
      'Percakapan tampil sebagai transkrip yang rapi.',
      'Realtime lewat WebSocket, bukan refresh halaman.',
    ],
  },
]

export const metroStops = [
  { name: 'Struktur', note: 'monorepo & kontrak API', state: 'done' },
  { name: 'Endpoint', note: 'auth sampai chat', state: 'done' },
  { name: 'Test', note: 'end-to-end', state: 'current' },
  { name: 'Polish', note: 'prompt & TUI', state: 'next' },
  { name: 'Binary', note: 'subway.exe', state: 'next' },
  { name: 'Rilis', note: 'v1.0', state: 'next' },
]

export const installSteps = [
  {
    num: '01',
    title: 'Clone & install',
    body: 'Ambil repo-nya, install semua workspace sekali jalan.',
  },
  {
    num: '02',
    title: 'Siapin environment',
    body: 'Copy file .env contoh. Default-nya SQLite, jadi nggak perlu setup database.',
  },
  {
    num: '03',
    title: 'Build & migrasi',
    body: 'Build package shared, generate Prisma client, jalanin migrasi awal.',
  },
  {
    num: '04',
    title: 'Nyalain server',
    body: 'Server dan database lokal siap di terminal pertama.',
  },
]

export const serverCode = [
  ['c', '# 1 — clone & install'],
  ['t', 'git clone <repo-url> subway.exe'],
  ['t', 'cd subway.exe && npm install'],
  ['b', ''],
  ['c', '# 2 — siapin environment'],
  ['t', 'cp server/.env.example server/.env'],
  ['c', '# DATABASE_URL default: SQLite (file:./dev.db)'],
  ['b', ''],
  ['c', '# 3 — build & migrasi'],
  ['t', 'npm run build -w packages/shared'],
  ['t', 'npm run prisma:generate -w server'],
  ['t', 'npm run prisma:migrate -w server'],
  ['b', ''],
  ['c', '# 4 — nyalain server'],
  ['t', 'npm run dev:server'],
]

export const cliCode = [
  ['c', '# terminal baru — bikin akun & buka feed'],
  ['t', 'npm run dev:cli -- register myname mypassword123'],
  ['t', 'npm run dev:cli -- feed'],
]

export const faqs = [
  {
    q: 'Ini udah bisa dipakai?',
    a: 'Belum sepenuhnya. Build-nya masih skeleton: struktur dan endpoint inti udah ada, tapi belum pernah diuji end-to-end. Anggap ini alpha — clone, jalanin, dan kalau nemu yang aneh, itu bug yang berguna.',
  },
  {
    q: 'Butuh apa buat jalanin?',
    a: 'Node.js dan npm. Server pakai Prisma, dan database default-nya SQLite, jadi kamu nggak perlu install database terpisah buat mulai.',
  },
  {
    q: 'Datanya disimpan di mana?',
    a: 'Di development, semua data masuk ke satu file SQLite (dev.db) di folder server. Kalau mau produksi, tinggal ganti DATABASE_URL ke Postgres.',
  },
  {
    q: 'Jalan di Windows?',
    a: 'Ya. CLI-nya dibangun di atas Node.js, jadi jalan di Windows, macOS, dan Linux. Prompt interaktifnya cuma butuh keyboard standar.',
  },
  {
    q: 'Kenapa harus terminal?',
    a: 'Karena sosial media nggak harus jadi tempat kamu scrolling tanpa sadar. Terminal itu tempat kamu udah kerja — jadi subway.exe ketemu kamu di situ, bukan narik kamu ke tempat lain.',
  },
  {
    q: 'Kapan binary-nya rilis?',
    a: 'Belum ada tanggal. Yang jelas urutannya: test end-to-end dulu, rapihin prompt dan TUI, baru dibungkus jadi binary yang bisa langsung dipanggil sebagai subwayexe.',
  },
]

export const marqueeItems = [
  'subwayexe register',
  'subwayexe login',
  'subwayexe feed',
  'subwayexe post "halo"',
  'subwayexe story feed',
  'subwayexe chat budi',
  'subwayexe repost e5f6g7h8',
  'subwayexe profile budi',
]
