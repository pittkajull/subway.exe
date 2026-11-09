import { useEffect, useState } from 'react'

const LINKS = [
  ['#kenapa', 'Kenapa CLI'],
  ['#fitur', 'Fitur'],
  ['#commands', 'Commands'],
  ['#status', 'Status'],
  ['#install', 'Instalasi'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <img
            className="brand__logo"
            src="/logo.png"
            alt=""
            width="30"
            height="27"
          />
          <span>
            subway<span className="brand__exe">.exe</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Navigasi utama">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav__cta" href="#install">
            Coba sekarang <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? '×' : '≡'}</span>
        </button>
      </div>

      <div id="nav-panel" className={`nav__panel ${open ? 'is-open' : ''}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav__panel-cta" href="#install" onClick={() => setOpen(false)}>
          Coba sekarang →
        </a>
      </div>
    </header>
  )
}
