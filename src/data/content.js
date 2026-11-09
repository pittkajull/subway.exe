// Public copy only. Internal architecture, auth details, API contracts,
// database schema, and deployment plans stay out of this file.

export const principles = [
  {
    num: '01',
    title: 'chronological, full stop.',
    body: 'the feed is sorted by time, newest first. no engagement ranking, no recommended-content machine deciding what you see.',
    cmd: '$ subwayexe feed',
  },
  {
    num: '02',
    title: 'one command, one action.',
    body: 'post, like, comment, follow, message — one line each. direct commands stay available even when the interactive menu arrives.',
    cmd: '$ subwayexe like <postId>',
  },
  {
    num: '03',
    title: 'keyboard only.',
    body: '↑/↓ to navigate, q to quit, Enter to send. your hands never leave the home row.',
    cmd: '↑/↓ · q · Enter · Esc',
  },
  {
    num: '04',
    title: 'no notifications.',
    body: 'subway.exe does not chase you. you open it when you want to, then you close it. nothing waiting for you outside the terminal.',
    cmd: '$ subwayexe feed',
  },
  {
    num: '05',
    title: 'a real network.',
    body: 'posts, follows, and messages live on the server. the terminal is the client — not a local-only toy. your account works from any machine.',
    cmd: '// server is the source of truth',
  },
]

export const features = [
  {
    id: 'feed',
    label: '01',
    name: 'feed',
    title: 'newest first, always.',
    body: 'the mvp feed shows posts from people you follow and updates live while you read. likes and comments happen from the same terminal, without opening another app. public discovery and a global feed are the next step.',
    points: [
      'like or unlike with subwayexe like <postId>.',
      'reply with subwayexe comment <postId> "<text>".',
      'follow or unfollow with subwayexe follow <username>.',
    ],
  },
  {
    id: 'chat',
    label: '02',
    name: 'chat',
    title: 'real conversations, in real time.',
    body: '1:1 messages delivered in the same terminal session. history loads when you open a chat, and new messages arrive live.',
    points: [
      'open one with subwayexe chat <username>.',
      'Enter to send, Esc to leave.',
      'messages are stored server-side, not on your machine.',
    ],
  },
  {
    id: 'profile',
    label: '03',
    name: 'profile',
    title: 'an identity, not a profile page.',
    body: 'see anyone’s bio, post count, followers, and following without leaving the terminal. small on purpose — no personal branding dashboard.',
    points: [
      'view with subwayexe profile <username>.',
      'counts update as the network grows.',
      'editing comes in phase 2.',
    ],
  },
]

export const commandGroups = [
  {
    name: 'account',
    items: [
      { name: 'register', args: '', phase: 'mvp', desc: 'create an account and sign in.' },
      { name: 'login', args: '', phase: 'mvp', desc: 'sign in to an existing account.' },
      { name: 'logout', args: '', phase: 'mvp', desc: 'clear the local session.' },
      { name: 'whoami', args: '', phase: 'mvp', desc: 'show who you are logged in as.' },
    ],
  },
  {
    name: 'posting',
    items: [
      { name: 'post', args: '<text>', phase: 'mvp', desc: 'create a text post.' },
      { name: 'feed', args: '', phase: 'mvp', desc: 'open the live, chronological feed.' },
      { name: 'like', args: '<postId>', phase: 'mvp', desc: 'like or unlike a post.' },
      { name: 'comment', args: '<postId> "<text>"', phase: 'mvp', desc: 'reply to a post.' },
      { name: 'edit', args: '<postId> "<text>"', phase: 'next', desc: 'edit your own post. (edited) appears after 24 hours.' },
      { name: 'delete', args: '<postId>', phase: 'next', desc: 'hard-delete your own post, with confirmation.' },
      { name: 'repost', args: '<postId>', phase: 'next', desc: 'share someone else’s post with attribution.' },
    ],
  },
  {
    name: 'story',
    items: [
      { name: 'story post', args: '"<text>"', phase: 'next', desc: 'post a story that expires in 24 hours.' },
      { name: 'story feed', args: '', phase: 'next', desc: 'see active stories, separate from the feed.' },
    ],
  },
  {
    name: 'social',
    items: [
      { name: 'follow', args: '<username>', phase: 'mvp', desc: 'follow or unfollow a user.' },
      { name: 'chat', args: '<username>', phase: 'mvp', desc: 'open a realtime 1:1 conversation.' },
    ],
  },
  {
    name: 'profile',
    items: [
      { name: 'profile', args: '<username>', phase: 'mvp', desc: 'see bio, posts, followers, and following.' },
      { name: 'profile edit', args: '', phase: 'next', desc: 'change username, bio, and account visibility.' },
      { name: 'profile password', args: '', phase: 'next', desc: 'change your password after verifying the current one.' },
    ],
  },
  {
    name: 'shell',
    items: [
      { name: 'subwayexe', args: '', phase: 'next', desc: 'launch the interactive menu. no arguments.' },
    ],
  },
]

export const statusItems = [
  { state: 'warn', label: 'mvp: auth · posts · feed · likes · comments · follow · chat' },
  { state: 'todo', label: 'npm package & public release' },
  { state: 'todo', label: 'phase 2: profile editing · edit/delete/repost · stories · menu' },
  { state: 'todo', label: 'public/private accounts + global feed' },
  { state: 'todo', label: 'later: photo posts as ascii' },
]

export const statusNote =
  'the mvp is being built and tested. nothing is published yet — the npm package and the public server are not available.'

export const installCommand = 'npm install -g subwayexe'

export const installNote =
  'the npm package is not released yet. this is the planned command, not something you can run today.'

export const installSteps = [
  {
    num: '01',
    title: 'install',
    body: 'one npm command adds the subwayexe binary to your terminal.',
  },
  {
    num: '02',
    title: 'register',
    body: 'create an account from the terminal. username, password, you are in.',
  },
  {
    num: '03',
    title: 'feed',
    body: 'the timeline opens. follow people, like and reply, start a conversation.',
  },
]

export const installPreview = [
  ['p', '$ npm install -g subwayexe'],
  ['o', '$ subwayexe register'],
  ['d', '? username › kjul'],
  ['d', '? password › ••••••••'],
  ['ok', '✓ registered and logged in as @kjul'],
]

export const faqs = [
  {
    q: 'can i use it yet?',
    a: 'not yet. the mvp is being built and tested, and the npm package is not published. everything on this page describes the intended experience.',
  },
  {
    q: 'how do i install it?',
    a: 'once it ships, one line: npm install -g subwayexe. the package is not on npm yet, so there is nothing to install today.',
  },
  {
    q: 'what is in the mvp?',
    a: 'account creation and login, text posts, a live chronological feed, likes, comments, follows, profiles, and realtime 1:1 chat. stories, reposts, editing, and the interactive menu come in phase 2.',
  },
  {
    q: 'is this a local app?',
    a: 'no. it is a real network: posts, follows, and messages live on the server, so your account is the same from any machine with the cli installed.',
  },
  {
    q: 'why the terminal?',
    a: 'because social media doesn’t have to be a place you scroll through on autopilot. the terminal is where you already work — subway.exe meets you there instead of pulling you into another app.',
  },
  {
    q: 'when does it ship?',
    a: 'the mvp comes first; there is no date yet. phase 2 begins after the mvp is tested, starting with profiles, public/private accounts, and a global feed.',
  },
]
