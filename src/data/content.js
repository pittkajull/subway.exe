// All copy lives here. Anything not confirmed stays out.

export const principles = [
  {
    num: '01',
    title: 'chronological, full stop.',
    body: 'your feed is only posts from people you follow, newest first. no discover, no recommended content, nobody else deciding what you see.',
    cmd: '$ subwayexe feed',
  },
  {
    num: '02',
    title: 'stories that actually expire.',
    body: 'one line, live for a day, then gone. no permanent archive to stalk next month. when it is over, it is over.',
    cmd: '$ subwayexe story post "coffee first"',
  },
  {
    num: '03',
    title: 'one command, one action.',
    body: 'post, edit, delete, repost — all one line. no menus, no buttons hidden behind a three-dot icon.',
    cmd: '$ subwayexe repost e5f6g7h8',
  },
  {
    num: '04',
    title: 'keyboard only.',
    body: '↑/↓ to navigate, q to quit, Enter to send a message. your hands never leave the home row.',
    cmd: '↑/↓ · q · Enter · Esc',
  },
  {
    num: '05',
    title: 'no notifications.',
    body: 'subway.exe does not chase you. you open it when you want to, then you close it. done. nothing waiting for you outside.',
    cmd: '$ subwayexe feed',
  },
]

export const features = [
  {
    id: 'feed',
    label: '01',
    name: 'feed',
    title: 'time order. not algorithm order.',
    body: 'the newest posts from people you follow, on top. reposts are marked, edited posts are labeled, and every post has a short id you can use to edit or delete it.',
    points: [
      'the ↻ reposted by line sits above the original post.',
      'the (edited) label only appears if a post was edited after 24 hours.',
      '↑/↓ to navigate, q to quit.',
    ],
  },
  {
    id: 'story',
    label: '02',
    name: 'story',
    title: 'alive for 24 hours, then gone.',
    body: 'stories have their own feed, separate from regular posts. every row shows how much time is left, so you know what is about to expire.',
    points: [
      'a story disappears automatically after 24 hours.',
      'time left is counted per story, not per day.',
      'your own story is tagged "(you)".',
    ],
  },
  {
    id: 'chat',
    label: '03',
    name: 'chat',
    title: 'talk without switching windows.',
    body: 'chat lives in the same terminal. no new tab, no second app. open a conversation, talk, hit Esc, and you are back in the feed.',
    points: [
      'Enter to send, Esc to leave.',
      'conversations render as a clean transcript.',
      'open one with subwayexe chat <username>.',
    ],
  },
]

export const commandGroups = [
  {
    name: 'auth',
    items: [
      { name: 'register', args: '', desc: 'create an account and sign in immediately.' },
      { name: 'login', args: '', desc: 'sign in to an existing account.' },
    ],
  },
  {
    name: 'posting',
    items: [
      { name: 'feed', args: '', desc: 'see posts from people you follow.' },
      { name: 'post', args: '<text>', desc: 'create a new post.' },
      { name: 'edit', args: '<id> <text>', desc: 'edit your post. the "edited" label appears only after 24 hours.' },
      { name: 'delete', args: '<id>', desc: 'delete a post, with a y/N confirmation.' },
      { name: 'repost', args: '<id>', desc: 'bring someone else\'s post into your feed.' },
    ],
  },
  {
    name: 'story',
    items: [
      { name: 'story post', args: '<text>', desc: 'a story that disappears in 24 hours.' },
      { name: 'story feed', args: '', desc: 'see active stories and their remaining time.' },
    ],
  },
  {
    name: 'social',
    items: [
      { name: 'follow', args: '<username>', desc: 'follow someone and fill your feed.' },
      { name: 'chat', args: '<username>', desc: 'open a chat. Enter to send, Esc to leave.' },
    ],
  },
  {
    name: 'profile',
    items: [
      { name: 'profile', args: '<username>', desc: 'see bio, posts, followers, following, and join date.' },
      { name: 'profile edit', args: '', desc: 'change your username and bio through a prompt.' },
      { name: 'profile password', args: '', desc: 'change your password. input stays hidden.' },
    ],
  },
]

export const statusItems = [
  { state: 'done', label: 'monorepo structure & API contracts' },
  { state: 'done', label: 'core endpoints: auth · feed · post · story · chat' },
  { state: 'warn', label: 'never run or tested end to end' },
  { state: 'todo', label: 'npm package & subwayexe binary' },
]

export const statusNote =
  'early skeleton — the structure and core endpoints exist, but the app has never been run or tested for real. do not treat it as stable.'

export const installCommand = 'npm install -g subway.exe'

export const installNote =
  'the npm package is not released yet. this is the planned command, not something you can run today.'

export const installSteps = [
  {
    num: '01',
    title: 'install',
    body: 'one npm command, and subwayexe becomes a binary in your terminal.',
  },
  {
    num: '02',
    title: 'register',
    body: 'create an account from the terminal. username, password, you are in.',
  },
  {
    num: '03',
    title: 'feed',
    body: 'the timeline opens right away. follow people, post, start talking.',
  },
]

export const installPreview = [
  ['p', '$ npm install -g subway.exe'],
  ['o', '$ subwayexe register'],
  ['d', '? username › kjul'],
  ['d', '? password › ••••••••'],
  ['ok', '✓ registered and logged in as @kjul'],
]

export const faqs = [
  {
    q: 'can i use it yet?',
    a: 'no. the structure and core endpoints exist, but the app has never been run or tested end to end. the npm package is not published either. treat it as alpha.',
  },
  {
    q: 'how do i install it?',
    a: 'the plan is one line: npm install -g subway.exe. the package is not on npm yet, so there is nothing to install today.',
  },
  {
    q: 'what do i need to run it?',
    a: 'npm, eventually. the exact versions and requirements are not final, so they are not listed here yet rather than guessing.',
  },
  {
    q: 'why the terminal?',
    a: 'because social media does not have to be a place you scroll through on autopilot. the terminal is where you already work — subway.exe meets you there instead of pulling you somewhere else.',
  },
  {
    q: 'when does it ship?',
    a: 'no date yet. progress lives in the status section on this page, and it will be updated when there is something you can actually use.',
  },
]
