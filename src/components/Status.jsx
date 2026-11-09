import Reveal from './Reveal.jsx'
import SectionHead from './SectionHead.jsx'
import { metroStops } from '../data/content.js'

export default function Status() {
  return (
    <section className="sec sec--raise" id="status">
      <div className="wrap">
        <SectionHead
          index="04"
          kicker="status"
          title={
            <>
              Dibangun <em>di depan mata.</em>
            </>
          }
          lede="subway.exe masih di jalur awal. Nggak ada tanggal rilis palsu — ini posisi kerjanya sekarang."
        />

        <div className="note">
          <span className="note__tag">alpha</span>
          <p>
            Struktur dan endpoint inti udah ada, tapi belum pernah di-run dan
            dites beneran. Kalau kamu coba sekarang, anggap aja ikut jadi orang
            pertama yang nemu bug-nya.
          </p>
        </div>

        <ol className="metro">
          {metroStops.map((stop, index) => (
            <Reveal
              as="li"
              key={stop.name}
              delay={index * 70}
              className={`metro__stop is-${stop.state}`}
            >
              <span className="metro__dot" aria-hidden="true" />
              <span className="metro__name">
                {stop.name}
                {stop.state === 'current' && (
                  <span className="metro__now">sedang di sini</span>
                )}
              </span>
              <span className="metro__note">{stop.note}</span>
            </Reveal>
          ))}
        </ol>

        <div className="metro__legend">
          <span>
            <i className="dot dot--done" aria-hidden="true" /> selesai
          </span>
          <span>
            <i className="dot dot--current" aria-hidden="true" /> dikerjain
          </span>
          <span>
            <i className="dot dot--next" aria-hidden="true" /> berikutnya
          </span>
        </div>
      </div>
    </section>
  )
}
