const NAV = [
  ['#why', 'why'],
  ['#features', 'features'],
  ['#commands', 'commands'],
  ['#status', 'status'],
  ['#install', 'install'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <img className="footer__logo" src="/logo.png" alt="" width="36" height="33" />
          <p className="footer__word">
            subway<span className="accent">.exe</span>
          </p>
          <p className="footer__tag">
            social media, in your terminal. for people who would rather live in
            the command line than in a feed.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h3>sitemap</h3>
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3>status</h3>
          <p className="footer__note">alpha build</p>
          <p className="footer__note">npm package: not released</p>
          <p className="footer__note">website: MIT license</p>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <p>© 2026 subway.exe</p>
        <p className="footer__prompt">
          <span aria-hidden="true">guest@subway:~$</span> logout
          <span className="cursor" aria-hidden="true" />
        </p>
      </div>
    </footer>
  )
}
