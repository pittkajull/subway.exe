import TerminalDemo from './TerminalDemo.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <img
            className="hero__logo"
            src="/logo.png"
            alt=""
            width="76"
            height="68"
          />

          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            alpha build · v0.1.0
          </p>

          <h1 className="hero__title">
            Social media,
            <br />
            but in your <em>terminal.</em>
          </h1>

          <p className="lede">
            subway.exe itu sosial media tanpa aplikasi. Tanpa feed algoritma,
            tanpa notifikasi nyasar, tanpa tombol yang nyari perhatian kamu.
            Cuma terminal, dan orang-orang yang beneran kamu kenal.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#install">
              Mulai dari terminal <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#fitur">
              Lihat fiturnya
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>client</dt>
              <dd>1 terminal</dd>
            </div>
            <div>
              <dt>feed</dt>
              <dd>kronologis</dd>
            </div>
            <div>
              <dt>story</dt>
              <dd>24 jam</dd>
            </div>
          </dl>
        </div>

        <div className="hero__demo">
          <TerminalDemo />
        </div>
      </div>
    </section>
  )
}
