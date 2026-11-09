const NAV = [
  ['#kenapa', 'Kenapa CLI'],
  ['#fitur', 'Fitur'],
  ['#commands', 'Commands'],
  ['#status', 'Status'],
  ['#install', 'Instalasi'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <img
              className="footer__logo"
              src="/logo-mark.png"
              alt=""
              width="58"
              height="52"
            />
            <p className="footer__word">
              subway<span>.exe</span>
            </p>
            <p className="footer__tag">
              Social media, in your terminal. Dibikin buat orang yang lebih
              betah di command line daripada di feed.
            </p>
          </div>

          <div className="footer__col">
            <h3>halaman</h3>
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h3>sumber</h3>
            <a href="#install">Quickstart</a>
            <a href="#commands">Referensi command</a>
            <a href="#status">Build log</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 subway.exe <span className="footer__sep">·</span> alpha build
          </p>
          <p className="footer__prompt">
            <span aria-hidden="true">guest@subway:~$</span> buka terminal kamu
            <span className="cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  )
}
